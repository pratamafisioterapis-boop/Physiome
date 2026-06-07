
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Sidebar from '@/components/Sidebar.jsx';
import Button from '@/components/Button.jsx';
import Input from '@/components/Input.jsx';
import Select from '@/components/Select.jsx';
import TextArea from '@/components/TextArea.jsx';
import ExerciseCard from '@/components/exercises/ExerciseCard.jsx';
import RecoveryTimerConfig from '@/components/timer/RecoveryTimerConfig.jsx';
import AutoProgressionPlanner from '@/components/timer/AutoProgressionPlanner.jsx';
import { Search, Save, GripVertical, Trash2, Settings2, ChevronDown, ChevronUp } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { Helmet } from 'react-helmet';
import { toast } from 'sonner';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Card, CardContent } from '@/components/ui/card';

const ExerciseProgramBuilderPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  
  const [libraryExercises, setLibraryExercises] = useState([]);
  const [search, setSearch] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [expandedEx, setExpandedEx] = useState(null);
  
  const [program, setProgram] = useState({
    name: '',
    description: '',
    clinical_goal: '',
    body_region: '',
    expected_duration: '4 weeks',
    status: 'Active',
    exercises: []
  });

  useEffect(() => {
    const fetchInitData = async () => {
      try {
        const lib = await pb.collection('exercises').getFullList({ filter: `clinic_id="${currentUser?.clinic_id}"`, $autoCancel: false });
        setLibraryExercises(lib);
        
        if (id) {
          const existing = await pb.collection('exercise_programs').getOne(id, { $autoCancel: false });
          setProgram({
            name: existing.name || '',
            description: existing.description || '',
            clinical_goal: existing.clinical_goal || '',
            body_region: existing.body_region || '',
            expected_duration: existing.expected_duration || '4 weeks',
            status: existing.status || 'Active',
            exercises: existing.exercises || []
          });
        }
      } catch (error) {
        toast.error('Failed to load builder data');
      }
    };
    if (currentUser?.clinic_id) fetchInitData();
  }, [currentUser, id]);

  const handleAddExercise = (ex) => {
    const newEx = {
      id: crypto.randomUUID(), 
      exerciseId: ex.id,
      name: ex.name,
      thumbnail_url: ex.thumbnail_url,
      timer_config: {
        prepare_time: 5, work_time: 30, rest_time: 15, cycles: 1, sets: 3, rest_between_sets: 45, hold_duration: 0, repetitions: 10, permission_mode: 'Hybrid'
      },
      progression_plan: []
    };
    setProgram(prev => ({ ...prev, exercises: [...prev.exercises, newEx] }));
    toast.success(`Added ${ex.name}`);
    setExpandedEx(newEx.id);
  };

  const handleRemoveExercise = (index) => {
    setProgram(prev => {
      const newEx = [...prev.exercises];
      newEx.splice(index, 1);
      return { ...prev, exercises: newEx };
    });
  };

  const updateExerciseConfig = (index, field, data) => {
    setProgram(prev => {
      const newEx = [...prev.exercises];
      newEx[index] = { ...newEx[index], [field]: data };
      return { ...prev, exercises: newEx };
    });
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(program.exercises);
    const [reordered] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reordered);
    setProgram(prev => ({ ...prev, exercises: items }));
  };

  const handleSave = async () => {
    if (!program.name || !program.clinical_goal) {
      toast.error('Name and Clinical Goal are required');
      return;
    }
    setIsSaving(true);
    try {
      const data = { ...program, clinic_id: currentUser.clinic_id, created_by: currentUser.id };
      
      let progId = id;
      if (id) {
        await pb.collection('exercise_programs').update(id, data, { $autoCancel: false });
        toast.success('Program updated successfully');
      } else {
        const record = await pb.collection('exercise_programs').create(data, { $autoCancel: false });
        progId = record.id;
        toast.success('Program created successfully');
      }

      // Save configs to DB
      for (const ex of program.exercises) {
        if (ex.timer_config) {
          try {
            await pb.collection('recovery_timer_configs').create({
              exercise_id: ex.exerciseId, // Actually should link to program-exercise mapping but for now tying to config. Needs junction mapping in reality, saving as part of program JSON is safer here.
              clinic_id: currentUser.clinic_id,
              ...ex.timer_config
            }, { $autoCancel: false });
          } catch(e) {}
        }
      }

      navigate('/program-templates'); // Using existing route
    } catch (error) {
      toast.error('Failed to save program');
    } finally {
      setIsSaving(false);
    }
  };

  const filteredLibrary = libraryExercises.filter(ex => ex.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <Helmet><title>{id ? 'Edit Program' : 'Build Program'} | Physiome</title></Helmet>
      <div className="min-h-screen bg-background flex flex-col md:flex-row h-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0 h-full">
          <Header />
          
          <div className="flex items-center justify-between p-4 border-b border-border bg-card shrink-0 shadow-sm z-10">
            <div>
              <h1 className="text-2xl font-bold text-foreground">{id ? 'Edit Advanced Program' : 'Advanced Program Builder'}</h1>
              <p className="text-sm text-muted-foreground">Design protocols with interval timers and auto-progression.</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={() => navigate('/program-templates')} disabled={isSaving}>Cancel</Button>
              <Button onClick={handleSave} disabled={isSaving} className="gap-2 bg-primary text-primary-foreground">
                <Save className="w-4 h-4" /> {isSaving ? 'Saving...' : 'Save Protocol'}
              </Button>
            </div>
          </div>

          <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
            {/* LEFT: LIBRARY */}
            <div className="w-full lg:w-1/3 xl:w-1/4 border-r border-border bg-muted/10 flex flex-col h-[50vh] lg:h-full z-0">
              <div className="p-4 border-b border-border shrink-0 bg-card">
                <h2 className="font-semibold mb-3">Exercise Library</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search to add..." value={search} onChange={e => setSearch(e.target.value)} className="pl-9 h-10 rounded-xl" />
                </div>
              </div>
              <div className="p-4 overflow-y-auto flex-1 space-y-4">
                {filteredLibrary.map(ex => (
                  <ExerciseCard key={ex.id} exercise={ex} isBuilder onAdd={handleAddExercise} />
                ))}
              </div>
            </div>

            {/* RIGHT: BUILDER */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 bg-background h-[50vh] lg:h-full">
              <div className="max-w-4xl mx-auto space-y-8 pb-20">
                
                <section className="bg-card p-6 rounded-2xl border border-border shadow-sm space-y-4">
                  <h2 className="text-lg font-semibold border-b border-border pb-2">Program Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Program Name *" value={program.name} onChange={e=>setProgram({...program, name: e.target.value})} />
                    <Input label="Clinical Goal *" value={program.clinical_goal} onChange={e=>setProgram({...program, clinical_goal: e.target.value})} />
                    <Select label="Body Region" value={program.body_region} onChange={e=>setProgram({...program, body_region: e.target.value})} options={[{label:'Neck', value:'Neck'},{label:'Shoulder', value:'Shoulder'},{label:'Lower Back', value:'Lower Back'},{label:'Hip', value:'Hip'},{label:'Knee', value:'Knee'},{label:'Ankle', value:'Ankle'}]} />
                    <Select label="Expected Duration" value={program.expected_duration} onChange={e=>setProgram({...program, expected_duration: e.target.value})} options={[{label:'2 weeks',value:'2 weeks'},{label:'4 weeks',value:'4 weeks'},{label:'6 weeks',value:'6 weeks'},{label:'8 weeks',value:'8 weeks'},{label:'12 weeks',value:'12 weeks'}]} />
                  </div>
                  <TextArea label="Description" value={program.description} onChange={e=>setProgram({...program, description: e.target.value})} rows={2} />
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4 text-foreground">Exercise Protocol ({program.exercises.length})</h2>
                  {program.exercises.length === 0 ? (
                    <div className="flex flex-col items-center justify-center text-muted-foreground p-12 bg-muted/20 border border-dashed border-border rounded-2xl">
                      <Settings2 className="w-12 h-12 mb-4 opacity-50" />
                      <p className="font-medium text-foreground">No exercises added yet.</p>
                      <p className="text-sm mt-1">Select exercises from the library to configure advanced timers and progressions.</p>
                    </div>
                  ) : (
                    <DragDropContext onDragEnd={handleDragEnd}>
                      <Droppable droppableId="program-list">
                        {(provided) => (
                          <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
                            {program.exercises.map((ex, index) => {
                              const isExpanded = expandedEx === ex.id;
                              return (
                              <Draggable key={ex.id} draggableId={ex.id} index={index}>
                                {(provided, snapshot) => (
                                  <Card
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    className={`border-border overflow-hidden transition-all ${snapshot.isDragging ? 'shadow-lg border-primary scale-[1.02]' : 'shadow-sm'} ${isExpanded ? 'ring-2 ring-primary/20' : ''}`}
                                  >
                                    <div className="p-4 flex items-center gap-4 bg-card">
                                      <div {...provided.dragHandleProps} className="text-muted-foreground hover:text-foreground cursor-grab p-1">
                                        <GripVertical className="w-5 h-5" />
                                      </div>
                                      <div className="w-14 h-14 rounded-lg overflow-hidden bg-muted shrink-0 shadow-sm border border-border">
                                        {ex.thumbnail_url ? <img src={ex.thumbnail_url} alt="" className="w-full h-full object-cover" /> : <div className="w-full h-full bg-secondary/10" />}
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <h4 className="font-semibold text-foreground truncate text-lg">{ex.name}</h4>
                                        <div className="flex gap-2 text-xs text-muted-foreground mt-1">
                                          <span>{ex.timer_config?.sets} Sets</span> •
                                          <span>{ex.timer_config?.repetitions} Reps</span> •
                                          <span>{ex.timer_config?.work_time}s Work</span>
                                        </div>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <Button variant="ghost" size="icon" onClick={() => setExpandedEx(isExpanded ? null : ex.id)}>
                                          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                        </Button>
                                        <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10" onClick={() => handleRemoveExercise(index)}>
                                          <Trash2 className="w-4 h-4" />
                                        </Button>
                                      </div>
                                    </div>
                                    
                                    {isExpanded && (
                                      <div className="p-6 border-t border-border bg-muted/10 space-y-8 animate-in slide-in-from-top-2">
                                        <RecoveryTimerConfig 
                                          value={ex.timer_config} 
                                          onChange={(data) => updateExerciseConfig(index, 'timer_config', data)} 
                                        />
                                        <hr className="border-border" />
                                        <AutoProgressionPlanner 
                                          plans={ex.progression_plan} 
                                          onChange={(data) => updateExerciseConfig(index, 'progression_plan', data)} 
                                        />
                                      </div>
                                    )}
                                  </Card>
                                )}
                              </Draggable>
                            )})}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    </DragDropContext>
                  )}
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExerciseProgramBuilderPage;

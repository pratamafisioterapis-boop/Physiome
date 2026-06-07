
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { GripVertical, Trash2, Plus } from 'lucide-react';

const ModifyProgramModal = ({ isOpen, onClose, programData, onSave }) => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    if (programData) {
      setFormData({ ...programData });
    }
  }, [programData, isOpen]);

  if (!formData) return null;

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const exercises = Array.from(formData.exercises);
    const [reordered] = exercises.splice(result.source.index, 1);
    exercises.splice(result.destination.index, 0, reordered);
    setFormData({ ...formData, exercises });
  };

  const updateExercise = (index, field, value) => {
    const updated = [...formData.exercises];
    updated[index] = { ...updated[index], [field]: value };
    setFormData({ ...formData, exercises: updated });
  };

  const removeExercise = (index) => {
    const updated = [...formData.exercises];
    updated.splice(index, 1);
    setFormData({ ...formData, exercises: updated });
  };

  const addExercise = () => {
    setFormData({
      ...formData,
      exercises: [
        ...formData.exercises,
        {
          name: 'New Exercise',
          sets: 3,
          reps: 10,
          hold_duration: '0s',
          rest_duration: '30s',
          frequency: '1x/day',
          duration: '2 weeks',
          progression_tips: ''
        }
      ]
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col p-0 overflow-hidden">
        <DialogHeader className="p-6 border-b shrink-0 bg-muted/20">
          <DialogTitle>Modify Program</DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="flex-1 p-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Program Goal</Label>
              <Textarea 
                value={formData.program_goal} 
                onChange={e => setFormData({...formData, program_goal: e.target.value})}
                rows={2}
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-base font-semibold">Exercises</Label>
                <Button size="sm" variant="outline" onClick={addExercise} className="gap-2">
                  <Plus className="w-4 h-4" /> Add Exercise
                </Button>
              </div>

              <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="exercises-list">
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-3">
                      {formData.exercises.map((ex, index) => (
                        <Draggable key={index.toString()} draggableId={index.toString()} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              className={`bg-card border rounded-xl p-4 ${snapshot.isDragging ? 'shadow-lg border-primary' : 'shadow-sm'}`}
                            >
                              <div className="flex items-start gap-3">
                                <div {...provided.dragHandleProps} className="mt-2 cursor-grab text-muted-foreground hover:text-foreground">
                                  <GripVertical className="w-5 h-5" />
                                </div>
                                <div className="flex-1 space-y-3">
                                  <div className="flex justify-between items-center gap-4">
                                    <Input 
                                      value={ex.name} 
                                      onChange={e => updateExercise(index, 'name', e.target.value)} 
                                      className="font-semibold text-lg"
                                    />
                                    <Button variant="ghost" size="icon" className="text-destructive shrink-0" onClick={() => removeExercise(index)}>
                                      <Trash2 className="w-4 h-4" />
                                    </Button>
                                  </div>
                                  
                                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    <div className="space-y-1"><Label className="text-xs">Sets</Label><Input value={ex.sets} onChange={e => updateExercise(index, 'sets', e.target.value)} /></div>
                                    <div className="space-y-1"><Label className="text-xs">Reps</Label><Input value={ex.reps} onChange={e => updateExercise(index, 'reps', e.target.value)} /></div>
                                    <div className="space-y-1"><Label className="text-xs">Hold Duration</Label><Input value={ex.hold_duration} onChange={e => updateExercise(index, 'hold_duration', e.target.value)} /></div>
                                    <div className="space-y-1"><Label className="text-xs">Rest Duration</Label><Input value={ex.rest_duration} onChange={e => updateExercise(index, 'rest_duration', e.target.value)} /></div>
                                    <div className="space-y-1"><Label className="text-xs">Frequency</Label><Input value={ex.frequency} onChange={e => updateExercise(index, 'frequency', e.target.value)} /></div>
                                    <div className="space-y-1"><Label className="text-xs">Duration</Label><Input value={ex.duration} onChange={e => updateExercise(index, 'duration', e.target.value)} /></div>
                                    <div className="md:col-span-2 space-y-1"><Label className="text-xs">Progression Tips</Label><Input value={ex.progression_tips} onChange={e => updateExercise(index, 'progression_tips', e.target.value)} /></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </div>

            <div className="space-y-2">
              <Label>Clinical Rationale</Label>
              <Textarea value={formData.clinical_rationale} onChange={e => setFormData({...formData, clinical_rationale: e.target.value})} rows={3} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Precautions</Label>
                <Textarea value={formData.precautions} onChange={e => setFormData({...formData, precautions: e.target.value})} rows={3} />
              </div>
              <div className="space-y-2">
                <Label>Expected Outcomes</Label>
                <Textarea value={formData.expected_outcomes} onChange={e => setFormData({...formData, expected_outcomes: e.target.value})} rows={3} />
              </div>
            </div>

          </div>
        </ScrollArea>
        
        <DialogFooter className="p-6 border-t shrink-0 bg-muted/10">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={() => onSave(formData)}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModifyProgramModal;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, PlayCircle, Clock, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VideoPlayerComponent from '@/components/exercises/VideoPlayerComponent.jsx';
import FullscreenTimerMode from '@/components/timer/FullscreenTimerMode.jsx';
import SessionDataTracker from '@/components/timer/SessionDataTracker.jsx';
import pb from '@/lib/pocketbaseClient';
import { toast } from 'sonner';

const PatientExerciseViewPage = () => {
  const { assignmentId } = useParams();
  const navigate = useNavigate();
  
  const [assignment, setAssignment] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [timerConfigs, setTimerConfigs] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  const [timerActive, setTimerActive] = useState(false);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [sessionStats, setSessionStats] = useState(null);

  useEffect(() => {
    const fetchProgramDetails = async () => {
      try {
        const record = await pb.collection('program_assignments').getOne(assignmentId, {
          expand: 'program_id',
          $autoCancel: false
        });
        setAssignment(record);
        
        const programExercises = record.expand?.program_id?.exercises || [];
        if (programExercises.length > 0) {
          const exerciseIds = programExercises.map(e => e.exercise_id || e.exerciseId);
          const exerciseRecords = await pb.collection('exercises').getFullList({
            filter: exerciseIds.map(id => `id="${id}"`).join(' || '),
            $autoCancel: false
          });
          
          const combined = programExercises.map(pe => {
            const details = exerciseRecords.find(e => e.id === (pe.exercise_id || pe.exerciseId));
            return { ...pe, details };
          }).filter(e => e.details); 
          
          setExercises(combined);

          // Fetch timer configs for these exercises
          const configs = await pb.collection('recovery_timer_configs').getFullList({
            filter: exerciseIds.map(id => `exercise_id="${id}"`).join(' || '),
            $autoCancel: false
          });
          
          const configMap = {};
          configs.forEach(c => configMap[c.exercise_id] = c);
          setTimerConfigs(configMap);
        }
      } catch (error) {
        toast.error('Failed to load program details');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchProgramDetails();
  }, [assignmentId]);

  if (isLoading) return <div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>;
  if (!assignment || exercises.length === 0) return <div className="p-8 text-center"><p>Program not found</p><Button onClick={()=>navigate('/patient/programs')}>Back</Button></div>;

  const currentExercise = exercises[currentIndex];
  const videoUrl = currentExercise.details.video_url ? pb.files.getUrl(currentExercise.details, currentExercise.details.video_url) : null;
  const config = timerConfigs[currentExercise.details.id] || {
    prepare_time: 5, work_time: 30, rest_time: 15, cycles: 1, sets: 3, rest_between_sets: 30, hold_duration: 0, repetitions: 10, permission_mode: 'Therapist Controlled'
  };

  const handleTimerComplete = () => {
    setTimerActive(false);
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setSessionStats({
        exercisesCompleted: exercises.length,
        setsCompleted: exercises.reduce((acc, curr) => acc + (timerConfigs[curr.details.id]?.sets || 3), 0),
        painBefore: 3, // Mock, would capture at start
        durationSeconds: 1500, // Mock, would calculate real time
        adherenceRate: 100,
        completionPercentage: 100
      });
      setSessionComplete(true);
    }
  };

  if (timerActive) {
    return (
      <FullscreenTimerMode 
        config={config} 
        exerciseName={currentExercise.details.name} 
        exerciseIndex={currentIndex} 
        totalExercises={exercises.length} 
        videoUrl={videoUrl}
        onComplete={handleTimerComplete} 
        onExit={() => setTimerActive(false)} 
      />
    );
  }

  if (sessionComplete) {
    return <SessionDataTracker sessionData={sessionStats} programId={assignment.program_id} onComplete={() => navigate('/patient/dashboard')} />;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-2xl mx-auto border-x border-border shadow-sm">
      <Helmet><title>Session | Physiome</title></Helmet>
      
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border p-4 flex items-center justify-between">
        <button onClick={() => navigate('/patient/programs')} className="p-2 hover:bg-muted rounded-full transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="text-sm font-medium text-muted-foreground bg-muted px-4 py-1.5 rounded-full">
          Exercise {currentIndex + 1} of {exercises.length}
        </div>
        <div className="w-9" />
      </header>

      <main className="flex-1 overflow-y-auto pb-32">
        <div className="p-4 md:p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-3">{currentExercise.details.name}</h1>
            
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-lg text-sm font-bold">
                <Clock className="w-4 h-4" /> 
                {config.work_time > 0 ? `${config.work_time}s Work` : `${config.repetitions} Reps`}
              </span>
              <span className="bg-muted px-3 py-1.5 rounded-lg text-sm font-medium">{config.sets} Sets</span>
              {config.cycles > 1 && <span className="bg-muted px-3 py-1.5 rounded-lg text-sm font-medium">{config.cycles} Cycles</span>}
            </div>
            
            {config.permission_mode === 'Therapist Controlled' && (
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 p-2 rounded-lg inline-flex">
                <ShieldAlert className="w-4 h-4 text-orange-500" />
                This protocol is strictly timed by your therapist.
              </div>
            )}
          </div>

          <VideoPlayerComponent 
            videoUrl={videoUrl} 
            thumbnailUrl={currentExercise.details.thumbnail_url} 
            title={currentExercise.details.name} 
          />

          <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
            <h3 className="text-lg font-semibold mb-3">Therapist Instructions</h3>
            <div className="prose prose-sm dark:prose-invert text-muted-foreground whitespace-pre-wrap">
              {currentExercise.details.instructions || 'Follow the guided timer and video demonstration carefully. Focus on form over speed.'}
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 md:p-6 bg-background/90 backdrop-blur-xl border-t border-border max-w-2xl mx-auto z-20">
        <Button 
          className="w-full h-14 text-lg rounded-2xl gap-3 font-bold shadow-glow-primary bg-[hsl(var(--timer-primary))] hover:bg-[hsl(var(--timer-primary))]/90 text-white transition-all hover:scale-[1.02] active:scale-[0.98]" 
          onClick={() => setTimerActive(true)}
        >
          <PlayCircle className="w-6 h-6" /> Start Guided Exercise
        </Button>
      </div>
    </div>
  );
};

export default PatientExerciseViewPage;

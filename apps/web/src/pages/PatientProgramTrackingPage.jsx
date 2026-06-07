
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Sidebar from '@/components/Sidebar.jsx';
import ProgressBar from '@/components/exercises/ProgressBar.jsx';
import pb from '@/lib/pocketbaseClient';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Target, Calendar as CalendarIcon, CheckCircle2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const PatientProgramTrackingPage = () => {
  const { patientId } = useParams();
  const navigate = useNavigate();
  const [assignments, setAssignments] = useState([]);
  const [patient, setPatient] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTracking = async () => {
      try {
        const pt = await pb.collection('patients').getOne(patientId, { $autoCancel: false });
        setPatient(pt);
        const asg = await pb.collection('program_assignments').getFullList({
          filter: `patient_id="${patientId}"`,
          expand: 'program_id',
          sort: '-created',
          $autoCancel: false
        });
        setAssignments(asg);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTracking();
  }, [patientId]);

  // Mock adherence data for charts
  const mockData = [
    { day: 'Mon', completed: 100 }, { day: 'Tue', completed: 80 }, 
    { day: 'Wed', completed: 100 }, { day: 'Thu', completed: 0 }, 
    { day: 'Fri', completed: 100 }, { day: 'Sat', completed: 50 }, { day: 'Sun', completed: 0 }
  ];

  if (isLoading) return <div className="min-h-screen bg-background flex" />;

  return (
    <>
      <Helmet><title>Program Tracking | Physiome</title></Helmet>
      <div className="min-h-screen bg-background flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <Header />
          <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
            <div className="max-w-5xl mx-auto space-y-6">
              
              <div>
                <button onClick={() => navigate(`/patients/${patientId}`)} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4">
                  <ArrowLeft className="w-4 h-4" /> Back to Patient
                </button>
                <h1 className="text-3xl font-bold text-foreground">Program Tracking</h1>
                <p className="text-muted-foreground mt-1">{patient?.full_name}'s assigned programs</p>
              </div>

              {assignments.length === 0 ? (
                <div className="bg-card p-12 text-center rounded-xl border border-border shadow-sm">
                  <p className="text-muted-foreground mb-4">No programs assigned yet.</p>
                  <button onClick={() => navigate('/programs')} className="text-primary font-medium hover:underline">Go to Programs Library</button>
                </div>
              ) : (
                <div className="space-y-6">
                  {assignments.map(asg => (
                    <div key={asg.id} className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
                      <div className="p-6 border-b border-border bg-muted/20">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h2 className="text-xl font-bold text-foreground">{asg.expand?.program_id?.name || 'Unknown Program'}</h2>
                            <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                              <Target className="w-4 h-4" /> {asg.expand?.program_id?.clinical_goal}
                            </p>
                          </div>
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                            {asg.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1"><CalendarIcon className="w-4 h-4"/> Start: {new Date(asg.start_date).toLocaleDateString()}</span>
                          <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/> End: {new Date(asg.end_date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-1 space-y-6">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground mb-2">Overall Completion</p>
                            <ProgressBar progress={68} showLabel className="h-3" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-muted/50 p-4 rounded-xl border border-border text-center">
                              <p className="text-2xl font-bold text-foreground">14</p>
                              <p className="text-xs text-muted-foreground mt-1">Sessions Done</p>
                            </div>
                            <div className="bg-muted/50 p-4 rounded-xl border border-border text-center">
                              <p className="text-2xl font-bold text-primary">3 🔥</p>
                              <p className="text-xs text-muted-foreground mt-1">Day Streak</p>
                            </div>
                          </div>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-sm font-medium text-muted-foreground mb-4">This Week's Adherence</p>
                          <div className="h-32">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart data={mockData}>
                                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: 'var(--muted-foreground)', fontSize: 12}} />
                                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '8px', border: '1px solid var(--border)'}} />
                                <Bar dataKey="completed" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default PatientProgramTrackingPage;

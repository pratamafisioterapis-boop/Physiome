
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Sidebar from '@/components/Sidebar.jsx';
import { Activity, Calendar, Dumbbell, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import apiServerClient from '@/lib/apiServerClient.js';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

export default function PatientDashboard() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [programs, setPrograms] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchPatientData = async () => {
      if (!currentUser?.id) return;
      try {
        const data = await apiServerClient.fetch('/dashboard/patient-stats');
        setPrograms(data.programs);
        setAppointments(data.appointments);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPatientData();
  }, [currentUser]);

  return (
    <>
      <Helmet><title>My Dashboard | Physiome</title></Helmet>
      <div className="min-h-screen bg-background flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-1 ml-0 md:ml-64 flex flex-col min-w-0">
          <Header />
          <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
            <div className="max-w-5xl mx-auto space-y-8">
              
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Welcome back, {currentUser?.full_name?.split(' ')[0] || 'Patient'}</h1>
                <p className="text-muted-foreground">Here is your recovery progress and upcoming schedule.</p>
              </div>

              {/* Progress Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Card className="bg-primary text-primary-foreground border-none shadow-lg">
                  <CardContent className="p-6">
                    <Dumbbell className="w-6 h-6 mb-4 opacity-80" />
                    <h3 className="text-3xl font-bold">12</h3>
                    <p className="text-sm opacity-90 mt-1">Exercises Completed</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-none shadow-md">
                  <CardContent className="p-6">
                    <Activity className="w-6 h-6 mb-4 text-primary" />
                    <h3 className="text-3xl font-bold">85%</h3>
                    <p className="text-sm text-muted-foreground mt-1">Program Adherence</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-none shadow-md">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-6 h-6 mb-4 text-green-500" />
                    <h3 className="text-3xl font-bold">2/10</h3>
                    <p className="text-sm text-muted-foreground mt-1">Avg Pain Score</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* My Programs */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-lg">My Active Programs</CardTitle>
                    <Button variant="ghost" size="sm" onClick={() => navigate('/my-programs')}>View All</Button>
                  </CardHeader>
                  <CardContent>
                    {isLoading ? (
                      <div className="space-y-3"><Skeleton className="h-16 w-full" /><Skeleton className="h-16 w-full" /></div>
                    ) : programs.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">No active programs.</div>
                    ) : (
                      <div className="space-y-4">
                        {programs.map(prog => (
                          <div key={prog.id} className="flex items-center justify-between p-4 rounded-xl border border-border bg-muted/30">
                            <div>
                              <h4 className="font-medium">{prog.expand?.program_id?.name || 'Recovery Program'}</h4>
                              <p className="text-sm text-muted-foreground">Ends: {new Date(prog.end_date).toLocaleDateString()}</p>
                            </div>
                            <Button size="sm" onClick={() => navigate(`/patient/programs/${prog.id}`)}>Start Session</Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Upcoming Appointments */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-lg">Upcoming Appointments</CardTitle>
                    <Button variant="ghost" size="sm" onClick={() => navigate('/my-appointments')}>View All</Button>
                  </CardHeader>
                  <CardContent>
                    {isLoading ? (
                      <div className="space-y-3"><Skeleton className="h-16 w-full" /><Skeleton className="h-16 w-full" /></div>
                    ) : appointments.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">No upcoming appointments.</div>
                    ) : (
                      <div className="space-y-4">
                        {appointments.map(apt => (
                          <div key={apt.id} className="flex items-center gap-4 p-4 rounded-xl border border-border">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex flex-col items-center justify-center text-primary shrink-0">
                              <span className="text-xs font-bold uppercase">{new Date(apt.date).toLocaleString('default', { month: 'short' })}</span>
                              <span className="text-lg font-bold leading-none">{new Date(apt.date).getDate()}</span>
                            </div>
                            <div>
                              <h4 className="font-medium">{apt.time}</h4>
                              <p className="text-sm text-muted-foreground">{apt.duration} mins session</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

            </div>
          </main>
        </div>
      </div>
    </>
  );
}

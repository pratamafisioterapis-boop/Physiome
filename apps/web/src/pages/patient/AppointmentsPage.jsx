
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Video, User } from 'lucide-react';

const AppointmentsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <Helmet><title>Appointments | Physiome</title></Helmet>
      
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground tracking-tight">Appointments</h1>
          <p className="text-muted-foreground mt-1">Manage your clinic visits and telehealth sessions.</p>
        </div>
        <Button className="rounded-full shadow-soft">Schedule New</Button>
      </header>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full max-w-[400px] grid-cols-2 mb-8">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past History</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          <Card className="border-0 shadow-soft overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary" />
            <CardContent className="p-6 pl-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">Confirmed</span>
                    <span className="flex items-center text-sm text-muted-foreground font-medium"><Video className="w-4 h-4 mr-1" /> Telehealth</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Follow-up Consultation</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2 text-sm">
                      <User className="w-4 h-4" /> Dr. Sarah Jenkins
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground">
                    <div className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-lg">
                      <Calendar className="w-4 h-4 text-muted-foreground" /> Oct 24, 2026
                    </div>
                    <div className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-lg">
                      <Clock className="w-4 h-4 text-muted-foreground" /> 10:00 AM (30 min)
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 min-w-[140px]">
                  <Button className="w-full rounded-xl shadow-glow-primary">Join Session</Button>
                  <Button variant="outline" className="w-full rounded-xl">Reschedule</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="past">
          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-semibold rounded-full">Completed</span>
                    <span className="flex items-center text-sm text-muted-foreground font-medium"><MapPin className="w-4 h-4 mr-1" /> In-Clinic</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Initial Assessment</h3>
                  <p className="text-sm text-muted-foreground mt-1">Oct 10, 2026 • Dr. Sarah Jenkins</p>
                </div>
                <Button variant="secondary" className="rounded-xl">View Notes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AppointmentsPage;

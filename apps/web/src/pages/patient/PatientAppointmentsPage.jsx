
import React from 'react';
import { Helmet } from 'react-helmet';
import { Calendar as CalendarIcon, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PatientAppointmentsPage = () => {
  const appointments = [
    { id: 1, date: '2026-06-10', time: '10:00 AM', therapist: 'Dr. Sarah Jenkins', type: 'Follow-up Evaluation', location: 'Main Clinic, Room 3' },
    { id: 2, date: '2026-06-24', time: '02:30 PM', therapist: 'Dr. Sarah Jenkins', type: 'Manual Therapy', location: 'Main Clinic, Room 2' },
  ];

  return (
    <div className="mobile-page-container space-y-6">
      <Helmet><title>Appointments | Physiome</title></Helmet>
      
      <header>
        <h1 className="text-2xl font-bold text-foreground">Appointments</h1>
        <p className="text-muted-foreground text-sm mt-1">Manage your clinic visits</p>
      </header>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Upcoming</h2>
        {appointments.map(apt => (
          <Card key={apt.id} className="border-none shadow-sm overflow-hidden">
            <div className="h-2 bg-primary w-full"></div>
            <CardContent className="p-5 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{apt.type}</h3>
                  <p className="text-muted-foreground text-sm">{apt.therapist}</p>
                </div>
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-center">
                  <p className="text-xs font-bold uppercase">{new Date(apt.date).toLocaleDateString('en-US', { month: 'short' })}</p>
                  <p className="text-xl font-bold leading-none">{new Date(apt.date).getDate()}</p>
                </div>
              </div>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" /> {apt.time} (45 mins)
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> {apt.location}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button variant="outline" className="w-full rounded-xl">Reschedule</Button>
                <Button className="w-full rounded-xl">Details</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PatientAppointmentsPage;

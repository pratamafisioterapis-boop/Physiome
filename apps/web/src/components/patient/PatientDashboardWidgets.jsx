
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Calendar, Flame, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PatientDashboardWidgets = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      
      {/* Today's Guided Session */}
      <Card className="border-0 shadow-soft-lg bg-card overflow-hidden group">
        <div className="h-2 w-full bg-[hsl(var(--timer-primary))]" />
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-semibold text-[hsl(var(--timer-primary))] uppercase tracking-wider mb-1">Up Next</p>
              <h3 className="text-2xl font-bold text-foreground">Guided Session</h3>
              <p className="text-muted-foreground mt-1">Knee Rehab Protocol • 25 mins</p>
            </div>
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 ml-1" />
            </div>
          </div>
          <div className="bg-muted/50 rounded-xl p-4 flex justify-between items-center">
            <span className="text-sm font-medium">Includes Advanced Timer</span>
            <Button onClick={() => navigate('/patient/programs')} className="rounded-full shadow-glow-primary">Start Session</Button>
          </div>
        </CardContent>
      </Card>

      {/* Next Clinic Session */}
      <Card className="border-0 shadow-soft">
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center shrink-0">
              <Calendar className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Next Clinic Visit</h3>
              <p className="text-sm text-muted-foreground">Thursday, Oct 12 • 10:00 AM</p>
              <p className="text-sm font-medium mt-2">Dr. Sarah Jenkins</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Completion */}
      <Card className="border-0 shadow-soft">
        <CardContent className="p-6 flex items-center gap-6">
          <div className="relative w-20 h-20 shrink-0">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-muted" />
              <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="226" strokeDashoffset="45" className="text-success" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">80%</div>
          </div>
          <div>
            <h3 className="font-bold text-lg">Weekly Goal</h3>
            <p className="text-sm text-muted-foreground">4 of 5 sessions completed this week. Keep going!</p>
          </div>
        </CardContent>
      </Card>

      {/* Recovery Streak */}
      <Card className="border-0 shadow-soft bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-950/30 dark:to-transparent">
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <div className="flex gap-4 items-center">
              <div className="p-4 bg-orange-500/20 rounded-2xl text-orange-600"><Flame className="w-8 h-8" /></div>
              <div>
                <p className="text-sm font-semibold text-orange-600/80 dark:text-orange-400 uppercase tracking-wider">Recovery Streak</p>
                <h3 className="text-3xl font-bold text-orange-700 dark:text-orange-300">5 Days</h3>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-orange-200/50 dark:border-orange-800/50">
            <p className="text-sm font-medium text-orange-800/80 dark:text-orange-200/80 flex items-center gap-2">
              <Activity className="w-4 h-4" /> Last Session: Pain reduced by 2 points
            </p>
          </div>
        </CardContent>
      </Card>

    </div>
  );
};

export default PatientDashboardWidgets;

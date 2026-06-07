
import React from 'react';
import { Helmet } from 'react-helmet';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Flame, Target } from 'lucide-react';

const painData = [
  { day: 'Mon', score: 6 },
  { day: 'Tue', score: 5 },
  { day: 'Wed', score: 5 },
  { day: 'Thu', score: 4 },
  { day: 'Fri', score: 3 },
  { day: 'Sat', score: 4 },
  { day: 'Sun', score: 2 },
];

const completionData = [
  { day: 'Mon', completed: 4 },
  { day: 'Tue', completed: 5 },
  { day: 'Wed', completed: 3 },
  { day: 'Thu', completed: 5 },
  { day: 'Fri', completed: 5 },
  { day: 'Sat', completed: 2 },
  { day: 'Sun', completed: 0 },
];

const PatientProgressPage = () => {
  return (
    <div className="mobile-page-container space-y-6">
      <Helmet><title>My Progress | Physiome</title></Helmet>
      
      <header>
        <h1 className="text-2xl font-bold text-foreground">My Progress</h1>
        <p className="text-muted-foreground text-sm mt-1">Track your recovery journey</p>
      </header>

      <div className="grid grid-cols-2 gap-4">
        <Card className="border-none shadow-sm bg-gradient-to-br from-orange-50 to-orange-100/50">
          <CardContent className="p-4">
            <Flame className="w-6 h-6 text-orange-500 mb-2" />
            <p className="text-2xl font-bold text-orange-700">5 Days</p>
            <p className="text-xs font-medium text-orange-600/80">Current Streak</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm bg-gradient-to-br from-primary/10 to-primary/5">
          <CardContent className="p-4">
            <Target className="w-6 h-6 text-primary mb-2" />
            <p className="text-2xl font-bold text-primary">85%</p>
            <p className="text-xs font-medium text-primary/80">Program Completion</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Pain Trend (Last 7 Days)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={painData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#888' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#888' }} domain={[0, 10]} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                <Line type="monotone" dataKey="score" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ r: 4, fill: 'hsl(var(--primary))' }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Exercises Completed</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={completionData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#888' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#888' }} />
                <Tooltip cursor={{ fill: 'rgba(0,0,0,0.05)' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                <Bar dataKey="completed" fill="hsl(var(--success))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Achievements</h2>
        <div className="bg-card rounded-2xl p-4 shadow-sm flex items-center gap-4 border border-border">
          <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center shrink-0">
            <Trophy className="w-6 h-6 text-yellow-600" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground">Consistency King</h4>
            <p className="text-sm text-muted-foreground">Completed exercises 7 days in a row.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatientProgressPage;

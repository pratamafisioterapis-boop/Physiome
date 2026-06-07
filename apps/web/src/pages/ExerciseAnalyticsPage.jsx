
import React from 'react';
import { Download, BarChart2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Sidebar from '@/components/Sidebar.jsx';
import Header from '@/components/Header.jsx';

const mockTopExercises = [
  { name: 'Bridging', assigned: 120 },
  { name: 'Clamshells', assigned: 98 },
  { name: 'Chin Tucks', assigned: 86 },
  { name: 'SLR', assigned: 75 },
  { name: 'Wall Slides', assigned: 62 },
];

export default function ExerciseAnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col">
        <Header title="Exercise Analytics" />
        <main className="flex-1 p-8">
          
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Clinic Performance</h2>
              <p className="text-muted-foreground">Aggregated insights across all patients and programs.</p>
            </div>
            <Button variant="outline" className="rounded-full">
              <Download className="w-4 h-4 mr-2" /> Export Report
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><BarChart2 className="w-5 h-5 text-primary" /> Most Assigned Exercises</CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={mockTopExercises} layout="vertical" margin={{ left: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E5E7EB" />
                    <XAxis type="number" axisLine={false} tickLine={false} />
                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} width={80} />
                    <Tooltip cursor={{ fill: '#F3F4F6' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} />
                    <Bar dataKey="assigned" fill="hsl(var(--secondary))" radius={[0, 4, 4, 0]} barSize={24} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft bg-secondary text-secondary-foreground">
              <CardHeader>
                <CardTitle>Program Effectiveness</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 mt-4">
                  {[
                    { name: 'Post-Op Knee', rate: 94 },
                    { name: 'Low Back Stabilize', rate: 88 },
                    { name: 'Cervical Mobility', rate: 82 }
                  ].map((p, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2 text-sm font-medium">
                        <span>{p.name}</span>
                        <span>{p.rate}% success</span>
                      </div>
                      <div className="w-full bg-secondary-foreground/20 rounded-full h-2">
                        <div className="bg-accent h-2 rounded-full" style={{ width: `${p.rate}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

        </main>
      </div>
    </div>
  );
}

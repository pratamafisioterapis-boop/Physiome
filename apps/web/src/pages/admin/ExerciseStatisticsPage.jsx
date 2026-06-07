
import React from 'react';
import Header from '@/components/Header.jsx';
import Sidebar from '@/components/Sidebar.jsx';
import StatCard from '@/components/admin/StatCard.jsx';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Helmet } from 'react-helmet';
import { Activity, Users, CheckCircle } from 'lucide-react';

const ExerciseStatisticsPage = () => {
  const mockData = [
    { name: 'Chin Tuck', assigned: 145 },
    { name: 'Bridge', assigned: 120 },
    { name: 'Heel Slide', assigned: 90 },
    { name: 'Calf Stretch', assigned: 85 },
  ];

  return (
    <>
      <Helmet><title>Statistics | Admin</title></Helmet>
      <div className="min-h-screen bg-background flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <Header />
          <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
            <div className="max-w-7xl mx-auto space-y-6">
              
              <h1 className="text-3xl font-bold text-foreground tracking-tight">Exercise Statistics</h1>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <StatCard title="Total Assignments" value="1,248" icon={Activity} />
                <StatCard title="Avg Completion Rate" value="76%" icon={CheckCircle} />
                <StatCard title="Active Patients" value="342" icon={Users} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="admin-card">
                  <h2 className="font-semibold mb-4">Most Assigned Exercises</h2>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={mockData} layout="vertical" margin={{ left: 40 }}>
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} />
                        <Tooltip cursor={{fill: 'transparent'}} />
                        <Bar dataKey="assigned" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                <div className="admin-card flex items-center justify-center text-muted-foreground">
                  More charts coming soon
                </div>
              </div>

            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ExerciseStatisticsPage;

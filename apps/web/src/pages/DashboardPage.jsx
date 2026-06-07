
import React from 'react';
import Header from '@/components/Header.jsx';
import Sidebar from '@/components/Sidebar.jsx';
import { Activity, Users, Calendar, Dumbbell } from 'lucide-react';
import { Helmet } from 'react-helmet';

const StatCard = ({ title, value, icon: Icon, trend, trendUp }) => (
  <div className="bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between">
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      {trend && (
        <span className={`text-sm font-semibold px-2 py-1 rounded-full ${trendUp ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
          {trendUp ? '↑' : '↓'} {trend}
        </span>
      )}
    </div>
    <div className="mt-4">
      <h3 className="text-3xl font-bold text-foreground tabular-nums tracking-tight">{value}</h3>
      <p className="text-sm font-medium text-muted-foreground mt-1">{title}</p>
    </div>
  </div>
);

const DashboardPage = () => {
  return (
    <>
      <Helmet><title>Dashboard | Physiome</title></Helmet>
      <div className="min-h-screen bg-background flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <Header />
          <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
            <div className="max-w-7xl mx-auto space-y-8">
              
              <div>
                <h1 className="text-3xl font-bold text-foreground tracking-tight">Clinic Overview</h1>
                <p className="text-muted-foreground mt-1">Here's what's happening at your clinic today.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Active Patients" value="124" icon={Users} trend="12%" trendUp />
                <StatCard title="Today's Appointments" value="18" icon={Calendar} trend="2" trendUp />
                <StatCard title="Active Programs" value="86" icon={Dumbbell} trend="5%" trendUp />
                <StatCard title="Avg Adherence" value="72%" icon={Activity} trend="3%" trendUp={false} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-2xl p-6 shadow-sm min-h-[300px] flex flex-col items-center justify-center text-muted-foreground">
                  Activity Chart Coming Soon
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 shadow-sm min-h-[300px] flex flex-col items-center justify-center text-muted-foreground">
                  Recent Activity Feed Coming Soon
                </div>
              </div>

            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;

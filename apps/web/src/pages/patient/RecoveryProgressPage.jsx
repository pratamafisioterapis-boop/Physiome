
import React from 'react';
import { Helmet } from 'react-helmet';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Download, TrendingUp, Activity, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const mockPainData = [
  { date: 'Week 1', score: 7 }, { date: 'Week 2', score: 6 }, { date: 'Week 3', score: 5 },
  { date: 'Week 4', score: 4 }, { date: 'Week 5', score: 3 }, { date: 'Week 6', score: 2 },
];

const mockAdherenceData = [
  { date: 'Week 1', rate: 60 }, { date: 'Week 2', rate: 75 }, { date: 'Week 3', rate: 85 },
  { date: 'Week 4', rate: 90 }, { date: 'Week 5', rate: 85 }, { date: 'Week 6', rate: 95 },
];

const RecoveryProgressPage = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <Helmet><title>Recovery Progress | Physiome</title></Helmet>
      
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground tracking-tight">Recovery Progress</h1>
          <p className="text-muted-foreground mt-1">Track your improvements over time.</p>
        </div>
        <div className="flex gap-3">
          <Select defaultValue="30days">
            <SelectTrigger className="w-[140px] rounded-xl">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 Days</SelectItem>
              <SelectItem value="30days">Last 30 Days</SelectItem>
              <SelectItem value="90days">Last 90 Days</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" className="rounded-xl shrink-0">
            <Download className="w-4 h-4" />
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-0 shadow-soft">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-xl text-primary"><TrendingUp className="w-6 h-6" /></div>
            <div><p className="text-sm text-muted-foreground">Overall Recovery</p><h3 className="text-2xl font-bold">65%</h3></div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-soft">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-destructive/10 rounded-xl text-destructive"><Activity className="w-6 h-6" /></div>
            <div><p className="text-sm text-muted-foreground">Pain Reduction</p><h3 className="text-2xl font-bold">-5 pts</h3></div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-soft">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-success/10 rounded-xl text-success"><Target className="w-6 h-6" /></div>
            <div><p className="text-sm text-muted-foreground">Avg Adherence</p><h3 className="text-2xl font-bold">82%</h3></div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="text-lg">Pain Trend</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockPainData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} />
                <YAxis domain={[0, 10]} axisLine={false} tickLine={false} />
                <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} />
                <Line type="monotone" dataKey="score" stroke="hsl(var(--destructive))" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="text-lg">Exercise Adherence</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockAdherenceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} />
                <YAxis domain={[0, 100]} axisLine={false} tickLine={false} />
                <Tooltip cursor={{ fill: '#F3F4F6' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} />
                <Bar dataKey="rate" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} maxBarSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RecoveryProgressPage;

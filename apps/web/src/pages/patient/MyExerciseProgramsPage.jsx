
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { PlayCircle, CheckCircle2, Calendar, Clock } from 'lucide-react';

const MyExerciseProgramsPage = () => {
  const [activeTab, setActiveTab] = useState('active');

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <Helmet><title>My Programs | Physiome</title></Helmet>
      
      <header>
        <h1 className="text-3xl font-bold text-foreground tracking-tight">My Exercise Programs</h1>
        <p className="text-muted-foreground mt-1">Manage and track your prescribed rehabilitation routines.</p>
      </header>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-6">
          <Card className="border-0 shadow-soft overflow-hidden">
            <div className="h-2 bg-primary w-full" />
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl mb-1">Post-Op Knee Rehabilitation</CardTitle>
                  <p className="text-sm text-muted-foreground">Assigned by Dr. Sarah Jenkins</p>
                </div>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">Active</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-sm text-foreground/80">Focus on regaining full extension and improving quadriceps strength. Perform these exercises daily.</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" /> 8 Weeks Duration
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" /> Next: Today
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span>Overall Progress</span>
                  <span>38%</span>
                </div>
                <Progress value={38} className="h-2" />
              </div>
            </CardContent>
            <CardFooter className="bg-muted/30 pt-4 border-t border-border/50 flex gap-3">
              <Button className="flex-1 rounded-xl shadow-sm">
                <PlayCircle className="w-4 h-4 mr-2" /> Resume Program
              </Button>
              <Button variant="outline" className="rounded-xl">View Details</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="completed">
          <div className="text-center py-16 bg-card rounded-2xl border border-border shadow-sm">
            <CheckCircle2 className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground">No completed programs yet</h3>
            <p className="text-muted-foreground text-sm mt-1">Keep up the good work on your active programs!</p>
          </div>
        </TabsContent>

        <TabsContent value="history">
          <div className="text-center py-16 bg-card rounded-2xl border border-border shadow-sm">
            <Calendar className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground">Program history is empty</h3>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyExerciseProgramsPage;

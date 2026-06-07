
import React from 'react';
import { Presentation, Clock, Dumbbell, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Sidebar from '@/components/Sidebar.jsx';
import Header from '@/components/Header.jsx';
import { useNavigate } from 'react-router-dom';

const templates = [
  { id: 1, name: "Neck Pain Relief", desc: "Gentle mobility and isometric strengthening for cervical spine.", exercises: 6, weeks: 4, category: "Neck" },
  { id: 2, name: "Low Back Stabilization", desc: "Core engagement and lumbar stabilization protocol.", exercises: 8, weeks: 6, category: "Lower Back" },
  { id: 3, name: "Frozen Shoulder (Phase 1)", desc: "Passive and active-assisted ROM for adhesive capsulitis.", exercises: 5, weeks: 4, category: "Shoulder" },
  { id: 4, name: "ACL Post-Op (Weeks 1-4)", desc: "Early phase ACL reconstruction protocol.", exercises: 10, weeks: 4, category: "Knee" },
  { id: 5, name: "Stroke Rehab (Upper Limb)", desc: "Neuro-rehabilitation focusing on upper extremity function.", exercises: 7, weeks: 8, category: "Neurological" },
  { id: 6, name: "Knee Osteoarthritis", desc: "Quad strengthening and joint offloading strategies.", exercises: 6, weeks: 6, category: "Knee" },
];

export default function ProgramTemplatesPage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col">
        <Header title="Program Templates" />
        <main className="flex-1 p-8">
          
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-foreground mb-2">Clinical Templates</h2>
            <p className="text-muted-foreground text-lg">Start faster with evidence-based rehabilitation protocols.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {templates.map(t => (
              <Card key={t.id} className="border-0 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col h-full">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">{t.category}</Badge>
                    <Presentation className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-xl">{t.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground mb-6">{t.desc}</p>
                  <div className="flex gap-4 text-sm font-medium text-foreground">
                    <div className="flex items-center gap-1.5 bg-muted px-3 py-1.5 rounded-lg">
                      <Dumbbell className="w-4 h-4 text-muted-foreground" /> {t.exercises} exercises
                    </div>
                    <div className="flex items-center gap-1.5 bg-muted px-3 py-1.5 rounded-lg">
                      <Clock className="w-4 h-4 text-muted-foreground" /> {t.weeks} weeks
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-4 border-t border-border/50">
                  <Button className="w-full" variant="secondary" onClick={() => navigate('/program-builder')}>
                    Use Template <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
}

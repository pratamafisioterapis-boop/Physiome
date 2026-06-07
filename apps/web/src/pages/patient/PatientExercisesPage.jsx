
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import pb from '@/lib/pocketbaseClient';
import { useAuth } from '@/contexts/AuthContext.jsx';

const PatientExercisesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [programs, setPrograms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const records = await pb.collection('program_assignments').getFullList({
          filter: `patient_id="${currentUser.id}" && status="Active"`,
          expand: 'program_id',
          sort: '-created',
          $autoCancel: false
        });
        setPrograms(records);
      } catch (error) {
        console.error('Error fetching programs:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    if (currentUser?.id) fetchPrograms();
  }, [currentUser]);

  return (
    <div className="mobile-page-container space-y-6">
      <Helmet><title>My Exercises | Physiome</title></Helmet>
      
      <header>
        <h1 className="text-2xl font-bold text-foreground">My Exercises</h1>
        <p className="text-muted-foreground text-sm mt-1">Your daily rehabilitation protocol</p>
      </header>

      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search programs..." 
            className="pl-9 bg-card border-none shadow-sm rounded-xl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" size="icon" className="rounded-xl bg-card border-none shadow-sm shrink-0">
          <Filter className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Active Programs</h2>
        
        {isLoading ? (
          <div className="space-y-3">
            <div className="h-32 bg-muted rounded-xl animate-pulse" />
            <div className="h-32 bg-muted rounded-xl animate-pulse" />
          </div>
        ) : programs.length === 0 ? (
          <div className="text-center p-8 bg-card rounded-xl border border-border shadow-sm">
            <p className="text-muted-foreground">You don't have any active programs yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {programs.filter(p => (p.expand?.program_id?.name || '').toLowerCase().includes(searchQuery.toLowerCase())).map(prog => (
              <Card key={prog.id} className="cursor-pointer hover:shadow-md transition-shadow border-none shadow-sm" onClick={() => navigate(`/patient/programs/${prog.id}`)}>
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{prog.expand?.program_id?.name || 'Rehabilitation Program'}</h3>
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">Active</span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {prog.expand?.program_id?.description || 'Follow this daily to improve your condition.'}
                  </p>
                  <Button className="w-full">Start Session</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientExercisesPage;

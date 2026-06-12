
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Sidebar from '@/components/Sidebar.jsx';
import Table from '@/components/Table.jsx';
import Button from '@/components/Button.jsx';
import Input from '@/components/Input.jsx';
import { Search, Plus, Edit2, UserPlus, PlayCircle } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { Helmet } from 'react-helmet';

const ExerciseProgramListPage = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  
  const [programs, setPrograms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchPrograms = async () => {
      if (!currentUser?.clinic_id) return;
      setIsLoading(true);
      try {
        const records = await pb.collection('exercise_programs').getFullList({
          filter: `clinic_id = "${currentUser.clinic_id}"`,
          sort: '-created',
          $autoCancel: false
        });
        setPrograms(records);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPrograms();
  }, [currentUser]);

  const filtered = programs.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || (p.clinical_goal || '').toLowerCase().includes(search.toLowerCase()));
  const paginated = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const getStatusColor = (status) => {
    if(status==='Active') return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
    if(status==='Draft') return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
    return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
  };

  return (
    <>
      <Helmet><title>Exercise Programs | Physiome</title></Helmet>
      <div className="min-h-screen bg-background flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-1 ml-0 md:ml-64 flex flex-col min-w-0">
          <Header />
          <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
            <div className="max-w-7xl mx-auto space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-foreground tracking-tight">Exercise Programs</h1>
                  <p className="text-muted-foreground mt-1">Manage standard protocols and custom programs.</p>
                </div>
                <Button className="gap-2 shrink-0" onClick={() => navigate('/programs/builder')}>
                  <Plus className="w-4 h-4" /> Create Program
                </Button>
              </div>

              <div className="bg-card p-4 rounded-xl border border-border shadow-sm">
                <div className="relative max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search programs or goals..." value={search} onChange={e=>setSearch(e.target.value)} className="pl-9" />
                </div>
              </div>

              {isLoading ? (
                <div className="space-y-4"><div className="h-64 bg-muted/50 rounded-xl animate-pulse" /></div>
              ) : (
                <Table 
                  headers={['Program Name', 'Region & Goal', 'Duration', 'Exercises', 'Status', 'Actions']}
                  page={page} totalPages={totalPages} onPageChange={setPage}
                  isEmpty={paginated.length === 0}
                  emptyMessage={
                    <div className="text-center py-12">
                      <PlayCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-lg font-medium text-foreground">No programs found</p>
                      <Button variant="outline" className="mt-4" onClick={() => navigate('/programs/builder')}>Build Your First Program</Button>
                    </div>
                  }
                >
                  {paginated.map(p => (
                    <tr key={p.id}>
                      <td className="font-medium text-foreground">{p.name}</td>
                      <td>
                        <div className="text-sm">{p.body_region || 'General'}</div>
                        <div className="text-xs text-muted-foreground">{p.clinical_goal}</div>
                      </td>
                      <td className="text-muted-foreground">{p.expected_duration}</td>
                      <td className="text-muted-foreground">{p.exercises?.length || 0}</td>
                      <td>
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(p.status)}`}>{p.status}</span>
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" onClick={() => navigate(`/programs/${p.id}/assign`)} className="text-primary hover:bg-primary/10" title="Assign to Patient"><UserPlus className="w-4 h-4" /></Button>
                          <Button variant="ghost" size="sm" onClick={() => navigate(`/programs/${p.id}/builder`)} className="text-muted-foreground hover:text-foreground"><Edit2 className="w-4 h-4" /></Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </Table>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ExerciseProgramListPage;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Sidebar from '@/components/Sidebar.jsx';
import Button from '@/components/Button.jsx';
import Select from '@/components/Select.jsx';
import DatePicker from '@/components/DatePicker.jsx';
import TextArea from '@/components/TextArea.jsx';
import { ArrowLeft, Send } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { Helmet } from 'react-helmet';
import { toast } from 'sonner';

const ProgramAssignmentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  
  const [program, setProgram] = useState(null);
  const [patients, setPatients] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    patient_id: '',
    start_date: new Date().toISOString().split('T')[0],
    end_date: '',
    therapist_notes: '',
    status: 'Active'
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const prog = await pb.collection('exercise_programs').getOne(id, { $autoCancel: false });
        setProgram(prog);
        
        // Auto-calc end date based on expected duration
        if (prog.expected_duration) {
          const weeks = parseInt(prog.expected_duration.split(' ')[0]) || 4;
          const end = new Date();
          end.setDate(end.getDate() + (weeks * 7));
          setFormData(prev => ({ ...prev, end_date: end.toISOString().split('T')[0] }));
        }

        const pts = await pb.collection('patients').getFullList({ filter: `clinic_id="${currentUser?.clinic_id}"`, $autoCancel: false });
        setPatients(pts.map(p => ({ label: p.full_name, value: p.id })));
      } catch (error) {
        toast.error('Failed to load assignment data');
      }
    };
    if (currentUser?.clinic_id && id) fetchData();
  }, [currentUser, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.patient_id || !formData.start_date || !formData.end_date) {
      toast.error('Please fill required fields');
      return;
    }
    setIsSubmitting(true);
    try {
      await pb.collection('program_assignments').create({
        program_id: id,
        patient_id: formData.patient_id,
        start_date: formData.start_date + " 12:00:00.000Z",
        end_date: formData.end_date + " 12:00:00.000Z",
        therapist_notes: formData.therapist_notes,
        status: formData.status,
        clinic_id: currentUser.clinic_id
      }, { $autoCancel: false });
      toast.success('Program assigned to patient successfully');
      navigate('/programs');
    } catch (error) {
      toast.error('Failed to assign program');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!program) return null;

  return (
    <>
      <Helmet><title>Assign Program | Physiome</title></Helmet>
      <div className="min-h-screen bg-background flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <Header />
          <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
            <div className="max-w-3xl mx-auto space-y-6">
              
              <div>
                <button onClick={() => navigate('/programs')} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
                  <ArrowLeft className="w-4 h-4" /> Back to Programs
                </button>
                <h1 className="text-3xl font-bold text-foreground tracking-tight">Assign Program</h1>
                <p className="text-lg font-medium text-primary mt-2">{program.name}</p>
              </div>

              <form onSubmit={handleSubmit} className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b border-border pb-2">Assignment Details</h3>
                  <Select label="Select Patient *" value={formData.patient_id} onChange={e=>setFormData({...formData, patient_id: e.target.value})} options={patients} required />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <DatePicker label="Start Date *" value={formData.start_date} onChange={e=>setFormData({...formData, start_date: e.target.value})} required />
                    <DatePicker label="End Date *" value={formData.end_date} onChange={e=>setFormData({...formData, end_date: e.target.value})} required />
                  </div>
                  
                  <Select label="Status" value={formData.status} onChange={e=>setFormData({...formData, status: e.target.value})} options={[{label:'Active', value:'Active'}, {label:'Paused', value:'Paused'}]} />
                  
                  <TextArea label="Therapist Notes (Visible to Patient)" value={formData.therapist_notes} onChange={e=>setFormData({...formData, therapist_notes: e.target.value})} rows={3} placeholder="Add any specific instructions for this patient..." />
                </div>
                
                <div className="flex justify-end gap-3 pt-4">
                  <Button variant="outline" type="button" onClick={() => navigate('/programs')}>Cancel</Button>
                  <Button type="submit" disabled={isSubmitting} className="gap-2">
                    <Send className="w-4 h-4" /> {isSubmitting ? 'Assigning...' : 'Assign Program'}
                  </Button>
                </div>
              </form>
              
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ProgramAssignmentPage;

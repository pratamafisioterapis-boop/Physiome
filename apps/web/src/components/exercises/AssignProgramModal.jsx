
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient';
import { useAuth } from '@/contexts/AuthContext';

export default function AssignProgramModal({ isOpen, onClose, programId }) {
  const { currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({
    patient_id: '',
    start_date: new Date().toISOString().split('T')[0],
    end_date: '',
    therapist_notes: ''
  });

  useEffect(() => {
    const fetchPatients = async () => {
      if (!currentUser?.clinic_id) return;
      try {
        const records = await pb.collection('patients').getFullList({
          filter: `clinic_id = "${currentUser.clinic_id}"`,
          $autoCancel: false
        });
        setPatients(records);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };
    if (isOpen) fetchPatients();
  }, [currentUser, isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.patient_id || !formData.start_date || !formData.end_date) {
      toast.error('Please fill all required fields');
      return;
    }
    
    setIsLoading(true);
    try {
      await pb.collection('program_assignments').create({
        program_id: programId,
        patient_id: formData.patient_id,
        start_date: formData.start_date,
        end_date: formData.end_date,
        therapist_notes: formData.therapist_notes,
        status: 'Active',
        clinic_id: currentUser.clinic_id
      }, { $autoCancel: false });
      
      toast.success('Program assigned successfully');
      onClose();
    } catch (error) {
      console.error('Error assigning program:', error);
      toast.error('Failed to assign program');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Assign Program to Patient</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label>Patient *</Label>
            <Select 
              value={formData.patient_id} 
              onValueChange={(val) => setFormData({...formData, patient_id: val})}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select patient" />
              </SelectTrigger>
              <SelectContent>
                {patients.map(p => (
                  <SelectItem key={p.id} value={p.id}>{p.full_name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Start Date *</Label>
              <Input 
                type="date" 
                value={formData.start_date} 
                onChange={(e) => setFormData({...formData, start_date: e.target.value})} 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label>End Date *</Label>
              <Input 
                type="date" 
                value={formData.end_date} 
                onChange={(e) => setFormData({...formData, end_date: e.target.value})} 
                required 
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Therapist Notes</Label>
            <Textarea 
              value={formData.therapist_notes} 
              onChange={(e) => setFormData({...formData, therapist_notes: e.target.value})} 
              placeholder="Special instructions for the patient..."
            />
          </div>

          <DialogFooter className="pt-4">
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Assigning...' : 'Assign Program'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

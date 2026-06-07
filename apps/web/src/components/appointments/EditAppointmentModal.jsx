
import React, { useState, useEffect } from 'react';
import Modal from '@/components/Modal.jsx';
import Button from '@/components/Button.jsx';
import Input from '@/components/Input.jsx';
import Select from '@/components/Select.jsx';
import DatePicker from '@/components/DatePicker.jsx';
import TextArea from '@/components/TextArea.jsx';
import pb from '@/lib/pocketbaseClient';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { toast } from 'sonner';

const EditAppointmentModal = ({ isOpen, onClose, onSuccess, appointment }) => {
  const { currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [patients, setPatients] = useState([]);
  const [therapists, setTherapists] = useState([]);
  const [errors, setErrors] = useState({});
  
  const [formData, setFormData] = useState({
    patient_id: '',
    therapist_id: '',
    date: '',
    time: '',
    duration: '60',
    status: 'Scheduled',
    notes: ''
  });

  useEffect(() => {
    if (isOpen && currentUser?.clinic_id) {
      fetchDependencies();
    }
    if (appointment && isOpen) {
      setFormData({
        patient_id: appointment.patient_id || '',
        therapist_id: appointment.therapist_id || '',
        date: appointment.date ? appointment.date.split(' ')[0] : '',
        time: appointment.time || '',
        duration: appointment.duration?.toString() || '60',
        status: appointment.status || 'Scheduled',
        notes: appointment.notes || ''
      });
      setErrors({});
    }
  }, [isOpen, appointment, currentUser]);

  const fetchDependencies = async () => {
    try {
      const [patientsRes, therapistsRes] = await Promise.all([
        pb.collection('patients').getFullList({ filter: `clinic_id="${currentUser.clinic_id}"`, $autoCancel: false }),
        pb.collection('therapists').getFullList({ filter: `clinic_id="${currentUser.clinic_id}"`, $autoCancel: false })
      ]);
      setPatients(patientsRes.map(p => ({ label: p.full_name, value: p.id })));
      setTherapists(therapistsRes.map(t => ({ label: t.name, value: t.id })));
    } catch (error) {
      console.error('Error fetching dependencies:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.patient_id) newErrors.patient_id = 'Patient is required';
    if (!formData.therapist_id) newErrors.therapist_id = 'Therapist is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.duration) newErrors.duration = 'Duration is required';
    if (!formData.status) newErrors.status = 'Status is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    try {
      const existing = await pb.collection('appointments').getFullList({
        filter: `therapist_id="${formData.therapist_id}" && date="${formData.date} 12:00:00.000Z" && time="${formData.time}" && id!="${appointment.id}" && status!="Cancelled"`,
        $autoCancel: false
      });

      if (existing.length > 0) {
        toast.error('Therapist is already booked at this time');
        setIsLoading(false);
        return;
      }

      const dataToSubmit = {
        ...formData,
        date: formData.date + " 12:00:00.000Z",
        duration: parseInt(formData.duration, 10)
      };
      
      await pb.collection('appointments').update(appointment.id, dataToSubmit, { $autoCancel: false });
      toast.success('Appointment updated successfully');
      onSuccess();
      onClose();
    } catch (error) {
      console.error(error);
      toast.error('Failed to update appointment');
    } finally {
      setIsLoading(false);
    }
  };

  const footer = (
    <div className="flex justify-end gap-3">
      <Button variant="outline" onClick={onClose} disabled={isLoading} type="button">Cancel</Button>
      <Button variant="primary" onClick={handleSubmit} disabled={isLoading} type="submit">
        {isLoading ? 'Saving...' : 'Save Changes'}
      </Button>
    </div>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Appointment" footer={footer}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select label="Patient" name="patient_id" value={formData.patient_id} onChange={handleChange} error={errors.patient_id} options={patients} required />
          <Select label="Therapist" name="therapist_id" value={formData.therapist_id} onChange={handleChange} error={errors.therapist_id} options={therapists} required />
          <DatePicker label="Date" name="date" value={formData.date} onChange={handleChange} error={errors.date} required />
          <Input label="Time" name="time" type="time" step="1800" value={formData.time} onChange={handleChange} error={errors.time} required />
          <Select label="Duration" name="duration" value={formData.duration} onChange={handleChange} error={errors.duration} options={[
            {label: '30 minutes', value: '30'}, {label: '45 minutes', value: '45'}, {label: '60 minutes', value: '60'}, {label: '90 minutes', value: '90'}
          ]} required />
          <Select label="Status" name="status" value={formData.status} onChange={handleChange} error={errors.status} options={[
            {label: 'Scheduled', value: 'Scheduled'}, {label: 'Confirmed', value: 'Confirmed'}, {label: 'Completed', value: 'Completed'}, {label: 'Cancelled', value: 'Cancelled'}
          ]} required />
        </div>
        <TextArea label="Notes (Optional)" name="notes" value={formData.notes} onChange={handleChange} rows={3} />
      </form>
    </Modal>
  );
};

export default EditAppointmentModal;

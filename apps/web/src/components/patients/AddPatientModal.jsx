
import React, { useState } from 'react';
import Modal from '@/components/Modal.jsx';
import Button from '@/components/Button.jsx';
import Input from '@/components/Input.jsx';
import Select from '@/components/Select.jsx';
import DatePicker from '@/components/DatePicker.jsx';
import TextArea from '@/components/TextArea.jsx';
import apiServerClient from '@/lib/apiServerClient.js';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { toast } from 'sonner';

const AddPatientModal = ({ isOpen, onClose, onSuccess }) => {
  const { currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    birth_date: '',
    phone: '',
    email: '',
    address: '',
    occupation: '',
    main_complaint: '',
    diagnosis: '',
    status: 'Active'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Full name is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.birth_date) newErrors.birth_date = 'Date of birth is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.main_complaint) newErrors.main_complaint = 'Main complaint is required';
    if (!formData.status) newErrors.status = 'Status is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error('Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    try {
      await apiServerClient.fetch('/patients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          gender: formData.gender,
          birth_date: formData.birth_date,
          address: formData.address,
          occupation: formData.occupation,
          main_complaint: formData.main_complaint,
          diagnosis: formData.diagnosis,
          status: formData.status
        })
      });
      
      toast.success('Patient added successfully');
      onSuccess(); // Memanggil fetchPatients di PatientListPage
      onClose();
    } catch (error) {
      toast.error(error.message || 'Failed to add patient');
    } finally {
      setIsLoading(false);
    }
  };

  const footer = (
    <div className="flex justify-end gap-3">
      <Button variant="outline" onClick={onClose} disabled={isLoading} type="button">
        Cancel
      </Button>
      <Button variant="primary" disabled={isLoading} type="submit" form="add-patient-form">
        {isLoading ? 'Saving...' : 'Add Patient'}
      </Button>
    </div>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Patient" footer={footer}>
      <form id="add-patient-form" onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Full Name" name="name" value={formData.name} onChange={handleChange} error={errors.name} required />
          <Select 
            label="Gender" name="gender" value={formData.gender} onChange={handleChange} error={errors.gender}
            options={[{label: 'Male', value: 'Male'}, {label: 'Female', value: 'Female'}, {label: 'Other', value: 'Other'}]} required 
          />
          <DatePicker label="Date of Birth" name="birth_date" value={formData.birth_date} onChange={handleChange} error={errors.birth_date} required />
          <Select 
            label="Status" name="status" value={formData.status} onChange={handleChange} error={errors.status}
            options={[{label: 'Active', value: 'Active'}, {label: 'Inactive', value: 'Inactive'}, {label: 'Discharged', value: 'Discharged'}]} required 
          />
          <Input label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} error={errors.phone} required />
          <Input label="Email" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} required />
        </div>
        
        <Input label="Occupation" name="occupation" value={formData.occupation} onChange={handleChange} />
        <TextArea label="Address" name="address" value={formData.address} onChange={handleChange} rows={2} />
        <TextArea label="Main Complaint" name="main_complaint" value={formData.main_complaint} onChange={handleChange} error={errors.main_complaint} rows={3} required />
        <TextArea label="Diagnosis (Optional)" name="diagnosis" value={formData.diagnosis} onChange={handleChange} rows={2} />
      </form>
    </Modal>
  );
};

export default AddPatientModal;

import React, { useState, useEffect } from 'react';
import Modal from '@/components/Modal.jsx';
import Button from '@/components/Button.jsx';
import Input from '@/components/Input.jsx';
import apiServerClient from '@/lib/apiServerClient.js';
import { toast } from 'sonner';

const EditTherapistModal = ({ isOpen, onClose, onSuccess, therapist }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (isOpen && therapist) {
      setFormData({
        fullName: therapist.fullName || therapist.name || '',
        email: therapist.email || '',
        phone: therapist.phone || '',
      });
    }
  }, [isOpen, therapist]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await apiServerClient.fetch(`/therapists/${therapist.id}`, {
        method: 'PUT',
        body: JSON.stringify(formData)
      });
      toast.success('Therapist updated successfully');
      onSuccess();
      onClose();
    } catch (error) {
      toast.error(error.message || 'Failed to update therapist');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Edit Therapist"
      footer={
        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={onClose} disabled={isLoading}>Cancel</Button>
          <Button onClick={handleSubmit} isLoading={isLoading}>Save Changes</Button>
        </div>
      }
    >
      <form className="space-y-4">
        <Input
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <Input
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </form>
    </Modal>
  );
};

export default EditTherapistModal;
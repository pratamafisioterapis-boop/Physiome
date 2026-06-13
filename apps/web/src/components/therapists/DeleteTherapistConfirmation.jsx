import React, { useState } from 'react';
import ConfirmDialog from '@/components/ConfirmDialog.jsx';
import apiServerClient from '@/lib/apiServerClient.js';
import { toast } from 'sonner';

const DeleteTherapistConfirmation = ({ isOpen, onClose, onSuccess, therapist }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = async () => {
    if (!therapist) return;
    
    setIsLoading(true);
    try {
      await apiServerClient.fetch(`/therapists/${therapist.id}`, { method: 'DELETE' });
      toast.success('Therapist deleted successfully');
      onSuccess();
      onClose();
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete therapist. Action restricted or server error.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ConfirmDialog
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleConfirm}
      title="Delete Therapist"
      message={`Are you sure you want to delete ${therapist?.fullName || therapist?.name}? This will remove their access to the clinic dashboard.`}
      confirmText="Delete"
      isDestructive={true}
      isLoading={isLoading}
    />
  );
};

export default DeleteTherapistConfirmation;
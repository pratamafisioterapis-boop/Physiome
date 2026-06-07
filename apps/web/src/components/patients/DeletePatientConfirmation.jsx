
import React, { useState } from 'react';
import ConfirmDialog from '@/components/ConfirmDialog.jsx';
import pb from '@/lib/pocketbaseClient';
import { toast } from 'sonner';

const DeletePatientConfirmation = ({ isOpen, onClose, onSuccess, patient }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = async () => {
    if (!patient) return;
    
    setIsLoading(true);
    try {
      await pb.collection('patients').delete(patient.id, { $autoCancel: false });
      toast.success('Patient deleted successfully');
      onSuccess();
      onClose();
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete patient. Ensure you have the right permissions.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ConfirmDialog
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleConfirm}
      title="Delete Patient"
      message={`Are you sure you want to delete ${patient?.full_name}? This action cannot be undone and will remove all associated records.`}
      confirmText="Delete"
      isDestructive={true}
      isLoading={isLoading}
    />
  );
};

export default DeletePatientConfirmation;

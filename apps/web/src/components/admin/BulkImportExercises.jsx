
import React from 'react';
import Modal from '@/components/Modal.jsx';
import Button from '@/components/Button.jsx';
import { Upload } from 'lucide-react';

const BulkImportExercises = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Bulk Import Exercises">
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">Upload a CSV file to import multiple exercises at once.</p>
        <div className="border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center text-center">
          <Upload className="w-8 h-8 text-muted-foreground mb-4" />
          <Button variant="outline">Select CSV File</Button>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button disabled>Import</Button>
        </div>
      </div>
    </Modal>
  );
};

export default BulkImportExercises;


import React from 'react';
import Modal from '@/components/Modal.jsx';
import Button from '@/components/Button.jsx';
import { Download } from 'lucide-react';

const BulkExportExercises = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Bulk Export Exercises">
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">Export your exercise library to CSV.</p>
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button className="gap-2"><Download className="w-4 h-4" /> Export CSV</Button>
        </div>
      </div>
    </Modal>
  );
};

export default BulkExportExercises;

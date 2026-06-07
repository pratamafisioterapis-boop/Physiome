
import React from 'react';
import Modal from '@/components/Modal.jsx';
import Button from '@/components/Button.jsx';
import { AlertTriangle } from 'lucide-react';

const ConfirmDialog = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title, 
  message, 
  confirmText = 'Confirm', 
  cancelText = 'Cancel',
  isDestructive = false,
  isLoading = false
}) => {
  const footer = (
    <div className="flex justify-end gap-3">
      <Button variant="outline" onClick={onClose} disabled={isLoading}>
        {cancelText}
      </Button>
      <Button 
        variant={isDestructive ? 'destructive' : 'primary'} 
        onClick={onConfirm}
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : confirmText}
      </Button>
    </div>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} footer={footer}>
      <div className="flex items-start gap-4">
        {isDestructive && (
          <div className="p-3 bg-destructive/10 text-destructive rounded-full shrink-0">
            <AlertTriangle className="w-6 h-6" />
          </div>
        )}
        <div className="py-1">
          <p className="text-foreground">{message}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmDialog;

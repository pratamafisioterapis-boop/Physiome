
import React from 'react';
import { useAuth } from '@/contexts/AuthContext.jsx';
import AdminDashboard from '@/pages/AdminDashboard.jsx';
import DashboardPage from '@/pages/DashboardPage.jsx'; // Therapist Dashboard
import PatientDashboard from '@/pages/PatientDashboard.jsx';

export default function DashboardRouter() {
  const { currentUser } = useAuth();
  const role = currentUser?.role || 'therapist';

  switch (role) {
    case 'admin':
      return <AdminDashboard />;
    case 'patient':
      return <PatientDashboard />;
    case 'therapist':
    default:
      return <DashboardPage />;
  }
}

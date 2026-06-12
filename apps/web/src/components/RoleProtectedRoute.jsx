
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext.jsx';

export default function RoleProtectedRoute({ children, allowedRoles }) {
  const { isAuthenticated, currentUser, initialLoading } = useAuth();

  if (initialLoading) {
    // Gunakan React Fragment kosong agar tidak merender elemen apa pun ke DOM
    return <></>; 
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const userRole = currentUser?.role || 'therapist'; // Default to therapist if not set

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

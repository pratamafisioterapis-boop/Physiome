
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import pb from '@/lib/pocketbaseClient.js';
import apiServerClient from '@/lib/apiServerClient.js';
import { syncLanguagePreference } from '@/contexts/LanguageContext.jsx';
import { toast } from 'sonner';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);
  
  useEffect(() => {
    const initAuth = async () => {
      if (pb.authStore.isValid && pb.authStore.model) {
        try {
          // Refresh the token on mount to ensure session is valid and extend its lifetime
          const authData = await pb.collection('users').authRefresh({ $autoCancel: false });
          setCurrentUser(authData.record);
          syncLanguagePreference(authData.record.id);
        } catch (error) {
          console.error('Session expired or invalid token:', error);
          pb.authStore.clear();
          setCurrentUser(null);
          // Only show toast if it was a real expiration, not just a network error
          if (error?.status === 401 || error?.status === 403) {
            toast.error('Your session has expired. Please log in again.');
          }
        }
      } else {
        pb.authStore.clear();
        setCurrentUser(null);
      }
      setInitialLoading(false);
    };

    initAuth();
  }, []);
  
  const login = async (email, password) => {
    try {
      const authData = await pb.collection('users').authWithPassword(email, password, { $autoCancel: false });
      setCurrentUser(authData.record);
      await syncLanguagePreference(authData.record.id);
      return authData.record;
    } catch (error) {
      pb.authStore.clear();
      setCurrentUser(null);
      throw error;
    }
  };
  
  const signup = async (clinicName, fullName, email, password, inviteCode) => {
    try {
      // Use the backend registration endpoint to handle invite code validation and user creation
      const response = await apiServerClient.fetch('/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          password, 
          fullName, 
          inviteCode: inviteCode || undefined 
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || errorData.message || 'Registration failed');
      }
      
      // Log the user in after successful registration
      const authData = await pb.collection('users').authWithPassword(email, password, { $autoCancel: false });
      setCurrentUser(authData.record);
      await syncLanguagePreference(authData.record.id);
      
      return { user: authData.record, clinicName };
    } catch (error) {
      pb.authStore.clear();
      setCurrentUser(null);
      throw error;
    }
  };
  
  const logout = useCallback(() => {
    pb.authStore.clear();
    setCurrentUser(null);
  }, []);
  
  const updateUserClinicId = async (clinicId) => {
    try {
      const updated = await pb.collection('users').update(currentUser.id, {
        clinic_id: clinicId
      }, { $autoCancel: false });
      setCurrentUser(updated);
      return updated;
    } catch (error) {
      console.error('Failed to update user clinic ID:', error);
      throw error;
    }
  };
  
  const refreshUser = async () => {
    if (currentUser && pb.authStore.isValid) {
      try {
        const updated = await pb.collection('users').getOne(currentUser.id, { $autoCancel: false });
        setCurrentUser(updated);
      } catch (error) {
        console.error('Failed to refresh user data:', error);
      }
    }
  };
  
  const isAuthenticated = !!currentUser && pb.authStore.isValid;
  
  const value = {
    currentUser,
    isAuthenticated,
    initialLoading,
    login,
    signup,
    logout,
    updateUserClinicId,
    refreshUser
  };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

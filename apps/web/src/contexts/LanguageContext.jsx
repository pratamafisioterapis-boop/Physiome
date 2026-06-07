
import React, { createContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import pb from '@/lib/pocketbaseClient.js';
import i18n from '@/lib/i18n.js';

export const LanguageContext = createContext(null);

export const syncLanguagePreference = async (userId) => {
  try {
    const records = await pb.collection('user_language_preferences').getFullList({
      filter: `user_id="${userId}"`,
      $autoCancel: false
    });
    if (records.length > 0 && records[0].preferred_language) {
      const lng = records[0].preferred_language;
      i18n.changeLanguage(lng);
      localStorage.setItem('i18nextLng', lng);
    }
  } catch (error) {
    console.error('Failed to sync language preference:', error);
  }
};

export const LanguageProvider = ({ children }) => {
  const { t, i18n: i18nInstance } = useTranslation();
  const [language, setLanguageState] = useState(i18nInstance.language || localStorage.getItem('i18nextLng') || 'en');

  useEffect(() => {
    const handleLangChange = (lng) => setLanguageState(lng);
    i18nInstance.on('languageChanged', handleLangChange);
    return () => i18nInstance.off('languageChanged', handleLangChange);
  }, [i18nInstance]);

  const setLanguage = async (lng) => {
    i18nInstance.changeLanguage(lng);
    setLanguageState(lng);
    localStorage.setItem('i18nextLng', lng);
    
    if (pb.authStore.isValid && pb.authStore.model) {
      try {
        const records = await pb.collection('user_language_preferences').getFullList({
          filter: `user_id="${pb.authStore.model.id}"`,
          $autoCancel: false
        });
        if (records.length > 0) {
          await pb.collection('user_language_preferences').update(records[0].id, { preferred_language: lng }, { $autoCancel: false });
        } else {
          await pb.collection('user_language_preferences').create({
            user_id: pb.authStore.model.id,
            preferred_language: lng,
            app_language: lng,
            exercise_language: lng,
            reminder_language: lng
          }, { $autoCancel: false });
        }
      } catch (error) {
        console.error('Failed to save language preference:', error);
      }
    }
  };

  const getLanguage = () => language;
  const getCurrentLanguage = () => language;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, getLanguage, getCurrentLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

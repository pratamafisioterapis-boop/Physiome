
import pb from '@/lib/pocketbaseClient';

export const getExerciseTranslation = async (exerciseId, language) => {
  if (language === 'en') return null; // Default is English, handled by main record
  try {
    const record = await pb.collection('exercise_translations').getFirstListItem(
      `exercise_id="${exerciseId}" && language_code="${language}"`,
      { $autoCancel: false }
    );
    return record;
  } catch (error) {
    return null;
  }
};

export const getProgramTranslation = async (programId, language) => {
  if (language === 'en') return null;
  try {
    const record = await pb.collection('program_translations').getFirstListItem(
      `program_id="${programId}" && language_code="${language}"`,
      { $autoCancel: false }
    );
    return record;
  } catch (error) {
    return null;
  }
};

export const getNotificationTemplate = async (notificationType, language) => {
  try {
    const record = await pb.collection('notification_templates').getFirstListItem(
      `notification_type="${notificationType}" && language_code="${language}"`,
      { $autoCancel: false }
    );
    return record.template_text;
  } catch (error) {
    // Fallback to English
    try {
      const fallback = await pb.collection('notification_templates').getFirstListItem(
        `notification_type="${notificationType}" && language_code="en"`,
        { $autoCancel: false }
      );
      return fallback.template_text;
    } catch (e) {
      return '';
    }
  }
};

export const getVoiceGuidance = async (guidanceKey, language) => {
  try {
    const record = await pb.collection('voice_guidance_translations').getFirstListItem(
      `guidance_key="${guidanceKey}" && language_code="${language}"`,
      { $autoCancel: false }
    );
    return record.text;
  } catch (error) {
    // Fallback to English
    try {
      const fallback = await pb.collection('voice_guidance_translations').getFirstListItem(
        `guidance_key="${guidanceKey}" && language_code="en"`,
        { $autoCancel: false }
      );
      return fallback.text;
    } catch (e) {
      return guidanceKey;
    }
  }
};

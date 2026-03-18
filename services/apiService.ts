import { AssessmentData, ContactFormData } from '../types';

// In a real implementation, these functions would call your backend (Firebase Functions, etc.)
// which would then interact with Google Sheets and MailerLite.

export const submitAssessment = async (data: AssessmentData): Promise<boolean> => {
  try {
    const response = await fetch('/api/assessment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to submit assessment');
    }

    const result = await response.json();
    console.log('[API] Assessment Submitted:', result);
    return true;
  } catch (error) {
    console.error('Error submitting assessment:', error);
    throw error;
  }
};

export const submitApplication = async (data: ContactFormData): Promise<boolean> => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to submit application');
    }

    const result = await response.json();
    console.log('[API] Application Submitted:', result);
    return true;
  } catch (error) {
    console.error('Error submitting application:', error);
    throw error;
  }
};
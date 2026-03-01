import { AssessmentData, ContactFormData } from '../types';

// In a real implementation, these functions would call your backend (Firebase Functions, etc.)
// which would then interact with Google Sheets and MailerLite.

export const submitAssessment = async (data: AssessmentData): Promise<boolean> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  console.log('[API] Assessment Submitted:', data);
  // integration logic:
  // 1. Save to Google Sheets
  // 2. Trigger MailerLite 'Assessment Completed' workflow
  
  return true;
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
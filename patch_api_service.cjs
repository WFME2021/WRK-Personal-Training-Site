const fs = require('fs');
const content = `import { AssessmentData, ContactFormData } from '../types';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

export const submitAssessment = async (data: { name: string; email: string; answers: Record<string, string>, composedResult: any }): Promise<{ token: string, success: boolean }> => {
  try {
    const token = crypto.randomUUID();
    // Save to Firestore
    await setDoc(doc(db, "assessments", token), {
      name: data.name,
      email: data.email,
      answers: data.answers,
      composedResult: data.composedResult,
      createdAt: new Date().toISOString()
    });

    // Push to server for MailerLite
    const response = await fetch('/api/assessment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data, token }),
    });

    if (!response.ok) {
      // We still return true if MailerLite fails because the lead is in Firestore
      console.warn('Failed to submit to MailerLite, but saved to Firestore');
      return { token, success: true };
    }

    return { token, success: true };
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
    return true;
  } catch (error) {
    console.error('Error submitting application:', error);
    throw error;
  }
};
`;

fs.writeFileSync('services/apiService.ts', content);

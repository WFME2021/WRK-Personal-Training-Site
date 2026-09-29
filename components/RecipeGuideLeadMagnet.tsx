import React, { useState } from 'react';

export const RecipeGuideLeadMagnet: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/recipe-guide', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });

      if (!response.ok) {
        throw new Error('Failed to request guide. Please try again.');
      }

      setSubmittedEmail(email);
      setStatus('success');
      setEmail('');
    } catch (err: any) {
      console.error('Error submitting recipe guide request:', err);
      // Even if network fails, don't leave user hanging - give a friendly fallback
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div 
      className="recipe-guide-lead-magnet" 
      style={{ 
        margin: '32px 0 24px 0', 
        padding: '28px', 
        background: '#0f172a', 
        color: '#ffffff', 
        borderRadius: '8px', 
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
      }}
    >
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <span 
          style={{ 
            display: 'inline-block', 
            background: '#22c55e', 
            color: '#052e16', 
            fontSize: '0.75rem', 
            fontWeight: 700, 
            textTransform: 'uppercase', 
            letterSpacing: '0.05em', 
            padding: '4px 10px', 
            borderRadius: '999px', 
            marginBottom: '12px' 
          }}
        >
          Free Download
        </span>
        
        <h3 style={{ margin: '0 0 10px 0', fontSize: '1.4rem', fontWeight: 700, color: '#ffffff' }}>
          Need ideas to hit your protein target?
        </h3>
        
        <p style={{ margin: '0 0 20px 0', fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.6 }}>
          Hitting 30g+ of protein per meal doesn’t have to mean dry chicken breast or processed powders. Download our free <strong>7-Day High-Protein Whole-Food Guide</strong>—packed with simple, nutrient-dense breakfast, lunch, and dinner recipes using everyday ingredients.
        </p>

        {/* Email Capture Form */}
        {status === 'success' ? (
          <div 
            style={{ 
              background: '#1e293b', 
              border: '1px solid #334155', 
              borderRadius: '6px', 
              padding: '16px 20px', 
              maxWidth: '440px', 
              margin: '0 auto', 
              textAlign: 'center' 
            }}
          >
            <p style={{ margin: '0 0 6px 0', fontWeight: 700, color: '#4ade80', fontSize: '1rem' }}>
              ✓ Guide on its way!
            </p>
            <p style={{ margin: 0, fontSize: '0.875rem', color: '#cbd5e1', lineHeight: 1.5 }}>
              We've dispatched your <strong>7-Day High-Protein Whole-Food Guide</strong> to <strong>{submittedEmail}</strong>. Please check your inbox shortly.
            </p>
          </div>
        ) : (
          <form 
            id="recipe-guide-form" 
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '440px', margin: '0 auto' }}
          >
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <input 
                type="email" 
                id="recipe-guide-email"
                required 
                placeholder="Enter your email address..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
                style={{ 
                  flex: 1, 
                  minWidth: '240px', 
                  padding: '12px 16px', 
                  border: '1px solid #334155', 
                  background: '#1e293b', 
                  color: '#ffffff', 
                  borderRadius: '6px', 
                  fontSize: '0.95rem', 
                  outline: 'none' 
                }} 
              />
              <button 
                type="submit" 
                disabled={status === 'loading'}
                style={{ 
                  background: '#ffffff', 
                  color: '#0f172a', 
                  fontWeight: 700, 
                  padding: '12px 22px', 
                  border: 'none', 
                  borderRadius: '6px', 
                  cursor: status === 'loading' ? 'wait' : 'pointer', 
                  whiteSpace: 'nowrap', 
                  fontSize: '0.95rem',
                  opacity: status === 'loading' ? 0.7 : 1
                }}
              >
                {status === 'loading' ? 'Sending...' : 'Get Free Recipe Guide →'}
              </button>
            </div>
            {status === 'error' && (
              <span style={{ fontSize: '0.8rem', color: '#f87171', marginTop: '2px' }}>
                {errorMessage}
              </span>
            )}
            <span style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '4px' }}>
              Delivered straight to your inbox. Unsubscribe anytime.
            </span>
          </form>
        )}

        {/* Highlights */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', fontSize: '0.85rem', color: '#94a3b8', flexWrap: 'wrap' }}>
          <span>✓ 30g+ protein whole-food meals</span>
          <span>✓ 7-day meal plan template</span>
          <span>✓ Simple 15–20 min prep</span>
        </div>
      </div>
    </div>
  );
};

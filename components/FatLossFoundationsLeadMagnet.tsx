import React, { useState } from 'react';

export const FatLossFoundationsLeadMagnet: React.FC = () => {
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
      const response = await fetch('/api/fat-loss-guide', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });

      if (!response.ok) {
        throw new Error('Failed to send guide. Please try again.');
      }

      setSubmittedEmail(email);
      setStatus('success');
      setEmail('');
    } catch (err: any) {
      console.error('Error submitting fat loss guide request:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div 
      className="fat-loss-foundations-optin" 
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
          Free 14-Day Blueprint
        </span>
        
        <h3 style={{ margin: '0 0 10px 0', fontSize: '1.4rem', fontWeight: 700, color: '#ffffff' }}>
          Now that you have your numbers, build the foundation.
        </h3>
        
        <p style={{ margin: '0 0 20px 0', fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.6 }}>
          Fat loss doesn't require a perfect diet—it requires a simple structure you can repeat. Download our <strong>14-Day Fat Loss Foundations: Nutrition Basics Guide (PDF)</strong>. Learn the 30/40/30 plate-building template, easy whole-food swaps, and the 6 daily habits that actually move the needle.
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
              ✓ 14-Day Guide on its way!
            </p>
            <p style={{ margin: 0, fontSize: '0.875rem', color: '#cbd5e1', lineHeight: 1.5 }}>
              We've dispatched your <strong>14-Day Fat Loss Foundations Guide</strong> to <strong>{submittedEmail}</strong>. Please check your inbox shortly.
            </p>
            <div style={{ marginTop: '14px' }}>
              <a 
                href="/docs/14%20Day%20Fat%20Loss%20Foundation%20Nutrition%20Basics%20(2).pdf" 
                download="14 Day Fat Loss Foundation Nutrition Basics.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#22c55e',
                  color: '#052e16',
                  fontWeight: 700,
                  padding: '10px 18px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '0.875rem'
                }}
              >
                <span>Download PDF Instantly</span>
                <span>&darr;</span>
              </a>
            </div>
          </div>
        ) : (
          <form 
            id="fat-loss-pdf-form" 
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '440px', margin: '0 auto' }}
          >
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <input 
                type="email" 
                id="fat-loss-pdf-email"
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
                {status === 'loading' ? 'Sending...' : 'Get Free 14-Day Guide →'}
              </button>
            </div>
            {status === 'error' && (
              <span style={{ fontSize: '0.8rem', color: '#f87171', marginTop: '2px' }}>
                {errorMessage}
              </span>
            )}
            <span style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '4px' }}>
              Instant PDF delivery to your inbox. No spam, ever.
            </span>
          </form>
        )}

        {/* Highlights */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', fontSize: '0.85rem', color: '#94a3b8', flexWrap: 'wrap' }}>
          <span>✓ 30/40/30 Macro Plate Template</span>
          <span>✓ Ultra-Processed Food Swaps</span>
          <span>✓ 6 Simple Daily Non-Negotiables</span>
        </div>
      </div>
    </div>
  );
};

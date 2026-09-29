import React, { useState } from 'react';

export const FatLossFoundationsLeadMagnet: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim().toLowerCase();

    // Basic format validation
    if (!cleanEmail || !cleanEmail.includes('@') || !cleanEmail.includes('.')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // 1. Immediately transition UI to Success State so users are never blocked
    setSubmittedEmail(cleanEmail);
    setStatus('success');
    setErrorMessage('');
    setEmail('');

    // 2. Fire background delivery to APIs without failing or blocking the UI
    (async () => {
      try {
        await fetch('/api/fat-loss-guide', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: cleanEmail }),
        });
      } catch (err) {
        console.warn('Background email delivery notice:', err);
      }
    })();
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

        {/* Email Capture Form / Instant Success State */}
        {status === 'success' ? (
          <div 
            style={{ 
              background: '#1e293b', 
              border: '1px solid #334155', 
              borderRadius: '6px', 
              padding: '20px 24px', 
              maxWidth: '480px', 
              margin: '0 auto', 
              textAlign: 'center' 
            }}
          >
            <p style={{ margin: '0 0 6px 0', fontWeight: 700, color: '#4ade80', fontSize: '1.05rem' }}>
              ✓ Your 14-Day Blueprint Is Ready!
            </p>
            <p style={{ margin: 0, fontSize: '0.875rem', color: '#cbd5e1', lineHeight: 1.5 }}>
              A copy is also on its way to <strong>{submittedEmail}</strong>. You can download your guide directly below:
            </p>
            <div style={{ marginTop: '16px' }}>
              <a 
                href="/docs/14%20Day%20Fat%20Loss%20Foundation%20Nutrition%20Basics%20(2).pdf" 
                download="14 Day Fat Loss Foundation Nutrition Basics.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#22c55e',
                  color: '#052e16',
                  fontWeight: 700,
                  padding: '12px 24px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}
              >
                <span>Download PDF Instantly</span>
                <span style={{ fontSize: '1.1rem' }}>&darr;</span>
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
                style={{ 
                  background: '#ffffff', 
                  color: '#0f172a', 
                  fontWeight: 700, 
                  padding: '12px 22px', 
                  border: 'none', 
                  borderRadius: '6px', 
                  cursor: 'pointer', 
                  whiteSpace: 'nowrap', 
                  fontSize: '0.95rem'
                }}
              >
                Get Free 14-Day Guide &rarr;
              </button>
            </div>
            {errorMessage && (
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

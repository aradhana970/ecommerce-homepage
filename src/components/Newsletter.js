import React from 'react';

const Newsletter = () => {
  return (
    <section className="section-container text-center" style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      <div style={{ maxWidth: '550px', margin: '0 auto' }}>
        <p className="section-subtitle">Correspondence</p>
        <h3 className="section-title" style={{ marginBottom: '15px' }}>Join the Vogue Syndicate</h3>
        <p style={{ color: 'var(--color-muted)', marginBottom: '35px', fontSize: '0.9rem', lineHeight: '1.7', fontWeight: 300 }}>
          Receive foundational styling blueprints, early launch communications, and collection updates directly in your inbox.
        </p>
        <div style={{ display: 'flex', borderBottom: '1px solid var(--color-dark)', paddingBottom: '5px' }}>
          <input type="email" placeholder="Enter your email address" style={{ flexGrow: 1, padding: '10px 0', border: 'none', outline: 'none', fontSize: '0.9rem', fontFamily: 'var(--font-primary)' }} />
          <button style={{ background: 'none', border: 'none', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.75rem' }}>
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
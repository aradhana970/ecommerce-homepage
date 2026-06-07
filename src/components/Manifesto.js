import React from 'react';

const Manifesto = () => {
  return (
    <section id="manifesto" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', backgroundColor: '#ffffff', minHeight: '70vh', borderTop: '1px solid var(--color-border)' }}>
      <div className="img-hover-wrapper" style={{ height: '100%', minHeight: '500px' }}>
        <img src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=800&q=80" alt="Atelier Craftsmanship" />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 12%' }}>
        <p className="section-subtitle">Vol. 04 — Modernist Assembly</p>
        <h3 className="section-title" style={{ fontSize: '3.2rem', marginBottom: '30px' }}>
          Honoring Form,<br />Textile, and Space.
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)', lineHeight: '1.8', marginBottom: '45px', fontWeight: 300 }}>
          Our dynamic atelier platform bypasses standard retail trends. Every geometric line is meticulously calculated, and each structural configuration is constructed within a strictly monitored batch portfolio framework to eliminate resource redundancy.
        </p>
        <div>
          <button className="btn-primary" style={{ minWidth: '260px' }}>
            Examine Studio Manifesto
          </button>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
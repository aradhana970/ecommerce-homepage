import React from 'react';

const EditorialLook = () => {
  return (
    <section className="section-container" style={{ backgroundColor: 'var(--color-light)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="lookbook-asymmetric-panel">
        <div style={{ paddingRight: '40px' }}>
          <p className="section-subtitle">Vol. 04 — Modernist Assembly</p>
          <h3 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '30px', lineHeight: '1.1' }}>
            Honoring Form, <br />Textile, and Space.
          </h3>
          <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem', lineHeight: '1.9', marginBottom: '45px', fontWeight: 300 }}>
            Our dynamic atelier platform bypasses standard retail trends. Every geometric line is meticulously calculated, and each structural configuration is constructed within a strictly monitored batch portfolio framework to eliminate resource redundancy.
          </p>
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            <button className="btn-primary">Examine Studio Manifesto</button>
            <a href="#shop" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, borderBottom: '1px solid var(--color-dark)' }}>Runway Track</a>
          </div>
        </div>

        <div className="img-hover-wrapper" style={{ height: '650px', borderLeft: '1px solid var(--color-border)', paddingLeft: '20px' }}>
          <img src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Studio Portrait" />
        </div>
      </div>
    </section>
  );
};

export default EditorialLook;
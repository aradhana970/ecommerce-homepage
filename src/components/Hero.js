import React from 'react';

const Hero = () => {
  return (
    <div style={{ height: '85vh', display: 'grid', gridTemplateColumns: '1fr 1fr', backgroundColor: '#ffffff', overflow: 'hidden', borderBottom: '1px solid var(--color-border)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 12% 0 12%' }}>
        <p className="section-subtitle">Spring / Summer Portfolio</p>
        <h2 className="section-title" style={{ fontSize: '4.5rem', marginBottom: '35px' }}>
          The Art of <br />
          <em style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>Effortless</em> Lineage.
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)', marginBottom: '45px', lineHeight: '1.8', fontWeight: 300, maxWidth: '440px' }}>
          A studied collection of minimalist silhouettes, structured tailoring, and premium sustainable textiles designed to endure throughout seasons.
        </p>
        <div style={{ display: 'flex', gap: '15px' }}>
          <button className="btn-primary">Shop Curated</button>
          <button className="btn-secondary">View Studio</button>
        </div>
      </div>
      <div className="img-hover-wrapper" style={{ height: '100%' }}>
        <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80" alt="Vogue Apparel Curation" />
      </div>
    </div>
  );
};

export default Hero;
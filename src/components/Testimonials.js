import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-container" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '60px', backgroundColor: '#ffffff', borderTop: '1px solid var(--color-border)' }}>
      <div>
        <p className="section-subtitle">Patron Voices</p>
        <h3 className="section-title" style={{ fontSize: '3rem' }}>Global<br />Endorsements</h3>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
        {/* Review 1 */}
        <div style={{ borderLeft: '1px solid var(--color-dark)', paddingLeft: '35px' }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontStyle: 'italic', color: 'var(--color-dark)', marginBottom: '18px', lineHeight: '1.6', fontWeight: 300 }}>
            "The curation is spectacular. The weighted drape of the oversized wool coat feels like true haute couture tailored beautifully for functional daily wear."
          </p>
          <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>
            Elena Rostova — <span style={{ color: 'var(--color-muted)', fontWeight: 400 }}>Milan</span>
          </p>
        </div>

        {/* Review 2 */}
        <div style={{ borderLeft: '1px solid var(--color-border)', paddingLeft: '35px' }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontStyle: 'italic', color: 'var(--color-dark)', marginBottom: '18px', lineHeight: '1.6', fontWeight: 300 }}>
            "Uncompromising luxury metrics. Finding zero-plastic delivery configurations combined with minimal, structural geometric aesthetics is rare. Outstanding."
          </p>
          <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>
            Marcus Vance — <span style={{ color: 'var(--color-muted)', fontWeight: 400 }}>New York</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
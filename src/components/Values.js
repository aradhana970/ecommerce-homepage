import React from 'react';

const Values = () => {
  const brandValues = [
    { label: 'Conscious Luxury', desc: '100% organic, traceable, and sustainably sourced textiles.' },
    { label: 'Artisanal Craft', desc: 'Handcrafted in limited batches by heritage family ateliers.' },
    { label: 'Circular Mindset', desc: 'Shipped exclusively in zero-plastic biodegradable packaging.' }
  ];

  return (
    <div className="grid-auto" style={{ padding: '60px 6%', backgroundColor: 'var(--color-white)', borderBottom: '1px solid var(--color-border)', textAlign: 'center' }}>
      {brandValues.map((val, idx) => (
        <div key={idx} style={{ padding: '10px 20px' }}>
          <h5 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, marginBottom: '10px' }}>{val.label}</h5>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', lineHeight: '1.6', fontWeight: 300 }}>{val.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Values;
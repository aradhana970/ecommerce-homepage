import React, { useState } from 'react';

const ProductList = () => {
  const [activeFilter, setActiveFilter] = useState('ALL PIECES');

  const items = [
    { id: 1, name: 'The Tailored Wool Trench', price: '$310.00', category: 'OUTERWEAR', tag: 'PRE-ORDER', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500&q=80' },
    { id: 2, name: 'Chronograph Minimalist Noir', price: '$225.00', category: 'ACCOUTREMENTS', tag: 'NEW SEASON', img: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=500&q=80' },
    { id: 3, name: 'Calfskin Leather Loafer', price: '$195.00', category: 'ACCOUTREMENTS', tag: 'RESTOCKED', img: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=500&q=80' },
    { id: 4, name: 'Structured Classic White Tee', price: '$140.00', category: 'OUTERWEAR', tag: 'ESSENTIAL', img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=500&q=80' },
  ];

  const filteredItems = activeFilter === 'ALL PIECES' 
    ? items 
    : items.filter(item => item.category === activeFilter);

  return (
    <section id="shop" className="section-container" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="flex-between" style={{ alignItems: 'flex-end', marginBottom: '50px', borderBottom: '1px solid var(--color-border)', paddingBottom: '20px' }}>
        <div>
          <p className="section-subtitle">Online Flagship Exclusives</p>
          <h3 className="section-title" style={{ fontSize: '3rem' }}>The Seasonal Assemblage</h3>
        </div>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          {['ALL PIECES', 'OUTERWEAR', 'ACCOUTREMENTS'].map((tab) => (
            <button 
              key={tab}
              className={`filter-tab ${activeFilter === tab ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid-auto">
        {filteredItems.map((item) => (
          <div key={item.id} style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="img-hover-wrapper" style={{ height: '440px', marginBottom: '20px', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '20px', left: '20px', backgroundColor: 'var(--color-dark)', color: 'var(--color-white)', padding: '5px 12px', fontSize: '9px', fontWeight: 600, letterSpacing: '1px', zIndex: 5 }}>
                {item.tag}
              </span>
              <img src={item.img} alt={item.name} />
            </div>
            
            <div className="flex-between" style={{ alignItems: 'flex-start' }}>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 500, marginBottom: '6px', letterSpacing: '0.5px' }}>{item.name}</h4>
                <p style={{ color: 'var(--color-muted)', fontSize: '0.85rem' }}>{item.price}</p>
              </div>
              <button style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer' }}>+</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
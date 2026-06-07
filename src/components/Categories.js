import React from 'react';

const Categories = () => {
  return (
    <section id="categories" className="section-container" style={{ backgroundColor: '#ffffff' }}>
      <div className="flex-between" style={{ alignItems: 'flex-end', marginBottom: '50px' }}>
        <div>
          <p className="section-subtitle">Concepts</p>
          <h3 className="section-title" style={{ fontSize: '3rem' }}>Shop by Studio Portfolios</h3>
        </div>
        <a href="#shop" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-dark)', textDecoration: 'none', borderBottom: '1px solid var(--color-dark)', paddingBottom: '4px', fontWeight: 500 }}>
          Explore Series
        </a>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '40px' }}>
        <div className="img-hover-wrapper" style={{ height: '580px' }}>
          <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80" alt="Studio Curation" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <div style={{ position: 'relative', height: '270px' }} className="img-hover-wrapper">
            <img src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=800&q=80" alt="Tailored Wardrobe" />
            <div style={{ position: 'absolute', bottom: '30px', left: '30px', color: '#fff', zIndex: 2 }}>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 300, marginBottom: '4px' }}>Tailored Wardrobe</h4>
              <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>Discover Collection</p>
            </div>
          </div>
          <div style={{ position: 'relative', height: '270px' }} className="img-hover-wrapper">
            <img src="https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=800&q=80" alt="Objects Portfolio" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
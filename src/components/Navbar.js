import React, { useState } from 'react';

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <div style={{ 
        backgroundColor: '#ffffff', 
        borderBottom: '1px solid #f5f5f5', 
        padding: '12px 6%', 
        display: 'flex', 
        justifyContent: 'space-between', 
        fontSize: '0.65rem', 
        letterSpacing: '1.5px', 
        color: '#666',
        textTransform: 'uppercase'
      }}>
        <div>MEMBERSHIP PRIVILEGES APPLIED</div>
        <div>CUSTOMER COMPLIANCE ATELIER: DISPATCHING WORLDWIDE</div>
      </div>

      <header style={{ 
        position: 'sticky', top: 0, backgroundColor: '#ffffff', zIndex: 100, 
        borderBottom: '1px solid #eee', padding: '20px 6%', display: 'flex', 
        alignItems: 'center', justifyContent: 'space-between' 
      }}>
        <nav style={{ display: 'flex', gap: '30px' }}>
          {['THE RUNWAY', 'READY TO WEAR', 'EDITORIAL'].map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} style={{ textDecoration: 'none', color: '#000', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '1.5px' }}>
              {link}
            </a>
          ))}
        </nav>

        <h1 style={{ fontFamily: 'serif', fontSize: '2.2rem', fontWeight: 400, letterSpacing: '6px', margin: 0 }}>
          VOGUE
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <button style={{ background: 'none', border: 'none', fontSize: '0.7rem', letterSpacing: '1.5px', cursor: 'pointer' }}>SEARCH</button>
          <button onClick={() => setIsCartOpen(true)} style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', position: 'relative' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span style={{ position: 'absolute', top: '-5px', right: '-8px', backgroundColor: '#000', color: '#fff', fontSize: '8px', width: '14px', height: '14px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</span>
          </button>
        </div>
      </header>

      {/* Slide-out Cart Panel */}
      {isCartOpen && (
        <>
          <div onClick={() => setIsCartOpen(false)} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.15)', zIndex: 200 }} />
          <div style={{ position: 'fixed', top: 0, right: 0, width: '440px', height: '100vh', backgroundColor: '#ffffff', zIndex: 201, padding: '40px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box', boxShadow: '-5px 0 25px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
              <h3 style={{ fontFamily: 'serif', fontSize: '1.5rem', fontWeight: 300, margin: 0 }}>Your Selection (2)</h3>
              <button onClick={() => setIsCartOpen(false)} style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
            </div>

            <div style={{ flexGrow: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '25px' }}>
              {/* Product Row Item 1 */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ width: '120px', height: '150px', backgroundColor: '#f9f9f9', overflow: 'hidden', flexShrink: 0 }}>
                  <img src="/image_01ccce.jpg" alt="Product" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 500, margin: 0 }}>The Tailored Wool Trench</h4>
                  <div style={{ fontSize: '0.75rem', color: '#666' }}>Color: <span style={{ color: '#000' }}>Espresso Noir</span></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.75rem', color: '#666' }}>
                    Size: 
                    <select style={{ border: '1px solid #ccc', padding: '2px 4px', fontSize: '0.75rem', outline: 'none', background: '#fff' }}>
                      <option>L (40)</option>
                    </select>
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 500, marginTop: '5px' }}>$310.00</div>
                </div>
              </div>

              {/* Product Row Item 2 */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', borderTop: '1px solid #eee', paddingTop: '25px' }}>
                <div style={{ width: '120px', height: '150px', backgroundColor: '#f9f9f9', overflow: 'hidden', flexShrink: 0 }}>
                  <img src="/image_0239c4.jpg" alt="Product" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 500, margin: 0 }}>Chronograph Minimalist Noir</h4>
                  <div style={{ fontSize: '0.75rem', color: '#666' }}>Color: <span style={{ color: '#000' }}>Matte Black</span></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.75rem', color: '#666' }}>
                    Size: 
                    <select style={{ border: '1px solid #ccc', padding: '2px 4px', fontSize: '0.75rem', outline: 'none', background: '#fff' }}>
                      <option>O/S (One Size)</option>
                    </select>
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 500, marginTop: '5px' }}>$225.00</div>
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid #eee', paddingTop: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span style={{ fontSize: '0.85rem', color: '#666' }}>Estimated Subtotal</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>$535.00</span>
              </div>
              <button style={{ width: '100%', backgroundColor: '#000', color: '#fff', border: 'none', padding: '15px 0', fontSize: '0.75rem', letterSpacing: '2px', cursor: 'pointer' }}>
                PROCEED TO GATEWAY
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
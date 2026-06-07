import React from 'react';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid #eee', backgroundColor: '#ffffff', padding: 0 }}>
      {/* Infinite Textile Banner Look */}
      <div style={{ backgroundColor: '#000', color: '#fff', padding: '16px 0', overflow: 'hidden', whiteSpace: 'nowrap', fontSize: '0.65rem', letterSpacing: '2px', fontWeight: 500 }}>
        <div style={{ display: 'inline-block' }}>
          CRAFTED WITH RECYCLED ITALIAN WOOL • CONSCIOUS ARCHITECTURE • VOGUE STUDIO COLLECTION AVAILABLE ONLINE • CRAFTED WITH RECYCLED ITALIAN WOOL • CONSCIOUS ARCHITECTURE
        </div>
      </div>

      {/* Subscription Input Hub */}
      <div style={{ padding: '90px 8%', textAlign: 'center', maxWidth: '580px', margin: '0 auto' }}>
        <p style={{ fontSize: '0.65rem', letterSpacing: '2px', color: '#888', textTransform: 'uppercase', marginBottom: '15px' }}>Correspondence</p>
        <h3 style={{ fontFamily: 'serif', fontSize: '2.6rem', fontWeight: 300, margin: '0 0 20px 0', color: '#111' }}>Join the Vogue Syndicate</h3>
        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '40px', lineHeight: '1.7', fontWeight: 300 }}>
          Receive foundational styling blueprints, early launch communications, and collection updates directly in your inbox.
        </p>
        <div style={{ display: 'flex', borderBottom: '1px solid #000', paddingBottom: '10px', alignItems: 'center' }}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            style={{ border: 'none', outline: 'none', flexGrow: 1, fontSize: '0.85rem', color: '#000', padding: '5px 0' }} 
          />
          <button style={{ background: 'none', border: 'none', fontWeight: 600, fontSize: '0.75rem', letterSpacing: '1.5px', cursor: 'pointer' }}>
            SUBMIT
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
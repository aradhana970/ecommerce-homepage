import React from 'react';

const Ticker = () => {
  const promoText = " • CRAFTED WITH RECYCLED ITALIAN WOOL • CONSCIOUS ARCHITECTURE • VOGUE STUDIO COLLECTION AVAILABLE ONLINE";
  
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {promoText}{promoText}{promoText}
      </div>
    </div>
  );
};

export default Ticker;
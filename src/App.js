import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductList from './components/ProductList';
import Manifesto from './components/Manifesto'; // <-- importing the manifesto component
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* 1. Header Navigation & Cart Drawer */}
      <Navbar />

      {/* 2. Welcome Hero Display */}
      <Hero />

      {/* 3. Studio Portfolios Dual Grid */}
      <Categories />

      {/* 4. Interactive Product Grid */}
      <ProductList />

      {/* 5. The Balanced Manifesto Section */}
      <Manifesto />

      {/* 6. Client Testimonials Matrix */}
      <Testimonials />

      {/* 7. Endless Loop Marquee & Footer Syndicate */}
      <Footer />
    </div>
  );
}

export default App;
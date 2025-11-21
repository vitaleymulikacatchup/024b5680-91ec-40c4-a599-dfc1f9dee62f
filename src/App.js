import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Reviews from './components/Reviews';
import Partners from './components/Partners';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Discounts from './components/Discounts';
import AdditionalServices from './components/AdditionalServices';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Reviews />
      <Partners />
      <Services />
      <Pricing />
      <Discounts />
      <AdditionalServices />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
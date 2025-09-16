// src/App.js

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { companyData, products, testimonials } from './data';
import './index.css';

const App = () => {
  return (
    <div className="app">
      <Header companyName={companyData.name} />
      <main>
        <Hero tagline={companyData.tagline} />
        <About data={companyData} />
        <Gallery products={products} />
        <Testimonials testimonials={testimonials} />
        <Contact />
      </main>
      <Footer companyName={companyData.name} />
    </div>
  );
}

export default App;
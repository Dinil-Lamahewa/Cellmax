import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Technology } from '../components/Technology';
import { Performance } from '../components/Performance';
import { ProductRange } from '../components/ProductRange';
import { WhyChoose } from '../components/WhyChoose';
import { Gallery } from '../components/Gallery';
import { Footer } from '../components/Footer';
export function CellmaxLanding() {
  return <div className="min-h-screen bg-[#0a0e1a] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Technology />
      <Performance />
      <ProductRange />
      <WhyChoose />
      <Gallery />
      <Footer />
    </div>;
}
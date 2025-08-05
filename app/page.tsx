import React from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import LogoSection from '@/components/sections/LogoSection';
import TestimonialSection from '@/components/sections/TestimonialSection';


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <LogoSection />
        <TestimonialSection />
      </main>
    </div>
  );
}


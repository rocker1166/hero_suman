import React from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import LogoSection from '@/components/sections/LogoSection';


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <LogoSection />
      </main>
    </div>
  );
}


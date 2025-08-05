import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Hero section data for better maintainability
const HERO_DATA = {
  badges: [
    {
      src: "/home_hero_badge-img.svg",
      alt: "Product Hunt badge",
      width: 151.75,
      height: 37.94
    },
    {
      src: "/home_hero_badge-img-2.svg", 
      alt: "G2 Rating badge",
      width: 110.19,
      height: 37.94
    }
  ],
  headline: {
    primary: "Don't create a survey.",
    secondary: "Start a conversation"
  },
  description: "10x your insights with AI surveys and interviews",
  cta: {
    text: "Get Started Free",
    href: "/get-started",
    disclaimer: "No credit card required"
  },
  heroImage: {
    src: "/hero_sec.png",
    alt: "Post-onboarding survey example shown on a device",
    width: 964,
    height: 729
  }
};

// Reusable Badge component
const Badge = ({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    className="h-9 w-auto"
  />
);

// Call-to-action button component
const CTAButton = ({ href, children, disclaimer }: { href: string; children: React.ReactNode; disclaimer: string }) => (
  <div className="flex flex-col items-center gap-3">
    <Link 
      href={href} 
      className="relative w-44 h-9 bg-gradient-to-r from-rose-400 to-indigo-400 rounded-lg hover:opacity-90 transition-opacity"
      aria-label="Get started with TheySaid for free"
    >
      <span className="absolute left-[15.17px] top-[6.70px] text-white text-base font-semibold font-['Inter'] leading-snug">
        {children}
      </span>
      <span className="absolute w-5 h-6 left-[146.03px] top-[7.58px] overflow-hidden" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </span>
    </Link>
    <p className="text-xs text-zinc-700 font-['Inter'] leading-tight">{disclaimer}</p>
  </div>
);

export default function Hero() {
  const heroStyle = {
    backgroundImage: `url('/hero.png')`,
  };

  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat"
      style={heroStyle}
      aria-label="Hero section"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 opacity-80" aria-hidden="true"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-20">
        <div className="w-full mx-auto relative">
          <div className="flex flex-col items-center">
            
            {/* Trust badges */}
            <header className="flex justify-center items-center gap-4 mb-6">
              {HERO_DATA.badges.map((badge, index) => (
                <Badge key={index} {...badge} />
              ))}
            </header>

            {/* Main hero content */}
            <main className="w-full max-w-[513.58px] text-center">
              {/* Hero headline */}
              <hgroup className="mb-8">
                <h1 className="text-4xl sm:text-5xl font-light text-gray-900 leading-[53.12px] font-['Inter']">
                  {HERO_DATA.headline.primary}
                </h1>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-[53.12px] font-['Inter']">
                  {HERO_DATA.headline.secondary}
                </h1>
                <p className="mt-2 text-xl text-gray-600 font-normal font-['Inter'] leading-snug">
                  {HERO_DATA.description}
                </p>
              </hgroup>

              {/* Call to action */}
              <CTAButton href={HERO_DATA.cta.href} disclaimer={HERO_DATA.cta.disclaimer}>
                {HERO_DATA.cta.text}
              </CTAButton>
            </main>

            {/* Hero image */}
            <figure className="w-full max-w-[963.74px] h-[333.08px] mt-14 relative overflow-hidden">
              <Image 
                src={HERO_DATA.heroImage.src}
                alt={HERO_DATA.heroImage.alt}
                width={HERO_DATA.heroImage.width}
                height={HERO_DATA.heroImage.height}
                className="w-full object-contain mx-auto"
                priority
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

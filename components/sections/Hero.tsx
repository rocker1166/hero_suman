import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50 to-pink-100 opacity-80"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        <div className="text-center">
          
          {/* Badges */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
            <Image
              src="/home_hero_badge-img.svg"
              alt="Product Hunt badge"
              width={151.75}
              height={37.94}
              className="h-9 w-auto"
            />
            <Image
              src="/home_hero_badge-img-2.svg"
              alt="G2 Rating badge"
              width={110.19}
              height={37.94}
              className="h-9 w-auto"
            />
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Don't create a survey.
          </h1>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mt-2">
            Start a conversation
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 sm:text-xl md:text-2xl">
            10x your insights with AI surveys and interviews
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4">
            <Link href="/get-started" className="relative w-44 h-9 bg-gradient-to-r from-rose-400 to-indigo-400 rounded-lg hover:opacity-90 transition-opacity">
              <div className="absolute left-[15.17px] top-[6.70px] text-white text-base font-semibold font-['Inter'] leading-snug">Get Started Free</div>
              <div className="absolute w-5 h-6 left-[146.03px] top-[7.58px] overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </Link>
            <p className="text-sm text-zinc-700">No credit card required</p>
          </div>

        </div>
        
        {/* Image */}
        <div className="mt-16 lg:mt-24">
          <Image 
            src="/hero_sec.png" 
            alt="Post-onboarding survey example shown on a device" 
            width={1000} 
            height={600} 
            className="rounded-xl shadow-2xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

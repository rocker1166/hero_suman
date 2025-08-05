import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="absolute inset-0  opacity-80"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-20 ">
        <div className="w-full mx-auto relative">
          <div className="flex flex-col items-center">
            {/* Badges */}
            <div className="flex justify-center items-center gap-4 mb-6">
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

            {/* Hero Content */}
            <div className="w-full max-w-[513.58px] text-center">
              {/* Headline */}
              <div className="mb-8">
                <h1 className="text-4xl sm:text-5xl font-light text-gray-900 leading-[53.12px] font-['Inter']">
                  Don't create a survey.
                </h1>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-[53.12px] font-['Inter']">
                  Start a conversation
                </h1>
                <p className="mt-2 text-xl text-gray-600 font-normal font-['Inter'] leading-snug">
                  10x your insights with AI surveys and interviews
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col items-center gap-3">
                <Link href="/get-started" className="relative w-44 h-9 bg-gradient-to-r from-rose-400 to-indigo-400 rounded-lg hover:opacity-90 transition-opacity">
                  <div className="absolute left-[15.17px] top-[6.70px] text-white text-base font-semibold font-['Inter'] leading-snug">Get Started Free</div>
                  <div className="absolute w-5 h-6 left-[146.03px] top-[7.58px] overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </Link>
                <p className="text-xs text-zinc-700 font-['Inter'] leading-tight">No credit card required</p>
              </div>
            </div>

            {/* Image */}
            <div className="w-full max-w-[963.74px] h-[333.08px] mt-14 relative overflow-hidden">
              <Image 
                src="/hero_sec.png" 
                alt="Post-onboarding survey example shown on a device" 
                width={964} 
                height={729} 
                className="w-full object-contain mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

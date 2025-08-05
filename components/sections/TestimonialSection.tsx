"use client";
import React, { useState } from 'react';
import Image from 'next/image';

// Define Testimonial type
type Testimonial = {
  id: number;
  quote: string;
  name: string;
  position: string;
  avatar: string;
};

// Testimonial data
const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Implementing TheySaid has led to a 5-10% increase in qualified leads from our existing customers in just a few months while reducing churn. The results speak for themselves.",
    name: "Alex Farmer",
    position: "Chief Revenue Office @ Nezasa",
    avatar: "/pro/1.png" // Temporary using existing image
  },
  {
    id: 2,
    quote: "Integrating TheySaid has been a game-changer. We've seen a 5-10% decrease in customer churn with an increase in upsell opportunities since its implementation.",
    name: "Srikrishnan Ganesan",
    position: "Co-Founder & CEO @ Rocketlane",
    avatar: "/pro/2.png" // Temporary using existing image
  },
  {
    id: 3,
    quote: "How did TheySaid AI come up with such great question recommendations? These are questions that our teams really want to know and discussed internally a lot. I am impressed!",
    name: "Brook P.",
    position: "VP, Marketing @ DX",
    avatar: "/pro/3.png" // Temporary using existing image
  },
  {
    id: 4,
    quote: "TheySaid's AI Surveys help us step up our insight gathering game. Its smarter, and more engaging for customers.",
    name: "Maggie C.",
    position: "VP, Product Design @ ClickUp",
    avatar: "/pro/1.png"
  },
  {
    id: 5,
    quote: "Really easy to use and I think this might be one of the best way to engage with your customers! Platform will really boost your customer engagement.",
    name: "Danny L.",
    position: "Co-Founder",
    avatar: "/pro/2.png"
  }
];

// Single Testimonial Card Component
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  // No need for line formatting, we'll display the full quote in a single paragraph
  
  return (
    <div className="w-full md:w-[370px] h-auto min-h-[300px] p-8 bg-white rounded-3xl shadow-sm flex flex-col justify-between items-start gap-8 flex-shrink-0">
      <div className="flex flex-col items-start gap-6">
        <img 
          className="w-12 h-12 rounded-full object-cover" 
          src={testimonial.avatar} 
          alt={`${testimonial.name} avatar`}
        />
        <p className="text-[#111827] text-lg font-normal leading-[28px]">
          {testimonial.quote.startsWith('"') ? '' : '"'}
          {testimonial.quote}
          {testimonial.quote.endsWith('"') ? '' : '"'}
        </p>
      </div>
      <div className="w-full">
        <div className="text-[#111827] text-xl font-semibold leading-tight">
          {testimonial.name}
        </div>
        <div className="text-[#4B5563] text-base font-normal leading-relaxed mt-1">
          {testimonial.position}
        </div>
      </div>
    </div>
  );
};

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxVisibleCards = 3;
  const totalTestimonials = testimonials.length;
  const mobileCardsRef = React.useRef<HTMLDivElement>(null);
  
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? totalTestimonials - 1 : prevIndex - 1;
      
      // Scroll on mobile
      if (mobileCardsRef.current && window.innerWidth < 768) {
        const cardWidth = mobileCardsRef.current.querySelector('div')?.clientWidth || 0;
        mobileCardsRef.current.scrollTo({
          left: cardWidth * newIndex,
          behavior: 'smooth'
        });
      }
      
      return newIndex;
    });
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % totalTestimonials;
      
      // Scroll on mobile
      if (mobileCardsRef.current && window.innerWidth < 768) {
        const cardWidth = mobileCardsRef.current.querySelector('div')?.clientWidth || 0;
        mobileCardsRef.current.scrollTo({
          left: cardWidth * newIndex,
          behavior: 'smooth'
        });
      }
      
      return newIndex;
    });
  };
  
  // Calculate visible testimonials based on current index
  const visibleTestimonials = Array.from({ length: maxVisibleCards }, (_, i) => {
    const index = (currentIndex + i) % totalTestimonials;
    return testimonials[index];
  });

  return (
    <section className="w-full bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          {/* Heading and Controls */}
          <div className="flex justify-between items-center">
            <div className="max-w-md">
              <h2 className="text-zinc-900 text-4xl font-medium font-['Inter'] leading-9">
                See what our customers had to say.
              </h2>
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={handlePrevious}
                className="w-9 h-9 rounded-full flex items-center justify-center outline outline-1 outline-offset-[-1px] outline-zinc-400"
                aria-label="Previous testimonial"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="#71717A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <button 
                onClick={handleNext}
                className="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Testimonial Cards - Desktop */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {visibleTestimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          
          {/* Testimonial Cards - Mobile */}
          <div className="md:hidden">
            <div 
              ref={mobileCardsRef}
              className="snap-x snap-mandatory flex overflow-x-auto scrollbar-hide -mx-4 px-4 pb-6 gap-4"
              onScroll={(e) => {
                // Update current index based on scroll position
                if (window.innerWidth < 768) {
                  const container = e.currentTarget;
                  const cardWidth = container.querySelector('div')?.clientWidth || 0;
                  const scrollPosition = container.scrollLeft;
                  const newIndex = Math.round(scrollPosition / cardWidth);
                  
                  if (newIndex !== currentIndex) {
                    setCurrentIndex(newIndex);
                  }
                }
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="snap-center w-[85vw] flex-shrink-0"
                  onClick={() => setCurrentIndex(index)}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <div 
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    
                    // Scroll to the selected card
                    if (mobileCardsRef.current) {
                      const cardWidth = mobileCardsRef.current.querySelector('div')?.clientWidth || 0;
                      mobileCardsRef.current.scrollTo({
                        left: cardWidth * index,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
                    index === currentIndex ? 'bg-gray-900' : 'bg-gray-300'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

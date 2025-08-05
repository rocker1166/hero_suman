import React from 'react';

export default function LogoSection() {
  return (
    <section className="w-full bg-gray-50">
      <div className="w-full max-w-[1351px] h-32 relative bg-gray-50 mx-auto">
        {/* Desktop View - Fixed Positioning */}
        <div className="hidden md:flex w-[1146.12px] h-8 absolute left-[102.44px] top-[45.52px] justify-start items-center gap-8">
          <img className="w-28 h-8 relative" src="/logo/1.png" alt="Partner Logo 1" />
          <img className="w-32 h-8 relative" src="/logo/2.png" alt="Partner Logo 2" />
          <img className="w-32 h-8 relative" src="/logo/3.png" alt="Partner Logo 3" />
          <img className="w-36 h-8 relative" src="/logo/4.png" alt="Partner Logo 4" />
          <img className="w-28 h-8 relative" src="/logo/5.png" alt="Partner Logo 5" />
          <img className="w-24 h-8 relative" src="/logo/6.png" alt="Partner Logo 6" />
          <img className="w-36 h-8 relative" src="/logo/7.png" alt="Partner Logo 7" />
          <img className="w-16 h-8 relative" src="/logo/8.png" alt="Partner Logo 8" />
        </div>
        
        {/* Mobile View - Simple Scrollable Row */}
        <div className="md:hidden h-32 flex items-center relative">
          <div className="w-full overflow-x-auto scrollbar-hide px-4">
            <div className="flex items-center gap-8 min-w-max">
              <img className="h-6 w-auto" src="/logo/1.png" alt="Partner Logo 1" />
              <img className="h-6 w-auto" src="/logo/2.png" alt="Partner Logo 2" />
              <img className="h-6 w-auto" src="/logo/3.png" alt="Partner Logo 3" />
              <img className="h-6 w-auto" src="/logo/4.png" alt="Partner Logo 4" />
              <img className="h-6 w-auto" src="/logo/5.png" alt="Partner Logo 5" />
              <img className="h-6 w-auto" src="/logo/6.png" alt="Partner Logo 6" />
              <img className="h-6 w-auto" src="/logo/7.png" alt="Partner Logo 7" />
              <img className="h-6 w-auto" src="/logo/8.png" alt="Partner Logo 8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

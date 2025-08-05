import React from 'react';

// Define logo type
interface PartnerLogo {
  id: number;
  src: string;
  width: string;
  alt: string;
}

// Define a consistent array of logos
const PARTNER_LOGOS: PartnerLogo[] = [
  { id: 1, src: "/logo/1.png", width: "w-28", alt: "Partner Logo 1" },
  { id: 2, src: "/logo/2.png", width: "w-32", alt: "Partner Logo 2" },
  { id: 3, src: "/logo/3.png", width: "w-32", alt: "Partner Logo 3" },
  { id: 4, src: "/logo/4.png", width: "w-36", alt: "Partner Logo 4" },
  { id: 5, src: "/logo/5.png", width: "w-28", alt: "Partner Logo 5" },
  { id: 6, src: "/logo/6.png", width: "w-24", alt: "Partner Logo 6" },
  { id: 7, src: "/logo/7.png", width: "w-36", alt: "Partner Logo 7" },
  { id: 8, src: "/logo/8.png", width: "w-16", alt: "Partner Logo 8" },
];

// Logo component for reusability
const Logo = ({ logo, isMobile = false }: { logo: PartnerLogo; isMobile?: boolean }) => (
  <img 
    className={`${isMobile ? 'h-6 w-auto' : `${logo.width} h-8 relative`}`} 
    src={logo.src} 
    alt={logo.alt} 
  />
);

export default function LogoSection() {
  return (
    <section className="w-full bg-gray-50">
      <div className="w-full max-w-[1351px] h-32 relative bg-gray-50 mx-auto">
        {/* Desktop View - Fixed Positioning */}
        <div className="hidden md:flex w-[1146.12px] h-8 absolute left-[102.44px] top-[45.52px] justify-start items-center gap-8">
          {PARTNER_LOGOS.map(logo => (
            <Logo key={logo.id} logo={logo} />
          ))}
        </div>
        
        {/* Mobile View - Auto-scrolling Loop with hover pause */}
        <div className="md:hidden h-32 flex items-center relative overflow-hidden">
          <div className="w-full px-4">
            <div className="flex items-center gap-8 animate-scroll hover:pause-animation">
              {/* First set of logos */}
              {PARTNER_LOGOS.map(logo => (
                <Logo key={`first-${logo.id}`} logo={logo} isMobile={true} />
              ))}
              
              {/* Duplicate set for seamless looping */}
              {PARTNER_LOGOS.map(logo => (
                <Logo key={`second-${logo.id}`} logo={logo} isMobile={true} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

// Ensure image paths are properly structured for production
const clients = [
  { name: 'Simbolo', logo: '/simbolo.png' },
  { name: 'AYA Pay', logo: '/aya-pay.png' },
  { name: 'Simbolo', logo: '/simbolo.png' },
  { name: 'AYA Pay', logo: '/aya-pay.png' },  
  { name: 'Simbolo', logo: '/simbolo.png' },
  { name: 'AYA Pay', logo: '/aya-pay.png' },
  { name: 'Simbolo', logo: '/simbolo.png' },
  { name: 'AYA Pay', logo: '/aya-pay.png' },  
  { name: 'Simbolo', logo: '/simbolo.png' },
  { name: 'AYA Pay', logo: '/aya-pay.png' },
];

export default function PartnersSponsors() {
  const svgRef = useRef<SVGSVGElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Generate sketch-like path with slight randomness for natural look
  const generateSketchPath = () => {
    const width = 220;
    const height = 15;
    const segments = 20;
    const segmentWidth = width / segments;
    
    let path = `M0,${height/2}`;
    
    for (let i = 1; i <= segments; i++) {
      const x = i * segmentWidth;
      // More pronounced variation for better sketch effect
      const yOffset = Math.random() * 4 - 2; 
      path += ` L${x},${height/2 + yOffset}`;
    }
    
    return path;
  };

  useEffect(() => {
    if (typeof window === 'undefined' || !svgRef.current) return;
    
    // Set initial path
    const path = svgRef.current.querySelector('path');
    if (path) {
      path.setAttribute('d', generateSketchPath());
    }

    // Check if mobile on initial load and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Scroll observer with higher sensitivity
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    const currentSectionRef = sectionRef.current;
    
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    // Redraw the sketch path occasionally for dynamic effect
    const redrawInterval = setInterval(() => {
      if (isVisible && path) {
        setTimeout(() => {
          path.setAttribute('d', generateSketchPath());
        }, 300); // Small delay for visual effect
      }
    }, 5000);

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
      clearInterval(redrawInterval);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="w-full py-3 md:py-16 bg-gradient-to-b from-[#272727] to-[#1a1a1a] relative overflow-hidden">
      <div className="container-padding relative z-10">
        {/* Heading with Sketch Underline - Hidden on mobile */}
        <div className="hidden md:block mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white inline-block relative pb-8">
            Our Clients & Partners
            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <svg 
                ref={svgRef}
                width="220" 
                height="18" 
                viewBox="0 0 220 18" 
                className={`sketch-line ${isVisible ? 'animate-draw' : ''}`}
                aria-hidden="true"
              >
                <path
                  d={generateSketchPath()}
                  fill="none"
                  stroke="url(#sketchGradient)"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="1,0"
                  className={isVisible ? 'animate-dash' : ''}
                />
                <defs>
                  <linearGradient id="sketchGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFB333" />
                    <stop offset="50%" stopColor="#ffd466" />
                    <stop offset="100%" stopColor="#ffc566" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </h2>
        </div>

        {/* Full-width Animated Logo Marquee */}
        <div className="w-screen -ml-[calc(50vw-50%)] overflow-hidden">
          {/* First Moving Row - Always visible */}
          <div className="flex animate-marquee gap-4 md:gap-8">
            {[...clients, ...clients, ...clients].map((client, idx) => (
              <div 
                key={`first-${idx}`} 
                className="flex-shrink-0 flex items-center bg-[#ffffff0d] backdrop-blur-sm rounded-full py-[6px] md:py-3 px-4 md:px-6 border border-[#ffffff1a] hover:border-[#ffffff40] transition-colors duration-300 shadow-[0_0_15px_rgba(255,179,51,0.08)]"
              >
                <div className="flex-shrink-0 w-7 h-7 md:w-10 md:h-10 rounded-full overflow-hidden bg-[#ffffff0d] mr-2 md:mr-4 glow-effect">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                    priority={idx < 2}
                  />
                </div>
                <span className="text-white/80 font-medium text-xs md:text-base whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            ))}
          </div>

          {/* Second Moving Row (Reverse) - Only visible on non-mobile */}
          {!isMobile && (
            <div className="hidden md:flex animate-marquee-reverse gap-8 mt-8">
              {[...clients].reverse().concat([...clients].reverse()).map((client, idx) => (
                <div 
                  key={`second-${idx}`} 
                  className="flex-shrink-0 flex items-center bg-[#ffffff0d] backdrop-blur-sm rounded-full py-3 px-6 border border-[#ffffff1a] hover:border-[#ffffff40] transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-[#ffffff0d] mr-4">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                      priority={idx < 2}
                    />
                  </div>
                  <span className="text-white/80 font-medium text-base whitespace-nowrap">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Animation Styles - Using global styles for compatibility */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          will-change: transform;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
          will-change: transform;
        }
        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
        
        /* Sketch line animations */
        @keyframes dashOffset {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -50; }
        }
        
        @keyframes drawLine {
          0% { stroke-dasharray: 0, 500; stroke-dashoffset: 0; opacity: 0.7; }
          50% { opacity: 1; }
          70% { stroke-dasharray: 500, 0; stroke-dashoffset: 0; }
          100% { stroke-dasharray: 500, 0; stroke-dashoffset: 0; }
        }
        
        @keyframes shimmer {
          0% { stroke-width: 2.8; }
          50% { stroke-width: 3.2; }
          100% { stroke-width: 2.8; }
        }
        
        @keyframes glow {
          0% { box-shadow: 0 0 5px rgba(255, 179, 51, 0.2); }
          50% { box-shadow: 0 0 10px rgba(255, 179, 51, 0.4); }
          100% { box-shadow: 0 0 5px rgba(255, 179, 51, 0.2); }
        }
        
        .sketch-line {
          filter: drop-shadow(0 0 3px rgba(255, 179, 51, 0.4));
        }
        
        .sketch-line path {
          stroke-dasharray: 4, 2;
          animation: dashOffset 20s linear infinite, shimmer 4s ease-in-out infinite;
        }
        
        .animate-draw path {
          animation: 
            drawLine 1.8s cubic-bezier(0.65, 0, 0.35, 1) forwards, 
            dashOffset 15s linear 1.8s infinite,
            shimmer 4s ease-in-out 1.8s infinite;
        }
        
        .glow-effect {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
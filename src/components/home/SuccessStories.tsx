'use client';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Custom styles for hiding scrollbar and adding pattern
const customStyles = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  .bg-pattern {
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E");
    background-repeat: repeat;
  }
`;

const testimonials = [
  {
    name: 'Swum Pyae Sone',
    role: 'Fundamental Drawing Class',
    quote: `Before joining the Fundamental Drawing Class at Bona Fide, I struggled with basic techniques. Thanks to the supportive instructors and clear lessons, I built a strong foundation in drawing. Now, I feel more confident expressing my ideas through art!`,
    image: '/image/CEO.png',
  },
  {
    name: 'Jane Doe',
    role: 'Advanced Painting Class',
    quote: `The Advanced Painting Class helped me unlock my creativity. The instructors were amazing and the community was so supportive!`,
    image: '/image/CEO.png',
  },
  {
    name: 'John Smith',
    role: 'Digital Art Bootcamp',
    quote: `I learned so much about digital art tools and techniques. The bootcamp was intense but incredibly rewarding!`,
    image: '/image/CEO.png',
  },
  {
    name: 'Emily Lee',
    role: 'Creative Writing Workshop',
    quote: `The workshop gave me the confidence to share my stories. I loved the feedback and encouragement from everyone!`,
    image: '/image/CEO.png',
  },
  {
    name: 'Michael Brown',
    role: 'Photography Masterclass',
    quote: `The masterclass was a game changer for my photography. I now see the world through a new lens!`,
    image: '/image/CEO.png',
  },
  {
    name: 'Sophia Green',
    role: 'Sculpture Basics',
    quote: `Sculpture Basics was so much fun! I never thought I could create something with my hands, but now I can!`,
    image: '/image/CEO.png',
  },
  {
    name: 'Lucas White',
    role: 'Music Production',
    quote: `Music Production classes were inspiring and practical. I now produce my own tracks!`,
    image: '/image/CEO.png',
  },
  {
    name: 'Olivia Black',
    role: 'Film Making',
    quote: `The Film Making course gave me the confidence to direct my first short film!`,
    image: '/image/CEO.png',
  },
  {
    name: 'Noah Blue',
    role: 'Animation Basics',
    quote: `Animation Basics was a blast! I learned so much about storytelling through motion.`,
    image: '/image/CEO.png',
  },
  {
    name: 'Ava Red',
    role: 'Fashion Design',
    quote: `Fashion Design classes helped me launch my own clothing line!`,
    image: '/image/CEO.png',
  },
];

const CARDS_TO_SHOW = 4;

const SuccessStories: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const maxIdx = testimonials.length - CARDS_TO_SHOW;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNext = () => {
    if (currentIdx < maxIdx) {
      setCurrentIdx(prev => prev + 1);
      scrollCarousel(1);
    }
  };

  const handleBack = () => {
    if (currentIdx > 0) {
      setCurrentIdx(prev => prev - 1);
      scrollCarousel(-1);
    }
  };

  const scrollCarousel = (direction: number) => {
    if (!carouselRef.current) return;
    
    const cardWidth = carouselRef.current.clientWidth / 4;
    carouselRef.current.scrollBy({
      left: direction * cardWidth,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-[#FAFAF7] relative font-sans overflow-x-hidden">
      {/* Custom styles */}
      <style jsx global>{customStyles}</style>
      
      {/* Grid Pattern Background - Top Left Corner Only */}
      <svg className="absolute left-0 top-0 w-80 h-80 z-0" width="320" height="320">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E5E7EB" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="320" height="320" fill="url(#grid)" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6">
        <div className="hidden">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-center md:gap-8 mb-8 md:mb-12"
          >
            <div className="mb-6 md:mb-0 min-w-[220px]">
              <div className="text-orange-500 text-lg md:text-xl font-semibold mb-2">Our Student Feedback</div>
              <div className="flex items-center mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-orange-400 text-xl">&#9733;</span>
                ))}
              </div>
              <div className="text-gray-700 text-sm">From 1000+ Students</div>
            </div>
            <div className="flex-1 flex justify-start md:justify-end">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-2 md:text-right">
                Voices of Growth and<br className="hidden md:block" />
                Transformation <span className="inline-block align-middle text-orange-400 text-3xl md:text-5xl ml-2">&rarr;</span>
              </h2>
            </div>
          </motion.div>
        </div>

        {/* Four-Column Scrollable Carousel */}
        <div className="mb-0">
          <div 
            ref={carouselRef} 
            className="flex overflow-x-auto hide-scrollbar w-full pb-2 gap-4 md:gap-5 snap-x"
            style={{ scrollBehavior: 'smooth' }}
          >
            {testimonials.map((testimonial, idx) => {
              // Create alternating colors and gradients
              let cardBgClass;
              if (idx === currentIdx) {
                // Active card - highlight with gradient
                cardBgClass = 'bg-gradient-to-br from-[#E16D39] to-[#D35729]';
              } else if (idx % 3 === 0) {
                // Yellow-orange gradient
                cardBgClass = 'bg-gradient-to-br from-[#FFB333] to-[#F9B056]';
              } else if (idx % 3 === 1) {
                // Orange gradient
                cardBgClass = 'bg-gradient-to-br from-[#F87239] to-[#E76529]';
              } else {
                // Gold-yellow gradient
                cardBgClass = 'bg-gradient-to-br from-[#FFCB66] to-[#FFB84D]';
              }
              
              return (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[85%] sm:w-[45%] md:w-[24%] px-2 snap-start"
                  onClick={() => setCurrentIdx(idx)}
                >
                  <div 
                    className={`${cardBgClass} 
                      rounded-xl overflow-hidden h-[380px] sm:h-[400px] transform transition-all duration-300
                      ${idx === currentIdx ? 'scale-105 shadow-lg ring-2 ring-white/20' : 'scale-100 shadow-md hover:shadow-lg hover:scale-[1.02]'}`}
                  >
                    <div className="p-5 md:p-6 text-white h-full flex flex-col relative">
                      {/* Subtle pattern overlay */}
                      <div className="absolute inset-0 bg-pattern opacity-5"></div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        {/* Profile Section */}
                        <div className="flex items-center mb-4 md:mb-5">
                          <div className="w-12 h-12 md:w-14 md:h-14 relative">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              fill
                              className="rounded-full object-cover border-2 border-white/30 shadow-md"
                            />
                          </div>
                          <div className="ml-3 md:ml-4">
                            <div className="font-bold text-base md:text-lg">{testimonial.name}</div>
                            <div className="text-xs md:text-sm opacity-90">{testimonial.role}</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Quote */}
                      <div className="mt-4 md:mt-5 flex-1 flex flex-col relative z-10">
                        <div className="text-4xl md:text-5xl opacity-70 mb-2 md:mb-3">"</div>
                        <div className="text-sm md:text-base leading-relaxed line-clamp-6">
                          {testimonial.quote}
                        </div>
                        <div className="flex justify-end mt-auto">
                          <div className="text-4xl md:text-5xl opacity-70">"</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between max-w-xs sm:max-w-md mx-auto mb-0 mt-4">
          <button
            className="px-6 sm:px-8 py-3 sm:py-4 border border-[#F9B056] rounded-full text-black text-sm sm:text-base font-medium bg-white hover:bg-gray-50 transition-colors disabled:opacity-50"
            onClick={handleBack}
            disabled={currentIdx === 0}
          >
            Back
          </button>
          
          <div className="text-xl sm:text-2xl font-semibold text-gray-900">
            {String(currentIdx + 1).padStart(2, '0')}/{String(testimonials.length - CARDS_TO_SHOW + 1).padStart(2, '0')}
          </div>
          
          <button
            className="px-6 sm:px-8 py-3 sm:py-4 bg-[#E16D39] text-white rounded-full text-sm sm:text-base font-medium hover:bg-[#d56533] transition-colors disabled:opacity-50"
            onClick={handleNext}
            disabled={currentIdx >= maxIdx}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories; 
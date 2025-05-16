'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const WhatWeOffer = () => {
  const [activeOffering, setActiveOffering] = useState<string | null>(null);
  
  const offerings = [
    {
      id: 'courses',
      number: '01',
      title: 'Providing Quality Courses',
      description:
        'We offer high-quality courses designed to empower learners with practical skills, professional knowledge, and personal growth opportunities.',
      image: '/image/learning.png',
    },
    {
      id: 'content',
      number: '02',
      title: 'Knowledge Sharing Content',
      description:
        'We create and share valuable educational content that inspires continuous learning and fosters a culture of knowledge exchange.',
      image: '/image/knowledge.png',
    },
    {
      id: 'workshops',
      number: '03',
      title: 'Workshops and Webinars',
      description:
        'We host dynamic workshops and webinars that bring experts and learners together to explore new ideas, develop skills, and drive innovation.',
      image: '/image/webinar.png',
    },
    {
      id: 'partnerships',
      number: '04',
      title: 'Partnership Building',
      description:
        'We collaborate with institutions, organizations, and communities to create impactful partnerships that advance education and lifelong learning.',
      image: '/image/partnership.png',
    },
  ];

  const toggleOffering = (id: string) => {
    if (activeOffering === id) {
      setActiveOffering(null);
    } else {
      setActiveOffering(id);
    }
  };

  return (
    <div className="bg-[#272727] text-white font-sans">
      {/* Hero Section - Improved for mobile */}
      <div className="text-center py-8 sm:py-12 md:py-16 bg-[#272727] relative overflow-hidden px-4">
        {/* Curved Grid Pattern Behind Text */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none opacity-70"
          style={{ width: '100%', maxWidth: '600px', height: '320px' }}
        >
          <svg width="100%" height="100%" viewBox="0 0 600 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="curvedGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#374151" strokeWidth="1" />
              </pattern>
              <clipPath id="curvedClip">
                <ellipse cx="300" cy="160" rx="300" ry="120" />
              </clipPath>
            </defs>
            <rect width="600" height="320" fill="url(#curvedGrid)" clipPath="url(#curvedClip)" />
          </svg>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h3 className="text-sm sm:text-base md:text-lg font-light tracking-widest mb-2 text-gray-300">WHAT WE DO</h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Empower, Educate, Inspire,
            <br className="hidden sm:block" />
            <span className="inline-block">
              Lead <span className="inline-block mx-1 sm:mx-2 text-orange-400 text-3xl sm:text-4xl md:text-5xl transform translate-y-1">→</span> Captivates
            </span>
          </h1>
        </motion.div>
      </div>

      {/* Offerings Section - Mobile optimized */}
      <div className="max-w-5xl mx-auto px-4 py-6 sm:py-8 md:py-12 space-y-6 sm:space-y-8 bg-[#272727]">
        {offerings.map((item) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="border border-gray-800 rounded-xl overflow-hidden"
          >
            {/* Mobile: Clickable header */}
            <div 
              className="flex items-center p-4 cursor-pointer md:cursor-default bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
              onClick={() => toggleOffering(item.id)}
            >
              {/* Number */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center text-2xl sm:text-3xl font-bold text-orange-400 mr-3 sm:mr-4 bg-gray-800/50 rounded-full">
                {item.number}
              </div>
              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-semibold text-white flex-1">{item.title}</h2>
              {/* Mobile Toggle Icon */}
              <div className="md:hidden ml-2">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  className={`transition-transform duration-300 ${activeOffering === item.id ? 'rotate-180' : ''}`}
                >
                  <path d="M19 9L12 16L5 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Content: Always visible on desktop, toggleable on mobile */}
            <div className={`md:flex items-center p-0 overflow-hidden transition-all duration-300 ${activeOffering === item.id ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 md:max-h-[400px] md:opacity-100'}`}>
              {/* Content layout for desktop and mobile */}
              <div className="w-full md:w-7/12 p-4 pt-0 sm:p-5 md:pr-8">
                <p className="text-sm sm:text-base text-gray-300">{item.description}</p>
              </div>
              
              {/* Image */}
              <div className="w-full md:w-5/12 h-40 sm:h-48 md:h-32 relative mb-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="object-cover rounded-b-lg md:rounded-r-lg md:rounded-bl-none shadow-md"
                  fill
                />
              </div>
            </div>
            
            {/* Line separator - visible based on active state */}
            <div className={`flex justify-center mx-auto px-4 ${activeOffering === item.id ? 'my-1 sm:my-2' : 'my-2 sm:my-3'}`}>
              <svg height="6" width="100%" className="w-full max-w-3xl">
                <line x1="0" y1="3" x2="100%" y2="3" stroke="#3f3f3f" strokeWidth="2" strokeDasharray="8,6" strokeLinecap="round" />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer; 
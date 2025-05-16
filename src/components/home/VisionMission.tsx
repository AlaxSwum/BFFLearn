'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { useEffect, useRef } from 'react';

const VisionMission = () => {
  const tags = ['Education', 'Youth', 'Guidance'];
  const secondRowTags = ['Community Engagement'];
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Keep empty handler for scroll event
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tagVariants: Variants = {
    hidden: { opacity: 0, y: 20, rotate: -5 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  const cardVariants: Variants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: i * 0.1
      }
    })
  };

  return (
    <section className="relative py-10 md:py-14" style={{ background: '#f5f5ED' }} ref={sectionRef}>
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/grid-pattern.png"
            alt="Grid Pattern"
            fill
            className="object-cover  scale-[0.4]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f5f5ED]/50 to-[#f5f5ED]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12  md:mt-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left: Image (moved from right) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex justify-start md:justify-start mt-6 md:mt-0 mx-2 md:mx-4 order-2 md:order-1"
          >
            <div className="relative w-full max-w-[320px] md:max-w-none">
              <Image
                src="/Rectangle 22780.png"
                alt="Vision Mission"
                width={400}
                height={400}
                className="rounded-2xl object-cover w-full"
              />
              <div className="absolute inset-y-0 right-0 w-1/2 bg-[#f5f5ED] opacity-80 mix-blend-multiply rounded-r-2xl"></div>
            </div>
          </motion.div>

          {/* Right: Text Content (moved from left) */}
          <div className="mx-2 md:mx-4 order-1 md:order-2">
            <div className="relative">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl font-bold text-[#F87239] mb-2 md:mb-3 inline-block relative"
              >
                Our Vision
              </motion.h2>
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight"
            >
              Empowering Growth Through<br />
              <span className="text-[#F87239]">Genuine </span> Connections and<br />
              Lasting Impact<span className="text-[#F87239]">.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-600 text-sm md:text-base max-w-lg mb-6"
            >
              At Bona Fide, we inspire change through trust, empowerment, and genuine leadership that makes a lasting difference.
            </motion.p>
            
            {/* First row of tags */}
            <div className="flex flex-wrap gap-2 md:gap-3 mb-3 md:mb-4">
              {tags.map((tag, idx) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  variants={tagVariants}
                  initial="hidden"
                  animate="visible"
                  className="vision-tag px-3 py-1.5 md:px-4 md:py-2 rounded-full text-black text-sm md:text-base font-semibold cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 hover:bg-[#F87239] hover:text-white"
                  style={{
                    background: 'linear-gradient(90deg, #FFB333 0%, #FFC366 100%)',
                  }}
                >
                  {tag}
                </motion.div>
              ))}
            </div>
            
            {/* Second row of tags */}
            <div className="flex flex-wrap gap-2 md:gap-3 mb-5 md:mb-6">
              {secondRowTags.map((tag, idx) => (
                <motion.div
                  key={idx}
                  custom={idx + tags.length}
                  variants={tagVariants}
                  initial="hidden"
                  animate="visible"
                  className="vision-tag px-3 py-1.5 md:px-4 md:py-2 rounded-full text-black text-sm md:text-base font-semibold cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 hover:bg-[#F87239] hover:text-white"
                  style={{
                    background: 'linear-gradient(90deg, #FFB333 0%, #FFC366 100%)',
                  }}
                >
                  {tag}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mission Section - Properly Aligned */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 md:mt-20 mb-10 md:mb-16"
        >
          <div className="text-center mb-8 md:mb-12 px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block relative"
            >
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute h-[6px] bg-[#FFB333]/50 bottom-2 left-0 -z-10 rounded-sm"
              ></motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl font-bold text-[#F87239] mb-2"
              >
                Our Mission
              </motion.h2>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900"
            >
              How We Make a <span className="text-[#F87239]">Difference</span>
            </motion.h3>
          </div>

          {/* Mission Grid Section - Mobile Optimized */}
          <div className="px-3 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {/* Column 1: Yellow on top, Black below */}
              <motion.div 
                className="flex flex-col gap-4 md:gap-6"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.05 }}
              >
                <motion.div 
                  custom={0}
                  variants={cardVariants}
                  className="bg-gradient-to-br from-[#FFB333] to-[#FFCB85] text-black p-5 md:p-7 rounded-2xl flex flex-col justify-center min-h-[180px] md:min-h-[260px] transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-[#FFB333]/20"
                >
                  <div className="flex items-center mb-3">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                      viewport={{ once: true }}
                      className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center mr-3"
                    >
                      <span className="text-lg font-bold">01</span>
                    </motion.div>
                    <h3 className="font-semibold text-lg md:text-xl">Our Purpose</h3>
                  </div>
                  <p className="text-sm md:text-base">
                    To empower individuals and organizations through genuine connections and transformative impact that lasts.
                  </p>
                </motion.div>
                <motion.div 
                  custom={3}
                  variants={cardVariants}
                  className="bg-gradient-to-br from-[#272727] to-[#444444] text-white p-5 md:p-7 rounded-2xl flex flex-col justify-center min-h-[180px] md:min-h-[260px] transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-black/20"
                >
                  <div className="flex items-center mb-3">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                      viewport={{ once: true }}
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3"
                    >
                      <span className="text-lg font-bold">02</span>
                    </motion.div>
                    <h3 className="font-semibold text-lg md:text-xl">Empowering Growth</h3>
                  </div>
                  <p className="text-sm md:text-base">
                    Our mission is to foster authentic relationships that drive personal and professional success in communities worldwide.
                  </p>
                </motion.div>
              </motion.div>

              {/* Column 2: Single Tall Orange Block */}
              <motion.div 
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.05 }}
                custom={1}
                variants={cardVariants}
                className="bg-gradient-to-br from-[#F87239] to-[#FF9966] text-white p-5 md:p-7 rounded-2xl min-h-[380px] md:min-h-[540px] flex flex-col justify-between transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-[#F87239]/20"
              >
                <div>
                  <div className="flex items-center mb-3">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                      viewport={{ once: true }}
                      className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3"
                    >
                      <span className="text-lg font-bold">03</span>
                    </motion.div>
                    <h3 className="text-xl md:text-2xl font-medium">Building Impact</h3>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold mb-3 md:mb-4 flex items-center">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      98
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-2xl ml-1"
                    >
                      %
                    </motion.span>
                  </h1>
                  
                  <div className="w-16 md:w-20 h-1 bg-white mb-4 md:mb-6"></div>
                  <p className="text-sm md:text-base mb-4 md:mb-6">
                    We partner with individuals and organizations to create sustainable, positive change in communities around the world.
                  </p>
                </div>
                <div className="relative pt-4">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "80%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="h-2 bg-white rounded-full"
                  ></motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    viewport={{ once: true }}
                    className="absolute right-0 top-0 text-xs text-white/80"
                  >
                    Success Rate
                  </motion.div>
                </div>
              </motion.div>

              {/* Column 3: Black on top, Yellow below */}
              <motion.div 
                className="flex flex-col gap-4 md:gap-6"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.05 }}
              >
                <motion.div 
                  custom={2}
                  variants={cardVariants}
                  className="bg-gradient-to-br from-[#272727] to-[#444444] text-white p-5 md:p-7 rounded-2xl flex flex-col justify-center min-h-[180px] md:min-h-[260px] transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-black/20"
                >
                  <div className="flex items-center mb-3">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                      viewport={{ once: true }}
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3"
                    >
                      <span className="text-lg font-bold">04</span>
                    </motion.div>
                    <h3 className="font-semibold text-lg md:text-xl">Driven by Purpose</h3>
                  </div>
                  <p className="text-sm md:text-base">
                    We create opportunities for growth, leadership, and meaningful collaboration that transforms lives and communities.
                  </p>
                </motion.div>
                <motion.div 
                  custom={4}
                  variants={cardVariants}
                  className="bg-gradient-to-br from-[#FFB333] to-[#FFCB85] text-black p-5 md:p-7 rounded-2xl flex flex-col justify-center min-h-[180px] md:min-h-[260px] transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-[#FFB333]/20"
                >
                  <div className="flex items-center mb-3">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
                      viewport={{ once: true }}
                      className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center mr-3"
                    >
                      <span className="text-lg font-bold">05</span>
                    </motion.div>
                    <h3 className="font-semibold text-lg md:text-xl">Leading with Authenticity</h3>
                  </div>
                  <p className="text-sm md:text-base">
                    At Bona Fide, our vision is to create a world where authentic connections drive positive change and empower individuals to reach their fullest potential.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;
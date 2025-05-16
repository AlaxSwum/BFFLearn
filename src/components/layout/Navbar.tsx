'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const btnRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const highlightRef = useRef<HTMLDivElement | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const navLinks = useMemo(() => [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Events', path: '/events' },
    { name: 'Contact Us', path: '/contact' },
  ], []);

  // Find the active index based on the current path
  const [activeIdx, setActiveIdx] = useState(
    navLinks.findIndex(link => link.path === pathname)
  );

  // Function to animate the highlight
  const animateHighlight = (idx: number) => {
    const btn = btnRefs.current[idx];
    const highlight = highlightRef.current;
    if (btn && highlight) {
      const { offsetLeft, offsetWidth, offsetTop, offsetHeight } = btn;
      
      gsap.to(highlight, {
        left: offsetLeft,
        top: offsetTop,
        width: offsetWidth,
        height: offsetHeight,
        borderRadius: offsetHeight / 2,
        duration: 0.2,
        ease: 'power2.out',
        opacity: 1
      });
    }
  };

  // Move highlight to active item on initial load and path change
  useEffect(() => {
    setActiveIdx(navLinks.findIndex(link => link.path === pathname));
  }, [pathname, navLinks]);

  // Animate the highlight when activeIdx changes
  useEffect(() => {
    // Only animate if no item is being hovered
    if (hoveredIdx === null) {
      animateHighlight(activeIdx);
    }
  }, [activeIdx, hoveredIdx]);

  // Handle hover state
  const handleMouseEnter = (idx: number) => {
    setHoveredIdx(idx);
    animateHighlight(idx);
  };

  const handleMouseLeave = () => {
    setHoveredIdx(null);
    // Return to active index when no longer hovering
    animateHighlight(activeIdx);
  };

  // Update highlight on initial render, window resize, and font load
  useEffect(() => {
    const updateHighlight = () => {
      if (hoveredIdx !== null) {
        animateHighlight(hoveredIdx);
      } else {
        animateHighlight(activeIdx);
      }
    };
    
    updateHighlight();
    window.addEventListener('resize', updateHighlight);

    // Optional: handle font loading
    if (document.fonts) {
      document.fonts.ready.then(updateHighlight);
    }

    return () => window.removeEventListener('resize', updateHighlight);
  }, [activeIdx, hoveredIdx]);

  // Add scroll event listener to detect when page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set body padding to match navbar height
  useEffect(() => {
    if (headerRef.current) {
      document.body.style.paddingTop = '0px';
    }

    const currentHeaderRef = headerRef.current;
    
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        if (entry.target === currentHeaderRef && entry.target instanceof HTMLElement) {
          document.body.style.paddingTop = '0px';
        }
      }
    });

    if (currentHeaderRef) {
      resizeObserver.observe(currentHeaderRef);
    }

    return () => {
      if (currentHeaderRef) {
        resizeObserver.unobserve(currentHeaderRef);
      }
      document.body.style.paddingTop = '0px';
    };
  }, []);

  return (
    <header 
      ref={headerRef}
      className={`w-full bg-[#F5F5ED] py-3 px-4 md:px-8 lg:px-16 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}>
      <nav className="max-w-[1300px] mx-auto flex items-center">
        {/* Logo */}
        <div className="w-[180px]">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/bonafide-logo.png"
              alt="Bonafide Logo"
              width={200}
              height={60}
              priority
              className="h-[50px] w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex flex-1 justify-center relative">
          <div className="flex items-center justify-between bg-[#2B2B2B] rounded-full px-5 py-2 relative overflow-hidden w-[650px]">
            {/* Sliding highlight */}
            <div
              ref={highlightRef}
              className="absolute bg-[#FFB800] z-0 transition-all duration-300 ease-in-out"
              style={{ 
                pointerEvents: 'none',
                borderRadius: '9999px',
                transform: 'translateZ(0)',
                willChange: 'transform, width, height, left, top',
                opacity: 0
              }}
            />
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.path}
                ref={el => { btnRefs.current[idx] = el; }}
                className={`relative z-10 px-5 py-2.5 text-[15px] font-medium transition-colors duration-200 ${
                  pathname === link.path || hoveredIdx === idx 
                    ? 'text-white' 
                    : 'text-white hover:text-gray-200'
                }`}
                onClick={() => setActiveIdx(idx)}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Get Started Button */}
        <div className="w-[180px] flex justify-end">
          <Link
            href="/get-started"
            className="hidden md:inline-block bg-[#2B2B2B] text-white px-7 py-2.5 rounded-full font-medium transition-all duration-300 hover:bg-[#FFB800] hover:text-[#2B2B2B] hover:scale-105 text-[15px]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[#2B2B2B] hover:text-[#FFB800] transition-colors duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={`fixed inset-0 bg-[#F5F5ED] z-50 ${
        isOpen ? 'block' : 'hidden'
      }`}>
        <div className="container mx-auto px-4 pt-8">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/bonafide-logo.png"
                alt="Bonafide Logo"
                width={180}
                height={55}
                priority
                className="h-[55px] w-auto"
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-[#2B2B2B]"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="space-y-4">
            {navLinks.map((link, idx) => (
              <div key={link.name} className="relative">
                <div
                  className={`absolute inset-0 bg-[#FFB800] rounded-full transition-all duration-300 ${
                    pathname === link.path ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <Link
                  href={link.path}
                  className={`relative z-10 block px-4 py-2.5 text-[15px] font-medium text-[#2B2B2B] ${
                    pathname === link.path ? 'text-white' : ''
                  }`}
                  onClick={() => {
                    setActiveIdx(idx);
                    setIsOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
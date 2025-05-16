'use client';

import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    // Force cursor hiding via JavaScript - simplified to not interfere with clicks
    const addEmptyCursorToAll = () => {
      // Create a style element
      const style = document.createElement('style');
      
      // Add CSS to hide cursor on all elements, but not interfere with clicks
      style.textContent = `
        * {
          cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E"), none !important;
        }
        
        .custom-cursor {
          pointer-events: none !important;
        }
      `;
      
      // Append to head
      document.head.appendChild(style);
    };
    
    // Call the function to apply cursor hiding
    addEmptyCursorToAll();
    
    const outerCursor = cursorOuterRef.current;
    const innerCursor = cursorInnerRef.current;
    
    if (!outerCursor || !innerCursor) return;

    let rafId: number | null = null;
    
    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
      
      // Show cursor once we have a position
      if (!isVisible) {
        if (outerCursor && innerCursor) {
          outerCursor.style.opacity = '1';
          innerCursor.style.opacity = '1';
        }
        setIsVisible(true);
      }
    };
    
    // Separate animation loop for smoother movement
    const animateCursor = () => {
      // Calculate sizes
      const cursorOuterSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--cursor-size-outer')) || 60;
      const cursorInnerSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--cursor-size-inner')) || 14;
      
      // Get current mouse position
      const { x, y } = mousePositionRef.current;
      
      // Position with proper centering
      const innerX = Math.round(x - cursorInnerSize / 2);
      const innerY = Math.round(y - cursorInnerSize / 2);
      const outerX = Math.round(x - cursorOuterSize / 2);
      const outerY = Math.round(y - cursorOuterSize / 2);
      
      // Apply transforms
      if (innerCursor) {
        innerCursor.style.transform = `translate3d(${innerX}px, ${innerY}px, 0)`;
      }
      
      if (outerCursor) {
        outerCursor.style.transform = `translate3d(${outerX}px, ${outerY}px, 0) scale(${isPointer ? 1.25 : 1})`;
      }
      
      // Continue animation loop
      rafId = requestAnimationFrame(animateCursor);
    };
    
    // Check if hovering over interactive elements
    const checkIfPointer = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Enhanced detection of interactive elements
      const isPointerElement = 
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.closest('[role="button"]') !== null ||
        target.closest('input') !== null ||
        target.closest('select') !== null ||
        target.closest('textarea') !== null ||
        target.hasAttribute('onclick');
      
      setIsPointer(isPointerElement);
      
      if (innerCursor) {
        if (isPointerElement) {
          innerCursor.classList.add('hover');
        } else {
          innerCursor.classList.remove('hover');
        }
      }
    };
    
    // Handle mouse events
    const onMouseLeave = () => {
      if (outerCursor && innerCursor) {
        outerCursor.style.opacity = '0';
        innerCursor.style.opacity = '0';
      }
    };
    
    const onMouseEnter = () => {
      if (outerCursor && innerCursor) {
        outerCursor.style.opacity = '1';
        innerCursor.style.opacity = '1';
      }
    };
    
    // Throttle function for performance
    const throttle = (fn: (event: MouseEvent) => void, delay: number) => {
      let lastCall = 0;
      return function(this: unknown, event: MouseEvent) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
          return;
        }
        lastCall = now;
        return fn.call(this, event);
      };
    };
    
    // Create throttled handlers
    const throttledCheckIfPointer = throttle(checkIfPointer, 50);
    
    // Start animation loop separately from mouse tracking
    rafId = requestAnimationFrame(animateCursor);
    
    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mousemove', throttledCheckIfPointer, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    
    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousemove', throttledCheckIfPointer);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isPointer, isVisible]);
  
  return (
    <>
      <div ref={cursorOuterRef} className="cursor-outer custom-cursor" style={{ opacity: 0, pointerEvents: 'none' }} />
      <div ref={cursorInnerRef} className="cursor-inner custom-cursor" style={{ opacity: 0, pointerEvents: 'none' }} />
    </>
  );
};

export default CustomCursor;

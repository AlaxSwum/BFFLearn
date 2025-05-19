'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';

export function AppointmentScheduler() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const validateTime = (value: string) => {
    // Basic time validation (HH:mm format)
    const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    return timeRegex.test(value);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // Allow empty value for clearing the input
    if (value === '') {
      setTime('');
      return;
    }

    // If the input matches the format HH:mm, update the state
    if (validateTime(value)) {
      setTime(value);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-[1.5rem] shadow-lg border border-gray-100 overflow-hidden">
      {/* Header with accent color */}
      <div className="bg-[#272727] text-white p-6 relative overflow-hidden">
        {/* Grid Pattern - Similar to other sections */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none" style={{width: '90%', height: '90%'}}>
          <svg width="100%" height="100%" viewBox="0 0 700 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="schedule-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#444" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="700" height="320" fill="url(#schedule-grid)" />
          </svg>
        </div>
        
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#F87239]/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-lg"></div>
        
        <div className="relative z-10">
          <div className="inline-block relative">
            <span className="absolute h-[6px] bg-[#FFB333]/50 bottom-2 left-0 -z-10 rounded-sm w-full"></span>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Schedule a Consultation</h2>
          </div>
          <p className="text-gray-300 mt-2">Book a session with our education experts to discuss your learning needs</p>
        </div>
      </div>
      
      <div className="p-8">
        <div className="space-y-6">
          <div className="space-y-3">
            <label htmlFor="date" className="flex items-center text-sm font-medium text-gray-800">
              <Calendar className="h-4 w-4 mr-2 text-[#F87239]" />
              Select Date
            </label>
            <div className="relative">
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="flex h-12 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F87239] focus-visible:ring-offset-2 focus-visible:border-[#F87239]"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>

          <div className="space-y-3">
            <label htmlFor="time" className="flex items-center text-sm font-medium text-gray-800">
              <Clock className="h-4 w-4 mr-2 text-[#F87239]" />
              Enter Time (24-hour format, e.g., 14:30)
            </label>
            <div className="relative">
              <input
                type="time"
                id="time"
                value={time}
                onChange={handleTimeChange}
                className="flex h-12 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F87239] focus-visible:ring-offset-2 focus-visible:border-[#F87239]"
                placeholder="HH:mm"
              />
            </div>
            <p className="text-sm text-gray-500 flex items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-[#F87239] mr-2"></span>
              Available hours: 09:00 - 17:00
            </p>
          </div>

          <div className="pt-4">
            <button 
              className="w-full button-premium bg-[#F87239] hover:bg-[#F87239]/90 text-white font-medium py-4 px-6 rounded-full transition-all hover:shadow-lg disabled:opacity-50 disabled:pointer-events-none"
              disabled={!date || !time}
            >
              <span>Schedule Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 
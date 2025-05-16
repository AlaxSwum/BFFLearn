'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

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
    <div className="bg-white p-8 rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Schedule a Consultation</h2>
      <div className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="date" className="text-sm font-medium">
            Select Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="time" className="text-sm font-medium">
            Enter Time (24-hour format, e.g., 14:30)
          </label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={handleTimeChange}
            className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
            placeholder="HH:mm"
          />
          <p className="text-sm text-gray-500 mt-1">
            Available hours: 09:00 - 17:00
          </p>
        </div>

        <Button
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
          disabled={!date || !time}
        >
          Schedule Consultation
        </Button>
      </div>
    </div>
  );
} 
'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full bg-white dark:bg-[#272727] rounded-2xl p-8 shadow-lg relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-[#FFB333] rounded-br-3xl opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#F87239] rounded-tl-3xl opacity-30"></div>
        
        <div className="relative z-10 space-y-8 text-center">
          {/* Error icon */}
          <div className="flex items-center justify-center">
            <div className="bg-[#FFB333] h-28 w-28 rounded-full flex items-center justify-center shadow-md">
              <span className="text-5xl font-bold text-[#272727]">!</span>
            </div>
          </div>
          
          {/* Error message */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#272727] to-[#404040] dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-md mx-auto">
              We apologize for the inconvenience. Our team has been notified and is working to fix the issue.
            </p>
          </div>

          {/* Buttons */}
          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={reset}
              variant="default" 
              className="bg-[#F87239] hover:bg-[#e66228] text-white text-lg px-8 py-3 h-auto rounded-xl shadow-md transition-transform hover:scale-105"
            >
              Try Again
            </Button>
            
            <Link href="/">
              <Button 
                variant="outline" 
                className="border-2 border-[#272727] text-[#272727] hover:bg-[#272727] hover:text-white dark:border-white dark:text-white text-lg px-8 py-3 h-auto rounded-xl shadow-md transition-transform hover:scale-105"
              >
                Return Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Optional: Technical error info for developers */}
      {process.env.NODE_ENV === 'development' && (
        <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg max-w-xl text-sm text-gray-500 dark:text-gray-400">
          <p>Error digest: {error.digest}</p>
          <p>{error.message}</p>
        </div>
      )}
    </div>
  );
}

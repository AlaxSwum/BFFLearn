import Image from 'next/image';

const Footer = () => {

  return (
    <footer className="bg-[#232323] pt-8 pb-4 px-4 relative overflow-hidden">
      {/* Blue Star Top Right */}
      <div className="absolute top-0 lg:right-48 right-0 w-[200px] h-[200px] overflow-hidden">
        <Image
          src="/assets/star.svg"
          alt="Blue Star"
          width={200}
          height={200}
          className="absolute top-0 right-0 z-10 pointer-events-none select-none"
          style={{ margin: 0, transform: 'translate(25%, -25%)' }}
        />
      </div>
      <div className="max-w-6xl mx-auto rounded-t-[2rem] bg-[#232323] pt-8 pb-6 px-4 md:px-10 relative">
        {/* Main Heading - Centered */}
        <div className="flex items-center justify-center h-8 lg:mb-16">
          <h1 className="text-3xl md:text-8xl lg:text-8xl font-bold text-white text-center whitespace-nowrap overflow-hidden max-w-full tracking-normal">
            Bona Fide Facilitators
          </h1>
        </div>
        <hr className="border-t border-gray-700 my-4" />
        {/* Footer Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Icons */}
          <div className="flex space-x-8 mb-8 md:mb-0">
            <a href="#" className="text-blue-400 p-3 rounded-full bg-gray-800/50 border border-blue-500/20 hover:bg-blue-600 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300 transform hover:scale-110" aria-label="Facebook">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
            </a>
            <a href="#" className="text-pink-400 p-3 rounded-full bg-gray-800/50 border border-pink-500/20 hover:bg-pink-600 hover:text-white hover:shadow-[0_0_15px_rgba(219,39,119,0.6)] transition-all duration-300 transform hover:scale-110" aria-label="Instagram">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.635.334 3.678 1.292 2.72 2.25 2.514 3.386 2.456 4.667 2.398 5.947 2.386 6.356 2.386 12c0 5.644.012 6.053.07 7.333.058 1.281.264 2.417 1.222 3.375.958.958 2.094 1.164 3.375 1.222 1.28.058 1.689.07 7.333.07s6.053-.012 7.333-.07c1.281-.058 2.417-.264 3.375-1.222.958-.958 1.164-2.094 1.222-3.375.058-1.28.07-1.689.07-7.333s-.012-6.053-.07-7.333c-.058-1.281-.264-2.417-1.222-3.375C19.417.334 18.281.128 17 .07 15.719.012 15.309 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
            </a>
            <a href="#" className="text-blue-500 p-3 rounded-full bg-gray-800/50 border border-blue-600/20 hover:bg-blue-700 hover:text-white hover:shadow-[0_0_15px_rgba(29,78,216,0.6)] transition-all duration-300 transform hover:scale-110" aria-label="LinkedIn">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="text-red-400 p-3 rounded-full bg-gray-800/50 border border-red-500/20 hover:bg-red-600 hover:text-white hover:shadow-[0_0_15px_rgba(220,38,38,0.6)] transition-all duration-300 transform hover:scale-110" aria-label="YouTube">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.545 3.5 12 3.5 12 3.5s-7.545 0-9.386.574a2.994 2.994 0 0 0-2.112 2.112C0 8.027 0 12 0 12s0 3.973.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.455 20.5 12 20.5 12 20.5s7.545 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.973 24 12 24 12s0-3.973-.502-5.814zM9.545 15.568V8.432l6.545 3.568-6.545 3.568z"/></svg>
            </a>
          </div>
          {/* Copyright */}
          <div className="text-gray-300 text-md text-center md:text-right">
            2025 Bona Fide Facilitators. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
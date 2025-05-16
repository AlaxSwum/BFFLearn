const CallToAction = () => {

  return (
    <section className="bg-[#FAFAF7] section-padding pb-6 sm:pb-12">
      <div className="container-padding">
        <div className="relative w-full rounded-[1.5rem] sm:rounded-[2.5rem] bg-[#232323] px-4 sm:px-12 md:px-32 py-10 sm:py-16 md:py-20 overflow-hidden">
          {/* Grid Pattern - Centered in the middle only */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none" style={{width: '70%', height: '80%'}}>
            <svg width="100%" height="100%" viewBox="0 0 700 320" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#444" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="700" height="320" fill="url(#cta-grid)" />
            </svg>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-400/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-400/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-lg"></div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="relative w-full max-w-3xl mx-auto">
              {/* Desktop Heading - Hidden on Mobile */}
              <div className="hidden sm:block">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight flex flex-wrap justify-center">
                  Ta
                  <span className="relative inline-block">
                    ke
                    <span className="absolute -top-2 left-10 rotate-[-10deg] bg-orange-400 text-xs text-white px-2 py-0.5 rounded-full font-semibold select-none whitespace-nowrap">
                      Youth
                    </span>
                  </span>
                  &nbsp;Co
                  <span className="relative inline-block">
                    Charge
                    <span className="absolute -top-2 left-24 rotate-[10deg] bg-orange-400 text-xs text-white px-2 py-0.5 rounded-full font-semibold select-none whitespace-nowrap">
                      Education
                    </span>
                  </span>
                  &nbsp;Of
                </h1>
                <div className="flex flex-col items-center">
                  <h2 className="text-3xl md:text-5xl font-bold text-orange-400 mb-6 leading-tight flex flex-wrap justify-center">
                    Your Lear
                    <span className="relative inline-block">
                      in
                      <span className="absolute -top-2 left-8 rotate-[10deg] bg-[#F87239] text-xs text-white px-2 py-0.5 rounded-full font-semibold select-none whitespace-nowrap">
                        BFF
                      </span>
                    </span>
                    g e Journey
                  </h2>
                  <h2 className="text-3xl md:text-5xl font-bold text-orange-400 mb-6 leading-tight text-center">
                    Today.
                  </h2>
                </div>
              </div>
              
              {/* Mobile Heading - Beautiful Two-Section Layout */}
              <div className="sm:hidden">
                <div className="relative mb-2">
                  <span className="absolute -top-1 left-2 rotate-[-8deg] bg-orange-400 text-xs text-white px-2 py-0.5 rounded-full font-semibold select-none whitespace-nowrap">
                    Youth
                  </span>
                  <h1 className="text-2xl font-bold text-white leading-tight">
                    Take Charge Of Your
                  </h1>
                </div>
                
                <div className="relative mb-4">
                  <h2 className="text-2xl font-bold text-orange-400 leading-tight">
                    Learning Journey Today
                  </h2>
                  <span className="absolute -top-1 right-2 rotate-[8deg] bg-[#F87239] text-xs text-white px-2 py-0.5 rounded-full font-semibold select-none whitespace-nowrap">
                    BFF
                  </span>
                </div>
                
                <div className="w-20 h-1 mx-auto bg-gradient-to-r from-orange-300 to-orange-500 rounded-full mb-4"></div>
              </div>
            </div>
            
            <p className="text-white text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl">
              Experience the power of education. Secure your path to a brighter future.
            </p>
            
            <button className="button-premium px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-lg text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <span>Get Started Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-[#F5F5ED] py-8 md:py-12 lg:py-16">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/grid-pattern.png"
          alt="Grid Pattern"
          fill
          className="object-cover opacity-80 scale-[0.65]"
          priority
          sizes="100vw"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
        {/* Left Column */}
        <div className="text-left max-w-xl mx-auto lg:mx-0 pt-4 md:pt-6 px-2 sm:px-4">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-[1.2] md:leading-[1.3]">
            <span className="block md:hidden">Building Future, One Step At A Time!</span>
            <span className="hidden md:inline">Building Future,<br />One Step At A Time!</span>
          </h1>
          <p className="font-normal text-base sm:text-lg text-gray-800 mt-4 md:mt-6 mb-6 md:mb-8 max-w-full sm:max-w-[90%] lg:mx-0 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
          </p>
          <button className="button-premium px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg text-base sm:text-lg transition-all hover:scale-105">
            <span>Get Started</span>
          </button>
        </div>

        {/* Right Column */}
        <div className="relative w-full flex justify-center items-center mt-8 sm:mt-10 lg:mt-0 px-3 sm:px-5">
          {/* Blue Star */}
          <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24 floating-star">
            <Image
              src="/assets/star.svg"
              alt="Blue Star"
              fill
              className="object-contain drop-shadow-xl"
              sizes="(max-width: 640px) 3.5rem, (max-width: 768px) 5rem, 6rem"
            />
          </div>

          {/* Students Grid */}
          <div className="relative w-full max-w-[280px] h-[280px] sm:max-w-[340px] sm:h-[340px] md:max-w-[450px] md:h-[450px] lg:max-w-[500px] lg:h-[500px] grid grid-cols-2 grid-rows-2 gap-2 sm:gap-3 md:gap-4 lg:gap-5 z-10 mx-2 sm:mx-4">
            
            {/* Student 1 with BFF Bubble */}
            <div className="relative inline-block">
              <div className="w-full h-full overflow-hidden mx-1">
                <Image
                  src="/student-female.png"
                  alt="Student Female"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                  sizes="(max-width: 640px) 140px, (max-width: 768px) 170px, (max-width: 1024px) 225px, 250px"
                />
              </div>
              {/* BFF Bubble */}
              <div className="absolute -top-6 -left-2 sm:-top-8 sm:-left-3 md:-top-16 md:-left-8 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 z-20 floating-chat">
                <Image
                  src="/assets/bonachatbox.svg"
                  alt="BFF Bubble"
                  fill
                  className="object-contain drop-shadow-xl"
                  sizes="(max-width: 640px) 3rem, (max-width: 768px) 4rem, 6rem"
                />
              </div>
            </div>

            {/* Student 2 with half-purple circle + lightbulb */}
            <div className="relative inline-block -translate-x-1 sm:-translate-x-2 md:-translate-x-3">
              {/* Purple Circle with Lightbulb */}
              <div className="absolute -top-8 -right-4 sm:-top-10 sm:-right-5 md:-top-16 md:-right-8 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 z-10 pl-4 sm:pl-6">
                <Image
                  src="/Ellipse 2317.png"
                  alt="Purple Circle"
                  fill
                  className="object-contain scale-x-[-1]"
                  sizes="(max-width: 640px) 4rem, (max-width: 768px) 5rem, 7rem"
                />
                {/* Positioned Lightbulb */}
                <div className="absolute -top-[52%] -right-[45%] w-[140%] h-[140%] z-40 floating-premium">
                  <Image
                    src="/assets/bluebulb.svg"
                    alt="Lightbulb Icon"
                    fill
                    className="object-contain scale-x-[-1] drop-shadow-2xl"
                    sizes="(max-width: 640px) 5.5rem, (max-width: 768px) 7rem, 9rem"
                  />
                </div>
              </div>

              {/* Clipped & rounded student image */}
              <div className="relative z-20 w-full h-full overflow-hidden mx-1">
                <Image
                  src="/student-male.png"
                  alt="Student Male"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                  sizes="(max-width: 640px) 140px, (max-width: 768px) 170px, (max-width: 1024px) 225px, 250px"
                />
              </div>
            </div>
            
            {/* Student 3 */}
            <div className="relative w-full h-full overflow-hidden mx-1">
              <Image
                src="/student-female2.png"
                alt="Student Female 2"
                fill
                className="object-cover object-center"
                loading="lazy"
                sizes="(max-width: 640px) 140px, (max-width: 768px) 170px, (max-width: 1024px) 225px, 250px"
              />
            </div>

            {/* Student 4 with squiggly arrow */}
            <div className="relative inline-block -translate-x-1 sm:-translate-x-2 md:-translate-x-3">
              {/* Clipped & rounded student image */}
              <div className="w-full h-full overflow-hidden mx-1">
                <Image
                  src="/student-male.png"
                  alt="Student Male 2"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                  sizes="(max-width: 640px) 140px, (max-width: 768px) 170px, (max-width: 1024px) 225px, 250px"
                />
              </div>

              {/* Squiggly Arrow */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 md:-bottom-6 md:-right-6 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 floating-squiggle">
                <Image
                  src="/assets/gotcha.svg"
                  alt="Orange Squiggle"
                  fill
                  className="object-contain scale-x-[-1] drop-shadow-xl"
                  sizes="(max-width: 640px) 3rem, (max-width: 768px) 4rem, 6rem"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
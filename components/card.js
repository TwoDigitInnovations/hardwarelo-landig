import React, { useState, useEffect, useRef } from 'react';
import { Star, CheckCircle, Calendar, X } from 'lucide-react';

export default function SnabbitHomepage() {
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isAnimated) {
          // Section visible hone par 1 second wait karna
          setTimeout(() => {
            setIsAnimated(true);
          }, 1000);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isAnimated]);

  return (
    <div className="md:min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white md:py-6 py-4 px-4 sm:px-4 lg:px-4">
        <div className="max-w-6xl mx-auto" ref={sectionRef}>

          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4 md:mb-14 mb-4 relative">
            <div
              className={`text-center bg-white rounded-2xl shadow-lg p-2 transition-all duration-1000 ease-out ${isAnimated
                ? 'transform translate-x-0 translate-y-0 opacity-100'
                : 'transform translate-x-96 translate-y-96 opacity-0'
                }`}
              style={{
                transitionDelay: isAnimated ? '0.1s' : '0s'
              }}
            >
              <div className="relative md:mb-6 mb-2 h-40">
                <img
                  src="/c1.png"
                  alt="Background Verified Experts"
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 md:mb-2">
                Best Prices
              </h3>
            </div>

            <div
              className={`text-center bg-white rounded-2xl shadow-lg p-6 transition-all duration-1000 ease-out ${isAnimated
                ? 'transform translate-x-0 translate-y-0 opacity-100'
                : 'transform translate-x-96 translate-y-96 opacity-0'
                }`}
              style={{
                transitionDelay: isAnimated ? '0.2s' : '0s'
              }}
            >
              <div className="relative md:mb-6 mb-2 h-40">
                <img
                  src="/c2.svg"
                  alt="Professionally Trained"
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 md:mb-2">
                Fostest Delivery
              </h3>
            </div>

            {/* <div
              className={`text-center bg-white rounded-2xl shadow-lg p-6 transition-all duration-1000 ease-out ${isAnimated
                ? 'transform translate-x-0 translate-y-0 opacity-100'
                : 'transform translate-x-96 translate-y-96 opacity-0'
                }`}
              style={{
                transitionDelay: isAnimated ? '0.3s' : '0s'
              }}
            >
              <div className="relative mb-6 h-40">
                <img
                  src="/c3.svg"
                  alt="Freedom to Cancel"
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Freedom to Cancel or Reschedule
              </h3>
            </div> */}
          </div>

          {/* Main Heading */}
          <div className="text-center md:mb-16">
            <h1 className="text-2xl md:text-6xl font-bold text-gray-900 mb-4">
              WHY CHOOSE <span className="text-[#0D34BF]">HardwareLo</span>
            </h1>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4 relative">

            {/* Powered By Strong Women */}
            {/* <div
              className={`text-center bg-white rounded-2xl shadow-lg p-6 transition-all duration-1000 ease-out ${isAnimated
                ? 'transform translate-x-0 translate-y-0 opacity-100'
                : 'transform translate-x-96 translate-y-96 opacity-0'
                }`}
              style={{
                transitionDelay: isAnimated ? '0.4s' : '0s'
              }}
            >
              <div className="relative mb-6 h-40">
                <img
                  src="/c4.png"
                  alt="Strong Women Workforce"
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Best Prices
              </h3>
            </div> */}

            {/* Average Service Rating */}
            <div
              className={`text-center bg-white rounded-2xl shadow-lg p-6 transition-all duration-1000 ease-out ${isAnimated
                ? 'transform translate-x-0 translate-y-0 opacity-100'
                : 'transform translate-x-96 translate-y-96 opacity-0'
                }`}
              style={{
                transitionDelay: isAnimated ? '0.5s' : '0s'
              }}
            >
              <div className="relative md:mb-6 mb-2 h-40">
                <img
                  src="/c4.svg"
                  alt="Quality Service"
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Eosh Poyment method
              </h3>
            </div>

            {/* Trusted By 6000+ Families */}
            <div
              className={`text-center bg-white rounded-2xl shadow-lg p-6 transition-all duration-1000 ease-out ${isAnimated
                ? 'transform translate-x-0 translate-y-0 opacity-100'
                : 'transform translate-x-96 translate-y-96 opacity-0'
                }`}
              style={{
                transitionDelay: isAnimated ? '0.6s' : '0s'
              }}
            >
              <div className="relative md:mb-6 mb-2 h-40">
                <img
                  src="/c6.svg"
                  alt="Trusted by Families"
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Lorge Product ln vertory
              </h3>
            </div>

            {/* Trusted By 6000+ Families */}
            {/* <div
              className={`text-center bg-white rounded-2xl shadow-lg p-6 transition-all duration-1000 ease-out ${isAnimated
                ? 'transform translate-x-0 translate-y-0 opacity-100'
                : 'transform translate-x-96 translate-y-96 opacity-0'
                }`}
              style={{
                transitionDelay: isAnimated ? '0.6s' : '0s'
              }}
            >
              <div className="relative mb-6 h-40">
                <img
                  src="/c6.svg"
                  alt="Trusted by Families"
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Lorge Product ln vertory
              </h3>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState, useEffect } from 'react'

export default function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isHovered, setIsHovered] = useState(false)
  const [isTouched, setIsTouched] = useState(false)

  // Auto-play functionality
  useEffect(() => {
    if (isHovered || isTouched) return

    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev === 3) return 1
        return prev + 1
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [isHovered, isTouched])

  // Handle touch events for mobile
  const handleTouchStart = () => {
    setIsTouched(true)
  }

  const handleTouchEnd = () => {
    setIsTouched(false)
  }

  return (
    <div>
      {/* Main How It Works Section - Sticky */}
      <section className="md:min-h-screen bg-gray-50 md:py-20 py-4 relative overflow-hidden sticky top-0">
        {/* Title */}
        <div className="text-center md:mb-20 mb-4">
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-gray-800">HOW </span>
            <span className="text-gray-800">HardwareLo </span>
            <span className="text-[#0D34BF] italic">WORKS?</span>
          </h2>
        </div>

        {/* Main Content Area */}
        <div className="max-w-6xl mx-auto px-4 relative">
          {/* Steps Container - Center positioned */}
          <div className="flex justify-center relative min-h-[500px]">
            <div
              className="max-w-4xl relative w-full"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >

              {/* Step 3 Card */}
              <div
                className="absolute top-0 left-0 w-full transition-all duration-700 ease-out z-30"
                style={{
                  transform: `translateY(${currentStep === 3 ? '0px' : '100px'})`,
                  opacity: currentStep === 3 ? 1 : 0,
                  visibility: currentStep === 3 ? 'visible' : 'hidden'
                }}
              >
                <div className="bg-white rounded-3xl p-4 md:p-8 shadow-xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
                  {/* Phone Mockup */}
                  <div className="flex-shrink-0 order-2 md:order-1">
                    <div className="w-48 h-60 md:w-64 md:h-80 relative rounded-3xl overflow-hidden">
                      <img
                        src='/stepImg-3.png'
                        alt="Snabbit App Interface"
                        className="w-full h-full object-contain rounded-3xl"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 order-1 md:order-2 text-center md:text-left">
                    <div className="bg-[#0D34BF] text-white px-4 py-2 rounded-full inline-block text-sm font-bold mb-4">
                      STEP 3
                    </div>
                    <h3 className="text-lg md:text-3xl font-bold text-gray-800 mb-4">
                      Over 90% of the Products
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                      From HardwareLo gets delivered within 3hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 Card */}
              <div
                className="absolute top-0 left-0 w-full transition-all duration-700 ease-out z-20"
                style={{
                  transform: `translateY(${currentStep === 2 ? '0px' : '100px'})`,
                  opacity: currentStep === 2 ? 1 : 0,
                  visibility: currentStep === 2 ? 'visible' : 'hidden'
                }}
              >
                <div className="bg-white rounded-3xl p-4 md:p-8 shadow-xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
                  {/* Phone Mockup */}
                  <div className="flex-shrink-0 order-2 md:order-1">
                    <div className="w-48 h-60 md:w-64 md:h-80 relative rounded-3xl overflow-hidden">
                      <img
                        src='/stepImg-2.png'
                        alt="Snabbit App Interface"
                        className="w-full h-full object-contain rounded-3xl"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 order-1 md:order-2 text-center md:text-left">
                    <div className="bg-[#0D34BF] text-white px-4 py-2 rounded-full inline-block text-sm font-bold mb-4">
                      STEP 2
                    </div>
                    <h3 className="text-lg md:text-3xl font-bold text-gray-800 mb-4">
                      Pay COD or select your
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                      Prefered Payment method
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 1 Card */}
              <div
                className="absolute top-0 left-0 w-full transition-all duration-700 ease-out z-10"
                style={{
                  transform: `translateY(${currentStep === 1 ? '0px' : '100px'})`,
                  opacity: currentStep === 1 ? 1 : 0,
                  visibility: currentStep === 1 ? 'visible' : 'hidden'
                }}
              >
                <div className="bg-white rounded-3xl p-4 md:p-8 shadow-xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
                  {/* Phone Mockup */}
                  <div className="flex-shrink-0 order-2 md:order-1">
                    <div className="w-48 h-60 md:w-64 md:h-80 relative rounded-3xl overflow-hidden">
                      <img
                        src='/stepImg-1.png'
                        alt="Snabbit App Interface"
                        className="w-full h-full object-contain rounded-3xl"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 order-1 md:order-2 text-center md:text-left">
                    <div className="bg-[#0D34BF] text-white px-4 py-2 rounded-full inline-block text-sm font-bold mb-4">
                      STEP 1
                    </div>
                    <h3 className="text-lg md:text-3xl font-bold text-gray-800 mb-4">
                      Select Product from 30+
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                      Categories & 50k + Products
                    </p>
                  </div>
                </div>
              </div>

              {/* Step indicators for mobile */}
              <div className="flex justify-center mt-6 md:hidden">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${currentStep === step ? 'bg-pink-500' : 'bg-gray-300'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Write to us button - Fixed position */}
          {/* <div className="fixed bottom-8 right-8 z-50">
            <button className="bg-white text-[#5D0F36] px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 font-medium border">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Write to us
            </button>
          </div> */}
        </div>
      </section>
    </div>
  )
}
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Navbar from '../components/navbar'
import StarDecoration from '../components/StarDecoration'
import PhoneMockup from '../components/PhoneMockup'
import ServiceCard from '../components/ServiceCard'
import HowItWorks from '@/components/work'
import SnabbitHomepage from '@/components/card'
import Reviews from './review'
import FAQSECTION from './faqsection'
import Footer from '@/components/footer'
import { Api } from '@/services/service'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [showButtons, setShowButtons] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    setMounted(true)

    const getCategory = async () => {
      // props.loader(true);
      Api("get", "getCategory", "", '').then(
        (res) => {
          // props.loader(false);
          console.log("res================>", res);
          setCategoryData(res.data);
        },
        (err) => {
          // props.loader(false);
          console.log(err);
          // props.toaster({ type: "error", message: err?.message });
        }
      );
    };
    getCategory();

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Show buttons only when user scrolls past Services section
      const servicesSection = document.querySelector('[data-section="services"]')
      if (servicesSection) {
        const servicesSectionBottom = servicesSection.offsetTop + servicesSection.offsetHeight
        setShowButtons(window.scrollY > servicesSectionBottom)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-gray-100"></div>
  }

  const heroHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  const phoneTransition = Math.min(scrollY / heroHeight, 1);

  return (
    <>
      <Navbar />

      {/* {!isMobile && (<div className="fixed z-30 transition-all duration-700 ease-out"
        style={{
          left: '50%',
          top: phoneTransition < 0.5
            ? `${60 - (phoneTransition * 20)}%`
            : `${50 - ((phoneTransition - 0.5) * 20)}%`,
          transform: `translateX(-50%) scale(${1 - (phoneTransition * 0.2)})`,
          opacity: scrollY > (heroHeight * 1.5) ? 0 : 1,
          display: scrollY > (heroHeight * 1.5) ? 'none' : 'block'
        }}>
        <PhoneMockup />
      </div>)} */}

      <section className="bg-gray-50 md:min-h-screen  pt-16 relative overflow-hidden">
        <StarDecoration className="top-20 left-10 text-black md:block hidden" size="w-8 h-8" />
        <StarDecoration className="top-40 right-20 text-pink-400 md:block hidden" size="w-6 h-6" />
        <StarDecoration className="bottom-20 left-20 text-pink-300 md:block hidden" size="w-10 h-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pt-20 md:pb-20 pb-4">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <StarDecoration className="text-pink-500 md:block hidden" size="w-12 h-12" />
            </div>

            <h1 className="text-2xl md:text-6xl lg:text-7xl font-bold md:mb-8 mb-4">
              <span className="text-gray-800">INDIA&apos;S FIRST</span>
              <span className="text-[#0D34BF] italic"> QUICK</span>
              <br />
              <span className="text-gray-800"> COMMERCE APP FOR CONSTRUCTION MATERIAL</span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl md:mb-12 mb-4 max-w-2xl mx-auto">Build with Confidence, Build HardwareLo.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:mb-2 mb-4">
              <a onClick={() => window.open('https://play.google.com/store/apps/details?id=com.hardwarelo.app', '_black')}
                className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Get On Google Play
              </a>

              <a onClick={() => window.open('https://apps.apple.com/us/app/hardwarelo/id6747817935', '_black')} className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                Get On App Store
              </a>
            </div>

            {/* <div className="relative z-30">
              <div className="hidden md:flex flex-wrap justify-center items-end gap-8">
                <div className="w-[390px] h-[400px] relative z-20">
                  <Image src="/cleaner1.svg" alt="Professional cleaner service illustration" width={390} height={650} className="w-full h-[650px] object-contain" priority />
                </div>

                <div className="w-64 h-40 flex items-center justify-center"></div>

                <div className="w-[390px] h-[400px] relative z-20">
                  <Image src="/cleaner2.svg" alt="Professional cleaner service illustration" width={390} height={550} className="w-full h-[550px] object-contain" priority />
                </div>
              </div>

              <div className="md:hidden flex justify-center items-end">
                <div className="md:w-[280px] w-full md:h-[350px] relative z-20">
                  <Image src="/cleaner1.svg" alt="Professional cleaner service illustration" width={280} height={500} className="w-full md:h-[500px] object-contain" priority />
                </div>
              </div>
            </div> */}

            <div className='md:grid md:grid-cols-2 grid-cols-1 w-full gap-5 mt-10 hidden'>
              <img className='w-full md:h-[800px] object-contain' src='/leftImg.jpg' />
              <img className='w-full md:h-[800px] object-contain' src='/rightImg.jpg' />
            </div>

            <div className='grid md:grid-cols-2 grid-cols-1 w-full gap-5 mt-5 md:hidden'>
              <img className='w-full object-contain' src='/centreImg.jpg' />
            </div>

          </div>
        </div>
      </section>

      <section id='services' data-section="services" className="md:min-h-screen md:py-20 py-4 relative overflow-hidden z-10" style={{ backgroundColor: '#0D34BF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center md:mb-20">
            <p className="text-2xl md:text-6xl lg:text-7xl font-bold text-white md:mb-8 mb-4">30+ Categories</p>
            <p className="text-2xl md:text-6xl lg:text-7xl font-bold text-white md:mb-8 mb-4">50k + Products</p>
          </div>

          <div className="overflow-hidden relative z-10 flex items-center justify-center md:min-h-[400px]">
            <div className="flex animate-scroll-left gap-6 items-center">
              {categoryData.map((item, i) => (<ServiceCard key={i} title={item?.name} image={item?.image} className="w-48 flex-shrink-0" />))}
            </div>
          </div>
        </div>
      </section>

      <div id='how-it-works' className='w-full'>
        <HowItWorks />
      </div>

      <div id='why-us' className='w-full overflow-hidden'>
        <SnabbitHomepage />
      </div>

      <Reviews />

      <div id='faqs' className='w-full'>
        <FAQSECTION />
      </div>

      <div className="fixed bottom-8 left-8 z-40 hidden md:block">
        <div className="bg-white rounded-2xl p-6 shadow-2xl" style={{ width: '390px' }}>
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800 mb-1 tracking-wide">DOWNLOAD THE</h3>
              <h2 className="text-3xl font-bold text-[#0D34BF] mb-0">HardwareLo</h2>
            </div>

            <div className="flex flex-col gap-2 ml-4">
              <a onClick={() => window.open('https://play.google.com/store/apps/details?id=com.hardwarelo.app', '_black')} className="block hover:transform hover:scale-105 transition-transform">
                <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div>
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-sm font-bold">Google Play</div>
                  </div>
                </div>
              </a>

              <a onClick={() => window.open('https://apps.apple.com/us/app/hardwarelo/id6747817935', '_black')} className="block hover:transform hover:scale-105 transition-transform">
                <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-bold">App Store</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed md:bottom-8 bottom-4 right-8 z-40" onClick={() => window.open(`https://api.whatsapp.com/send/?phone=+918638597393&text=Hi,&app_absent=0`, '_black')}>
        <button className="bg-white text-[#0D34BF] px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 font-medium">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Write to us
        </button>
      </div>

      <Footer />

      <style jsx global>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }
        
        /* Pause animation on hover */
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  )
}
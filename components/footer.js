'use client';
import moment from 'moment';

export default function Footer() {
  return (
    <div className="bg-white md:pt-10 pt-4">
      <footer className="bg-gradient-to-br bg-white from-[#0D34BF] via-[#0D34BF] to-[#0D34BF] relative overflow-hidden rounded-t-[3rem] ">
        <div className="absolute top-8 left-8 md:block hidden">
          <div className="w-3 h-3 bg-white rotate-45 transform"></div>
        </div>
        <div className="absolute top-16 right-20 md:block hidden">
          <div className="w-4 h-4 bg-white rotate-45 transform"></div>
        </div>
        <div className="absolute bottom-32 right-32 md:block hidden">
          <div className="w-6 h-6 bg-white rotate-45 transform"></div>
        </div>
        <div className="absolute top-20 left-1/3 md:block hidden">
          <div className="w-2 h-2 bg-white rotate-45 transform"></div>
        </div>

        <div className="max-w-7xl mx-auto md:px-8 px-4 md:pt-16 pt-4 md:pb-16 pb-20 text-center">
          <div className="md:mb-8">
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-4">INDIA&apos;S FIRST</h2>
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold md:mb-6 mb-4">
              <span className="text-white italic">QUICK</span>
              <span className="text-white"> COMMERCE APP FOR CONSTRUCTION MATERIAL</span>
            </h2>
          </div>

          <p className="text-white text-lg md:text-xl md:mb-12 mb-4 max-w-md mx-auto">Build with Confidence ,Build HardwareLo</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center md:mb-16 mb-4">
            <div className="bg-black rounded-lg px-6 py-3 flex items-center space-x-3 hover:bg-gray-800 transition-colors cursor-pointer md:w-auto w-[200px]" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.hardwarelo.app', '_black')}>
              <div className="text-white">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-300">GET IT ON</div>
                <div className="text-white font-semibold text-lg">Google Play</div>
              </div>
            </div>

            <div className="bg-black rounded-lg px-6 py-3 flex items-center space-x-3 hover:bg-gray-800 transition-colors cursor-pointer md:w-auto w-[200px]" onClick={() => window.open('https://apps.apple.com/us/app/hardwarelo/id6747817935', '_black')}>
              <div className="text-white">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-300">Download on the</div>
                <div className="text-white font-semibold text-lg">App Store</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center md:pt-8 pt-4 border-t border-white md:gap-6 gap-4">
            <div className="flex md:items-center items-start text-white text-sm">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center md:mr-3 mr-2">
                <span className="text-[#0D34BF] text-xs font-bold">©</span>
              </div>
              <span>{moment().format('YYYY')} HardwareLo Pvt. Ltd. All rights reserved.</span>
            </div>

            <div className="flex flex-wrap gap-6 text-white text-sm">
              <a className="transition-colors" onClick={() => window.open('https://hardwarelo.com/terms', '_black')}>Terms of Use</a>
              {/* hover:text-pink-300 */}
              <a className="transition-colors" onClick={() => window.open('https://hardwarelo.com/privacy-policy', '_black')}>Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
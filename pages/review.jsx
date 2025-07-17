'use client';

import { useState } from 'react';
import { MessageCircle, Play, Volume2, Maximize, MoreHorizontal } from 'lucide-react';

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="md:min-h-screen bg-gray-50 md:py-16 py-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:mb-16">
          <h1 className="text-2xl md:text-5xl font-extrabold text-[#0D34BF] mb-4">
            Don't Just Listen to
            <br />
            Us Try it
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4 md:mb-16 mb-4">
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full"></div>
              <div>
                <h4 className="font-semibold text-gray-800">Musale</h4>
                <p className="text-sm text-gray-500">Powai</p>
              </div>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed">
              I recently started using Snabbit for weekly cleaning and I'm extremely impressed. They deliver quality services and look and feel really
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Sapana"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Sapana</h4>
                <p className="text-sm text-gray-500">Powai</p>
              </div>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed">
              As a working professional, I struggle big time whenever my maid is on leave. Snabbit's services have been a game changer. From dusting to bathroom cleaning, they take care of everything while I focus on my work.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Sapana"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Sapana</h4>
                <p className="text-sm text-gray-500">Powai</p>
              </div>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              As a working professional, I struggle big time whenever my maid is on leave. Snabbit's services have been a game changer. From dusting to bathroom cleaning, they take care of everything while I focus on my work.
            </p>

            <div className="relative bg-gray-900 rounded-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-red-500 to-pink-500 relative">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center space-x-4 text-white">
                    <button
                      onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                      className="hover:scale-110 transition-transform"
                    >
                      <Play className="fill-white" size={24} />
                    </button>

                    <span className="text-sm">0:00 / 0:41</span>

                    <div className="flex-1"></div>

                    <Volume2 size={20} />
                    <Maximize size={20} />
                    <MoreHorizontal size={20} />
                  </div>

                  <div className="w-full bg-gray-600 h-1 rounded mt-2">
                    <div className="bg-red-500 h-1 rounded w-0"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Sunny Gala"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Sunny Gala</h4>
                <p className="text-sm text-gray-500">Powai</p>
              </div>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed">
              My regular house help doesn't clean fans or bathrooms, so I tried Snabbit. It's super convenient, and they pay attention to details my regular help doesn't.
            </p>
          </div>
        </div>

        {/* <div className="text-center md:pt-24">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 md:mb-12 mb-4">
            IN THE <span className="text-[#0D34BF]">SPOTLIGHT</span>
          </h2>

          <div className="overflow-hidden mt-4 relative">
            <div className="flex animate-scroll">
              <div className="flex items-center justify-center min-w-0 shrink-0">
                <div className="mx-8 md:mx-12 flex items-center justify-center h-16 w-48">
                  <img src="/s1.svg" alt="" />
                </div>

                <div className="mx-8 md:mx-12 flex items-center justify-center h-16 w-48">
                  <img src="/s2.svg" alt="" />
                </div>

                <div className="mx-8 md:mx-12 flex items-center justify-center h-16 w-48">
                  <div className="bg-green-600 text-white px-4 py-2 rounded">
                    <img src="/s3.svg" alt="" />
                  </div>
                </div>

                <div className="mx-8 md:mx-12 flex items-center justify-center h-16 w-48">
                  <div className="flex items-center">
                    <img src="/s4.svg" alt="" />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center min-w-0 shrink-0">
                <div className="mx-8 md:mx-12 flex items-center justify-center h-16 w-48">
                  <img src="/s1.svg" alt="" />
                </div>

                <div className="mx-8 md:mx-12 flex items-center justify-center h-16 w-48">
                  <img src="/s2.svg" alt="" />
                </div>

                <div className="mx-8 md:mx-12 flex items-center justify-center h-16 w-48">
                  <div className="bg-green-600 text-white px-4 py-2 rounded">
                    <img src="/s3.svg" alt="" />
                  </div>
                </div>

                <div className="mx-8 md:mx-12 flex items-center justify-center h-16 w-48">
                  <div className="flex items-center">
                    <img src="/s4.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 15s linear infinite;
          }
        }
      `}</style>
    </div>
  );
}
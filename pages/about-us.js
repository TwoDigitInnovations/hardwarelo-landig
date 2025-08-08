import React from 'react'
import Navbar from '../components/navbar'
import Footer from '@/components/footer'

function AboutUs() {
    return (
        <>
            <Navbar />

            {/* <section className="bg-gray-50 md:pt-[72px] pt-[68px]">
                <div className="max-w-7xl mx-auto md:py-10 py-4 md:px-0 px-4">
                    <p className='text-black text-2xl font-semibold mb-5'>About Us</p>

                    <p className='text-black text-base font-bold mb-4'>HardwareLo: Your One-Stop Shop for Building and Hardware Needs in Northeast India</p>

                    <p className='text-black text-base font-bold mb-4'>Established in 2024, HardwareLo <span className='font-normal'>is the first-of-its-kind online store serving all of Northeast India. We're passionate about providing our customers with the best possible experience when it comes to building and hardware materials.</span></p>

                    <p className='text-black text-base font-bold mb-4'>Our Mission: <span className='font-normal'>Delivering top-quality products at competitive prices, with lightning-fast delivery to get your project done right, and on time.</span></p>

                    <p className='text-black text-base font-bold mb-4'>We Welcome Everyone!</p>

                    <p className='text-black text-base font-normal mb-4'>Whether you're a seasoned contractor or a DIY enthusiast tackling your first home improvement project, HardwareLo is here for you. We offer a vast selection of building and hardware materials, including:</p>

                    <ul className='list-disc pl-5 mb-4'>
                        <li className='text-black text-base font-normal'>Cement & Rods</li>
                        <li className='text-black text-base font-normal'>Sanitaryware & Fittings</li>
                        <li className='text-black text-base font-normal'>And everything in between!</li>
                    </ul>

                    <p className='text-black text-base font-bold mb-4'>Need a Helping Hand?</p>

                    <p className='text-black text-base font-normal mb-4'>Not sure exactly what you need to get started? Our friendly customer service team is just a phone call away. They're happy to offer expert advice and project consultations to ensure you have everything you need to succeed.</p>

                    <p className='text-black text-base font-bold  mb-4'>Why Choose HardwareLo?</p>

                    <ul className='list-disc pl-5 text-black mb-4'>
                        <li className='text-black text-base font-bold'>Competitive Prices: <span className='font-normal'>We're committed to offering the best possible value for your money.</span></li>
                        <li className='text-black text-base font-bold'>Fast & Reliable Delivery: <span className='font-normal'>Get your project started without delay with our speedy delivery options.</span></li>
                        <li className='text-black text-base font-bold'>Unwavering Quality: <span className='font-normal'>We source our products from reputable brands to ensure exceptional quality and durability.</span></li>
                        <li className='text-black text-base font-bold'>Customer Satisfaction is Our Priority: <span className='font-normal'>We go the extra mile to ensure a smooth and positive shopping experience.</span></li>
                    </ul>

                    <p className='text-black text-base font-bold mb-4'>Located in Dibrugarh, Assam, HardwareLo is expanding rapidly! <span className='font-normal'>We're constantly adding new delivery areas to serve the entire Northeast region. Stay tuned as we bring the best selection of building and hardware supplies directly to your doorstep.</span></p>

                    <p className='text-black text-base font-bold'>Join the HardwareLo community and experience the difference!</p>
                </div>
            </section> */}

            <section className="bg-gray-50 md:pt-[72px] pt-[68px]">
                <div className="max-w-7xl mx-auto md:py-10 py-4">

                    <section className="md:px-0 px-4">
                        <div className="overflow-hidden text-black">
                            <p className='text-black text-2xl font-semibold mb-5'>About Us</p>

                            <h2 className="text-xl md:text-2xl font-bold mb-4">
                                HardwareLo: Your One-Stop Shop for Building and Hardware Needs in Northeast India
                            </h2>

                            <p className="mb-4">
                                <span className="font-bold">Established in 2024, HardwareLo</span> is the first-of-its-kind online store serving all of Northeast India.
                                We're passionate about providing our customers with the best possible experience when it comes to building and hardware materials.
                            </p>

                            <p className="mb-4">
                                <span className="font-bold">Our Mission:</span> Delivering top-quality products at competitive prices, with lightning-fast delivery to get your project done right, and on time.
                            </p>

                            <p className="mb-4 font-bold">We Welcome Everyone!</p>

                            <p className="mb-4">
                                Whether you're a seasoned contractor or a DIY enthusiast tackling your first home improvement project, HardwareLo is here for you.
                                We offer a vast selection of building and hardware materials, including:
                            </p>

                            <ul className="list-disc list-inside space-y-1 mb-4">
                                <li>Cement &amp; Rods</li>
                                <li>Sanitaryware &amp; Fittings</li>
                                <li>And everything in between!</li>
                            </ul>

                            <p className="mb-4 font-bold">Need a Helping Hand?</p>

                            <p className="mb-4">
                                Not sure exactly what you need to get started? Our friendly customer service team is just a phone call away.
                                They're happy to offer expert advice and project consultations to ensure you have everything you need to succeed.
                            </p>

                            <p className="mb-4 font-bold">Why Choose HardwareLo?</p>

                            <ul className="list-disc list-inside space-y-1 mb-4">
                                <li><span className="font-bold">Competitive Prices:</span> We're committed to offering the best possible value for your money.</li>
                                <li><span className="font-bold">Fast &amp; Reliable Delivery:</span> Get your project started without delay with our speedy delivery options.</li>
                                <li><span className="font-bold">Unwavering Quality:</span> We source our products from reputable brands to ensure exceptional quality and durability.</li>
                                <li><span className="font-bold">Customer Satisfaction is Our Priority:</span> We go the extra mile to ensure a smooth and positive shopping experience.</li>
                            </ul>

                            <p className="mb-4">
                                <span className="font-bold">Located in Dibrugarh, Assam, HardwareLo is expanding rapidly!</span>
                                We're constantly adding new delivery areas to serve the entire Northeast region.
                                Stay tuned as we bring the best selection of building and hardware supplies directly to your doorstep.
                            </p>

                            <p className="font-bold">Join the HardwareLo community and experience the difference!</p>

                        </div>
                    </section>
                </div>
            </section>

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

            <Footer />
        </>
    )
}

export default AboutUs

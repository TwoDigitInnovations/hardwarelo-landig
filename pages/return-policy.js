import React from 'react'
import Navbar from '../components/navbar'
import Footer from '@/components/footer'

function ReturnPolicy() {
    return (
        <>
            <Navbar />

            <section className="bg-gray-50 md:pt-[72px] pt-[68px]">
                <div className="max-w-7xl mx-auto md:py-10 py-4">
                    <section className="md:px-0 px-4">
                        <div className="overflow-hidden text-black">
                            <h1 className="text-2xl font-bold mb-4">Return Policy</h1>

                            <p className="underline font-semibold mb-2">Return Policy:</p>
                            <p className="mb-4 text-justify">
                                At HARDWARELO, we want you to be completely satisfied with your purchase of high-quality hardware items.
                                However, we understand that sometimes things don't work out as planned. Please read our return policy carefully
                                to understand our guidelines.
                            </p>

                            <p className="underline font-semibold mb-2">Returns and Exchanges:</p>
                            <p className="mb-4 text-justify bg-yellow-200 p-2 rounded">
                                We do not accept returns or exchanges on any of our products. All sales are final.
                            </p>

                            <p className="underline font-semibold mb-2">Defective or Damaged Products:</p>
                            <p className="mb-4 text-justify">
                                In the unlikely event that you receive a defective or damaged product, please contact our customer service team
                                within 48 hours of receiving the item. We will work with you to address the issue and provide a replacement
                                or refund if necessary.
                            </p>
                            <p className="mb-4 text-justify">
                                Please note that we are not responsible for any damages or defects that occur after the item has been received
                                and used by the customer. We strongly recommend that you carefully inspect your item upon receipt to ensure
                                that it is in good condition.
                            </p>

                            <p className="underline font-semibold mb-2">Refunds:</p>
                            <p className="mb-4">
                                If we determine that a refund is warranted, we will issue the refund to the original form of payment
                                within 7-10 business days. Refunds may take longer to process depending on your financial institution.
                            </p>

                            <p className="underline font-semibold mb-2">Cancellations:</p>
                            <p className="mb-4">
                                Once an order is placed, it cannot be cancelled or modified. Please make sure that you review your
                                order carefully before submitting it.
                            </p>

                            <p className="underline font-semibold mb-2">Customer Service:</p>
                            <p className="mb-4">
                                If you have any questions or concerns about our return policy, please contact our customer service
                                team at <a href="mailto:support@hardwarelo.com" className="text-blue-600 underline">
                                    support@hardwarelo.com
                                </a>. We are here to assist you in any way we can.
                            </p>

                            <p className="mt-4 font-medium">Thank you for shopping at HARDWARELO.</p>

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

export default ReturnPolicy

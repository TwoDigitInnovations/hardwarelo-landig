import React from 'react'
import Navbar from '../components/navbar'
import Footer from '@/components/footer'

function Terms() {
    return (
        <>
            <Navbar />

            <section className="bg-gray-50 md:pt-[72px] pt-[68px]">
                <div className="max-w-7xl mx-auto md:py-10 py-4">

                    <section className="md:px-0 px-4">
                        <div className="overflow-hidden text-black text-left">
                            <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
                            <p className="text-sm text-gray-600 mb-4">Last Updated: 01-01-2024</p>

                            <p className="mb-4">
                                Welcome to HardwareLo! These Terms and Conditions ("Terms") govern your use of our website and services.
                                By accessing or using HardwareLo, you agree to abide by these Terms. If you do not agree with these Terms,
                                please refrain from using our website.
                            </p>

                            <h2 className="text-lg font-semibold mt-6 mb-2">Use of Website</h2>
                            <ul className="list-disc list-inside space-y-1 mb-4">
                                <li>You must be at least 18 years old to use HardwareLo or have the consent of a parent or guardian.</li>
                                <li>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
                                <li>You agree to provide accurate, current, and complete information when creating an account or placing an order.</li>
                            </ul>

                            <h2 className="text-lg font-semibold mt-6 mb-2">Orders and Payments</h2>
                            <ul className="list-disc list-inside space-y-1 mb-4">
                                <li>All sales are final and no returns or exchanges are accepted due to the challenging nature of construction materials return management.</li>
                                <li>You agree to pay the specified price for the products ordered, including any applicable taxes and shipping fees.</li>
                                <li>We accept Cash On Delivery, UPI, Cards, Internet Banking, and other payment methods. Payment information provided must be accurate and valid.</li>
                            </ul>

                            <h2 className="text-lg font-semibold mt-6 mb-2">Shipping</h2>
                            <ul className="list-disc list-inside space-y-1 mb-4">
                                <li>HardwareLo strives to process and ship orders promptly. Orders typically ship within 1 day, and customers are responsible for self-shipping.</li>
                                <li>Product availability is indicated on our website, and out-of-stock items will be marked accordingly. Once an order is placed, cancellations are unlikely.</li>
                            </ul>

                            <h2 className="text-lg font-semibold mt-6 mb-2">Intellectual Property</h2>
                            <ul className="list-disc list-inside space-y-1 mb-4">
                                <li>All content on HardwareLo, including text, graphics, logos, images, and software, is the property of HardwareLo or its licensors.</li>
                                <li>You may not reproduce, distribute, modify, or create derivative works without prior written consent.</li>
                            </ul>

                            <h2 className="text-lg font-semibold mt-6 mb-2">Limitation of Liability</h2>
                            <ul className="list-disc list-inside space-y-1 mb-4">
                                <li>HardwareLo is not liable for any direct, indirect, incidental, consequential, or punitive damages.</li>
                                <li>We make no warranties regarding the accuracy, completeness, or reliability of any content.</li>
                            </ul>

                            <h2 className="text-lg font-semibold mt-6 mb-2">Indemnification</h2>
                            <p className="mb-4">
                                You agree to indemnify and hold HardwareLo, its affiliates, officers, directors, employees, and agents harmless from any claims, losses, damages, liabilities, and expenses arising from your use of our website or services or violation of these Terms.
                            </p>

                            <h2 className="text-lg font-semibold mt-6 mb-2">Changes to Terms</h2>
                            <ul className="list-disc list-inside space-y-1 mb-4">
                                <li>HardwareLo reserves the right to update or modify these Terms at any time without prior notice.</li>
                                <li>Your continued use of HardwareLo after posting changes constitutes acceptance of the modified Terms.</li>
                            </ul>

                            <h2 className="text-lg font-semibold mt-6 mb-2">Governing Law</h2>
                            <p className="mb-4">
                                These Terms are governed by and construed in accordance with the laws of Dibrugarh, Assam, without regard to its conflict of law principles.
                            </p>

                            <h2 className="text-lg font-semibold mt-6 mb-2">Contact Us</h2>
                            <p className="mb-4">
                                If you have any questions or concerns about these Terms and Conditions, please contact us at <a href="mailto:support@hardwarelo.com" className="text-blue-600 underline">support@hardwarelo.com</a>.
                            </p>

                            <p className="mt-6">Thank you for using HardwareLo!</p>
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

            <div className="fixed md:bottom-8 bottom-4 right-8 z-40" onClick={() => window.open(`https://api.whatsapp.com/send/?phone=+918638597393&text=Hi,&app_absent=0`, '_black')}>
                <button className="bg-white text-[#0D34BF] px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 font-medium">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Write to us
                </button>
            </div>

            <Footer />
        </>
    )
}

export default Terms

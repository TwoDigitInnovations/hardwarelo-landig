import React from 'react'
import Navbar from '../components/navbar'
import Footer from '@/components/footer'

function PrivacyPolicy() {
    return (
        <>
            <Navbar />

            <section className="bg-gray-50 md:pt-[72px] pt-[68px]">
                <div className="max-w-7xl mx-auto md:py-10 py-4">
                    <section className="md:px-0 px-4">

                        <div className="overflow-hidden max-w-full text-left text-black">
                            <p className="font-bold text-2xl">Privacy Policy</p>
                            <p className="mt-2 text-sm">Last Updated: 01-01-2024</p>

                            <p className="mt-4">
                                Thank you for visiting <span className="font-semibold">HardwareLo</span>, an e-commerce website specializing in construction materials. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or make use of our services.
                            </p>

                            <p className="mt-4">
                                By accessing or using HardwareLo, you agree to the terms outlined in this Privacy Policy. If you do not agree with these terms, please refrain from using our website.
                            </p>

                            <h2 className="mt-6 font-semibold text-lg">Information We Collect</h2>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>
                                    <span className="font-semibold">Personal Information:</span> When you visit HardwareLo, we may collect personal information such as your name, email address, shipping address, and payment details when you place an order.
                                </li>
                                <li>
                                    <span className="font-semibold">Usage Information:</span> We may collect information about how you interact with our website, including your browsing activity, pages visited, and device information (such as IP address, browser type, and operating system).
                                </li>
                                <li>
                                    <span className="font-semibold">Cookies:</span> HardwareLo uses cookies to enhance your browsing experience and improve our services. These cookies may collect information such as your preferences and session data.
                                </li>
                            </ul>

                            <h2 className="mt-6 font-semibold text-lg">How We Use Your Information</h2>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>
                                    <span className="font-semibold">Order Processing:</span> We use your personal information to process and fulfill your orders, including shipping and payment processing.
                                </li>
                                <li>
                                    <span className="font-semibold">Communications:</span> We may use your contact information to send you order confirmations, updates, and promotional offers. You can opt out of these communications at any time.
                                </li>
                                <li>
                                    <span className="font-semibold">Improving Our Services:</span> We analyze usage data to better understand how our website is used and to improve the user experience.
                                </li>
                                <li>
                                    <span className="font-semibold">Legal Compliance:</span> We may use your information to comply with legal obligations, resolve disputes, and enforce our terms and policies.
                                </li>
                            </ul>

                            <h2 className="mt-6 font-semibold text-lg">Information Sharing</h2>
                            <p className="mt-2">
                                HardwareLo respects your privacy and does not sell, rent, or share your personal information with third parties for marketing purposes. However, we may share your information with trusted service providers who assist us in operating our website, processing payments, or delivering orders.
                            </p>

                            <h2 className="mt-6 font-semibold text-lg">Data Security</h2>
                            <p className="mt-2">
                                We take the security of your information seriously and implement appropriate measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                            </p>

                            <h2 className="mt-6 font-semibold text-lg">Your Choices</h2>
                            <p className="mt-2">
                                You have the right to access, update, or delete your personal information stored on HardwareLo. You can also opt out of receiving promotional communications from us by following the instructions provided in the emails or by contacting us directly.
                            </p>

                            <h2 className="mt-6 font-semibold text-lg">Changes to This Privacy Policy</h2>
                            <p className="mt-2">
                                HardwareLo reserves the right to update or modify this Privacy Policy at any time. We will notify you of any changes by posting the updated policy on our website with the revised date. We encourage you to review this Privacy Policy periodically for any updates.
                            </p>

                            <h2 className="mt-6 font-semibold text-lg">Contact Us</h2>
                            <p className="mt-2">
                                If you have any questions or concerns about this Privacy Policy or our practices regarding your personal information, please contact us at{" "}
                                <a href="mailto:support@hardwarelo.com" className="text-blue-600 underline">
                                    support@hardwarelo.com
                                </a>.
                            </p>

                            <p className="mt-4">
                                Thank you for trusting HardwareLo with your construction material needs.
                            </p>
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

export default PrivacyPolicy

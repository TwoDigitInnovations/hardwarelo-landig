import React from 'react'
import Navbar from '../components/navbar'
import Footer from '@/components/footer'

function SupportPolicy() {
    return (
        <>
            <Navbar />

            <section className="bg-gray-50 md:pt-[72px] pt-[68px]">
                <div className="max-w-7xl mx-auto md:py-10 py-4">
                    <section className="md:px-0 px-4">
                        <div className="overflow-hidden text-black">
                            <p className='text-black text-2xl font-semibold mb-5'>Support Policy</p>

                            <p className="font-bold mb-4">Support Policy for HardwareLo</p>
                            <p className="mb-4">
                                At HardwareLo, we are committed to providing excellent customer support to ensure the satisfaction of our customers.
                                This support policy outlines our approach to support, the types of support we provide, and the terms and conditions
                                that govern our support services.
                            </p>

                            <p className="font-bold underline mb-2">Scope of Support</p>
                            <p className="mb-4">
                                HardwareLo provides support to customers who have purchased our products or services. Our support services cover
                                technical issues related to our products, including hardware, software, and firmware. We also provide assistance
                                with installation, setup, and configuration of our products.
                            </p>

                            <p className="font-semibold mb-2">Types of Support</p>
                            <p className="mb-2">HardwareLo provides support through the following channels:</p>
                            <ol className="list-decimal list-inside space-y-2 mb-4">
                                <li>
                                    <span className="font-semibold">Email Support:</span> Customers can send us an email at <a href="mailto:support@hardwarelo.com" className="text-blue-600 underline"> support@hardwarelo.com</a> to request assistance with technical issues related to our products. Our support team will respond within
                                    24 hours during business hours.
                                </li>
                                <li>
                                    <span className="font-semibold">Phone Support:</span> Customers can call our support team at <a href="tel:+917576880099" className="text-blue-600 underline"> +91-7576880099</a> to speak with a support representative.
                                    Our phone support is available Monday–Friday, 9:00 AM to 5:00 PM Eastern Time.
                                </li>
                                <li>
                                    <span className="font-semibold">Live Chat Support:</span> Customers can access our live chat feature on our website during
                                    business hours. Our support team will respond to live chat inquiries within minutes.
                                </li>
                            </ol>

                            <p className="font-bold underline mb-2">Support Terms and Conditions</p>
                            <ol className="list-decimal list-inside space-y-2 mb-4">
                                <li>HardwareLo provides support only to customers who have purchased our products or services.</li>
                                <li>We do not provide support for products that have been modified, damaged, or misused by the customer.</li>
                                <li>HardwareLo is not responsible for any data loss that may occur during the course of providing support services.</li>
                                <li>
                                    We may require customers to provide remote access to their systems to facilitate support. By granting remote
                                    access, customers agree to assume responsibility for any changes made to their systems during the support session.
                                </li>
                                <li>HardwareLo reserves the right to refuse or terminate support services to customers who violate these terms.</li>
                            </ol>

                            <p className="font-bold underline mb-2">Contact Us</p>
                            <p>
                                If you have any questions or concerns about our support policy, please contact us at <a href="mailto:support@hardwarelo.com" className="text-blue-600 underline"> support@hardwarelo.com</a> or call us at <a href="tel:+917576880099" className="text-blue-600 underline"> +91-7576880099</a>.
                                Our support team will be happy to assist you.
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

export default SupportPolicy

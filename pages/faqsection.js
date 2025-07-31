'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What is Snabbit?",
      answer: "Snabbit is a professional home cleaning service that provides trained experts for various household tasks including deep cleaning, regular maintenance, and specialized services."
    },
    {
      id: 2,
      question: "How do I book a service with Snabbit?",
      answer: "You can book a service through our mobile app available on Google Play Store and App Store, or through our website. Simply select your service, choose a time slot, and confirm your booking."
    },
    {
      id: 3,
      question: "Can we get multiple tasks done in one booking?",
      answer: "Yes, you can combine multiple cleaning tasks in a single booking. Our experts are trained to handle various household cleaning requirements efficiently."
    },
    {
      id: 4,
      question: "How can I trust the Experts sent by Snabbit?",
      answer: "All our experts are thoroughly background verified, trained, and insured. We maintain strict quality standards and provide customer support throughout the service."
    },
    {
      id: 5,
      question: "What if I need to cancel or reschedule my booking?",
      answer: "You can easily cancel or reschedule your booking through the app or by contacting our customer support. Please check our cancellation policy for any applicable charges."
    },
    {
      id: 6,
      question: "What should I do if I have a problem with my service?",
      answer: "If you face any issues with the service, please contact our customer support immediately. We offer service guarantee and will resolve any concerns promptly."
    },
    {
      id: 7,
      question: "How quickly can I get an Expert to my home?",
      answer: "We offer same-day service based on availability. You can check available time slots in the app and book the most convenient option for you."
    },
    {
      id: 8,
      question: "Do you offer regular or subscription-based services?",
      answer: "Yes, we offer both one-time services and regular subscription plans. You can choose weekly, bi-weekly, or monthly cleaning subscriptions at discounted rates."
    }
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const selected = (type) => {
    console.log(type)
    if (open.includes(type)) {
      const data = open.filter((f) => f !== type);
      setOpen(data);
      return;
    }
    open.push(type);
    console.log(open);
    setOpen([...open]);
  };

  const [open, setOpen] = useState([]);

  return (
    <div className="md:min-h-screen bg-gray-50 md:py-16 py-4 px-4">
      <div className="max-w-6xl mx-auto">
        {/* FAQ Section - Exactly like screenshot */}
        <div className="bg-gray-100 rounded-3xl p-4 md:p-12">
          <div className="text-center md:mb-12">
            <h2 className="text-2xl md:text-5xl font-extrabold text-[#0D34BF] mb-4">
              FAQs
            </h2>
          </div>

          {/* <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-2xl shadow-sm">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full md:px-8 px-4 md:py-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-2xl"
                >
                  <span className="text-lg md:text-xl font-medium text-gray-800 pr-4">
                    {faq.question}
                  </span>
                  <div className={`transform transition-transform duration-200 flex-shrink-0 ${openFaq === faq.id ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-6 h-6 text-[#0D34BF]" />
                  </div>
                </button>

                {openFaq === faq.id && (
                  <div className="md:px-8 px-4 md:pb-6 pb-4">
                    <div className="md:pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed mt-4 text-base md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div> */}

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm" onClick={() => selected('1')}>
              <button className="w-full md:px-8 px-4 md:py-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-2xl">
                <span className="text-lg md:text-xl font-medium text-gray-800 pr-4">What is HardwareLO?</span>
                <div className={`transform transition-transform duration-200 flex-shrink-0`}>
                  {!open.includes('1') && <ChevronDown className="w-6 h-6 text-[#0D34BF]" />}
                  {open.includes('1') && <ChevronDown className="w-6 h-6 text-[#0D34BF] rotate-180" />}
                </div>
              </button>

              {open.includes('1') && <div className="md:px-8 px-4 md:pb-6 pb-4">
                <div className="md:pt-2 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed mt-4 text-base md:text-lg">
                    HardwareLO is your one-stop online platform for construction materials. We promise the best prices, genuine brands, and ultra-fast delivery – often in under 3 hours.
                  </p>
                </div>
              </div>}
            </div>

            <div className="bg-white rounded-2xl shadow-sm" onClick={() => selected('2')}>
              <button className="w-full md:px-8 px-4 md:py-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-2xl">
                <span className="text-lg md:text-xl font-medium text-gray-800 pr-4">Which materials can I buy from HardwareLO?</span>
                <div className={`transform transition-transform duration-200 flex-shrink-0`}>
                  {!open.includes('2') && <ChevronDown className="w-6 h-6 text-[#0D34BF]" />}
                  {open.includes('2') && <ChevronDown className="w-6 h-6 text-[#0D34BF] rotate-180" />}
                </div>
              </button>

              {open.includes('2') && <div className="md:px-8 px-4 md:pb-6 pb-4">
                <div className="md:pt-2 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed mt-4 text-base md:text-lg">
                    You can order:
                  </p>
                  <ul className="text-gray-600 list-disc pl-16">
                    <li>Cement (Ramco, Dalmia, ACC, etc.)</li>
                    <li>TMT Bars (SteelCo, Tata, etc.)</li>
                    <li>Sand, Bricks, Aggregates</li>
                    <li>Plumbing & Electrical Items</li>
                    <li>Paints, Tiles, and more</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed mt-4 text-base md:text-lg">We’re expanding our catalog every week!</p>
                </div>
              </div>}
            </div>

            <div className="bg-white rounded-2xl shadow-sm" onClick={() => selected('3')}>
              <button className="w-full md:px-8 px-4 md:py-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-2xl">
                <span className="text-lg md:text-xl font-medium text-gray-800 pr-4">How fast is delivery?</span>
                <div className={`transform transition-transform duration-200 flex-shrink-0`}>
                  {!open.includes('3') && <ChevronDown className="w-6 h-6 text-[#0D34BF]" />}
                  {open.includes('3') && <ChevronDown className="w-6 h-6 text-[#0D34BF] rotate-180" />}
                </div>
              </button>

              {open.includes('3') && <div className="md:px-8 px-4 md:pb-6 pb-4">
                <div className="md:pt-2 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed mt-4 text-base md:text-lg">
                    In select areas like Dibrugarh (Assam), we offer delivery within 3 hours. For nearby towns, it usually takes same day or next day depending on availability.
                  </p>
                </div>
              </div>}
            </div>

            <div className="bg-white rounded-2xl shadow-sm" onClick={() => selected('4')}>
              <button className="w-full md:px-8 px-4 md:py-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-2xl">
                <span className="text-lg md:text-xl font-medium text-gray-800 pr-4">Are your prices lower than local shops?</span>
                <div className={`transform transition-transform duration-200 flex-shrink-0`}>
                  {!open.includes('4') && <ChevronDown className="w-6 h-6 text-[#0D34BF]" />}
                  {open.includes('4') && <ChevronDown className="w-6 h-6 text-[#0D34BF] rotate-180" />}
                </div>
              </button>

              {open.includes('4') && <div className="md:px-8 px-4 md:pb-6 pb-4">
                <div className="md:pt-2 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed mt-4 text-base md:text-lg">
                    Yes. We work directly with factories and distributors to ensure bulk-level pricing for even the smallest orders. Plus, we often run exclusive discounts and cashback offers.
                  </p>
                </div>
              </div>}
            </div>

            <div className="bg-white rounded-2xl shadow-sm" onClick={() => selected('5')}>
              <button className="w-full md:px-8 px-4 md:py-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-2xl">
                <span className="text-lg md:text-xl font-medium text-gray-800 pr-4">Is there any minimum order value?</span>
                <div className={`transform transition-transform duration-200 flex-shrink-0`}>
                  {!open.includes('5') && <ChevronDown className="w-6 h-6 text-[#0D34BF]" />}
                  {open.includes('5') && <ChevronDown className="w-6 h-6 text-[#0D34BF] rotate-180" />}
                </div>
              </button>

              {open.includes('5') && <div className="md:px-8 px-4 md:pb-6 pb-4">
                <div className="md:pt-2 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed mt-4 text-base md:text-lg">
                    No. Whether you need 1 bag of cement or 100, we deliver.
                  </p>
                </div>
              </div>}
            </div>

            <div className="bg-white rounded-2xl shadow-sm" onClick={() => selected('6')}>
              <button className="w-full md:px-8 px-4 md:py-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-2xl">
                <span className="text-lg md:text-xl font-medium text-gray-800 pr-4">How can I place an order?</span>
                <div className={`transform transition-transform duration-200 flex-shrink-0`}>
                  {!open.includes('6') && <ChevronDown className="w-6 h-6 text-[#0D34BF]" />}
                  {open.includes('6') && <ChevronDown className="w-6 h-6 text-[#0D34BF] rotate-180" />}
                </div>
              </button>

              {open.includes('6') && <div className="md:px-8 px-4 md:pb-6 pb-4">
                <div className="md:pt-2 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed mt-4 text-base md:text-lg">
                    You can:
                  </p>
                  <ul className="text-gray-600 list-disc pl-16">
                    <li>Call/WhatsApp us directly</li>
                    <li>Use our mobile app (launching soon)</li>
                    <li>Visit our website:<a className='text-[#0D34BF]' href='https://www.hardwarelo.com/' target="_blank"> www.hardwarelo.com</a></li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed mt-4 text-base md:text-lg">
                    Our sales team is always ready to assist.
                  </p>
                </div>
              </div>}
            </div>

            <div className="bg-white rounded-2xl shadow-sm" onClick={() => selected('7')}>
              <button className="w-full md:px-8 px-4 md:py-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-2xl">
                <span className="text-lg md:text-xl font-medium text-gray-800 pr-4">Do you provide GST invoices?</span>
                <div className={`transform transition-transform duration-200 flex-shrink-0`}>
                  {!open.includes('7') && <ChevronDown className="w-6 h-6 text-[#0D34BF]" />}
                  {open.includes('7') && <ChevronDown className="w-6 h-6 text-[#0D34BF] rotate-180" />}
                </div>
              </button>

              {open.includes('7') && <div className="md:px-8 px-4 md:pb-6 pb-4">
                <div className="md:pt-2 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed mt-4 text-base md:text-lg">
                    Yes, all purchases come with a proper GST invoice for your records and tax benefits.
                  </p>
                </div>
              </div>}
            </div>

            <div className="bg-white rounded-2xl shadow-sm" onClick={() => selected('8')}>
              <button className="w-full md:px-8 px-4 md:py-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-2xl">
                <span className="text-lg md:text-xl font-medium text-gray-800 pr-4">Do you offer credit or BNPL (Buy Now Pay Later)?</span>
                <div className={`transform transition-transform duration-200 flex-shrink-0`}>
                  {!open.includes('8') && <ChevronDown className="w-6 h-6 text-[#0D34BF]" />}
                  {open.includes('8') && <ChevronDown className="w-6 h-6 text-[#0D34BF] rotate-180" />}
                </div>
              </button>

              {open.includes('8') && <div className="md:px-8 px-4 md:pb-6 pb-4">
                <div className="md:pt-2 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed mt-4 text-base md:text-lg">
                    We’re currently onboarding partners like ePayLater and CreditEase to offer BNPL options. Contact us to check eligibility
                  </p>
                </div>
              </div>}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const faqData = [
  {
    question: "Is dental treatment painful?",
    answer: "With modern dental advancements and local anesthesia, most routine procedures are virtually pain-free. Our team prioritizes gentle care and patient comfort above all else.",
    icon: "🦷",
  },
  {
    question: "How often should I visit the dentist?",
    answer: "We recommend visiting your dentist every 6 months for a regular check-up and cleaning. Regular visits help prevent dental problems and maintain optimal oral health.",
    icon: "📅",
  },
  {
    question: "How long do dental implants last?",
    answer: "With proper home care and regular dental check-ups, dental implants can last a lifetime. They are a durable, permanent solution for missing teeth.",
    icon: "💡",
  },
  {
    question: "Do you accept dental insurance?",
    answer: "Yes, we accept a wide variety of insurance plans. Our team handles the claims process directly to maximize your insurance benefits seamlessly.",
    icon: "🛡️",
  },
  {
    question: "What payment options are available?",
    answer: "We offer multiple flexible options, including cash, major credit cards, insurance plans, and customized interest-free installment options.",
    icon: "💵",
  },
  {
    question: "What should I do in a dental emergency?",
    answer: "Contact us immediately. We keep priority slots open daily to ensure emergency cases receive fast, immediate attention when they need it most.",
    icon: "🕒",
  },
];

export default function FAQs() {
  // Open the second item by default to match image_554a9a.jpg exactly
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FAF9F6] py-16 sm:py-20 lg:py-24 xl:py-28 w-full overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        
        {/* Header Block matching image_554a9a.jpg */}
        <div className="flex flex-col items-center text-center mb-14">
          <p className="text-[13px] sm:text-[14px] font-bold uppercase tracking-[4px] text-[#d4af37]">
            FAQS
          </p>
          
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#071428] tracking-wide leading-tight">
            Frequently Asked Questions
          </h2>
          
          {/* Aesthetic Center Line Divider */}
          <div className="mt-4 flex items-center justify-center gap-4 w-full max-w-[240px]">
            <div className="h-[1px] bg-gray-200 flex-1" />
            <span className="text-[#d4af37] text-xs">🦷</span>
            <div className="h-[1px] bg-gray-200 flex-1" />
          </div>

          <p className="mt-4 text-[15px] text-gray-500 max-w-2xl leading-7">
            Here are some of the most common questions we receive.<br />
            Can't find what you're looking for? Contact our team.
          </p>
        </div>

        {/* Dual Split Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* LEFT SIDE COLUMN: Professional Poster & Embedded Static Card */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="relative w-full aspect-[4/3] rounded-t-2xl overflow-hidden bg-slate-100">
              <Image
                src="/images/about/female-doctor.png" // Replace with verified file path
                alt="Our Professional Dental Team"
                fill
                className="object-cover object-top"
              />
            </div>
            {/* Embedded Dark Callout Box */}
            <div className="bg-[#051124] rounded-b-2xl p-8 border border-t-0 border-white/5 flex flex-col items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5c343]/10 text-[#f5c343] text-lg mb-4">
                💬
              </div>
              <h3 className="text-white text-xl font-semibold tracking-wide">
                Still Have Questions?
              </h3>
              <p className="mt-2 text-gray-400 text-[14px] leading-6 mb-6">
                Our friendly team is here to help you with all your dental care needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex h-[42px] px-6 items-center justify-center rounded-md bg-[#f5c343] hover:bg-[#e0b034] text-slate-950 font-bold text-[12.5px] tracking-wider transition-all duration-200 shadow-md"
              >
                Contact Us <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE COLUMN: Interactive Smooth Accordion List */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-100/80 rounded-xl transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.01)]"
                >
                  {/* Clickable Header Trigger */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      {/* Premium Tinted Mini Icon Wrapper */}
                      <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF4DC]/80 text-base">
                        {faq.icon}
                      </div>
                      <span className="text-[16px] font-semibold text-[#071428] tracking-wide">
                        {faq.question}
                      </span>
                    </div>

                    {/* Plus/Minus Circular Custom Toggle Badge */}
                    <div className={`flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                      isOpen ? "bg-[#f5c343] text-slate-950" : "bg-gray-50 text-gray-500 border border-gray-100"
                    }`}>
                      {isOpen ? "−" : "+"}
                    </div>
                  </button>

                  {/* Body Content Panel */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[200px] border-t border-gray-50/50" : "max-h-0"
                  }`}>
                    <p className="p-5 pl-[72px] text-[14.5px] text-gray-500 leading-7 bg-slate-50/30">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* BOTTOM FIXED ADJOINING HOTLINE BANNER */}
        <div className="bg-[#051124] rounded-2xl px-6 py-5 sm:px-10 sm:py-6 shadow-xl w-full border border-white/5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left Narrative Frame */}
            <div className="flex items-center gap-4 text-center lg:text-left flex-col sm:flex-row">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5c343] text-slate-950 text-xl font-bold shadow-md">
                📞
              </div>
              <div>
                <h4 className="text-white text-base sm:text-lg font-medium tracking-wide">
                  Need Immediate Help?
                </h4>
                <p className="text-gray-400 text-[13.5px] mt-0.5">
                  Call us now for emergency dental care and support.
                </p>
              </div>
            </div>

            {/* Split Vertical Line Component */}
            <div className="hidden lg:block w-[1px] h-10 bg-white/10 mx-4" />

            {/* Right Action Hotline Info Frame */}
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto justify-center lg:justify-end">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5c343]/10 text-[#f5c343] text-base">
                  📞
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                    Emergency Hotline
                  </span>
                  <Link href="tel:+15551234567" className="text-[#f5c343] text-lg font-bold tracking-wide hover:underline">
                    +91 (863) 755-3770

                  </Link>
                  <span className="text-[11px] text-gray-500">
                    24/7 Emergency Support
                  </span>
                </div>
              </div>

              <Link
                href="tel:+15551234567"
                className="inline-flex h-[46px] px-6 items-center justify-center rounded-md bg-[#f5c343] hover:bg-[#e0b034] text-slate-950 font-bold text-[13px] tracking-wider uppercase transition-all duration-200 shadow-md w-full sm:w-auto text-center"
              >
                Call Now <span className="ml-2 text-sm">→</span>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
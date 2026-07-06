"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { id: "all", name: "All Treatments" },
  { id: "whitening", name: "Teeth Whitening" },
  { id: "implants", name: "Dental Implants" },
  { id: "veneers", name: "Veneers" },
  { id: "ortho", name: "Orthodontics" },
];

const items = [
  {
    title: "Teeth Whitening",
    category: "whitening",
    desc: "Removed years of stains and discoloration for a brighter, whiter smile.",
    time: "60 Minutes",
    beforeImg: "/images/gallery/whitening-before.png", // Replace with valid local paths
    afterImg: "/images/gallery/whitening-after.png",
    icon: "✨",
  },
  {
    title: "Dental Implants",
    category: "implants",
    desc: "Replaced missing teeth with natural-looking implants for a strong, confident smile.",
    time: "3 - 6 Months",
    beforeImg: "/images/gallery/implants-before.png",
    afterImg: "/images/gallery/implants-after.png",
    icon: "🦷",
  },
  {
    title: "Porcelain Veneers",
    category: "veneers",
    desc: "Corrected shape, gaps, and discoloration with custom porcelain veneers.",
    time: "5 - 7 Days",
    beforeImg: "/images/gallery/Porcelain-before.png",
    afterImg: "/images/gallery/Porcelain-after.png",
    icon: "👑",
  },
  {
    title: "Orthodontic Treatment",
    category: "ortho",
    desc: "Straightened teeth and improved bite for a healthier, more beautiful smile.",
    time: "6 - 18 Months",
    beforeImg: "/images/gallery/ortho-before.png",
    afterImg: "/images/gallery/ortho-after.png",
    icon: "😬",
  },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems = activeTab === "all" 
    ? items 
    : items.filter(item => item.category === activeTab);

  return (
    <section className="bg-[#FAF9F6] py-16 sm:py-20 lg:py-24 xl:py-28 w-full overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        
        {/* Header Block matching image_554698.jpg */}
        <div className="flex flex-col items-center text-center mb-10">
          <p className="text-[13px] sm:text-[14px] font-bold uppercase tracking-[4px] text-[#d4af37]">
            Before & After Gallery
          </p>
          
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#071428] tracking-wide leading-tight">
            Real Transformations, Real Confidence
          </h2>
          
          {/* Accent Line Divider */}
          <div className="mt-4 flex items-center justify-center gap-4 w-full max-w-[240px]">
            <div className="h-[1px] bg-gray-200 flex-1" />
            <span className="text-[#d4af37] text-xs">🦷</span>
            <div className="h-[1px] bg-gray-200 flex-1" />
          </div>

          <p className="mt-4 text-[15px] text-gray-500 max-w-2xl leading-7">
            Explore real results from our patients and see how our advanced treatments can transform your smile and your life.
          </p>
        </div>

        {/* Categories Tab Bar Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-[13.5px] font-medium tracking-wide border transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-[#f5c343] text-slate-950 border-[#f5c343] shadow-sm"
                  : "bg-white text-gray-600 border-gray-100 hover:border-[#d4af37]/40 hover:text-[#071428]"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* 4-Column Split Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#D4AF37]/30 hover:shadow-[0_20px_45px_rgba(0,0,0,.04)] hover:-translate-y-1"
            >
              <div>
                {/* Visual Side-by-Side Dual Container Block */}
                <div className="relative w-full aspect-[16/10] flex border-b border-gray-50 bg-slate-100 overflow-hidden">
                  {/* Left Side: Before Image */}
                  <div className="relative w-1/2 h-full border-r border-white/40">
                    <Image
                      src={item.beforeImg}
                      alt={`${item.title} Before`}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold text-white bg-black/40 rounded-md backdrop-blur-[2px]">
                      Before
                    </span>
                  </div>

                  {/* Right Side: After Image */}
                  <div className="relative w-1/2 h-full">
                    <Image
                      src={item.afterImg}
                      alt={`${item.title} After`}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute top-3 right-3 px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold text-slate-950 bg-[#f5c343]/90 rounded-md backdrop-blur-[2px]">
                      After
                    </span>
                  </div>

                  {/* Floating Circular Float Badge */}
                  <div className="absolute bottom-0 left-6 translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-base shadow border border-gray-100 z-10">
                    {item.icon}
                  </div>
                </div>

                {/* Narrative Details Block */}
                <div className="px-6 pt-8 pb-4">
                  <h3 className="text-[17px] font-bold text-[#071428] tracking-wide">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] text-gray-500 leading-relaxed min-h-[40px]">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Treatment Parameters Footer Block */}
              <div className="px-6 pb-6 pt-3 border-t border-gray-50/50 flex items-center gap-3">
                <span className="text-xl">📅</span>
                <div className="flex flex-col">
                  <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                    Treatment Time
                  </span>
                  <span className="text-[13px] font-semibold text-gray-700">
                    {item.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Central Standard Navigation Anchor */}
        <div className="flex justify-center mb-16">
          <Link
            href="/gallery"
            className="inline-flex h-11 px-6 items-center justify-center rounded-md border border-[#d4af37]/60 text-[#071428] font-bold text-[13px] tracking-wide hover:bg-[#d4af37]/5 transition-all duration-200"
          >
            View More Transformations <span className="ml-2">→</span>
          </Link>
        </div>

        {/* BOTTOM ATTACHED DOCKING BANNER COMPONENT */}
        <div className="bg-[#051124] rounded-2xl px-6 py-5 sm:px-10 sm:py-6 shadow-xl w-full border border-white/5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left Content Column */}
            <div className="flex items-center gap-4 text-center lg:text-left flex-col sm:flex-row">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5c343]/10 text-[#f5c343] text-lg shadow-inner">
                📅
              </div>
              <div>
                <h4 className="text-white text-base sm:text-lg font-medium tracking-wide">
                  Ready to Transform Your Smile?
                </h4>
                <p className="text-gray-400 text-[13.5px] mt-0.5">
                  Book a consultation with our experts and take the first step towards your dream smile.
                </p>
              </div>
            </div>

            {/* Split Decorative Line Component */}
            <div className="hidden lg:block w-[1px] h-10 bg-white/10 mx-4" />

            {/* Right Action Routing Button Column */}
            <div className="w-full lg:w-auto flex justify-center">
              <Link
                href="/appointment"
                className="inline-flex h-[46px] px-6 items-center justify-center rounded-md bg-[#f5c343] hover:bg-[#e0b034] text-slate-950 font-bold text-[13px] tracking-wider uppercase transition-all duration-200 shadow-md hover:-translate-y-0.5 w-full sm:w-auto text-center"
              >
                <span className="mr-2">📅</span> Book Appointment <span className="ml-2 text-sm">→</span>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
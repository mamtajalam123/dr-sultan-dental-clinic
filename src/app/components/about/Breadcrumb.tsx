"use client";

import Link from "next/link";
import Image from "next/image";

export default function Breadcrumb() {
  return (
    <section className="relative w-full min-h-[75vh] sm:min-h-[85vh] flex flex-col justify-between bg-[#040c18] overflow-hidden text-white pt-24 sm:pt-28">
      
      {/* RIGHT-HAND SIDE ONLY IMAGE LAYOUT */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 z-0">
        <Image
          src="/images/about/clinic-reception.png" 
          alt="Dr. Sultan Dental Care Luxury Reception"
          fill
          priority
          className="object-cover object-center brightness-[0.9] contrast-[1.05]" 
        />
        {/* Left fade transition to blend seamlessly with the solid dark background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040c18] via-[#040c18]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040c18] via-transparent to-black/10" />
      </div>

      {/* MAIN TEXT CONTENT BLOCK (STAYS PURE ON DARK BACKGROUND) */}
      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-5 sm:px-8 lg:px-10 flex-1 flex flex-col justify-center pb-12">
        <div className="max-w-xl text-left lg:pr-12">
          
          {/* Section Subtitle */}
          <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[4px] text-[#d4af37]">
            ABOUT US
          </span>
          
          {/* Main Typography Header */}
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-wide leading-[1.2] text-white">
            About Dr. Sultan <br />
            <span className="text-[#d4af37]">Dental Care</span>
          </h1>
          
          {/* Accent Gold Line Divider */}
          <div className="mt-5 h-[1.5px] w-20 bg-gradient-to-r from-[#d4af37] via-[#d4af37]/40 to-transparent rounded-full" />

          {/* Core Description */}
          <p className="mt-6 text-gray-300 text-sm sm:text-base leading-relaxed opacity-95">
            Providing exceptional dental care with advanced technology and a personal touch. Your smile is our passion and priority.
          </p>
          
        </div>
      </div>

      {/* DOCKED BOTTOM BREADCRUMB BAR */}
      <div className="relative z-10 w-full pb-8 sm:pb-12">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          
          <div className="w-full bg-[#051124]/90 backdrop-blur-md rounded-xl px-6 py-4 flex items-center justify-between border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
            
            {/* Breadcrumb Navigation Route links */}
            <div className="flex items-center gap-2.5 text-[13px] sm:text-[14px] font-medium tracking-wide">
              
              {/* Home Icon */}
              <Link href="/" className="text-[#d4af37] hover:opacity-80 transition-opacity flex items-center text-base" aria-label="Home">
                🏠
              </Link>
              
              <span className="text-gray-600 select-none">/</span>
              
              <Link href="/about" className="text-[#d4af37] hover:underline transition-all">
                About Us
              </Link>
              
              <span className="text-gray-600 select-none">/</span>
              
              <span className="text-gray-400 truncate max-w-[180px] sm:max-w-none">
                About Dr. Sultan Dental Care
              </span>
            </div>

            {/* Right Column Decorative Dot Matrix Grid */}
            <div className="hidden sm:grid grid-cols-6 gap-x-1.5 gap-y-1 opacity-50 select-none pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="h-1 w-1 rounded-full bg-[#d4af37]" />
              ))}
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
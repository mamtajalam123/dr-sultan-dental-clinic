"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[65vh] sm:min-h-[70vh] flex flex-col justify-between bg-[#030914] overflow-hidden text-white pt-24 sm:pt-28">
      
      
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 z-0">
        <Image
          src="/images/gallery/clinic-interior.png" 
          alt="Dr. Sultan Dental Care Luxury Clinic Gallery"
          fill
          priority
          className="object-cover object-center brightness-[0.9] contrast-[1.05]" 
        />
        {/* Luxury dark gradients to fade beautifully into the solid dark background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030914] via-[#030914]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-transparent to-black/10" />
      </div>

      {/* MAIN TEXT CONTENT BLOCK */}
      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-5 sm:px-8 lg:px-10 flex-1 flex flex-col justify-center pb-12">
        <div className="max-w-xl text-left lg:pr-12">
          
          {/* Section Subtitle */}
          <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[4px] text-[#d4af37]">
            VISUAL TOUR
          </span>
          
          {/* Main Typography Header */}
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-wide leading-[1.2] text-white">
            Our Premium <br />
            <span className="text-[#d4af37]">Clinic Gallery</span>
          </h1>
          
          {/* Accent Gold Line Divider */}
          <div className="mt-5 h-[1.5px] w-20 bg-gradient-to-r from-[#d4af37] via-[#d4af37]/40 to-transparent rounded-full" />

          {/* Core Description */}
          <p className="mt-6 text-gray-300 text-sm sm:text-base leading-relaxed opacity-95">
            Take a visual tour of our state-of-the-art operatory rooms, sterilized environments, and premium hospitality lounge designed exclusively for your comfort.
          </p>
          
        </div>
      </div>

      {/* DOCKED BOTTOM BREADCRUMB BAR (Matching image_587c55.jpg Layout Exactly) */}
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
              
              <Link href="/gallery" className="text-[#d4af37] hover:underline transition-all">
                Gallery
              </Link>
              
              <span className="text-gray-600 select-none">/</span>
              
              <span className="text-gray-400 truncate max-w-[180px] sm:max-w-none">
                Clinic Tour & Infrastructure
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
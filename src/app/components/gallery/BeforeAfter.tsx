"use client";

import { useState, useRef, MouseEvent, TouchEvent } from "react";
import Image from "next/image";

const transformCases = [
  {
    id: 1,
    title: "Full Arch Smile Makeover",
    description: "Premium porcelain veneers used to correct alignment, shade, and structural symmetry flawlessly.",
    before: "/images/gallery/whitening-before.png", // अपनी इमेज पाथ डालें
    after: "/images/gallery/whitening-after.png",
  },
];

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50); // प्रतिशत में (0-100)
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (e.buttons === 1) handleMove(e.clientX); // केवल क्लिक करके ड्रैग करने पर काम करेगा
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  };

  return (
    <section className="w-full bg-[#030914] text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">
        
        {/* HEADER BLOCK (Matching image_6271be.jpg Layout Exact) */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[4px] text-[#d4af37]">
            CLINICAL RESULTS
          </span>
          
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-wide leading-tight text-white">
            Smile <span className="text-[#d4af37]">Transformations</span>
          </h2>
          
          {/* Centered Decorative Accent Line */}
          <div className="mt-4 flex items-center justify-center gap-3 w-full max-w-[280px]">
            <div className="h-[1px] bg-gradient-to-r from-transparent to-white/20 flex-1" />
            <span className="text-[#d4af37] text-xs">✨</span>
            <div className="h-[1px] bg-gradient-to-l from-transparent to-white/20 flex-1" />
          </div>

          <p className="mt-4 text-gray-400 text-[14.5px] max-w-2xl leading-relaxed">
            Drag the golden slider to witness the precise, life-changing aesthetic transformations executed by our medical board.
          </p>
        </div>

        {/* INTERACTIVE SLIDER CONTAINER PANEL */}
        {transformCases.map((item) => (
          <div key={item.id} className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT SIDE: SLIDER MECHANISM */}
            <div className="lg:col-span-7 flex justify-center">
              <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.5)] cursor-ew-resize select-none"
              >
                {/* AFTER IMAGE (Background Layer) */}
                <Image
                  src={item.after}
                  alt="After Treatment"
                  fill
                  priority
                  className="object-cover pointer-events-none"
                />
                <div className="absolute bottom-4 right-4 bg-[#030914]/80 backdrop-blur-md text-[#d4af37] border border-[#d4af37]/30 text-[11px] font-bold px-3 py-1 rounded uppercase tracking-wider z-10">
                  AFTER
                </div>

                {/* BEFORE IMAGE (Foreground Clipping Layer) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
                >
                  <Image
                    src={item.before}
                    alt="Before Treatment"
                    fill
                    priority
                    className="object-cover pointer-events-none"
                  />
                  <div className="absolute bottom-4 left-4 bg-[#030914]/80 backdrop-blur-md text-gray-400 border border-white/10 text-[11px] font-bold px-3 py-1 rounded uppercase tracking-wider z-10">
                    BEFORE
                  </div>
                </div>

                {/* SLIDER HANDLE LINE INDICATOR */}
                <div
                  className="absolute inset-y-0 w-[2px] bg-[#d4af37] shadow-[0_0_15px_#d4af37] pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  {/* Handle Knob Badge */}
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-9 w-9 rounded-full bg-[#030914] border-2 border-[#d4af37] shadow-xl flex items-center justify-center text-[#f5c343] text-xs font-bold">
                    ↔
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT SIDE: CASE STUDY METADATA */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <span className="text-[11px] font-bold text-[#d4af37] uppercase tracking-[2px] bg-[#d4af37]/5 border border-[#d4af37]/20 px-2.5 py-1 rounded-md">
                Case Study #0{item.id}
              </span>
              
              <h3 className="mt-4 font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
                {item.title}
              </h3>
              
              <div className="mt-3 mb-4 h-[1px] w-16 bg-[#d4af37]/30" />
              
              <p className="text-gray-400 text-[14px] leading-relaxed text-justify">
                {item.description}
              </p>

              {/* Quick Quality Check Markers */}
              <div className="mt-6 space-y-3 w-full">
                <div className="flex items-center gap-3 text-[13.5px] text-gray-200">
                  <span className="text-[#d4af37]">✓</span> Painless Veneer Adaptation
                </div>
                <div className="flex items-center gap-3 text-[13.5px] text-gray-200">
                  <span className="text-[#d4af37]">✓</span> Custom Bleach-Shade Matching
                </div>
                <div className="flex items-center gap-3 text-[13.5px] text-gray-200">
                  <span className="text-[#d4af37]">✓</span> Structural Bite Alignment Restored
                </div>
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
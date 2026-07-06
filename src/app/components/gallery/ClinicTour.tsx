"use client";

import { useState } from "react";
import Image from "next/image";

const tourAreas = [
  {
    id: "lounge",
    title: "Premium Patient Lounge",
    tag: "HOSPITALITY",
    desc: "A completely calm and luxury waiting space designed to make you feel comfortable before your treatment sessions begin.",
    image: "/images/about/clinic-reception.png", // अपने इमेजेस के पाथ से बदलें
  },
  {
    id: "operatory",
    title: "State-of-the-Art Operatory",
    tag: "CLINICAL PRECISION",
    desc: "Equipped with ergonomic dental chairs, integrated digital imaging, and high-intensity overhead shadowless dental lighting systems.",
    image: "/images/tour/operatory.jpg",
  },
  {
    id: "sterilization",
    title: "Zero-Bacteria Sterilization Room",
    tag: "SAFETY FIRST",
    desc: "Our high-pressure Class-B autoclave chambers guarantee a 100% sterile workflow environment following strict medical protocols.",
    image: "/images/tour/sterilization.jpg",
  },
];

export default function ClinicTour() {
  const [activeArea, setActiveArea] = useState(tourAreas[0]);

  return (
    <section className="w-full bg-[#030914] text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">
        
        {/* HEADER BLOCK */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[4px] text-[#d4af37]">
            VIRTUAL INFRASTRUCTURE
          </span>
          
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-wide leading-tight text-white">
            Take A Digital <span className="text-[#d4af37]">Clinic Tour</span>
          </h2>
          
          {/* Centered Decorative Star Divider */}
          <div className="mt-4 flex items-center justify-center gap-3 w-full max-w-[280px]">
            <div className="h-[1px] bg-gradient-to-r from-transparent to-white/20 flex-1" />
            <span className="text-[#d4af37] text-xs">🏛️</span>
            <div className="h-[1px] bg-gradient-to-l from-transparent to-white/20 flex-1" />
          </div>

          <p className="mt-4 text-gray-400 text-[14.5px] max-w-2xl leading-relaxed">
            Take a look inside Dr. Sultan Dental Care's state-of-the-art facility where advanced medical technology meets 5-star comfort.
          </p>
        </div>

        {/* TOUR INTERACTIVE COMPONENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          
          {/* LEFT COLUMN: INTERACTIVE TABS SELECTION */}
          <div className="lg:col-span-5 space-y-4">
            {tourAreas.map((area) => {
              const isSelected = activeArea.id === area.id;
              return (
                <button
                  key={area.id}
                  onClick={() => setActiveArea(area)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex flex-col items-start relative overflow-hidden
                    ${
                      isSelected
                        ? "bg-[#051124] border-[#d4af37]/50 shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
                        : "bg-[#051124]/20 border-white/5 hover:border-white/10 hover:bg-[#051124]/40"
                    }
                  `}
                >
                  {/* Active Indicator Left Accent Line */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#d4af37]" />
                  )}
                  
                  <span className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${isSelected ? "text-[#f5c343]" : "text-gray-500"}`}>
                    {area.tag}
                  </span>
                  
                  <h3 className={`text-[16px] font-bold tracking-wide transition-colors ${isSelected ? "text-white" : "text-gray-300"}`}>
                    {area.title}
                  </h3>
                  
                  {isSelected && (
                    <p className="mt-2 text-[13px] text-gray-400 leading-relaxed transition-opacity">
                      {area.desc}
                    </p>
                  )}
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN: PREVIEW PANEL */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.6)] group">
              
              {/* Main Image Viewport */}
              <Image
                key={activeArea.id} // Re-triggers animation on component changes
                src={activeArea.image}
                alt={activeArea.title}
                fill
                priority
                className="object-cover object-center brightness-[0.85] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Smooth Dark Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030914]/80 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Info Strip inside Image */}
              <div className="absolute bottom-5 left-5 bg-[#030914]/90 backdrop-blur-md border border-[#d4af37]/30 rounded-lg px-4 py-2 text-[12px] font-bold text-[#f5c343] tracking-wide uppercase">
                🔍 Live Facility Preview
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
"use client";

import Image from "next/image";

const certifications = [
  {
    title: "ISO 9001:2015 Certified",
    issuer: "International Quality Management",
    desc: "Certified for maintaining world-class standards in clinical healthcare hygiene and patient safety protocols.",
    id: "Reg No. Q-0824.19",
  },
  {
    title: "ADA Corporate Member",
    issuer: "American Dental Association",
    desc: "Affiliated with global standards of dental excellence, continuing education, and advanced operational ethics.",
    id: "Member ID: #9821-AD",
  },
  {
    title: "IAO Accreditation",
    issuer: "International Association for Orthodontics",
    desc: "Recognized for executing state-of-the-art corrective jaw treatments and premium invisible aligner techniques.",
    id: "Accredited: 2024-2028",
  },
  {
    title: "National Health Excellence",
    issuer: "Ministry of Healthcare Board",
    desc: "Awarded top-tier clinical ranking for maintaining a 100% sterilized environment and pain-free treatment records.",
    id: "License No: HC-9912",
  },
];

export default function Certifications() {
  return (
    <section className="w-full bg-[#030914] text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">
        
        {/* HEADER BLOCK (Matching your Premium Dark Theme Layout) */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[4px] text-[#d4af37]">
            TRUST & QUALITY
          </span>
          
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-wide leading-tight text-white">
            Our Board <span className="text-[#d4af37]">Certifications</span> & Awards
          </h2>
          
          {/* Centered Tooth Divider */}
          <div className="mt-4 flex items-center justify-center gap-3 w-full max-w-[280px]">
            <div className="h-[1px] bg-gradient-to-r from-transparent to-white/20 flex-1" />
            <span className="text-[#d4af37] text-xs">🛡️</span>
            <div className="h-[1px] bg-gradient-to-l from-transparent to-white/20 flex-1" />
          </div>

          <p className="mt-4 text-gray-400 text-[14.5px] max-w-2xl leading-relaxed">
            Dr. Sultan Dental Care is fully licensed, accredited, and recognized by international medical boards to ensure top-tier clinical precision.
          </p>
        </div>

        {/* CERTIFICATIONS CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="group bg-[#051124]/40 border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#d4af37]/30 hover:shadow-[0_25px_50px_rgba(0,0,0,0.4)] hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Top-Right Decorative Background Medal Watermark */}
              <div className="absolute -top-6 -right-6 text-7xl opacity-[0.02] text-[#d4af37] select-none pointer-events-none group-hover:opacity-[0.05] transition-all duration-300 group-hover:scale-110">
                🏅
              </div>

              <div>
                {/* Badge Icon Header Row */}
                <div className="h-11 w-11 rounded-xl bg-[#d4af37]/5 border border-[#d4af37]/20 flex items-center justify-center text-xl text-[#f5c343] transition-colors duration-300 group-hover:bg-[#d4af37]/10 mb-6">
                  📜
                </div>

                {/* Certification Title */}
                <h3 className="text-[17px] font-bold text-white tracking-wide group-hover:text-[#d4af37] transition-colors duration-200">
                  {cert.title}
                </h3>
                
                {/* Issuing Authority */}
                <p className="text-[11px] font-bold text-[#d4af37]/80 uppercase tracking-wider mt-1.5">
                  {cert.issuer}
                </p>
                
                {/* Description Paragraph */}
                <p className="mt-4 text-[13.5px] text-gray-400 leading-relaxed font-normal">
                  {cert.desc}
                </p>
              </div>

              {/* Bottom Verification Footer Layout */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-gray-500 font-mono">
                  {cert.id}
                </span>
                <span className="text-[11px] text-[#f5c343] font-bold tracking-wide flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Verified ✓
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
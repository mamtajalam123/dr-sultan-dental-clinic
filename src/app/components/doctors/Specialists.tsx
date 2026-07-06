"use client";

import Image from "next/image";
import Link from "next/link";

const specialists = [
  {
    name: "Dr.Tipu sultan",
    specialty: "Chief Dental Surgeon & Founder",
    experience: "10+ Years Experience",
    image: "/images/doctor/tipul.png", 
    tags: ["Dental Implants", "Oral Surgery"],
  },
  {
    name: "Dr. Antara Das",
    specialty: "General Dentist",
    experience: "8+ Years Experience",
     image:"/images/doctor/Antara.png",
    tags: ["Smile Design", "Veneers"],
  },
  {
    name: "Dr. Afsana parvin",
    specialty: "Dental assistant",
    experience: "7+ Years Experience",
     image: "/images/doctor/Afsana.png",
    tags: ["Invisalign", "Braces"],
  },
  {
    name: "Dr. Astha subba",
    specialty: "Pediatric Dentist",
    experience: "4+ Years Experience",
    image: "/images/doctor/Astha.png",
    tags: ["Root Canal", "Teeth Cleaning"],
  },
];

export default function Specialists() {
  return (
    <section className="w-full bg-[#030914] text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">
        
        {/* HEADER BLOCK (Matching image_6271be.jpg Header Layout) */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[4px] text-[#d4af37]">
            CLINICAL EXPERTS
          </span>
          
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-wide leading-tight text-white">
            Our Dental <span className="text-[#d4af37]">Specialists</span>
          </h2>
          
          {/* Centered Decorative Tooth Divider */}
          <div className="mt-4 flex items-center justify-center gap-3 w-full max-w-[280px]">
            <div className="h-[1px] bg-gradient-to-r from-transparent to-white/20 flex-1" />
            <span className="text-[#d4af37] text-xs">🎓</span>
            <div className="h-[1px] bg-gradient-to-l from-transparent to-white/20 flex-1" />
          </div>

          <p className="mt-4 text-gray-400 text-[14.5px] max-w-2xl leading-relaxed">
            Meet our certified board-chosen professionals who blend healthcare precision with luxury patient care.
          </p>
        </div>

        {/* HIGH-END MEDICAL TEAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {specialists.map((doc, idx) => (
            <div
              key={idx}
              className="group bg-[#051124]/40 border border-white/5 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:border-[#d4af37]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between"
            >
              
              {/* Doctor Image Header Wrapper */}
              <div className="relative w-full aspect-[4/5] bg-slate-900 overflow-hidden">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Floating Experience Year Ribbon */}
                <div className="absolute bottom-4 left-4 bg-[#030914]/90 backdrop-blur-md border border-[#d4af37]/30 text-[#f5c343] px-3 py-1 rounded-md text-[11px] font-bold tracking-wide shadow-md">
                  {doc.experience}
                </div>

                {/* Dark Inner Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030914]/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Specialist Meta Text Block */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Name and Designation */}
                  <h3 className="text-[18px] font-bold text-white tracking-wide group-hover:text-[#d4af37] transition-colors duration-200">
                    {doc.name}
                  </h3>
                  <p className="text-[13px] text-gray-400 mt-1 font-medium">
                    {doc.specialty}
                  </p>

                  {/* Operational Tags Render */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {doc.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-[10.5px] font-semibold bg-[#d4af37]/5 border border-[#d4af37]/20 text-[#f5c343] px-2.5 py-0.5 rounded-md uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Separator & Appointment Router Line */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href="/appointment"
                    className="text-[12.5px] font-bold text-gray-300 group-hover:text-white flex items-center gap-1.5 transition-colors duration-200"
                  >
                    Request Consultation <span className="text-[#d4af37] transition-transform group-hover:translate-x-1">➔</span>
                  </Link>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
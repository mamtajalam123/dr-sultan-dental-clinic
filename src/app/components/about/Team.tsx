"use client";

import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Dr.Tipu sultan",
    role: "Chief Dental Surgeon & Founder",
    degree: "BDS, MDS (Dental Surgeon)",
    image: "/images/doctor/tipul.png", // अपनी इमेज पाथ से बदलें
    icon: "👑",
  },
  {
    name: "Dr. Antara Das",
    role: "General Dentist",
    degree: "BDS (Smile Design Specialist)",
    image:"/images/doctor/Antara.png",
    icon: "✨",
  },
  {
    name: "Dr. Afsana parvin",
    role: "Dental assistant",
    degree: "BDS (Orthodontics & Dentofacial)",
    image: "/images/doctor/Afsana.png",
    icon: "😬",
  },
  {
    name: "Dr. Astha subba",
    role: "Receptionist",
    degree: "",
    image: "/images/doctor/Astha.png",
    icon: "🦷",
  },
];

export default function Team() {
  return (
    <section className="w-full bg-[#030914] text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">
        
        {/* HEADER BLOCK (Matching image_6271be.jpg Header Style) */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[4px] text-[#d4af37]">
            OUR SPECIALISTS
          </span>
          
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-wide leading-tight text-white">
            Meet Our Expert <span className="text-[#d4af37]">Medical Team</span>
          </h2>
          
          {/* Centered Tooth Divider */}
          <div className="mt-4 flex items-center justify-center gap-3 w-full max-w-[280px]">
            <div className="h-[1px] bg-gradient-to-r from-transparent to-white/20 flex-1" />
            <span className="text-[#d4af37] text-xs">🦷</span>
            <div className="h-[1px] bg-gradient-to-l from-transparent to-white/20 flex-1" />
          </div>

          <p className="mt-4 text-gray-400 text-[14.5px] max-w-2xl leading-relaxed">
            Our team of highly qualified and globally certified dental specialists is dedicated to providing you with pain-free, premium treatment.
          </p>
        </div>

        {/* TEAM GRID LAYOUT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((doctor, idx) => (
            <div
              key={idx}
              className="group bg-[#051124]/40 border border-white/5 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:border-[#d4af37]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:-translate-y-1"
            >
              {/* Profile Image Container */}
              <div className="relative w-full aspect-[4/5] bg-slate-900 overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Floating Micro Icon Badge */}
                <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-[#030914]/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-sm z-10">
                  {doctor.icon}
                </div>

                {/* Bottom Overlay Gradient inside image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#051124] via-transparent to-transparent opacity-80" />
              </div>

              {/* Doctor Details Block */}
              <div className="p-6">
                <h3 className="text-[18px] font-bold text-white tracking-wide group-hover:text-[#d4af37] transition-colors">
                  {doctor.name}
                </h3>
                
                <p className="text-[12px] font-bold text-[#d4af37] uppercase tracking-wider mt-1">
                  {doctor.role}
                </p>
                
                <p className="text-[13px] text-gray-400 mt-2 font-medium">
                  {doctor.degree}
                </p>

                {/* Custom Divider inside Card */}
                <div className="my-4 h-[1px] w-full bg-white/5 group-hover:bg-[#d4af37]/20 transition-colors" />

                {/* Quick Consultation Booking Action Trigger */}
                <div className="flex items-center justify-between">
                  <Link
                    href="/appointment"
                    className="text-[12.5px] font-bold text-gray-300 group-hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    Book Appointment <span className="text-[#d4af37]">➔</span>
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
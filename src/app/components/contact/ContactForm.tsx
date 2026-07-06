"use client";

import Image from "next/image";
import { CalendarDays, Clock3, Mail, Phone, User, ChevronDown } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="w-full bg-[#030914] text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">

        {/* HEADER BLOCK */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[4px] text-[#d4af37]">
            APPOINTMENT REQUEST
          </span>
          
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-wide leading-tight text-white">
            Schedule Your <span className="text-[#d4af37]">Visit</span>
          </h2>
          
          {/* Decorative Tooth Divider */}
          <div className="mt-4 flex items-center justify-center gap-3 w-full max-w-[280px]">
            <div className="h-[1px] bg-gradient-to-r from-transparent to-white/20 flex-1" />
            <span className="text-[#d4af37] text-xs">🦷</span>
            <div className="h-[1px] bg-gradient-to-l from-transparent to-white/20 flex-1" />
          </div>

          <p className="mt-4 text-gray-400 text-[14.5px] max-w-2xl leading-relaxed">
            Fill out the form below and our concierge team will contact you shortly to confirm your premium dental suite reservation.
          </p>
        </div>

        {/* CORE GRID: FORM & IMAGE VIEW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-7xl mx-auto items-center">

          {/* LEFT CONTENT: LUXURY GLASSMORPHIC FORM CARD */}
          <div className="lg:col-span-7 rounded-2xl bg-[#051124]/40 border border-white/5 p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            {/* Visual Corner Highlights */}
            <div className="absolute top-0 left-0 w-24 h-[1px] bg-gradient-to-r from-[#d4af37]/20 to-transparent" />
            <div className="absolute top-0 left-0 w-[1px] h-24 bg-gradient-to-b from-[#d4af37]/20 to-transparent" />

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>

              {/* Name Input */}
              <div className="relative group">
                <User className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#d4af37]/70 group-focus-within:text-[#f5c343] transition-colors duration-300" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-13 w-full rounded-xl border border-white/10 bg-[#030914]/60 text-[14px] text-white pl-13 pr-5 outline-none transition-all duration-300 focus:border-[#d4af37] focus:bg-[#030914] placeholder:text-gray-500"
                />
              </div>

              {/* Dual Row: Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Email Input */}
                <div className="relative group">
                  <Mail className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#d4af37]/70 group-focus-within:text-[#f5c343] transition-colors duration-300" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="h-13 w-full rounded-xl border border-white/10 bg-[#030914]/60 text-[14px] text-white pl-13 pr-5 outline-none transition-all duration-300 focus:border-[#d4af37] focus:bg-[#030914] placeholder:text-gray-500"
                  />
                </div>

                {/* Phone Input */}
                <div className="relative group">
                  <Phone className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#d4af37]/70 group-focus-within:text-[#f5c343] transition-colors duration-300" />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="h-13 w-full rounded-xl border border-white/10 bg-[#030914]/60 text-[14px] text-white pl-13 pr-5 outline-none transition-all duration-300 focus:border-[#d4af37] focus:bg-[#030914] placeholder:text-gray-500"
                  />
                </div>
              </div>

              {/* Custom Dropdown Container */}
              <div className="relative group">
                <select className="h-13 w-full appearance-none rounded-xl border border-white/10 bg-[#030914]/60 text-[14px] text-gray-300 px-5 outline-none transition-all duration-300 focus:border-[#d4af37] focus:bg-[#030914]">
                  <option className="bg-[#030914] text-gray-400">Select Treatment</option>
                  <option className="bg-[#030914] text-white">General Dentistry</option>
                  <option className="bg-[#030914] text-white">Dental Implants</option>
                  <option className="bg-[#030914] text-white">Smile Makeover</option>
                  <option className="bg-[#030914] text-white">Orthodontics</option>
                  <option className="bg-[#030914] text-white">Teeth Whitening</option>
                  <option className="bg-[#030914] text-white">Emergency Dental Care</option>
                </select>
                <ChevronDown className="absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Date Input */}
                <div className="relative group">
                  <CalendarDays className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#d4af37]/70 group-focus-within:text-[#f5c343] transition-colors duration-300" />
                  <input
                    type="date"
                    className="h-13 w-full rounded-xl border border-white/10 bg-[#030914]/60 text-[14px] text-gray-300 pl-13 pr-5 outline-none transition-all duration-300 focus:border-[#d4af37] focus:bg-[#030914] [color-scheme:dark]"
                  />
                </div>

                {/* Time Input */}
                <div className="relative group">
                  <Clock3 className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#d4af37]/70 group-focus-within:text-[#f5c343] transition-colors duration-300" />
                  <input
                    type="time"
                    className="h-13 w-full rounded-xl border border-white/10 bg-[#030914]/60 text-[14px] text-gray-300 pl-13 pr-5 outline-none transition-all duration-300 focus:border-[#d4af37] focus:bg-[#030914] [color-scheme:dark]"
                  />
                </div>
              </div>

              {/* Message Box */}
              <textarea
                rows={4}
                placeholder="Tell us about your dental concern..."
                className="w-full rounded-xl border border-white/10 bg-[#030914]/60 text-[14px] text-white p-5 outline-none transition-all duration-300 focus:border-[#d4af37] focus:bg-[#030914] placeholder:text-gray-500 resize-none"
              />

              {/* Luxury CTA Button */}
              <button
                type="submit"
                className="w-full h-[52px] rounded-xl bg-[#d4af37] text-slate-950 font-bold text-[14px] tracking-wide transition-all duration-300 hover:bg-[#f5c343] hover:scale-[1.01] shadow-[0_10px_30px_rgba(212,175,55,0.15)]"
              >
                Book Appointment
              </button>

            </form>
          </div>

          {/* RIGHT CONTENT: CLINIC PREVIEW WITH CORNER FLOAT CARD */}
          <div className="lg:col-span-5 relative group h-full min-h-[400px] lg:min-h-[560px]">
            {/* Soft Ambient Glow behind Image */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#d4af37]/10 to-transparent blur-lg opacity-40 transition duration-1000 group-hover:opacity-60" />
            
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/5 bg-[#051124]/20 shadow-2xl">
              <Image
                src="/images/doctor/tipul.png"
                alt="Dr Sultan Dental Clinic Environment"
                width={700}
                height={800}
                priority
                className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105"
              />
            </div>

            {/* FLOATING SOCIAL PROOF CARD */}
            <div className="absolute bottom-6 left-6 rounded-xl bg-[#030914]/80 border border-white/10 p-5 backdrop-blur-md shadow-2xl">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#d4af37] tracking-tight">
                12,000+
              </h3>
              <p className="mt-1 text-[12px] uppercase tracking-[1px] text-gray-400 font-medium">
                Happy Smiles Crafted
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
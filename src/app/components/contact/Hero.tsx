"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Calendar,
  Phone,
  MapPin,
  Clock3,
  HelpCircle,
} from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center bg-[#030914] text-white pt-24 pb-20 overflow-hidden border-b border-white/5">
      
      {/* 1. ULTRA-PREMIUM BACKGROUND IMMERSION IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact/hero.jpg" // अपने इमेज एसेट पाथ से बदलें
          alt="Contact Dr Sultan Dental Care"
          fill
          priority
          className="object-cover object-center brightness-[0.4] contrast-[1.05]"
        />
        
        {/* Cinematic Multi-angle Ambient Gradient Grids */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030914] via-[#030914]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-transparent to-black/30" />
      </div>

      {/* 2. REAL CONTENT STRUCTURAL MATRIX CONTAINER */}
      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE BLOCK: TYPOGRAPHY BRANDING METRICS */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Minimal Luxury Breadcrumb Navigation Route */}
            <div className="mb-6 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[12px] sm:text-[13px] font-medium tracking-wide backdrop-blur-md">
              <Link href="/" className="text-gray-400 hover:text-[#d4af37] transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 text-[#d4af37]" />
              <span className="text-[#d4af37] font-semibold">Contact</span>
            </div>

            {/* Small Title */}
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[4px] text-[#d4af37]">
              CONCIERGE DESK
            </span>

            {/* Big Typography Header Layout */}
            <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-wide leading-[1.1] text-white">
              Let's Talk About <br />
              <span className="text-[#d4af37]">Your Smile</span>
            </h1>

            {/* Accent Gold Vector Divider */}
            <div className="mt-5 h-[1.5px] w-20 bg-gradient-to-r from-[#d4af37] via-[#d4af37]/40 to-transparent rounded-full" />

            {/* Description Text */}
            <p className="mt-6 text-gray-300 text-sm sm:text-[15.5px] leading-relaxed max-w-xl opacity-90">
              Whether you need a routine check-up, advanced cosmetic transformations, or emergency treatment loops, our MDS surgeons are here to secure your clinical perfection.
            </p>

            {/* Core Operation Action Buttons Grid */}
            <div className="mt-10 flex flex-wrap gap-4 w-full sm:w-auto">
              <Link
                href="/appointment"
                className="inline-flex h-[52px] px-8 items-center justify-center rounded-xl bg-[#d4af37] text-slate-950 font-bold text-[14px] tracking-wide transition-all duration-300 hover:bg-[#f5c343] hover:scale-[1.02] shadow-[0_15px_30px_rgba(212,175,55,0.25)]"
              >
                <Calendar className="mr-2.5 h-4 w-4 stroke-[2.5]" />
                Book Consultation
              </Link>

              <Link
                href="tel:+919876543210"
                className="inline-flex h-[52px] px-8 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-bold text-[14px] tracking-wide text-white transition-all duration-300 hover:border-[#d4af37]/40 hover:bg-[#051124]/40"
              >
                <Phone className="mr-2.5 h-4 w-4 text-[#d4af37]" />
                Connect Privately
              </Link>
            </div>

          </div>

          {/* RIGHT SIDE BLOCK: DOCKED INFRASTRUCTURE FLUID PANEL */}
          <div className="lg:col-span-5 relative w-full flex justify-end pt-8 lg:pt-0">
            
            {/* Core Card with Glassmorphism Layer Frame */}
            <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#051124]/60 p-6 sm:p-8 backdrop-blur-xl shadow-[0_30px_70px_rgba(0,0,0,0.5)] relative">
              
              <h3 className="font-serif text-2xl font-bold text-white tracking-wide border-b border-white/5 pb-4 flex items-center justify-between">
                <span>Visit Our Clinic</span>
                <HelpCircle className="h-5 w-5 text-[#d4af37] opacity-60" />
              </h3>

              {/* Meta Parameters Stack */}
              <div className="mt-6 space-y-6">

                {/* Parameter block 1: Address */}
                <div className="flex gap-4 items-start">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#f5c343]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold uppercase tracking-wider text-gray-400">
                      Clinic Location
                    </h4>
                    <p className="mt-1 text-[14px] text-gray-200 leading-relaxed font-medium">
                      Champasari main road, <br />
                      siliguri,West bengal.
                    </p>
                  </div>
                </div>

                {/* Parameter block 2: Contact */}
                <div className="flex gap-4 items-start">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#f5c343]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold uppercase tracking-wider text-gray-400">
                      Direct Hotlines
                    </h4>
                    <p className="mt-1 text-[14px] text-gray-200 font-medium">
                      +91 8637553770
                    </p>
                  </div>
                </div>

                {/* Parameter block 3: Hours */}
                <div className="flex gap-4 items-start">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#f5c343]">
                    <Clock3 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold uppercase tracking-wider text-gray-400">
                      Operational Hours
                    </h4>
                    <p className="mt-1 text-[14px] text-gray-200 font-medium leading-relaxed">
                      Monday – Saturday <br />
                      <span className="text-[#f5c343] font-mono text-[13px]">09:00 AM – 08:00 PM</span>
                    </p>
                  </div>
                </div>

              </div>

              {/* FLOATING EMERGENCY FLOATING OVERLAP STRIP (Optimized Positioning) */}
              <div className="mt-8 border-t border-white/5 pt-5 flex items-center justify-between w-full bg-gradient-to-r from-[#d4af37]/10 to-transparent p-4 rounded-xl border border-[#d4af37]/20">
                <div className="flex flex-col items-start">
                  <span className="text-[10px] font-bold text-[#f5c343] uppercase tracking-[1.5px]">
                    EMERGENCY CARE
                  </span>
                  <span className="text-[15px] font-bold text-white mt-0.5">
                    24/7 Surgical Support
                  </span>
                </div>
                <Link 
                  href="tel:+919876543210" 
                  className="font-mono text-[13px] font-bold bg-[#d4af37] text-slate-950 px-3 py-1.5 rounded-lg hover:bg-[#f5c343] transition-colors"
                >
                  Call 24/7
                </Link>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
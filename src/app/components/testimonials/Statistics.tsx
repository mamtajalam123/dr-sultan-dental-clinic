"use client";

import {
  Star,
  Users,
  Smile,
  Award,
} from "lucide-react";

const stats = [
  {
    icon: Star,
    number: "4.9/5",
    title: "Average Rating",
    description: "Based on 500+ verified Google reviews.",
  },
  {
    icon: Users,
    number: "12,000+",
    title: "Happy Patients",
    description: "Successfully treated patients over the years.",
  },
  {
    icon: Smile,
    number: "98%",
    title: "Success Rate",
    description: "Excellent outcomes with advanced dental care.",
  },
  {
    icon: Award,
    number: "10+",
    title: "Years Experience",
    description: "Providing trusted dental care with expertise.",
  },
];

export default function Statistics() {
  return (
    <section className="w-full bg-[#030914] text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">
        
        {/* HEADER BLOCK (Matching Luxury Theme Layout Exact) */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[4px] text-[#d4af37]">
            TRUSTED BY THOUSANDS
          </span>
          
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-wide leading-tight text-white">
            Our Numbers Speak <span className="text-[#d4af37]">for Themselves</span>
          </h2>
          
          {/* Centered Decorative Tooth Divider */}
          <div className="mt-4 flex items-center justify-center gap-3 w-full max-w-[280px]">
            <div className="h-[1px] bg-gradient-to-r from-transparent to-white/20 flex-1" />
            <span className="text-[#d4af37] text-xs">🦷</span>
            <div className="h-[1px] bg-gradient-to-l from-transparent to-white/20 flex-1" />
          </div>

          <p className="mt-4 text-gray-400 text-[14.5px] max-w-2xl leading-relaxed">
            Every smile we create reflects our commitment to excellence, patient satisfaction, and world-class dental care.
          </p>
        </div>

        {/* PREMIUM METRIC CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative bg-[#051124]/40 border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-[#d4af37]/40 hover:bg-[#051124]/60 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              >
                {/* Gold Micro Icon Container */}
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#d4af37]/5 border border-[#d4af37]/20 transition-all duration-300 group-hover:bg-[#d4af37] group-hover:text-slate-950 text-[#f5c343]">
                  <Icon className="h-7 w-7 transition-colors duration-300" />
                </div>

                {/* Big Metric Numbers */}
                <h3 className="mt-6 font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight group-hover:text-[#d4af37] transition-colors duration-200">
                  {item.number}
                </h3>

                {/* Subtitle */}
                <h4 className="mt-2 text-[16px] font-bold tracking-wide text-gray-200">
                  {item.title}
                </h4>

                {/* Short Accent line inside card */}
                <div className="mt-3 mb-3 h-[1px] w-6 bg-[#d4af37]/20 group-hover:w-12 transition-all duration-300 rounded-full" />

                {/* Description Text */}
                <p className="text-[13px] text-gray-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* DOCKED BOTTOM BANNER PANEL */}
        <div className="mt-16 sm:mt-20 rounded-2xl bg-[#051124]/30 border border-white/5 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          {/* Subtle Golden Glow Element */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
          
          <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-white">
            Your Smile Is Our <span className="text-[#d4af37]">Greatest Achievement</span>
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-[14px] leading-relaxed text-gray-400">
            With thousands of successful treatments, experienced specialists, and modern technology, we continue to earn the trust of patients seeking exceptional dental care.
          </p>
        </div>

      </div>
    </section>
  );
}
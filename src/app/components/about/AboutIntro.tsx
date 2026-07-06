"use client";

import Image from "next/image";
import Link from "next/link";

export default function  AboutIntro() {
  return (
    <section className="w-full bg-[#030914] text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">
        
        {/* UPPER CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: THE COMPOSED MULTI-IMAGE PANEL */}
          <div className="lg:col-span-6 relative w-full flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[500px] aspect-[1/1] sm:aspect-[4/4]">
              
              {/* 1. Main Background Image (Dental Chair Operatory Room) */}
              <div className="absolute top-0 left-0 w-[90%] h-[90%] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/about/dental-chair.png" // अपनी चेयर इमेज का पाथ डालें
                  alt="Dr. Sultan Dental Care Treatment Room"
                  fill
                  className="object-cover"
                />
              </div>

              {/* 2. Overlapping Bottom-Right Image (Reception Counter) */}
              <div className="absolute bottom-0 right-0 w-[50%] h-[50%] rounded-2xl overflow-hidden border-2 border-[#d4af37]/40 shadow-2xl z-10">
                <Image
                  src="/images/about/clinic-reception.png"
                  alt="Luxury Reception Counter"
                  fill
                  className="object-cover"
                />
              </div>

              {/* 3. Luxury 15+ Years Experience Badge (Bottom-Left) */}
              <div className="absolute bottom-[5%] left-[-4%] z-20 bg-gradient-to-b from-[#1a1508] to-[#070502] border border-[#d4af37]/60 rounded-full w-28 h-28 sm:w-32 sm:h-32 flex flex-col items-center justify-center text-center p-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                <span className="text-2xl sm:text-3xl font-serif font-extrabold text-[#f5c343] leading-none">10+</span>
                <span className="text-[9px] sm:text-[10px] text-gray-300 font-bold uppercase tracking-wider mt-1">Years Of</span>
                <span className="text-[9px] sm:text-[10px] text-[#f5c343] font-bold uppercase tracking-wider leading-none">Experience</span>
                {/* Ribbon Accent Tail Effect */}
                <div className="absolute -bottom-3 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[14px] border-t-[#070502]" />
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: TEXT CONTENT & VALUE PROPOSITIONS */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[4px] text-[#d4af37]">
              ABOUT US
            </span>
            
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-wide leading-tight text-white">
              About Dr. Sultan <br />
              <span className="text-[#d4af37]">Dental Care</span>
            </h2>
            
            {/* Minimalist Tooth Centered Divider Accent */}
            <div className="mt-4 flex items-center gap-3 w-full max-w-[280px]">
              <div className="h-[1px] bg-gradient-to-r from-transparent to-white/20 flex-1" />
              <span className="text-[#d4af37] text-xs">🦷</span>
              <div className="h-[1px] bg-gradient-to-l from-transparent to-white/20 flex-1" />
            </div>

            <p className="mt-6 text-gray-300 text-[14.5px] leading-relaxed opacity-90 text-justify">
              At Dr. Sultan Dental Care, we are committed to providing world-class dental treatments in a comfortable, friendly, and hygienic environment. Our experienced dentists use advanced technology and modern techniques to deliver the best care and create healthy, beautiful smiles.
            </p>

            {/* 2-Column Checkmark Grid Array */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 w-full">
              {[
                "Experienced & Certified Dentists",
                "Painless & Comfortable Care",
                "Advanced Dental Technology",
                "Sterilized & Hygienic Environment",
                "Personalized Treatment Plans",
                "Transparent Pricing"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full border border-[#d4af37]/60 flex items-center justify-center text-[11px] text-[#f5c343] bg-[#d4af37]/5">
                    ✓
                  </div>
                  <span className="text-[14px] text-gray-200 font-medium tracking-wide">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button Link */}
            <Link
              href="/about"
              className="mt-10 inline-flex h-[48px] px-8 items-center justify-center rounded-md bg-[#d4af37] hover:bg-[#e6be44] text-slate-950 font-bold text-[13px] tracking-wide transition-all duration-200 rounded shadow-lg group"
            >
              Learn More About Us <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">➔</span>
            </Link>

          </div>

        </div>

        {/* BOTTOM FULL-WIDTH STATISTICS DOCK BAR CARD */}
        <div className="mt-16 sm:mt-20 lg:mt-24 w-full bg-[#051124]/40 border border-white/5 rounded-2xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-4 items-center text-center division-lines">
            
            {[
              { val: "10+", label: "Years of Experience", icon: "⭐" },
              { val: "12K+", label: "Happy Patients", icon: "👥" },
              { val: "15+", label: "Expert Dentists", icon: "👨‍⚕️" },
              { val: "5000+", label: "Successful Implants", icon: "🦷" },
              { val: "98%", label: "Patient Satisfaction", icon: "😊" },
              { val: "100%", label: "Sterilized Environment", icon: "🛡️" }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center px-2 relative group">
                {/* Clean Micro Icon Wrapper */}
                <div className="text-xl mb-2 text-[#d4af37] opacity-80 group-hover:scale-110 transition-transform duration-200">
                  {stat.icon}
                </div>
                {/* Big Metric Output Text */}
                <span className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                  {stat.val}
                </span>
                {/* Description Tag Label */}
                <span className="text-[12px] text-gray-400 mt-1.5 leading-snug max-w-[120px]">
                  {stat.label}
                </span>
                
                {/* Responsive Internal Vertical Grid Border Lines */}
                {idx < 5 && (
                  <div className="hidden lg:block absolute right-0 top-1/4 h-1/2 w-[1px] bg-white/10" />
                )}
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
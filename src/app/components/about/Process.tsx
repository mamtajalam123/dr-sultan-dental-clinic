"use client";

const steps = [
  {
    num: "01",
    title: "Book Appointment",
    desc: "Schedule your visit easily via our website or call us directly. Pick a premium time slot that fits your busy lifestyle seamlessly.",
  },
  {
    num: "02",
    title: "Clinical Examination",
    desc: "Our expert dentists perform a thorough 3D diagnostic scan and dental check-up using state-of-the-art non-invasive technology.",
  },
  {
    num: "03",
    title: "Personalized Plan",
    desc: "Receive a transparent, tailormade treatment plan suited exactly to your goals with absolute clarity on pricing and timelines.",
  },
  {
    num: "04",
    title: "Premium Treatment",
    desc: "Sit back and experience painless, world-class dental care in a completely sterile, comfortable, and luxury clinical environment.",
  },
];

export default function Process() {
  return (
    <section className="w-full bg-[#030914] text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">
        
        {/* HEADER BLOCK (Matching image_6271be.jpg Layout) */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[4px] text-[#d4af37]">
            YOUR JOURNEY
          </span>
          
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-wide leading-tight text-white">
            Our Simple 4-Step <span className="text-[#d4af37]">Treatment Process</span>
          </h2>
          
          {/* Centered Decorative Accent Line */}
          <div className="mt-4 flex items-center justify-center gap-3 w-full max-w-[280px]">
            <div className="h-[1px] bg-gradient-to-r from-transparent to-white/20 flex-1" />
            <span className="text-[#d4af37] text-xs">✨</span>
            <div className="h-[1px] bg-gradient-to-l from-transparent to-white/20 flex-1" />
          </div>

          <p className="mt-4 text-gray-400 text-[14.5px] max-w-2xl leading-relaxed">
            We ensure a seamless and anxiety-free experience from the moment you step into our clinic to your final beautiful smile.
          </p>
        </div>

        {/* CONNECTED TIMELINE PROCESS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Decorative Horizontal Flow Line (Hidden on Mobile/Tablet screens) */}
          <div className="hidden lg:block absolute top-[2.25rem] left-12 right-12 h-[1px] bg-gradient-to-r from-[#d4af37]/40 via-white/10 to-transparent z-0" />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-start relative z-10"
            >
              {/* Number Badge Block with Gold Accents */}
              <div className="h-11 w-11 rounded-xl bg-[#051124] border border-white/10 flex items-center justify-center font-serif text-base font-bold text-[#d4af37] transition-all duration-300 group-hover:border-[#d4af37]/60 group-hover:bg-[#d4af37] group-hover:text-slate-950 shadow-md">
                {step.num}
              </div>

              {/* Step Info Content Box */}
              <div className="mt-6 w-full bg-[#051124]/20 border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:border-[#d4af37]/20 hover:bg-[#051124]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                
                {/* Title */}
                <h3 className="text-[17px] font-bold text-white tracking-wide group-hover:text-[#d4af37] transition-colors duration-200">
                  {step.title}
                </h3>
                
                {/* Custom internal accent dot line */}
                <div className="mt-2.5 mb-4 h-[1px] w-8 bg-[#d4af37]/30 group-hover:w-16 transition-all duration-300 rounded-full" />

                {/* Description */}
                <p className="text-[13.5px] text-gray-400 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
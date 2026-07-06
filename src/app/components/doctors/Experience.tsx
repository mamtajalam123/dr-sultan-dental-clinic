"use client";

import Link from "next/link";

const clinicalMetrics = [
  { label: "Clinical Surgery Precision", percentage: "99.4%" },
  { label: "Smile Transformation Design", percentage: "98.7%" },
  { label: "Painless Treatment Execution", percentage: "96.2%" },
];

export default function Experience() {
  return (
    <section className="w-full bg-[#030914] text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: METRICS & PROGRESSION TRACKS */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[4px] text-[#d4af37]">
              OUR COMPETENCE
            </span>
            
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-wide leading-tight text-white">
              10+ Years of Clinical <br />
              <span className="text-[#d4af37]">Precision & Mastery</span>
            </h2>
            
            <div className="mt-4 mb-6 h-[1.5px] w-20 bg-gradient-to-r from-[#d4af37] via-[#d4af37]/40 to-transparent rounded-full" />

            <p className="text-gray-400 text-[14.5px] leading-relaxed max-w-xl text-justify">
              With over a decade and a half of executing advanced maxillofacial surgeries and cosmetic smile transformations, Dr. Sultan Dental Care balances pure medical science with elite patient comfort.
            </p>

            {/* Premium Gold Progress Bars Block */}
            <div className="mt-8 space-y-6 w-full max-w-xl">
              {clinicalMetrics.map((metric, idx) => (
                <div key={idx} className="w-full">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[14px] font-medium tracking-wide text-gray-200">
                      {metric.label}
                    </span>
                    <span className="text-[13px] font-bold font-serif text-[#f5c343]">
                      {metric.percentage}
                    </span>
                  </div>
                  
                  {/* Progress Bar Track */}
                  <div className="h-[4px] w-full bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#d4af37] to-[#f5c343] rounded-full transition-all duration-1000 ease-out"
                      style={{ width: metric.percentage }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: TIMELINE HIGHLIGHT BOXES */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            
            {/* Box 1: Advanced Tech */}
            <div className="bg-[#051124]/40 border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:border-[#d4af37]/20">
              <div className="text-2xl mb-4 text-[#d4af37]">🔬</div>
              <h3 className="text-[17px] font-bold text-white tracking-wide">
                3D Digital Imaging
              </h3>
              <p className="mt-2 text-[13px] text-gray-400 leading-relaxed">
                Using non-invasive CBCT scans for exact structural analysis before execution.
              </p>
            </div>

            {/* Box 2: Elite Hygiene */}
            <div className="bg-[#051124]/40 border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:border-[#d4af37]/20">
              <div className="text-2xl mb-4 text-[#d4af37]">🛡️</div>
              <h3 className="text-[17px] font-bold text-white tracking-wide">
                Class-B Autoclave
              </h3>
              <p className="mt-2 text-[13px] text-gray-400 leading-relaxed">
                100% strict European standard sterilization loops for absolute safety.
              </p>
            </div>

            {/* Box 3: Master Doctors */}
            <div className="bg-[#051124]/40 border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:border-[#d4af37]/20">
              <div className="text-2xl mb-4 text-[#d4af37]">👨‍⚕️</div>
              <h3 className="text-[17px] font-bold text-white tracking-wide">
                Board Certified
              </h3>
              <p className="mt-2 text-[13px] text-gray-400 leading-relaxed">
                Treatments performed solely by MDS surgeons and globally qualified specialists.
              </p>
            </div>

            {/* Box 4: Post Care */}
            <div className="bg-[#051124]/40 border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:border-[#d4af37]/20">
              <div className="text-2xl mb-4 text-[#d4af37]">✨</div>
              <h3 className="text-[17px] font-bold text-white tracking-wide">
                Lifetime Support
              </h3>
              <p className="mt-2 text-[13px] text-gray-400 leading-relaxed">
                Comprehensive follow-up schedules ensuring perfect recovery and healing stability.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
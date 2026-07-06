"use client";

const awardsData = [
  {
    year: "2025",
    title: "Trusted Dental Care Excellence",
    body: "Dr. Sultan Dental Care, Siliguri",
    desc: "Recognized by thousands of satisfied patients for providing high-quality dental care with advanced technology, strict hygiene protocols, and compassionate treatment.",
    icon: "🏆",
  },
  {
    year: "2024",
    title: "Excellence in Dental Implants",
    body: "Advanced Implant Dentistry",
    desc: "Successfully restoring smiles with modern dental implant solutions, ensuring long-lasting function, comfort, and natural aesthetics for every patient.",
    icon: "🦷",
  },
  {
    year: "2023",
    title: "Advanced Cosmetic Dentistry",
    body: "Smile Makeover & Aesthetic Dentistry",
    desc: "Delivering confident smiles through teeth whitening, veneers, smile designing, and minimally invasive cosmetic dental procedures.",
    icon: "✨",
  },
  {
    year: "2022",
    title: "Patient Trust & Satisfaction",
    body: "Community Recognition",
    desc: "Appreciated by patients across Siliguri and nearby regions for friendly staff, painless treatments, transparent consultations, and personalized dental care.",
    icon: "🤝",
  },
];

export default function Awards() {
  return (
    <section className="w-full bg-[#030914] text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[4px] text-[#d4af37]">
            WHY CHOOSE US
          </span>

          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-wide leading-tight text-white">
            Excellence in <span className="text-[#d4af37]">Dental Care</span>
          </h2>

          <div className="mt-4 flex items-center justify-center gap-3 w-full max-w-[280px]">
            <div className="h-[1px] bg-gradient-to-r from-transparent to-white/20 flex-1" />
            <span className="text-[#d4af37] text-xs">⭐</span>
            <div className="h-[1px] bg-gradient-to-l from-transparent to-white/20 flex-1" />
          </div>

          <p className="mt-4 text-gray-400 text-[14.5px] max-w-2xl leading-relaxed">
            At Dr. Sultan Dental Care, we are committed to delivering safe,
            modern, and patient-focused dental treatments. Our experienced team
            combines advanced technology with compassionate care to create
            healthy, confident smiles.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {awardsData.map((award, idx) => (
            <div
              key={idx}
              className="group bg-[#051124]/40 border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#d4af37]/30 hover:bg-[#051124]/70 shadow-xl relative overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 text-7xl opacity-[0.02] text-[#d4af37] select-none pointer-events-none group-hover:opacity-[0.05] transition-all duration-500 group-hover:scale-110">
                {award.icon}
              </div>

              <div>
                <div className="flex items-center justify-between w-full mb-6">
                  <span className="text-[11px] font-bold font-mono bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#f5c343] px-3 py-1 rounded-md">
                    {award.year}
                  </span>

                  <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg group-hover:bg-[#d4af37]/10 group-hover:border-[#d4af37]/30 transition-colors">
                    {award.icon}
                  </div>
                </div>

                <h3 className="text-[18px] font-serif font-bold text-white tracking-wide group-hover:text-[#d4af37] transition-colors duration-200">
                  {award.title}
                </h3>

                <p className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mt-1.5 leading-snug">
                  {award.body}
                </p>

                <div className="mt-4 mb-4 h-[1px] w-8 bg-[#d4af37]/20 group-hover:w-16 transition-all duration-300 rounded-full" />

                <p className="text-[13.5px] text-gray-400 leading-relaxed text-justify">
                  {award.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-end">
                <span className="text-[10px] font-bold text-[#f5c343] uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                  Trusted Dental Care ★
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
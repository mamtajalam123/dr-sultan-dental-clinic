"use client";

const qualificationsData = [
  {
    degree: "Bachelor of Dental Surgery (BDS)",
    institution: "Recognized Dental College, India",
    year: "20XX",
    field: "General Dentistry & Oral Healthcare",
    note:
      "Completed comprehensive training in preventive, restorative, prosthetic, pediatric, and oral surgical dentistry.",
  },
  {
    degree: "Advanced Training in Root Canal Treatment",
    institution: "Certified Continuing Dental Education Program",
    year: "20XX",
    field: "Endodontic Procedures & Microscopic Dentistry",
    note:
      "Specialized in painless root canal therapy using modern rotary endodontic techniques and precision-based treatment.",
  },
  {
    degree: "Certification in Dental Implantology",
    institution: "Certified Implant Training Institute, India",
    year: "20XX",
    field: "Dental Implants & Prosthetic Rehabilitation",
    note:
      "Advanced clinical training in single-tooth implants, full-mouth rehabilitation, and implant-supported restorations.",
  },
  {
    degree: "Certification in Cosmetic & Aesthetic Dentistry",
    institution: "Continuing Dental Education Program",
    year: "20XX",
    field: "Smile Design • Teeth Whitening • Veneers",
    note:
      "Professional training in digital smile designing, aesthetic restorations, composite bonding, and minimally invasive cosmetic dentistry.",
  },
];

export default function Qualifications() {
  return (
    <section className="w-full overflow-hidden border-t border-white/5 bg-[#030914] py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="text-[11px] font-bold uppercase tracking-[4px] text-[#d4af37] sm:text-[12px]">
            PROFESSIONAL QUALIFICATIONS
          </span>

          <h2 className="mt-2 font-serif text-3xl font-bold leading-tight tracking-wide text-white sm:text-4xl lg:text-[46px]">
            Academic & Clinical{" "}
            <span className="text-[#d4af37]">Qualifications</span>
          </h2>

          <div className="mt-4 flex w-full max-w-[280px] items-center justify-center gap-3">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/20" />
            <span className="text-xs text-[#d4af37]">🎓</span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/20" />
          </div>

          <p className="mt-4 max-w-2xl text-[14.5px] leading-relaxed text-gray-400">
            Our dental professionals are committed to continuous learning and
            evidence-based treatment, combining strong academic foundations with
            modern clinical expertise to provide safe, comfortable, and
            high-quality dental care.
          </p>
        </div>

        {/* Qualification Cards */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
          {qualificationsData.map((qual, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#051124]/40 p-6 shadow-xl transition-all duration-300 hover:border-[#d4af37]/30 hover:bg-[#051124]/60 sm:p-8"
            >
              {/* Watermark */}
              <div className="pointer-events-none absolute -bottom-2 -right-2 select-none font-serif text-6xl font-bold text-[#d4af37] opacity-[0.02] transition-opacity group-hover:opacity-[0.04]">
                {qual.year.slice(-4)}
              </div>

              <div className="flex flex-col gap-5">
                {/* Title */}
                <div className="flex flex-col justify-between gap-3 border-b border-white/5 pb-4 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-[18px] font-bold tracking-wide text-white transition-colors duration-200 group-hover:text-[#d4af37]">
                      {qual.degree}
                    </h3>

                    <p className="mt-1 text-[12px] font-bold uppercase tracking-wider text-[#d4af37]">
                      {qual.field}
                    </p>
                  </div>

                  <span className="self-start rounded-md border border-[#d4af37]/30 bg-[#d4af37]/10 px-3 py-1 font-mono text-[11px] font-bold whitespace-nowrap text-[#f5c343] sm:self-center">
                    {qual.year}
                  </span>
                </div>

                {/* Institution */}
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-[#d4af37]">📍</span>

                  <p className="text-[14px] font-medium leading-relaxed text-gray-300">
                    {qual.institution}
                  </p>
                </div>

                {/* Description */}
                <p className="border-l border-[#d4af37]/20 pl-5 text-[13.5px] italic leading-6 text-gray-400">
                  {qual.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";

const services = [
  {
    title: "General Dentistry",
    desc: "Complete oral care for you and your family",
    href: "/services/general-dentistry",
    icon: (
      <svg className="w-7 h-7 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.5 2 4 4.5 4 9c0 3.5 1.5 5.5 3 7.5.8 1 1 2 1 3.5v.5c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-.5c0-1.5.2-2.5 1-3.5 1.5-2 3-4 3-7.5 0-4.5-2.5-7-8-7z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9c1 0 2-.5 3-1.5M12 7.5c1 1 2 1.5 3 1.5" />
      </svg>
    ),
  },
  {
    title: "Cosmetic Dentistry",
    desc: "Enhance your smile with advanced cosmetic care",
    href: "/services/cosmetic-dentistry",
    icon: (
      <svg className="w-7 h-7 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 10c.5 1.5 2.5 2.5 5 2.5s4.5-1 5-2.5" />
        <path d="M9 7h.01M15 7h.01" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Dental Implants",
    desc: "Permanent & natural looking tooth replacement",
    href: "/services/dental-implants",
    icon: (
      <svg className="w-7 h-7 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v6M9 5h6M8 8h8M10 11h4M11 14h2M12 14v6" />
      </svg>
    ),
  },
  {
    title: "Orthodontics",
    desc: "Braces & aligners for perfect smile alignment",
    href: "/services/orthodontics",
    icon: (
      <svg className="w-7 h-7 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 10h16M4 14h16M7 7v10M12 7v10M17 7v10" />
      </svg>
    ),
  },
  {
    title: "Root Canal Treatment",
    desc: "Pain-free root canal therapy",
    href: "/services/root-canal",
    icon: (
      <svg className="w-7 h-7 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C9 3 7 5 7 10c0 4 2 7 3 11h4c1-4 3-7 3-10 0-5-2-7-5-7z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6" />
      </svg>
    ),
  },
  {
    title: "Teeth Whitening",
    desc: "Get a brighter, whiter and confident smile",
    href: "/services/teeth-whitening",
    icon: (
      <svg className="w-7 h-7 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l3 4.5L20 9l-4 4 1.5 5.5-5.5-3-5.5 3L8 13l-4-4 5-.5L12 3z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 xl:py-28 w-full overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <p className="text-[13px] sm:text-[14px] font-bold uppercase tracking-[4px] text-[#d4af37]">
            Our Services
          </p>
          
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#071428] tracking-wide leading-tight">
            Comprehensive Dental Solutions
          </h2>
          
          {/* Accent Divider Line with Tooth Icon */}
          <div className="mt-5 flex items-center justify-center gap-4 w-full max-w-[240px]">
            <div className="h-[1px] bg-gray-200 flex-1" />
            <span className="text-[#d4af37] text-sm">🦷</span>
            <div className="h-[1px] bg-gray-200 flex-1" />
          </div>
        </div>

        {/* Services Multi-column Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white border border-gray-100/80 rounded-2xl p-8 text-center flex flex-col items-center justify-between min-h-[340px] transition-all duration-300 hover:border-[#D4AF37]/30 hover:shadow-[0_20px_45px_rgba(0,0,0,.08)] hover:-translate-y-2"
            >
              <div className="flex flex-col items-center w-full">
                {/* Premium Circle Icon Layout Container */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF9EB] transition-transform duration-300 group-hover:scale-105">
                  {service.icon}
                </div>

                {/* Card Title Header */}
                <h3 className="text-xl font-semibold text-[#071428] tracking-wide leading-[1.3] min-h-[56px] flex items-center justify-center transition-colors duration-200 group-hover:text-[#d4af37]">
                  {service.title}
                </h3>

                {/* Narrative Text */}
                <p className="mt-3 text-[15px] text-gray-500 leading-7 px-1">
                  {service.desc}
                </p>
              </div>

              {/* Action Button Link Block */}
             
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
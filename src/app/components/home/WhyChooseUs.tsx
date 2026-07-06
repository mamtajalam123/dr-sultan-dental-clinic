import Link from "next/link";

const features = [
  {
    title: "Advanced Technology",
    desc: "We use the latest dental technology and modern equipment for precise diagnosis and effective treatments.",
    icon: (
      <svg className="w-7 h-7 text-[#071428]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h3v3h-3zM10.5 9h3" />
      </svg>
    ),
  },
  {
    title: "Expert Dentists",
    desc: "Our experienced and highly qualified dentists are dedicated to providing the highest standard of care.",
    icon: (
      <svg className="w-7 h-7 text-[#071428]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 12h4.5M12 9.75v4.5" />
      </svg>
    ),
  },
  {
    title: "Safe & Hygienic",
    desc: "We follow strict sterilization protocols to ensure a safe, clean, and comfortable environment for every patient.",
    icon: (
      <svg className="w-7 h-7 text-[#071428]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21{c}-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: "Comfortable Care",
    desc: "We focus on pain-free treatments and patient comfort to ensure a relaxed and stress-free experience.",
    icon: (
      <svg className="w-7 h-7 text-[#071428]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l4.03 3.359a1.125 1.125 0 01-1.443 1.73l-4.03-3.358a1.125 1.125 0 01-.407-.864V3.03M3 12h18M4.5 19.5h15" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    desc: "We believe in honest and transparent pricing with no hidden costs, so you always know what to expect.",
    icon: (
      <svg className="w-7 h-7 text-[#071428]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "24/7 Emergency Care",
    desc: "Dental emergencies can happen anytime. Our team is available 24/7 to provide immediate care when you need it most.",
    icon: (
      <svg className="w-7 h-7 text-[#071428]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.108-7.108c-.154-.441.012-.928.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#FAF9F6] py-16 sm:py-20 lg:py-24 xl:py-28 w-full overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        
        {/* Header Block configured exactly as previewed */}
        <div className="flex flex-col items-center text-center mb-14">
          <p className="text-[13px] sm:text-[14px] font-bold uppercase tracking-[4px] text-[#d4af37]">
            Why Choose Us
          </p>
          
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#071428] tracking-wide leading-tight">
            Your Smile, Our Priority
          </h2>
          
          {/* Aesthetic Center Line Divider Block */}
          <div className="mt-4 flex items-center justify-center gap-4 w-full max-w-[240px]">
            <div className="h-[1px] bg-gray-200 flex-1" />
            <span className="text-[#d4af37] text-xs">🦷</span>
            <div className="h-[1px] bg-gray-200 flex-1" />
          </div>

          <p className="mt-4 text-[15px] text-gray-500 max-w-2xl leading-7">
            We combine advanced technology, expert care, and a patient-first approach to deliver exceptional dental experiences.
          </p>
        </div>

        {/* Features Double-Row Grid Layout Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-white border border-gray-100/70 rounded-2xl p-8 flex flex-col sm:flex-row items-start gap-5 transition-all duration-300 hover:border-[#D4AF37]/30 hover:shadow-[0_20px_45px_rgba(0,0,0,.04)] hover:-translate-y-1 min-h-[190px]"
            >
              {/* Premium Subtle Gold Circle Wrapper Container */}
              <div className="flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF4DC]/80 transition-transform duration-300 group-hover:scale-105">
                {feature.icon}
              </div>

              {/* Text Layout Element */}
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold text-[#071428] tracking-wide leading-snug transition-colors duration-200 group-hover:text-[#d4af37]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[14.5px] text-gray-500 leading-6">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM DOCKING DUAL BANNER CONTAINER BLOCK */}
        <div className="bg-[#051124] rounded-2xl px-6 py-5 sm:px-10 sm:py-6 shadow-xl w-full border border-white/5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left Content Column */}
            <div className="flex items-center gap-4 text-center lg:text-left flex-col sm:flex-row">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5c343] text-slate-950 text-xl font-bold shadow-md">
                📞
              </div>
              <div>
                <h4 className="text-white text-base sm:text-lg font-medium tracking-wide">
                  Have Questions or Need Assistance?
                </h4>
                <p className="text-gray-400 text-[13.5px] mt-0.5">
                  We are here to help you with all your dental needs.
                </p>
              </div>
            </div>

            {/* Split Decorative Rule on Desktop Screens */}
            <div className="hidden lg:block w-[1px] h-10 bg-white/10 mx-4" />

            {/* Right Action Routing Button Column */}
            <div className="w-full lg:w-auto flex justify-center">
              <Link
                href="/appointment"
                className="inline-flex h-[46px] px-6 items-center justify-center rounded-md bg-[#f5c343] hover:bg-[#e0b034] text-slate-950 font-bold text-[13px] tracking-wider uppercase transition-all duration-200 shadow-md hover:-translate-y-0.5 w-full sm:w-auto text-center"
              >
                <span className="mr-2">📅</span> Book Appointment <span className="ml-2 text-sm">→</span>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
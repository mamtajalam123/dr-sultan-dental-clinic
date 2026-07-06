import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Advanced Technology",
    desc: "Modern equipment for precise treatment",
    icon: (
      <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Expert Dentists",
    desc: "Highly qualified & experienced dental professionals",
    icon: (
      <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Painless Treatment",
    desc: "Comfortable & stress-free dental care",
    icon: (
      <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-[900px] w-full overflow-hidden bg-[#051122] flex items-center">
      {/* Background Section */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/dental-chair.png"
          alt="Dental Hero"
          fill
          priority
          className="object-cover object-right lg:object-center"
        />
        {/* Refined gradient map overlaid over image matching the design */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#051122] via-[#051122]/95 via-[40%] to-[#051122]/10" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 py-20">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* LEFT SIDE CONTENT */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Subtitle */}
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-4">
             Advanced Dental Care for Every Smile
            </p>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold tracking-wide text-white leading-[1.15]">
             Trusted Dental Care for a Healthy, Confident Smile <br />
              <span className="text-[#d4af37]">You Can Trust</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[540px] text-base sm:text-lg text-gray-300/90 leading-relaxed">
              At Dr. Sultan Dental Care, we provide comprehensive dental treatments using advanced technology,
               modern techniques, and personalized care. From routine check-ups to smile makeovers and dental implants,
                we're committed to helping you achieve lifelong oral health.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <Link
                href="/appointment"
                className="inline-flex h-14 px-8 items-center justify-center rounded-lg bg-[#e2b741] hover:bg-[#cf9e2e] text-slate-900 font-bold text-sm sm:text-base tracking-wide transition-all gap-2 shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 3V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Appointment
              </Link>

              <Link
                href="/services"
                className="inline-flex h-14 px-8 items-center justify-center rounded-lg border border-white/20 bg-transparent text-white font-medium text-sm sm:text-base tracking-wide transition-all hover:bg-white/5 hover:border-white/40 gap-2"
              >
                Our Services
                <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* Bottom Info Features Row */}
            <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white tracking-wide">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE FLOATING BOX */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="w-full max-w-sm rounded-2xl bg-[#061426]/90 border border-white/5 p-6 sm:p-8 shadow-2xl backdrop-blur-md transition-transform duration-300 hover:scale-[1.01]">
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e2b741] text-slate-950 shadow-inner">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-gray-400">
                    Need Immediate Help?
                  </p>
                  <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-[#e2b741] tracking-tight whitespace-nowrap">
                    +91 (863) 755-3770
                  </h3>
                  <p className="mt-1 text-xs text-gray-400">
                    We are here for you!
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
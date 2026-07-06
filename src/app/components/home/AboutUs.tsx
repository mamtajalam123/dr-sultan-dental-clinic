import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "12K+", label: "Happy Patients" },
  { value: "25+", label: "Expert Dentists" },
  { value: "98%", label: "Patient Satisfaction" },
];

const highlights = [
  "Experienced & Caring Doctors",
  "Advanced Dental Technology",
  "Safe & Hygienic Environment",
  "Affordable & Transparent Pricing",
];

export default function AboutUs() {
  return (
    <section className="bg-[#071428] py-16 lg:py-24 text-white w-full overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: PERFECTLY OVERLAPPING IMAGES BLOCK */}
          <div className="relative lg:col-span-6 flex items-center justify-start min-h-[340px] sm:min-h-[460px] w-full max-w-xl lg:max-w-none mx-auto">
            {/* Main Clinical Room Image Frame (Background Layer) */}
            <div className="relative w-[78%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl z-10 border border-white/10">
              <Image
                src="/images/about/clinic-room.png" 
                alt="Dental Clinic Treatment Room"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Overlapping Female Dentist Frame (Foreground Layer) */}
            <div className="absolute right-4 bottom-[-15px] w-[46%] aspect-[1/1] rounded-2xl overflow-hidden shadow-2xl z-20 border-4 border-[#071428]">
              <Image
                src="/images/about/female-doctor.png" 
                alt="Dr. Sultan Care Dentist Specialist"
                fill
                priority
                className="object-cover"
              />
           
            </div>
          </div>

          {/* RIGHT SIDE: TEXT CONTENT & STATS GRID MATRIX */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-8 lg:mt-0">
            
            {/* Text Copy Column */}
            <div className="md:col-span-7 flex flex-col justify-center">
              <p className="text-[13px] font-bold uppercase tracking-[3px] text-[#d4af37]">
                About Us
              </p>
              
              <h2 className="mt-3 font-serif text-[28px] sm:text-[36px] font-semibold text-white leading-[1.25] tracking-wide">
                Trusted Dental Care <br />
                for Your <span className="text-[#d4af37]">Whole Family</span>
              </h2>
              
              <p className="mt-4 text-[14px] sm:text-[14.5px] text-gray-300/90 leading-[1.65]">
                At Dr. Sultan Dental Care, we combine advanced technology with a gentle touch to deliver exceptional dental care. Your comfort, health, and satisfaction are our top priorities.
              </p>

              {/* Highlights List */}
              <ul className="mt-6 space-y-2.5">
                {highlights.map((text) => (
                  <li key={text} className="flex items-center gap-3 text-[13.5px] text-gray-200">
                    <span className="text-[#d4af37] text-xs font-bold">✓</span>
                    {text}
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex h-[46px] px-6 items-center justify-center rounded-md bg-[#f5c343] hover:bg-[#e0b034] text-slate-950 font-bold text-[13px] tracking-wider uppercase transition-colors"
                >
                  Learn More About Us <span className="ml-2 text-xs">→</span>
                </Link>
              </div>
            </div>

            {/* Scorecard Matrix Block */}
            <div className="md:col-span-5 grid grid-cols-2 gap-4 mt-8 md:mt-0">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#0b1b33] border border-white/5 rounded-xl p-4 sm:p-5 flex flex-col items-center justify-center text-center aspect-square"
                >
                  <span className="text-[26px] sm:text-[30px] font-bold text-[#d4af37] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-[11px] font-medium text-gray-400 leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
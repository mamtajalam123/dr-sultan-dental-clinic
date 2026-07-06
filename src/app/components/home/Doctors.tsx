import Image from "next/image";
import Link from "next/link";

const doctors = [
  {
    name: "Dr.Tipu sultan",
    role: "Dental Surgeon",
    exp: "10+ Years Experience",
    image: "/images/doctor/tipul.png", // Replace with your verified path
  },
  {
    name: "Dr. Antara Das",
    role: "General Dentist",
    exp: "8+ Years Experience",
    image: "/images/doctor/Antara.png", // Replace with your verified path

  },
  {
    name: "Dr. Afsana parvin",
    role: "Dental assistant",
    exp: "7+ Years Experience",
    image: "/images/doctor/Afsana.png", // Replace with your verified path

  },
  {
    name: "Dr. Astha subba",
    role: "Receptionist",
    exp: "4+ Years Experience",
    image: "/images/doctor/Astha.png", // Replace with your verified path

  }
];

export default function Doctors() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 xl:py-28 w-full overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <p className="text-[13px] sm:text-[14px] font-bold uppercase tracking-[4px] text-[#d4af37]">
            Our Experts
          </p>
          
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#071428] tracking-wide leading-tight">
            Meet Our Specialist Dentists
          </h2>
          
          {/* Accent Divider Line with Tooth Icon */}
          <div className="mt-5 flex items-center justify-center gap-4 w-full max-w-[240px]">
            <div className="h-[1px] bg-gray-200 flex-1" />
            <span className="text-[#d4af37] text-sm">🦷</span>
            <div className="h-[1px] bg-gray-200 flex-1" />
          </div>
        </div>

        {/* Doctors 4-Column Responsive Grid Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="group relative bg-white border border-gray-100/90 rounded-2xl overflow-hidden text-center flex flex-col transition-all duration-300 hover:border-[#D4AF37]/30 hover:shadow-[0_20px_45px_rgba(0,0,0,.08)] hover:-translate-y-2"
            >
              {/* Image Container Aspect Block */}
              <div className="relative w-full aspect-[4/4] bg-slate-50 overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Description Workspace */}
              <div className="p-6 flex flex-col flex-grow items-center justify-between">
                <div>
                  {/* Doctor Title Head */}
                  <h3 className="text-xl font-semibold text-[#071428] tracking-wide leading-snug group-hover:text-[#d4af37] transition-colors duration-200">
                    {doctor.name}
                  </h3>

                  {/* Role Title */}
                  <p className="mt-1.5 text-[14px] font-medium text-[#d4af37] tracking-wider uppercase">
                    {doctor.role}
                  </p>

                  {/* Experience Metric Note */}
                  <p className="mt-2 text-[13px] text-gray-400">
                    {doctor.exp}
                  </p>
                </div>

               
              </div>
            </div>
          ))}
        </div>

      

      </div>
    </section>
  );
}
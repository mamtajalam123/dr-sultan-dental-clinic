import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "15+ Specialized Treatments",
  "Experienced Dental Specialists",
  "Latest Dental Technology",
  "Personalized Treatment Plans",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#071428]">
      {/* Background */}

      <div className="absolute inset-0">
        <Image
          src="/images/gallery/clinic-interior.png"
          alt="Dental Services"
          fill
          priority
          className="object-cover object-center opacity-20"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071428] via-[#071428]/95 to-[#071428]/60" />
      </div>

      <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-6 py-24 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* Left */}

          <div>
            <span className="inline-flex rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#D4AF37]">
              Our Services
            </span>

            <h1 className="mt-8 font-serif text-5xl font-semibold leading-tight text-white md:text-7xl">
              Comprehensive
              <span className="mt-2 block text-[#D4AF37]">
                Dental Care
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
              From preventive dentistry to advanced smile makeovers,
              our expert team delivers exceptional dental care using
              the latest technology and personalized treatment plans.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="/appointment"
                className="inline-flex items-center rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-[#071428] transition hover:bg-[#c79f2c]"
              >
                <CalendarDays className="mr-3 h-5 w-5" />
                Book Appointment
              </Link>

              <Link
                href="#treatments"
                className="inline-flex items-center rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                View Treatments
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </div>

            {/* Highlights */}

            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#D4AF37]" />
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}

          <div className="relative flex justify-center">
            <div className="relative h-[620px] w-[480px]">
              <Image
                src="/images/about/clinic-room.png"
                alt="Dentist"
                fill
                priority
                className="object-contain"
              />

              {/* Floating Card */}

              <div className="absolute left-0 top-16 rounded-2xl bg-white p-5 shadow-2xl">
                <p className="text-sm text-gray-500">
                  Treatments Offered
                </p>

                <h3 className="mt-1 text-4xl font-bold text-[#071428]">
                  15+
                </h3>
              </div>

              <div className="absolute bottom-20 right-0 rounded-2xl bg-[#D4AF37] p-6 shadow-2xl">
                <p className="text-sm font-medium text-[#071428]">
                  Happy Patients
                </p>

                <h3 className="mt-1 text-4xl font-bold text-[#071428]">
                  10K+
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
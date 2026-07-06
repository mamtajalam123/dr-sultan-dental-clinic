import Image from "next/image";
import Link from "next/link";
import { ChevronRight, CalendarDays, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Image */}

      <div className="absolute inset-0">

        <Image
          src="/images/doctor/hero.png"
          alt="Doctor"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#071428]/80" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071428] via-[#071428]/90 to-[#071428]/20" />

      </div>

      {/* Content */}

      <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6 lg:px-8">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            {/* Breadcrumb */}

            <div className="mb-8 flex items-center text-sm text-gray-300">

              <Link
                href="/"
                className="transition hover:text-[#d4af37]"
              >
                Home
              </Link>

              <ChevronRight
                size={16}
                className="mx-2 text-[#d4af37]"
              />

              <span className="text-[#d4af37]">
                Doctors
              </span>

            </div>

            {/* Small Title */}

            <p className="uppercase tracking-[4px] text-[#d4af37] font-semibold">

              OUR DENTAL TEAM

            </p>

            {/* Heading */}

            <h1 className="mt-5 font-serif text-5xl font-semibold leading-tight text-white md:text-6xl xl:text-7xl">

              Meet Our

              <span className="block text-[#d4af37]">

                Expert Dentists

              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">

              Our experienced dentists combine advanced
              technology, precision, and compassionate care
              to provide exceptional dental treatments for
              every patient.

            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="/appointment"
                className="inline-flex items-center rounded-xl bg-[#d4af37] px-8 py-4 font-semibold text-[#071428] transition hover:bg-[#e5bf4f]"
              >

                <CalendarDays
                  size={20}
                  className="mr-3"
                />

                Book Appointment

              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-[#d4af37] hover:text-[#d4af37]"
              >

                <Phone
                  size={20}
                  className="mr-3"
                />

                Contact Us

              </Link>

            </div>

          </div>

          {/* Right */}

          <div className="hidden lg:flex justify-end">

            <div className="relative">

              <Image
                src="/images/doctor/hero.png"
                alt="Doctors"
                width={560}
                height={700}
                priority
                className="relative z-10"
              />

              {/* Decorative Circle */}

              <div className="absolute -left-10 top-16 h-40 w-40 rounded-full bg-[#d4af37]/20 blur-3xl" />

              {/* Experience Card */}

              <div className="absolute bottom-10 left-0 rounded-2xl bg-white/10 px-8 py-6 backdrop-blur-xl border border-white/10">

                <h3 className="text-4xl font-bold text-[#d4af37]">

                  15+

                </h3>

                <p className="mt-2 text-white">

                  Dental Specialists

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
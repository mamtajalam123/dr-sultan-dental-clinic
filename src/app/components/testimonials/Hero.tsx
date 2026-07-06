import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Star, Quote } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}

      <div className="absolute inset-0">

        <Image
          src="/images/testimonials/hero.png"
          alt="Patient Testimonials"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#071428]/80" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071428] via-[#071428]/90 to-transparent" />

      </div>

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid min-h-[650px] items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            {/* Breadcrumb */}

            <div className="mb-8 flex items-center text-sm text-gray-300">

              <Link
                href="/"
                className="hover:text-[#D4AF37]"
              >
                Home
              </Link>

              <ChevronRight
                size={16}
                className="mx-2 text-[#D4AF37]"
              />

              <span className="text-[#D4AF37]">
                Testimonials
              </span>

            </div>

            {/* Small Title */}

            <p className="text-sm font-semibold uppercase tracking-[4px] text-[#D4AF37]">

              PATIENT TESTIMONIALS

            </p>

            {/* Heading */}

            <h1 className="mt-6 font-serif text-5xl font-semibold leading-tight text-white md:text-6xl xl:text-7xl">

              Real Stories,

              <span className="block text-[#D4AF37]">

                Beautiful Smiles

              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">

              Discover how our patients transformed their smiles
              with compassionate care, advanced technology and
              personalized treatment at Dr. Sultan Dental Care.

            </p>

            {/* Rating */}

            <div className="mt-10 flex items-center gap-4">

              <div className="flex">

                {[1,2,3,4,5].map((item)=>(
                  <Star
                    key={item}
                    size={22}
                    className="fill-[#D4AF37] text-[#D4AF37]"
                  />
                ))}

              </div>

              <div>

                <h3 className="text-xl font-semibold text-white">

                  4.9 / 5 Rating

                </h3>

                <p className="text-gray-300">

                  Based on 500+ Reviews

                </p>

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="/appointment"
                className="rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-[#071428] transition hover:bg-[#c79d22]"
              >
                Book Appointment
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                Contact Us
              </Link>

            </div>

          </div>

          {/* Right */}

          <div className="relative hidden lg:flex justify-end">

         

              {/* Floating Card */}

              <div className="absolute bottom-10 -left-10 max-w-xs rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">

                <Quote
                  size={40}
                  className="text-[#D4AF37]"
                />

                <p className="mt-4 text-gray-200 leading-7">

                  "The doctors were incredibly professional.
                  My smile has completely changed and I couldn't
                  be happier with the results."

                </p>

                <div className="mt-5">

                  <h4 className="font-semibold text-white">

                    Sarah Johnson

                  </h4>

                  <p className="text-sm text-gray-400">

                    Smile Makeover Patient

                  </p>

                </div>

              </div>

            

          </div>

        </div>

      </div>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

const benefits = [
  "Natural looking results",
  "Long-lasting solution",
  "Comfortable treatment",
  "Advanced dental technology",
  "Experienced specialists",
  "Personalized care plan",
];

export default function Overview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Image */}

          <div className="relative">

            <div className="relative h-[600px] overflow-hidden rounded-[32px]">

              <Image
                src="/images/services/implant.png"
                alt="Dental Implant Treatment"
                fill
                className="object-cover"
              />

            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 left-8 rounded-3xl bg-[#071428] px-8 py-6 shadow-2xl">

              <p className="text-sm uppercase tracking-[3px] text-[#D4AF37]">
                Success Rate
              </p>

              <h3 className="mt-2 text-5xl font-bold text-white">
                99%
              </h3>

            </div>

          </div>

          {/* Content */}

          <div>

            <p className="text-sm font-semibold uppercase tracking-[4px] text-[#D4AF37]">
              Treatment Overview
            </p>

            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#071428] md:text-5xl">
              Restore Your Smile With
              <span className="block text-[#D4AF37]">
                Dental Implants
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Dental implants are the most advanced solution for
              replacing missing teeth. They provide excellent
              stability, natural aesthetics, and long-term
              functionality while preserving your jawbone health.
            </p>

            {/* Benefits */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              {benefits.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-6 w-6 text-[#D4AF37]" />

                  <span className="text-gray-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="/appointment"
                className="inline-flex items-center rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-[#071428] transition hover:bg-[#c89f29]"
              >
                <CalendarDays className="mr-3 h-5 w-5" />
                Book Appointment
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl border border-[#071428] px-8 py-4 font-semibold text-[#071428] transition hover:bg-[#071428] hover:text-white"
              >
                Contact Us
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
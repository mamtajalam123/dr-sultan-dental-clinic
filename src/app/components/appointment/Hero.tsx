import Image from "next/image";
import Link from "next/link";
import { CalendarDays, PhoneCall } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#071428]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/gallery/clinic-interior.png"
          alt="Book Appointment"
          fill
          priority
          className="object-cover opacity-20"
        />
      </div>

      {/* Gold Blur */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#D4AF37]/20 blur-3xl"></div>

      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}
          <div>

            <span className="inline-block rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-5 py-2 text-sm font-medium uppercase tracking-[3px] text-[#D4AF37]">
              Book Appointment
            </span>

            <h1 className="mt-8 font-serif text-5xl font-bold leading-tight text-white md:text-6xl">
              Schedule Your Visit With
              <span className="block text-[#D4AF37]">
                Expert Dentists
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
              Book your appointment in just a few clicks. Our experienced
              dental team is here to provide comfortable, modern, and
              personalized dental care.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="/appointment"
                className="inline-flex items-center rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-[#071428] transition hover:bg-[#c89f29]"
              >
                <CalendarDays className="mr-2 h-5 w-5" />
                Book Now
              </Link>

              <Link
                href="tel:+919999999999"
                className="inline-flex items-center rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                <PhoneCall className="mr-2 h-5 w-5" />
                Call Now
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 flex flex-wrap gap-10">
              <div>
                <h3 className="text-3xl font-bold text-[#D4AF37]">10K+</h3>
                <p className="text-gray-400">Happy Patients</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#D4AF37]">10+</h3>
                <p className="text-gray-400">Years Experience</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#D4AF37]">99%</h3>
                <p className="text-gray-400">Success Rate</p>
              </div>
            </div>

          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">

            <div className="relative h-[650px] w-full overflow-hidden rounded-[40px] border border-white/10">
              <Image
                src="/images/about/clinic-room.png"
                alt="Doctor"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-8 -left-8 rounded-3xl bg-white p-6 shadow-2xl">
              <p className="text-sm text-gray-500">Available Today</p>

              <h4 className="mt-2 text-2xl font-bold text-[#071428]">
                Book in 60 Seconds
              </h4>

              <p className="mt-2 text-gray-600">
                Quick appointment confirmation.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
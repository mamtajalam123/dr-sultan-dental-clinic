import Link from "next/link";
import {
  Smile,
  Sparkles,
  ShieldPlus,
  Baby,
  HeartPulse,
  Ambulance,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    title: "General Dentistry",
    description: "Routine checkups, fillings & preventive care.",
    icon: Smile,
    href: "/services/general-dentistry",
  },
  {
    title: "Cosmetic Dentistry",
    description: "Whitening, veneers & smile makeovers.",
    icon: Sparkles,
    href: "/services/cosmetic-dentistry",
  },
  {
    title: "Restorative Dentistry",
    description: "Crowns, bridges, implants & dentures.",
    icon: ShieldPlus,
    href: "/services/dental-implants",
  },
  {
    title: "Orthodontics",
    description: "Braces and clear aligners for all ages.",
    icon: Smile,
    href: "/services/orthodontics",
  },
  {
    title: "Pediatric Dentistry",
    description: "Gentle dental care specially for children.",
    icon: Baby,
    href: "/services/pediatric-dentistry",
  },
  {
    title: "Emergency Dentistry",
    description: "Immediate treatment for dental emergencies.",
    icon: Ambulance,
    href: "/services/emergency-dentistry",
  },
];

export default function Categories() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[4px] text-[#D4AF37]">
            Categories
          </p>

          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#071428] md:text-5xl">
            Explore Our Dental Treatments
          </h2>

          <div className="mx-auto mt-5 flex w-44 items-center gap-4">
            <div className="h-px flex-1 bg-gray-300"></div>
            <span className="text-[#D4AF37]">🦷</span>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          <p className="mt-6 text-lg text-gray-600">
            Discover specialized dental services designed to keep your
            smile healthy, beautiful, and confident.
          </p>
        </div>

        {/* Categories Grid */}

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.title}
                href={category.href}
                className="group rounded-[30px] border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10 transition group-hover:bg-[#D4AF37]">
                  <Icon className="h-8 w-8 text-[#D4AF37] transition group-hover:text-[#071428]" />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-[#071428]">
                  {category.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {category.description}
                </p>

                <div className="mt-8 inline-flex items-center font-semibold text-[#071428] transition group-hover:text-[#D4AF37]">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-[32px] bg-[#071428] px-8 py-12 text-center">
          <HeartPulse className="mx-auto h-12 w-12 text-[#D4AF37]" />

          <h3 className="mt-6 font-serif text-3xl font-semibold text-white">
            Not Sure Which Treatment You Need?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-300">
            Schedule a consultation with our experienced dentists and
            we'll recommend the best treatment for your smile.
          </p>

          <Link
            href="/appointment"
            className="mt-8 inline-flex items-center rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-[#071428] transition hover:bg-[#c79f2c]"
          >
            Book Consultation
            <ArrowRight className="ml-3 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
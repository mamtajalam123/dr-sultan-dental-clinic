import Link from "next/link";
import {
  ArrowRight,
  Smile,
  Sparkles,
  ShieldPlus,
  Baby,
  Ambulance,
  HeartPulse,
  Stethoscope,
  ScanLine,
  Shield,
  Activity,
  Brush,
  SmilePlus,
} from "lucide-react";

const treatments = [
  {
    title: "General Dentistry",
    description: "Routine checkups, fillings & preventive care.",
    href: "/services/general-dentistry",
    icon: Smile,
  },
  {
    title: "Cosmetic Dentistry",
    description: "Whitening, veneers & smile enhancement.",
    href: "/services/cosmetic-dentistry",
    icon: Sparkles,
  },
  {
    title: "Dental Implants",
    description: "Permanent replacement for missing teeth.",
    href: "/services/dental-implants",
    icon: ShieldPlus,
  },
  {
    title: "Root Canal",
    description: "Pain-free root canal treatment.",
    href: "/services/root-canal-treatment",
    icon: Activity,
  },
  {
    title: "Orthodontics",
    description: "Braces & invisible aligners.",
    href: "/services/orthodontics",
    icon: SmilePlus,
  },
  {
    title: "Teeth Whitening",
    description: "Professional smile whitening.",
    href: "/services/teeth-whitening",
    icon: Brush,
  },
  {
    title: "Pediatric Dentistry",
    description: "Special dental care for children.",
    href: "/services/pediatric-dentistry",
    icon: Baby,
  },
  {
    title: "Gum Treatment",
    description: "Healthy gums for a healthy smile.",
    href: "/services/gum-treatment",
    icon: HeartPulse,
  },
  {
    title: "Wisdom Tooth",
    description: "Safe wisdom tooth extraction.",
    href: "/services/wisdom-tooth-extraction",
    icon: Stethoscope,
  },
  {
    title: "Dentures",
    description: "Comfortable removable dentures.",
    href: "/services/dentures",
    icon: Shield,
  },
  {
    title: "Digital X-Ray",
    description: "Advanced diagnosis with digital imaging.",
    href: "/services/digital-xray",
    icon: ScanLine,
  },
  {
    title: "Emergency Care",
    description: "Immediate treatment for dental emergencies.",
    href: "/services/emergency-dentistry",
    icon: Ambulance,
  },
];

export default function TreatmentsGrid() {
  return (
    <section
      id="treatments"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-[#D4AF37]">
            All Treatments
          </p>

          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#071428] md:text-5xl">
            Complete Dental Services
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide comprehensive dental treatments using
            modern technology and experienced specialists.
          </p>

        </div>

        {/* Grid */}

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {treatments.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-[28px] border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10 transition group-hover:bg-[#D4AF37]">

                  <Icon className="h-8 w-8 text-[#D4AF37] transition group-hover:text-[#071428]" />

                </div>

                <h3 className="mt-8 text-2xl font-semibold text-[#071428]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>

                <div className="mt-8 inline-flex items-center font-semibold text-[#071428] transition group-hover:text-[#D4AF37]">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}

        </div>
      </div>
    </section>
  );
}
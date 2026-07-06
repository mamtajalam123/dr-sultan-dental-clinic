import Image from "next/image";
import Link from "next/link";
import {
  Award,
  GraduationCap,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "10+ Years",
    subtitle: "Clinical Experience",
  },
  {
    icon: GraduationCap,
    title: "Advanced Training",
    subtitle: "International Certifications",
  },
  {
    icon: HeartHandshake,
    title: "12,000+",
    subtitle: "Happy Patients",
  },
];

export default function Founder() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT IMAGE */}

          <div className="relative">

            <div className="overflow-hidden rounded-[32px] shadow-2xl">

              <Image
                src="/images/doctor/tipul.png"
                alt="Dr. Sultan"
                width={650}
                height={820}
                className="w-full object-cover"
              />

            </div>

            {/* Experience Badge */}

            <div className="absolute bottom-8 left-8 rounded-2xl bg-[#071428] px-8 py-6 shadow-xl">

              <h3 className="text-5xl font-bold text-[#d4af37]">
                10+
              </h3>

              <p className="mt-2 text-sm uppercase tracking-[3px] text-white">
                Years Experience
              </p>

            </div>

          </div>

          {/* RIGHT CONTENT */}

          <div>

            <p className="text-sm font-semibold uppercase tracking-[4px] text-[#d4af37]">
              Founder & Chief Dentist
            </p>

            <h2 className="mt-4 font-serif text-5xl font-semibold leading-tight text-[#071428]">
              Meet
              <span className="text-[#d4af37]"> Dr. Sultan</span>
            </h2>

            <p className="mt-3 text-xl font-medium text-gray-600">
              BDS, MDS • Dental Surgeon
            </p>

            <div className="mt-8 h-[2px] w-28 bg-[#d4af37]" />

            <p className="mt-8 text-lg leading-9 text-gray-600">
              "Every smile tells a story. My mission is to combine
              advanced dental technology with compassionate care to
              create healthy, confident smiles that last a lifetime.
              We believe every patient deserves personalized treatment
              in a comfortable and welcoming environment."
            </p>

          

            {/* Achievement Cards */}

            <div className="mt-12 grid gap-5 sm:grid-cols-3">

              {achievements.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-gray-200 p-6 transition hover:border-[#d4af37] hover:shadow-lg"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#d4af37]/10">

                      <Icon
                        size={28}
                        className="text-[#d4af37]"
                      />

                    </div>

                    <h3 className="mt-5 text-2xl font-bold text-[#071428]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-gray-500">
                      {item.subtitle}
                    </p>

                  </div>
                );
              })}

            </div>

            {/* CTA */}

            <Link
              href="/appointment"
              className="mt-12 inline-flex items-center gap-3 rounded-xl bg-[#d4af37] px-8 py-4 font-semibold text-[#071428] transition hover:bg-[#e5bf4f]"
            >
              Book Consultation

              <ArrowRight size={18} />

            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
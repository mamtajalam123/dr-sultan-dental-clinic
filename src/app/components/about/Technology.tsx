import {
  Scan,
  Microscope,
  ShieldCheck,
  MonitorSmartphone,
  Sparkles,
  BadgeCheck,
} from "lucide-react";

const technologies = [
  {
    icon: Scan,
    title: "Digital X-Ray",
    desc: "Low-radiation digital imaging for accurate diagnosis and treatment planning.",
  },
  {
    icon: Microscope,
    title: "Dental Microscope",
    desc: "Enhanced precision for root canal and restorative dental procedures.",
  },
  {
    icon: MonitorSmartphone,
    title: "3D Intraoral Scanner",
    desc: "Comfortable digital impressions with exceptional accuracy and speed.",
  },
  {
    icon: Sparkles,
    title: "Laser Dentistry",
    desc: "Minimally invasive laser treatments with faster healing and less discomfort.",
  },
  {
    icon: ShieldCheck,
    title: "Advanced Sterilization",
    desc: "Hospital-grade sterilization protocols ensuring maximum patient safety.",
  },
  {
    icon: BadgeCheck,
    title: "CAD/CAM Technology",
    desc: "Same-day crowns and restorations with precise digital manufacturing.",
  },
];

export default function Technology() {
  return (
    <section className="bg-[#071428] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-[#d4af37]">
            MODERN TECHNOLOGY
          </p>

          <h2 className="mt-4 font-serif text-4xl font-semibold text-white md:text-5xl">
            Advanced Dental
            <span className="text-[#d4af37]"> Technology</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            We invest in the latest dental equipment to provide safer,
            faster, and more comfortable treatments with exceptional
            clinical precision.
          </p>

        </div>

        {/* Technology Grid */}

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {technologies.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-[#0b1d34] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#d4af37]/50 hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#d4af37]/10">

                  <Icon
                    size={34}
                    className="text-[#d4af37]"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-3xl border border-[#d4af37]/20 bg-[#0b1d34] p-10 text-center">

          <h3 className="font-serif text-3xl font-semibold text-white">
            Precision Technology for a
            <span className="text-[#d4af37]"> Healthier Smile</span>
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-400">
            Our clinic combines experienced dentists with cutting-edge
            technology to ensure every treatment is precise, comfortable,
            and delivers long-lasting results.
          </p>

        </div>

      </div>
    </section>
  );
}
import {
  Target,
  Eye,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const values = [
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    desc: "Every patient is treated with kindness, respect, and personalized attention.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    desc: "Strict sterilization protocols and advanced safety standards in every procedure.",
  },
  {
    icon: Sparkles,
    title: "Modern Technology",
    desc: "State-of-the-art equipment ensures accurate diagnosis and comfortable treatment.",
  },
  {
    icon: Users,
    title: "Patient Satisfaction",
    desc: "Building lifelong relationships through exceptional dental care and trust.",
  },
];

export default function MissionVision() {
  return (
    <section className="bg-[#081528] py-24">

      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-[#d4af37]">
            OUR PURPOSE
          </p>

          <h2 className="mt-4 font-serif text-4xl font-semibold text-white md:text-5xl">
            Our Mission &
            <span className="text-[#d4af37]"> Vision</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            We believe every smile has the power to transform confidence,
            health, and quality of life. Our mission and vision guide
            everything we do.
          </p>

        </div>

        {/* Mission Vision */}

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {/* Mission */}

          <div className="rounded-3xl border border-[#d4af37]/20 bg-[#0b1d34] p-10 transition duration-300 hover:border-[#d4af37]/60">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#d4af37]/10">

              <Target
                className="text-[#d4af37]"
                size={34}
              />

            </div>

            <h3 className="mt-8 text-3xl font-semibold text-white">
              Our Mission
            </h3>

            <p className="mt-6 text-lg leading-9 text-gray-300">
              To provide world-class dental care through advanced technology,
              highly experienced professionals, and personalized treatment
              plans while ensuring every patient enjoys a comfortable,
              stress-free, and affordable experience.
            </p>

          </div>

          {/* Vision */}

          <div className="rounded-3xl border border-[#d4af37]/20 bg-[#0b1d34] p-10 transition duration-300 hover:border-[#d4af37]/60">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#d4af37]/10">

              <Eye
                className="text-[#d4af37]"
                size={34}
              />

            </div>

            <h3 className="mt-8 text-3xl font-semibold text-white">
              Our Vision
            </h3>

            <p className="mt-6 text-lg leading-9 text-gray-300">
              To become the most trusted dental clinic by continuously
              improving patient care, embracing innovation, and helping
              thousands of families achieve healthier, brighter smiles for
              generations to come.
            </p>

          </div>

        </div>

        {/* Core Values */}

        <div className="mt-24">

          <div className="mb-12 text-center">

            <h3 className="font-serif text-4xl font-semibold text-white">
              Our Core Values
            </h3>

            <div className="mx-auto mt-5 h-[2px] w-20 bg-[#d4af37]" />

          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[#0b1d34] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#d4af37]/50"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#d4af37]/10">

                    <Icon
                      size={28}
                      className="text-[#d4af37]"
                    />

                  </div>

                  <h4 className="mt-6 text-2xl font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-4 leading-8 text-gray-400">
                    {item.desc}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}
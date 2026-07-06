import Image from "next/image";
import {
  CheckCircle2,
  Award,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

const benefits = [
  {
    title: "Natural Appearance",
    description:
      "Implants are designed to look, feel, and function like natural teeth.",
  },
  {
    title: "Long-Term Solution",
    description:
      "With proper care, dental implants can last for many years.",
  },
  {
    title: "Preserves Jaw Bone",
    description:
      "Implants stimulate the jawbone and help prevent bone loss.",
  },
  {
    title: "Comfortable Eating",
    description:
      "Enjoy your favorite foods with confidence and comfort.",
  },
  {
    title: "Improved Speech",
    description:
      "Speak naturally without worrying about slipping dentures.",
  },
  {
    title: "Easy Maintenance",
    description:
      "Maintain implants just like your natural teeth with regular brushing and checkups.",
  },
];

const stats = [
  {
    icon: Award,
    value: "99%",
    label: "Success Rate",
  },
  {
    icon: ShieldCheck,
    value: "15+",
    label: "Years Experience",
  },
  {
    icon: HeartHandshake,
    value: "10K+",
    label: "Happy Patients",
  },
];

export default function Benefits() {
  return (
    <section className="bg-[#F8F9FC] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-[#D4AF37]">
            Treatment Benefits
          </p>

          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#071428] md:text-5xl">
            Why Choose Dental Implants?
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Dental implants provide a permanent, comfortable,
            and natural-looking solution for replacing missing teeth.
          </p>

        </div>

        {/* Content */}

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <div className="space-y-6">

              {benefits.map((item) => (

                <div
                  key={item.title}
                  className="flex gap-5 rounded-3xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <CheckCircle2 className="mt-1 h-7 w-7 flex-shrink-0 text-[#D4AF37]" />

                  <div>

                    <h3 className="text-xl font-semibold text-[#071428]">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-7 text-gray-600">
                      {item.description}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Right */}

          <div>

            <div className="relative overflow-hidden rounded-[32px]">

              <Image
                src="/images/services/benefits.png"
                alt="Benefits"
                width={700}
                height={850}
                className="h-full w-full object-cover"
              />

            </div>

            {/* Stats */}

            <div className="mt-10 grid grid-cols-3 gap-5">

              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-2xl bg-white p-6 text-center shadow-lg"
                  >
                    <Icon className="mx-auto h-8 w-8 text-[#D4AF37]" />

                    <h3 className="mt-4 text-3xl font-bold text-[#071428]">
                      {item.value}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {item.label}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
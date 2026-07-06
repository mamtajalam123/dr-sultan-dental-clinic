import Link from "next/link";
import {
  CalendarCheck2,
  ScanFace,
  Activity,
  HeartHandshake,
  Stethoscope,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Meet our dental specialist for a detailed oral examination and consultation.",
    icon: CalendarCheck2,
  },
  {
    number: "02",
    title: "Digital Diagnosis",
    description:
      "We perform digital X-rays and 3D scans to accurately plan your treatment.",
    icon: ScanFace,
  },
  {
    number: "03",
    title: "Treatment Procedure",
    description:
      "The procedure is performed using modern equipment under comfortable conditions.",
    icon: Activity,
  },
  {
    number: "04",
    title: "Recovery & Care",
    description:
      "Receive complete post-treatment care instructions for faster healing.",
    icon: HeartHandshake,
  },
  {
    number: "05",
    title: "Regular Follow-up",
    description:
      "Scheduled follow-up visits ensure long-lasting treatment success.",
    icon: Stethoscope,
  },
];

export default function Procedure() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-[#D4AF37]">
            Treatment Procedure
          </p>

          <h2 className="mt-4 font-serif text-4xl font-bold text-[#071428] md:text-5xl">
            Your Journey To A Healthy Smile
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every treatment follows a structured process to ensure
            safety, comfort, and long-term success.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-20">

          {/* Vertical Line */}

          <div className="absolute left-8 top-0 hidden h-full w-1 bg-[#D4AF37]/20 md:block"></div>

          <div className="space-y-12">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative flex flex-col gap-8 md:flex-row"
                >
                  {/* Circle */}

                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37] shadow-lg">

                    <Icon className="h-8 w-8 text-[#071428]" />

                  </div>

                  {/* Card */}

                  <div className="flex-1 rounded-[28px] border border-gray-200 bg-[#F8F9FC] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                    <div className="flex items-center justify-between">

                      <h3 className="text-2xl font-semibold text-[#071428]">
                        {step.title}
                      </h3>

                      <span className="text-5xl font-bold text-[#D4AF37]/20">
                        {step.number}
                      </span>

                    </div>

                    <p className="mt-4 leading-8 text-gray-600">
                      {step.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-[32px] bg-[#071428] px-8 py-12 text-center">

          <h3 className="font-serif text-3xl font-semibold text-white">
            Ready To Begin Your Treatment?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-300">
            Book your consultation today and let our experienced
            dentists create a personalized treatment plan for you.
          </p>

          <Link
            href="/appointment"
            className="mt-8 inline-flex items-center rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-[#071428] transition hover:bg-[#c89f29]"
          >
            Book Appointment
            <ArrowRight className="ml-3 h-5 w-5" />
          </Link>

        </div>

      </div>
    </section>
  );
}
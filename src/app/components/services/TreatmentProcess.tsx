import Link from "next/link";
import {
  CalendarDays,
  Search,
  ClipboardCheck,
  Smile,
  ArrowRight,
} from "lucide-react";

const process = [
  {
    step: "01",
    title: "Book Appointment",
    description:
      "Choose your preferred date and time online or contact our clinic directly.",
    icon: CalendarDays,
  },
  {
    step: "02",
    title: "Dental Examination",
    description:
      "Our dentist performs a complete oral examination using modern technology.",
    icon: Search,
  },
  {
    step: "03",
    title: "Personalized Treatment",
    description:
      "Receive a customized treatment plan designed specifically for your dental needs.",
    icon: ClipboardCheck,
  },
  {
    step: "04",
    title: "Healthy Smile",
    description:
      "Enjoy comfortable treatment and leave with a healthier, brighter smile.",
    icon: Smile,
  },
];

export default function TreatmentProcess() {
  return (
    <section className="bg-[#F8F9FC] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-[#D4AF37]">
            Treatment Process
          </p>

          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#071428] md:text-5xl">
            Your Journey To A Healthy Smile
          </h2>

          <div className="mx-auto mt-5 flex w-44 items-center gap-4">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="text-xl text-[#D4AF37]">🦷</span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We make every dental visit simple, transparent and comfortable
            from your first consultation to your final smile.
          </p>

        </div>

        {/* Process */}

        <div className="relative mt-20">

          {/* Line */}

          <div className="absolute left-0 right-0 top-10 hidden h-[2px] bg-[#D4AF37]/20 lg:block" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {process.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.step}
                  className="group relative rounded-[30px] bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  {/* Step */}

                  <div className="absolute right-6 top-6 text-5xl font-bold text-[#D4AF37]/15">
                    {item.step}
                  </div>

                  {/* Icon */}

                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#D4AF37]">

                    <Icon className="h-9 w-9 text-[#071428]" />

                  </div>

                  {/* Title */}

                  <h3 className="mt-8 text-2xl font-semibold text-[#071428]">
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 leading-8 text-gray-600">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-[32px] bg-[#071428] px-8 py-12 text-center">

          <h3 className="font-serif text-3xl font-semibold text-white">
            Ready To Start Your Treatment?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-300">
            Schedule your consultation today and let our experienced dentists
            create the perfect treatment plan for you.
          </p>

          <Link
            href="/appointment"
            className="mt-8 inline-flex items-center rounded-xl bg-[#D4AF37] px-8 py-4 text-lg font-semibold text-[#071428] transition hover:bg-[#c89f29]"
          >
            Book Appointment
            <ArrowRight className="ml-3 h-5 w-5" />
          </Link>

        </div>

      </div>
    </section>
  );
}
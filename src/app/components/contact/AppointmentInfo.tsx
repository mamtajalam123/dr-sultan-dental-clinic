import Link from "next/link";
import {
  CalendarCheck2,
  ShieldCheck,
  CreditCard,
  Stethoscope,
  ArrowRight,
  Phone,
} from "lucide-react";

const appointmentInfo = [
  {
    icon: CalendarCheck2,
    title: "Online Booking",
    description:
      "Book your appointment online anytime with our quick and secure scheduling system.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance Support",
    description:
      "We accept major insurance providers and help you with claim assistance.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description:
      "Choose from cash, card, UPI, EMI and other convenient payment options.",
  },
  {
    icon: Stethoscope,
    title: "Emergency Care",
    description:
      "Same-day emergency dental appointments are available for urgent cases.",
  },
];

export default function AppointmentInfo() {
  return (
    <section className="bg-[#F8F9FC] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-[#D4AF37]">
            Appointment Information
          </p>

          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#071428] md:text-5xl">
            Booking Made Simple
          </h2>

          <div className="mx-auto mt-5 flex w-44 items-center gap-4">
            <div className="h-px flex-1 bg-gray-300"></div>
            <span className="text-[#D4AF37] text-xl">🦷</span>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We make scheduling your dental appointment simple, convenient,
            and stress-free from start to finish.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {appointmentInfo.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-[30px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10 transition group-hover:bg-[#D4AF37]">
                  <Icon className="h-8 w-8 text-[#D4AF37] transition group-hover:text-[#071428]" />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-[#071428]">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-[32px] bg-[#071428] p-10 lg:p-14">

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div className="text-center lg:text-left">

              <p className="text-sm uppercase tracking-[4px] text-[#D4AF37]">
                Need Assistance?
              </p>

              <h3 className="mt-3 font-serif text-3xl font-semibold text-white md:text-4xl">
                Our Team Is Ready To Help
              </h3>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
                If you're unsure which treatment you need or have questions
                before booking, our friendly team is just a phone call away.
              </p>

            </div>

            <div className="flex flex-col gap-5">

              <Link
                href="tel:+919876543210"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 text-lg font-semibold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                <Phone className="mr-3 h-5 w-5" />
                +91 98765 43210
              </Link>

              <Link
                href="/appointment"
                className="inline-flex items-center justify-center rounded-xl bg-[#D4AF37] px-8 py-4 text-lg font-semibold text-[#071428] transition hover:bg-[#c79f2c]"
              >
                Book Appointment
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
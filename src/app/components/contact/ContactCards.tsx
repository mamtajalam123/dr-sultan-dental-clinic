import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ArrowRight,
} from "lucide-react";

const cards = [
  {
    icon: MapPin,
    title: "Visit Our Clinic",
    value: "Champasari main road",
    subtitle: "siliguri,West bengal",
    link: "https://maps.google.com",
    button: "Get Directions",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91  86375 53770",
    subtitle: "Mon - Sat | 9:00 AM - 8:00 PM",
    link: "tel:+918637553770",
    button: "Call Now",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "blackshadow786786   @gmail.com",
    subtitle: "We'll reply within 24 hours",
    link: "blackshadow786786@gmail.com",
    button: "Send Email",
  },
  {
    icon: Clock3,
    title: "Working Hours",
    value: "Mon - Sat",
    subtitle: "9:00 AM - 8:00 PM",
    link: "/appointment",
    button: "Book Visit",
  },
];

export default function ContactCards() {
  return (
    <section className="bg-[#F8F9FC] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-[#D4AF37]">
            Contact Information
          </p>

          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#071428] md:text-5xl">
            We're Here To Help
          </h2>

          <div className="mx-auto mt-5 flex w-44 items-center gap-4">
            <div className="h-px flex-1 bg-gray-300"></div>
            <span className="text-xl text-[#D4AF37]">🦷</span>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Reach out to us through your preferred method. Our friendly
            team is always ready to assist you.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="group rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-2xl"
              >
                {/* Icon */}

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10 transition group-hover:bg-[#D4AF37]">
                  <Icon className="h-8 w-8 text-[#D4AF37] transition group-hover:text-[#071428]" />
                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-semibold text-[#071428]">
                  {card.title}
                </h3>

                {/* Value */}

                <p className="mt-5 text-lg font-semibold text-[#071428]">
                  {card.value}
                </p>

                {/* Subtitle */}

                <p className="mt-3 leading-7 text-gray-600">
                  {card.subtitle}
                </p>

                {/* Button */}

                <Link
                  href={card.link}
                  className="mt-8 inline-flex items-center text-sm font-semibold uppercase tracking-wider text-[#D4AF37] transition hover:text-[#071428]"
                >
                  {card.button}

                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </Link>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
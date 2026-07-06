import Link from "next/link";
import {
  CheckCircle2,
  CreditCard,
  Wallet,
  Landmark,
  ArrowRight,
} from "lucide-react";

const plans = [
  {
    title: "Consultation",
    price: "₹500",
    subtitle: "Initial Visit",
    features: [
      "Dental Examination",
      "Treatment Planning",
      "Oral Health Consultation",
    ],
    featured: false,
  },
  {
    title: "Dental Cleaning",
    price: "From ₹1,500",
    subtitle: "Professional Care",
    features: [
      "Scaling",
      "Polishing",
      "Stain Removal",
    ],
    featured: false,
  },
  {
    title: "Teeth Whitening",
    price: "From ₹8,000",
    subtitle: "Cosmetic Treatment",
    features: [
      "Professional Whitening",
      "Long Lasting Results",
      "Safe Procedure",
    ],
    featured: true,
  },
  {
    title: "Dental Implant",
    price: "From ₹25,000",
    subtitle: "Permanent Solution",
    features: [
      "Premium Implant",
      "Natural Appearance",
      "Long-Term Results",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-[#D4AF37]">
            Pricing
          </p>

          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#071428] md:text-5xl">
            Transparent Pricing
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Affordable dental care with flexible payment options.
            Final treatment costs may vary depending on your
            individual diagnosis.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`rounded-[30px] border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.featured
                  ? "border-[#D4AF37] bg-[#071428] text-white"
                  : "border-gray-200 bg-white"
              }`}
            >
              <p
                className={`text-sm uppercase tracking-[3px] ${
                  plan.featured ? "text-[#D4AF37]" : "text-gray-500"
                }`}
              >
                {plan.subtitle}
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                {plan.title}
              </h3>

              <div
                className={`mt-6 text-4xl font-bold ${
                  plan.featured ? "text-[#D4AF37]" : "text-[#071428]"
                }`}
              >
                {plan.price}
              </div>

              <ul className="mt-8 space-y-4">

                {plan.features.map((item) => (
                  <li key={item} className="flex items-center gap-3">

                    <CheckCircle2
                      className={`h-5 w-5 ${
                        plan.featured
                          ? "text-[#D4AF37]"
                          : "text-green-600"
                      }`}
                    />

                    {item}

                  </li>
                ))}

              </ul>

              <Link
                href="/appointment"
                className={`mt-10 inline-flex w-full items-center justify-center rounded-xl px-6 py-3 font-semibold transition ${
                  plan.featured
                    ? "bg-[#D4AF37] text-[#071428] hover:bg-[#c89f29]"
                    : "bg-[#071428] text-white hover:bg-[#102745]"
                }`}
              >
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

            </div>
          ))}

        </div>

        {/* Payment Methods */}

        <div className="mt-20 rounded-[30px] bg-[#F8F9FC] p-10">

          <h3 className="text-center text-3xl font-semibold text-[#071428]">
            Flexible Payment Options
          </h3>

          <div className="mt-10 grid gap-8 md:grid-cols-3">

            <div className="text-center">
              <CreditCard className="mx-auto h-12 w-12 text-[#D4AF37]" />
              <h4 className="mt-4 text-xl font-semibold">
                Cards Accepted
              </h4>
              <p className="mt-2 text-gray-600">
                Visa, MasterCard & RuPay
              </p>
            </div>

            <div className="text-center">
              <Wallet className="mx-auto h-12 w-12 text-[#D4AF37]" />
              <h4 className="mt-4 text-xl font-semibold">
                UPI & Cash
              </h4>
              <p className="mt-2 text-gray-600">
                Google Pay, PhonePe, Paytm & Cash
              </p>
            </div>

            <div className="text-center">
              <Landmark className="mx-auto h-12 w-12 text-[#D4AF37]" />
              <h4 className="mt-4 text-xl font-semibold">
                EMI Available
              </h4>
              <p className="mt-2 text-gray-600">
                Easy monthly payment options
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
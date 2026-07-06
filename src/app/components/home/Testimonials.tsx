import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "I visited Dr. Sultan Dental Care for severe tooth pain. The doctor explained every step of my root canal treatment, and the procedure was completely painless. The staff was polite, caring, and highly professional.",
    name: "Riya Das",
    service: "Root Canal Treatment",
    location: "Champasari, Siliguri",
    image: "/images/testimonials/riya.jpg",
  },
  {
    quote:
      "The clinic is clean, modern, and well-equipped. My teeth whitening treatment gave me a brighter smile than I expected. Thank you, Dr. Sultan and the entire team!",
    name: "Sourav Roy",
    service: "Teeth Whitening",
    location: "Pradhan Nagar, Siliguri",
    image: "/images/testimonials/sourav.jpg",
  },
  {
    quote:
      "I was nervous about getting a dental implant, but Dr. Sultan explained everything clearly. The treatment was smooth, comfortable, and the results look completely natural.",
    name: "Priyanka Sharma",
    service: "Dental Implant",
    location: "Hill Cart Road, Siliguri",
    image: "/images/testimonials/priyanka.jpg",
  },
  {
    quote:
      "Excellent doctors, friendly staff, and a hygienic clinic. My family now visits Dr. Sultan Dental Care for all our dental needs. Highly recommended!",
    name: "Amit Agarwal",
    service: "General & Family Dentistry",
    location: "Hakim Para, Siliguri",
    image: "/images/testimonials/amit.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full overflow-hidden bg-[#FAF9F6] py-16 sm:py-20 lg:py-24 xl:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <p className="text-[13px] font-bold uppercase tracking-[4px] text-[#D4AF37] sm:text-[14px]">
            Patient Testimonials
          </p>

          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-wide text-[#071428] sm:text-4xl lg:text-[46px]">
            What Our Patients Say
          </h2>

          <div className="mt-4 flex w-full max-w-[240px] items-center justify-center gap-4">
            <div className="h-[1px] flex-1 bg-gray-200" />
            <span className="text-xs text-[#D4AF37]">🦷</span>
            <div className="h-[1px] flex-1 bg-gray-200" />
          </div>

          <p className="mt-5 max-w-3xl text-[15px] leading-7 text-gray-500">
            We are proud to serve families across Siliguri with compassionate
            dental care, advanced technology, and personalized treatment that
            helps every patient smile with confidence.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group flex min-h-[360px] flex-col justify-between rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/30 hover:shadow-[0_20px_45px_rgba(0,0,0,.05)]"
            >
              <div>
                {/* Rating */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex gap-1 text-sm text-[#F5C343]">
                    {"★".repeat(5)}
                  </div>

                  <span className="font-serif text-4xl font-bold leading-none text-[#F5C343]/30">
                    “
                  </span>
                </div>

                {/* Quote */}
                <p className="text-[14.5px] italic leading-7 text-gray-600">
                  "{item.quote}"
                </p>
              </div>

              {/* Patient */}
              <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h4 className="text-[15px] font-semibold text-[#071428]">
                    {item.name}
                  </h4>

                  <p className="mt-1 text-xs font-medium text-[#D4AF37]">
                    {item.service}
                  </p>

                  <p className="mt-1 text-[11px] text-gray-400">
                    📍 {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
                {/* Navigation Dots */}
        <div className="mt-8 mb-14 flex items-center justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
          <span className="h-2 w-2 rounded-full bg-gray-300" />
          <span className="h-2 w-2 rounded-full bg-gray-300" />
          <span className="h-2 w-2 rounded-full bg-gray-300" />
        </div>

        {/* CTA Banner */}
        <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#071428] shadow-xl">
          <div className="flex flex-col items-center justify-between gap-6 px-6 py-8 sm:px-10 lg:flex-row">

            {/* Left */}
            <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:text-left">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37]/10 text-2xl text-[#D4AF37]">
                🦷
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Book Your Dental Consultation Today
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-7 text-gray-300">
                  Experience modern dental care with advanced technology,
                  experienced dentists, and personalized treatment plans at
                  Dr. Sultan Dental Care, Siliguri.
                </p>
              </div>
            </div>

            {/* Right */}
            <Link
              href="/appointment"
              className="inline-flex items-center rounded-lg bg-[#D4AF37] px-7 py-3 text-sm font-semibold tracking-wide text-[#071428] transition hover:bg-[#c69c27]"
            >
              📅 Book Appointment
              <span className="ml-2">→</span>
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}
import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    image: "/images/testimonials/patient-1.jpg",
    name: "Sarah Johnson",
    treatment: "Smile Makeover",
    review:
      "The doctors were incredibly professional and caring. My smile has completely transformed and I feel more confident than ever.",
  },
  {
    id: 2,
    image: "/images/testimonials/patient-2.jpg",
    name: "Michael Brown",
    treatment: "Dental Implants",
    review:
      "Excellent service from consultation to final treatment. The implant procedure was painless and the results are amazing.",
  },
  {
    id: 3,
    image: "/images/testimonials/patient-3.jpg",
    name: "Emily Wilson",
    treatment: "Teeth Whitening",
    review:
      "A wonderful experience! The clinic is modern, clean, and the staff made me feel comfortable throughout the treatment.",
  },
  {
    id: 4,
    image: "/images/testimonials/patient-4.jpg",
    name: "David Miller",
    treatment: "Orthodontics",
    review:
      "Professional doctors with advanced technology. My braces treatment exceeded all my expectations.",
  },
  {
    id: 5,
    image: "/images/testimonials/patient-5.jpg",
    name: "Sophia Thomas",
    treatment: "Root Canal",
    review:
      "Pain-free treatment and exceptional care. I highly recommend Dr. Sultan Dental Care to everyone.",
  },
  {
    id: 6,
    image: "/images/testimonials/patient-6.jpg",
    name: "James Anderson",
    treatment: "Cosmetic Dentistry",
    review:
      "The team delivered outstanding results. Every visit was comfortable and the outcome was beyond my expectations.",
  },
];

export default function TestimonialsGrid() {
  return (
    <section className="bg-[#F8F9FC] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[4px] text-[#D4AF37]">
            More Patient Reviews
          </p>

          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#071428] md:text-5xl">
            What Our Patients Say
          </h2>

          <div className="mx-auto mt-5 flex w-44 items-center gap-4">
            <div className="h-px flex-1 bg-gray-300"></div>
            <span className="text-xl text-[#D4AF37]">🦷</span>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Read genuine experiences shared by patients who trusted us with
            their smile and oral health.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group rounded-[28px] bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Quote */}

              <Quote className="h-10 w-10 text-[#D4AF37]" />

              {/* Review */}

              <p className="mt-6 leading-8 text-gray-600">
                "{item.review}"
              </p>

              {/* Rating */}

              <div className="mt-6 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className="fill-[#D4AF37] text-[#D4AF37]"
                  />
                ))}
              </div>

              {/* Patient */}

              <div className="mt-8 flex items-center gap-4 border-t border-gray-200 pt-6">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={70}
                  height={70}
                  className="h-[70px] w-[70px] rounded-full object-cover"
                />

                <div>
                  <h3 className="text-xl font-semibold text-[#071428]">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-[#D4AF37]">
                    {item.treatment}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}

        <div className="mt-20 rounded-[32px] bg-[#071428] px-10 py-12 text-center">
          <h3 className="font-serif text-3xl font-semibold text-white md:text-4xl">
            Join Thousands of Happy Smiles
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-300">
            Our patients trust us for exceptional dental care, advanced
            treatments, and a comfortable experience from consultation to
            recovery.
          </p>
        </div>
      </div>
    </section>
  );
}
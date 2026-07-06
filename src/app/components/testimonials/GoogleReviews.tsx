import Image from "next/image";
import Link from "next/link";
import { Star, ExternalLink } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    review:
      "Professional doctors, modern clinic, and excellent treatment. Highly recommended!",
  },
  {
    id: 2,
    name: "Michael Brown",
    review:
      "Very friendly staff and painless treatment. The entire experience was wonderful.",
  },
  {
    id: 3,
    name: "Emily Wilson",
    review:
      "Best dental clinic I've visited. Everything was clean, modern and professional.",
  },
];

export default function GoogleReviews() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-[#D4AF37]">
            Google Reviews
          </p>

          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#071428] md:text-5xl">
            Trusted By Our Patients
          </h2>

          <div className="mx-auto mt-5 flex w-44 items-center gap-4">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="text-xl text-[#D4AF37]">🦷</span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Thousands of patients have trusted Dr. Sultan Dental Care.
            Read some of their experiences below.
          </p>

        </div>

        {/* Google Card */}

        <div className="mt-20 rounded-[36px] bg-[#071428] p-10 lg:p-14">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Left */}

            <div>

              <div className="flex items-center gap-5">

                <Image
                  src="/images/testimonials/hero.png"
                  alt="Google"
                  width={70}
                  height={70}
                />

                <div>

                  <h3 className="text-3xl font-bold text-white">
                    Google Reviews
                  </h3>

                  <p className="text-gray-300">
                    Verified Patient Feedback
                  </p>

                </div>

              </div>

              <div className="mt-8 flex items-center gap-4">

                <div className="text-6xl font-bold text-[#D4AF37]">
                  4.9
                </div>

                <div>

                  <div className="flex gap-1">

                    {[1,2,3,4,5].map((star)=>(
                      <Star
                        key={star}
                        size={22}
                        className="fill-[#D4AF37] text-[#D4AF37]"
                      />
                    ))}

                  </div>

                  <p className="mt-2 text-gray-300">
                    Based on 500+ Reviews
                  </p>

                </div>

              </div>

              <Link
                href="#"
                className="mt-10 inline-flex items-center rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-[#071428] transition hover:bg-[#c89f29]"
              >
                View All Reviews

                <ExternalLink className="ml-3 h-5 w-5" />

              </Link>

            </div>

            {/* Right */}

            <div className="space-y-6">

              {reviews.map((item) => (

                <div
                  key={item.id}
                  className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm"
                >

                  <div className="flex gap-1">

                    {[1,2,3,4,5].map((star)=>(
                      <Star
                        key={star}
                        size={18}
                        className="fill-[#D4AF37] text-[#D4AF37]"
                      />
                    ))}

                  </div>

                  <p className="mt-4 leading-7 text-gray-300">
                    "{item.review}"
                  </p>

                  <h4 className="mt-5 text-lg font-semibold text-white">
                    {item.name}
                  </h4>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
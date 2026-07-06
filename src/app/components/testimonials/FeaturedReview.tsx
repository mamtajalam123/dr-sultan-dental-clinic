import Image from "next/image";
import Link from "next/link";
import { Quote, Star, Calendar, ArrowRight } from "lucide-react";

export default function FeaturedReview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[4px] text-[#D4AF37]">
            Featured Patient Story
          </p>

          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#071428] md:text-5xl">
            A Smile Transformation
          </h2>

          <div className="mx-auto mt-5 flex w-44 items-center gap-4">
            <div className="h-px flex-1 bg-gray-300"></div>
            <span className="text-[#D4AF37] text-xl">🦷</span>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every patient has a story. Here's one of our favorite smile
            transformations.
          </p>
        </div>

        {/* Content */}

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

          {/* Left Image */}

          <div className="relative">

            <div className="overflow-hidden rounded-[32px]">
              <Image
                src="/images/testimonials/hero.png"
                alt="Featured Patient"
                width={700}
                height={850}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Rating */}

            <div className="absolute bottom-8 left-8 rounded-3xl bg-white p-6 shadow-2xl">

              <div className="flex items-center gap-1">

                {[1,2,3,4,5].map((item)=>(
                  <Star
                    key={item}
                    size={18}
                    className="fill-[#D4AF37] text-[#D4AF37]"
                  />
                ))}

              </div>

              <h3 className="mt-3 text-3xl font-bold text-[#071428]">
                5.0
              </h3>

              <p className="text-gray-500">
                Excellent Experience
              </p>

            </div>

          </div>

          {/* Right Content */}

          <div>

            <Quote
              size={60}
              className="text-[#D4AF37]"
            />

            <h3 className="mt-6 font-serif text-4xl font-semibold leading-tight text-[#071428]">
              "The Best Dental Experience I've Ever Had"
            </h3>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              From my very first consultation, the team made me feel
              comfortable and confident. The doctors explained every
              step of my treatment and used the latest technology to
              restore my smile beautifully.

              <br />
              <br />

              I can now smile with confidence, and I highly recommend
              Dr. Sultan Dental Care to anyone looking for exceptional
              dental treatment.
            </p>

            {/* Patient */}

            <div className="mt-10 border-t border-gray-200 pt-8">

              <h4 className="text-2xl font-semibold text-[#071428]">
                Sarah Johnson
              </h4>

              <p className="mt-2 text-[#D4AF37] font-medium">
                Smile Makeover Patient
              </p>

            </div>

            {/* Details */}

            <div className="mt-10 grid gap-6 sm:grid-cols-2">

              <div className="rounded-2xl border border-gray-200 p-6">

                <p className="text-sm uppercase tracking-[2px] text-gray-500">
                  Treatment
                </p>

                <h4 className="mt-2 text-xl font-semibold text-[#071428]">
                  Smile Makeover
                </h4>

              </div>

              <div className="rounded-2xl border border-gray-200 p-6">

                <p className="text-sm uppercase tracking-[2px] text-gray-500">
                  Doctor
                </p>

                <h4 className="mt-2 text-xl font-semibold text-[#071428]">
                  Dr. Ahmed Sultan
                </h4>

              </div>

            </div>

            {/* Appointment */}

            <div className="mt-12">

              <Link
                href="/appointment"
                className="inline-flex items-center rounded-xl bg-[#D4AF37] px-8 py-4 text-lg font-semibold text-[#071428] transition hover:bg-[#c89f29]"
              >
                <Calendar className="mr-3 h-5 w-5" />

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
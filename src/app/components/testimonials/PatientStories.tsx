import Image from "next/image";
import { CheckCircle2, CalendarDays, UserRound } from "lucide-react";

const stories = [
  {
    id: 1,
    image: "/images/testimonials/hero.png",
    name: "Sarah Johnson",
    treatment: "Smile Makeover",
    doctor: "Dr. Sultan Ahmed",
    duration: "4 Weeks",
    description:
      "Sarah visited our clinic with worn and discolored teeth. After a personalized smile makeover, she regained her confidence with a bright and natural smile.",
  },
  {
    id: 2,
    image: "/images/testimonials/hero.png",
    name: "Michael Brown",
    treatment: "Dental Implants",
    doctor: "Dr. Sultan Ahmed",
    duration: "3 Months",
    description:
      "Michael lost multiple teeth due to an accident. Our implant treatment restored both function and aesthetics, giving him a confident smile again.",
  },
];

const steps = [
  "Initial Consultation",
  "Digital Smile Analysis",
  "Personalized Treatment",
  "Smile Transformation",
];

export default function PatientStories() {
  return (
    <section className="bg-[#F8F9FC] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[4px] text-[#D4AF37]">
            Patient Success Stories
          </p>

          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#071428] md:text-5xl">
            Every Smile Has A Story
          </h2>

          <div className="mx-auto mt-5 flex w-44 items-center gap-4">
            <div className="h-px flex-1 bg-gray-300"></div>
            <span className="text-xl text-[#D4AF37]">🦷</span>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover how our personalized dental care transformed the
            confidence and smiles of our patients.
          </p>
        </div>

        {/* Stories */}

        <div className="mt-20 space-y-20">
          {stories.map((story, index) => (
            <div
              key={story.id}
              className={`grid items-center gap-14 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}

              <div className="relative overflow-hidden rounded-[30px]">
                <Image
                  src={story.image}
                  alt={story.name}
                  width={700}
                  height={800}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute bottom-6 left-6 rounded-2xl bg-[#071428]/90 px-6 py-4 backdrop-blur-md">
                  <h4 className="text-xl font-semibold text-white">
                    {story.name}
                  </h4>

                  <p className="text-[#D4AF37]">
                    {story.treatment}
                  </p>
                </div>
              </div>

              {/* Content */}

              <div>
                <span className="rounded-full bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#D4AF37]">
                  Patient Journey
                </span>

                <h3 className="mt-6 font-serif text-4xl font-semibold text-[#071428]">
                  {story.treatment}
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {story.description}
                </p>

                {/* Details */}

                <div className="mt-8 flex flex-wrap gap-6">
                  <div className="flex items-center gap-3 rounded-xl border bg-white px-5 py-4">
                    <UserRound className="text-[#D4AF37]" />
                    <div>
                      <p className="text-sm text-gray-500">Doctor</p>
                      <h4 className="font-semibold text-[#071428]">
                        {story.doctor}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border bg-white px-5 py-4">
                    <CalendarDays className="text-[#D4AF37]" />
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <h4 className="font-semibold text-[#071428]">
                        {story.duration}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Timeline */}

                <div className="mt-10 space-y-5">
                  {steps.map((step) => (
                    <div
                      key={step}
                      className="flex items-center gap-4"
                    >
                      <CheckCircle2 className="h-6 w-6 text-[#D4AF37]" />

                      <span className="text-lg font-medium text-[#071428]">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}

        <div className="mt-24 rounded-[32px] bg-[#071428] px-10 py-14 text-center">
          <h3 className="font-serif text-3xl font-semibold text-white md:text-4xl">
            Your Smile Could Be Our Next Success Story
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-300">
            Schedule a consultation today and begin your own smile transformation
            with our experienced dental specialists.
          </p>
        </div>
      </div>
    </section>
  );
}
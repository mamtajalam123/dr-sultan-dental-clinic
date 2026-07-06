import {
  Clock3,
  CalendarClock,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const schedule = [
  {
    day: "Monday",
    time: "09:00 AM – 08:00 PM",
  },
  {
    day: "Tuesday",
    time: "09:00 AM – 08:00 PM",
  },
  {
    day: "Wednesday",
    time: "09:00 AM – 08:00 PM",
  },
  {
    day: "Thursday",
    time: "09:00 AM – 08:00 PM",
  },
  {
    day: "Friday",
    time: "09:00 AM – 08:00 PM",
  },
  {
    day: "Saturday",
    time: "10:00 AM – 06:00 PM",
  },
  {
    day: "Sunday",
    time: "Emergency Appointments",
  },
];

export default function OpeningHours() {
  return (
    <section className="bg-[#F8F9FC] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[4px] text-[#D4AF37]">
            Opening Hours
          </p>

          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#071428] md:text-5xl">
            We're Available When You Need Us
          </h2>

          <div className="mx-auto mt-5 flex w-44 items-center gap-4">
            <div className="h-px flex-1 bg-gray-300"></div>
            <span className="text-xl text-[#D4AF37]">🦷</span>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Visit us during our regular clinic hours or contact us for
            emergency dental assistance.
          </p>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Schedule */}

          <div className="rounded-[32px] bg-white p-10 shadow-xl">
            <div className="mb-10 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10">
                <CalendarClock className="h-8 w-8 text-[#D4AF37]" />
              </div>

              <div>
                <h3 className="text-3xl font-semibold text-[#071428]">
                  Weekly Schedule
                </h3>

                <p className="mt-1 text-gray-500">
                  Please arrive 10 minutes before your appointment.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {schedule.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between rounded-2xl border border-gray-100 px-6 py-5 transition hover:border-[#D4AF37] hover:bg-[#FFFDF7]"
                >
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="h-5 w-5 text-[#D4AF37]" />

                    <span className="text-lg font-medium text-[#071428]">
                      {item.day}
                    </span>
                  </div>

                  <span className="font-semibold text-gray-600">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Info Card */}

          <div className="rounded-[32px] bg-[#071428] p-10 text-white">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]">
              <Clock3 className="h-8 w-8 text-[#071428]" />
            </div>

            <h3 className="mt-8 font-serif text-3xl font-semibold">
              Need Emergency Dental Care?
            </h3>

            <p className="mt-6 leading-8 text-gray-300">
              Dental emergencies can happen anytime. Contact our clinic
              immediately, and we'll do our best to arrange a same-day
              emergency appointment.
            </p>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[3px] text-[#D4AF37]">
                Emergency Hotline
              </p>

              <h4 className="mt-2 text-4xl font-bold">
                +91 86375 53770
              </h4>

              <p className="mt-3 text-gray-300">
                Available during emergency hours.
              </p>
            </div>

            <Link
              href="tel:+919876543210"
              className="mt-10 inline-flex items-center rounded-xl bg-[#D4AF37] px-8 py-4 text-lg font-semibold text-[#071428] transition hover:bg-[#C89E27]"
            >
              <PhoneCall className="mr-3 h-5 w-5" />
              Call Now
            </Link>

            <div className="mt-10 rounded-2xl border border-[#D4AF37]/30 bg-[#0C1B2D] p-6">
              <h4 className="text-xl font-semibold text-white">
                Appointment Tips
              </h4>

              <ul className="mt-5 space-y-3 text-gray-300">
                <li>• Arrive 10–15 minutes early.</li>
                <li>• Bring previous dental records if available.</li>
                <li>• Carry your insurance card (if applicable).</li>
                <li>• Inform us about any medical conditions.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
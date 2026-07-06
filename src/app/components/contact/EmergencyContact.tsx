import Link from "next/link";
import {
  PhoneCall,
  CalendarCheck2,
  Ambulance,
  ShieldCheck,
  Clock3,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";

export default function EmergencyContact() {
  return (
    <section className="relative overflow-hidden bg-[#071428] py-24">
      {/* Background Decoration */}

      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#D4AF37] blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#D4AF37] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left */}

          <div>
            <span className="inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[#D4AF37]">
              🚨 Emergency Dental Care
            </span>

            <h2 className="mt-8 font-serif text-5xl font-semibold leading-tight text-white md:text-6xl">
              Need Immediate
              <span className="mt-2 block text-[#D4AF37]">
                Dental Assistance?
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
              Tooth pain, broken teeth, swelling, bleeding, or dental trauma?
              Our experienced dentists are ready to provide immediate
              professional care.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="tel:+919876543210"
                className="inline-flex items-center rounded-xl bg-[#D4AF37] px-8 py-4 text-lg font-semibold text-[#071428] transition hover:bg-[#c79f2c]"
              >
                <PhoneCall className="mr-3 h-5 w-5" />
                Call Now
              </Link>

              <Link
                href="/appointment"
                className="inline-flex items-center rounded-xl border border-white/20 px-8 py-4 text-lg font-semibold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                <CalendarCheck2 className="mr-3 h-5 w-5" />
                Book Appointment
              </Link>
            </div>
          </div>

          {/* Right */}

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]">
                <Ambulance className="h-8 w-8 text-[#071428]" />
              </div>

              <div>
                <h3 className="text-3xl font-semibold text-white">
                  Emergency Hotline
                </h3>

                <p className="text-gray-300">
                  Available for urgent dental care
                </p>
              </div>
            </div>

            <h4 className="mt-8 text-5xl font-bold text-[#D4AF37]">
              +91 86375 53770
            </h4>

            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-4">
                <ShieldCheck className="h-6 w-6 text-[#D4AF37]" />
                <span className="text-gray-200">
                  Same-Day Emergency Appointments
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Clock3 className="h-6 w-6 text-[#D4AF37]" />
                <span className="text-gray-200">
                  Fast Response During Clinic Hours
                </span>
              </div>

              <div className="flex items-center gap-4">
                <BadgeCheck className="h-6 w-6 text-[#D4AF37]" />
                <span className="text-gray-200">
                  Experienced Emergency Dentists
                </span>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-[#D4AF37]/20 bg-[#0D1C2E] p-6">
              <h5 className="text-lg font-semibold text-white">
                Common Dental Emergencies
              </h5>

              <ul className="mt-5 space-y-3 text-gray-300">
                <li>• Severe Toothache</li>
                <li>• Broken or Chipped Tooth</li>
                <li>• Knocked-Out Tooth</li>
                <li>• Swollen Gums</li>
                <li>• Dental Infection</li>
                <li>• Lost Crown or Filling</li>
              </ul>
            </div>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center text-lg font-semibold text-[#D4AF37] transition hover:text-white"
            >
              Contact Emergency Team
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
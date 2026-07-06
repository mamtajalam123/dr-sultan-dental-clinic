"use client";

import Link from "next/link";
import {
  MapPin,
  Navigation,
  Car,
  Bus,
  Clock3,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function Map() {
  return (
    <section className="w-full bg-[#030914] text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[4px] text-[#d4af37]">
            FIND OUR CLINIC
          </span>

          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-wide leading-tight text-white">
            Easy To <span className="text-[#d4af37]">Reach Us</span>
          </h2>

          <div className="mt-4 flex items-center justify-center gap-3 w-full max-w-[280px]">
            <div className="h-[1px] bg-gradient-to-r from-transparent to-white/20 flex-1" />
            <span className="text-[#d4af37] text-xs">🦷</span>
            <div className="h-[1px] bg-gradient-to-l from-transparent to-white/20 flex-1" />
          </div>

          <p className="mt-4 text-gray-400 text-[14.5px] max-w-2xl leading-relaxed">
            Conveniently located on Champasari Main Road, Siliguri with easy
            access by road, auto, bus, and nearby public transportation.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 max-w-7xl mx-auto">

          {/* Google Map */}
          <div className="lg:col-span-7 relative overflow-hidden rounded-2xl border border-white/5 bg-[#051124]/20 shadow-2xl h-[450px]">

            <iframe
              title="Dr Sultan Dental Clinic"
              src="https://www.google.com/maps?q=Dr+Sultan+Dental+Clinic+Champasari+Main+Road+Siliguri&output=embed"
              loading="lazy"
              className="absolute inset-0 h-full w-full border-0 opacity-90 invert-[0.9] hue-rotate-[180deg] contrast-[1.2]"
            />

          </div>

          {/* Right Card */}
          <div className="lg:col-span-5 rounded-2xl bg-[#051124]/40 border border-white/5 p-8 backdrop-blur-xl shadow-xl relative overflow-hidden">

            <div className="absolute top-0 right-0 w-24 h-[1px] bg-gradient-to-l from-[#d4af37]/20 to-transparent" />
            <div className="absolute top-0 right-0 w-[1px] h-24 bg-gradient-to-b from-[#d4af37]/20 to-transparent" />

            <h3 className="font-serif text-2xl font-bold">
              Visit Dr. Sultan Dental Clinic
            </h3>

            <p className="mt-3 text-gray-400 text-[14px] leading-7">
              We welcome patients from Siliguri, Champasari, Matigara,
              Bagdogra and nearby areas with modern facilities, advanced
              technology, and personalized dental care.
            </p>

            <div className="mt-8 space-y-6">

              {/* Address */}
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
                  <MapPin size={18} />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-200">
                    Address
                  </h4>

                  <p className="text-gray-400 text-sm leading-6">
                    Dr. Sultan Dental Clinic
                    <br />
                    Champasari Main Road
                    <br />
                    Siliguri, West Bengal
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
                  <Phone size={18} />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-200">
                    Phone
                  </h4>

                  <p className="text-gray-400 text-sm">
                    +91 86375 53770
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
                  <Mail size={18} />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-200">
                    Email
                  </h4>

                  <p className="text-gray-400 text-sm break-all">
                    blackshadow786786@gmail.com
                  </p>
                </div>
              </div>

              {/* Parking */}
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
                  <Car size={18} />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-200">
                    Parking
                  </h4>

                  <p className="text-gray-400 text-sm">
                    Parking available for two-wheelers and cars.
                  </p>
                </div>
              </div>

            

              {/* Hours */}
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
                  <Clock3 size={18} />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-200">
                    Clinic Hours
                  </h4>

                  <p className="text-gray-400 text-sm">
                    Monday – Saturday
                    <br />
                    9:00 AM – 8:00 PM
                  </p>
                </div>
              </div>

            </div>

            {/* Button */}
            <div className="mt-10 border-t border-white/5 pt-6">

              <Link
                href="https://www.google.com/maps/search/?api=1&query=Dr+Sultan+Dental+Clinic+Champasari+Main+Road+Siliguri"
                target="_blank"
                className="inline-flex w-full h-12 items-center justify-center rounded-xl bg-[#d4af37] text-[#071428] font-bold hover:bg-[#f5c343] transition"
              >
                <Navigation className="mr-2 h-4 w-4" />
                Get Directions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
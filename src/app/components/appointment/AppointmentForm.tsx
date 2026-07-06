"use client";

import { Calendar, Clock, Mail, MapPin, Phone } from "lucide-react";

export default function AppointmentForm() {
  return (
    <section className="bg-[#F8F9FC] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[4px] text-[#D4AF37]">
            Appointment Form
          </p>

          <h2 className="mt-4 font-serif text-4xl font-bold text-[#071428] md:text-5xl">
            Book Your Appointment
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Fill in the details below and we'll contact you shortly.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">

          {/* Form */}

          <div className="lg:col-span-2 rounded-[32px] bg-white p-8 shadow-xl">

            <form className="grid gap-6 md:grid-cols-2">

              <input
                type="text"
                placeholder="Full Name"
                className="rounded-xl border p-4 outline-none focus:border-[#D4AF37]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="rounded-xl border p-4 outline-none focus:border-[#D4AF37]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-xl border p-4 outline-none focus:border-[#D4AF37]"
              />

              <select className="rounded-xl border p-4 outline-none focus:border-[#D4AF37]">
                <option>Select Treatment</option>
                <option>General Dentistry</option>
                <option>Root Canal</option>
                <option>Dental Implants</option>
                <option>Cosmetic Dentistry</option>
              </select>

              <select className="rounded-xl border p-4 outline-none focus:border-[#D4AF37]">
                <option>Select Doctor</option>
                <option>Dr. Sultan</option>
                <option>Dr. Ahmed</option>
              </select>

              <input
                type="date"
                className="rounded-xl border p-4 outline-none focus:border-[#D4AF37]"
              />

              <input
                type="time"
                className="rounded-xl border p-4 outline-none focus:border-[#D4AF37]"
              />

              <textarea
                rows={5}
                placeholder="Additional Message"
                className="rounded-xl border p-4 outline-none focus:border-[#D4AF37] md:col-span-2"
              />

              <button
                className="rounded-xl bg-[#D4AF37] py-4 font-semibold text-[#071428] transition hover:bg-[#c89f29] md:col-span-2"
              >
                Book Appointment
              </button>

            </form>

          </div>

          {/* Clinic Info */}

          <div className="space-y-6">

            <div className="rounded-[28px] bg-[#071428] p-8 text-white">

              <h3 className="text-2xl font-semibold">
                Contact Information
              </h3>

              <div className="mt-8 space-y-6">

                <div className="flex gap-4">
                  <Phone className="text-[#D4AF37]" />
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p>+91  86375 53770</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="text-[#D4AF37]" />
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p>blackshadow786786@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="text-[#D4AF37]" />
                  <div>
                    <p className="text-gray-400">Address</p>
                    <p> Champasari main road , siliguri, West bengal</p>
                  </div>
                </div>

              </div>

            </div>

            <div className="rounded-[28px] bg-white p-8 shadow-lg">

              <h3 className="text-xl font-semibold text-[#071428]">
                Working Hours
              </h3>

              <div className="mt-6 space-y-4">

                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span>9:00 AM - 8:00 PM</span>
                </div>

                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-red-500">Closed</span>
                </div>

              </div>

            </div>

            <div className="rounded-[28px] bg-[#D4AF37] p-8 text-[#071428]">

              <div className="flex items-center gap-3">
                <Calendar />
                <h3 className="text-xl font-bold">
                  Same Day Appointment
                </h3>
              </div>

              <p className="mt-4">
                Call us today to check availability for same-day treatment.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
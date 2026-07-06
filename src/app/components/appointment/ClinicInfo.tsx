import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Star,
  Car,
  Accessibility,
  Video,
  ArrowRight,
} from "lucide-react";

export default function ClinicInfo() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-[#D4AF37]">
            Visit Our Clinic
          </p>

          <h2 className="mt-4 font-serif text-4xl font-bold text-[#071428] md:text-5xl">
            Dr. Sultan Dental Care
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Modern dental care with advanced technology, experienced
            dentists, and personalized treatment for every patient.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Contact Card */}

          <div className="rounded-[32px] bg-[#071428] p-10 text-white shadow-xl">

            <div className="space-y-8">

              <div className="flex items-start gap-5">
                <MapPin className="mt-1 h-6 w-6 text-[#D4AF37]" />

                <div>
                  <h3 className="text-xl font-semibold">Address</h3>
                  <p className="mt-2 text-gray-300">
                    Dr. Sultan Dental Care
                    <br />
                    Champasari main road <br/>
                     siliguri, West bengal.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Phone className="mt-1 h-6 w-6 text-[#D4AF37]" />

                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="mt-2 text-gray-300">
                    +91 86375 53770

                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Mail className="mt-1 h-6 w-6 text-[#D4AF37]" />

                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="mt-2 text-gray-300">
                    blackshadow786786@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Clock3 className="mt-1 h-6 w-6 text-[#D4AF37]" />

                <div>
                  <h3 className="text-xl font-semibold">
                    Working Hours
                  </h3>

                  <p className="mt-2 text-gray-300">
                    Monday – Saturday
                    <br />
                    9:00 AM – 8:00 PM
                  </p>

                  <p className="mt-3 text-red-300">
                    Sunday : Closed
                  </p>

                </div>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="space-y-8">

            <div className="rounded-[32px] border p-8 shadow-lg">

              <div className="flex items-center gap-4">

                <Star className="h-10 w-10 text-[#D4AF37]" />

                <div>

                  <h3 className="text-3xl font-bold text-[#071428]">
                    4.9 / 5
                  </h3>

                  <p className="text-gray-500">
                    Google Rating • 500+ Reviews
                  </p>

                </div>

              </div>

            </div>

            <div className="grid gap-6 sm:grid-cols-2">

              <div className="rounded-3xl bg-[#F8F9FC] p-6">

                <Car className="mb-4 h-10 w-10 text-[#D4AF37]" />

                <h4 className="text-xl font-semibold text-[#071428]">
                  Parking
                </h4>

                <p className="mt-2 text-gray-600">
                  Free parking available.
                </p>

              </div>

              <div className="rounded-3xl bg-[#F8F9FC] p-6">

                <Accessibility className="mb-4 h-10 w-10 text-[#D4AF37]" />

                <h4 className="text-xl font-semibold text-[#071428]">
                  Accessible
                </h4>

                <p className="mt-2 text-gray-600">
                  Wheelchair-friendly clinic.
                </p>

              </div>

              <div className="rounded-3xl bg-[#F8F9FC] p-6">

                <Video className="mb-4 h-10 w-10 text-[#D4AF37]" />

                <h4 className="text-xl font-semibold text-[#071428]">
                  Online Consultation
                </h4>

                <p className="mt-2 text-gray-600">
                  Book a virtual consultation.
                </p>

              </div>

              <div className="rounded-3xl bg-[#F8F9FC] p-6">

                <Clock3 className="mb-4 h-10 w-10 text-[#D4AF37]" />

                <h4 className="text-xl font-semibold text-[#071428]">
                  Same-Day Visit
                </h4>

                <p className="mt-2 text-gray-600">
                  Emergency appointments available.
                </p>

              </div>

            </div>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-[#071428] transition hover:bg-[#c89f29]"
            >
              Get Directions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
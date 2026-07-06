import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const points = [
  "Experienced & Certified Dentists",
  "Advanced Dental Technology",
  "Personalized Treatment Plans",
  "Painless & Comfortable Care",
  "Sterilized & Hygienic Environment",
  "Transparent Pricing",
];

const stats = [
  {
    number: "10+",
    title: "Years of Experience",
  },
  {
    number: "12K+",
    title: "Happy Patients",
  },
  {
    number: "15+",
    title: "Expert Dentists",
  },
  {
    number: "5000+",
    title: "Successful Implants",
  },
];

export default function Story() {
  return (
    <section className="bg-[#071423] py-24">

      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div className="relative">

            <div className="overflow-hidden rounded-[28px] border border-[#d4af37]/20">

              <Image
                src="/images/about/clinic-room.png"
                alt="Clinic"
                width={650}
                height={760}
                className="h-auto w-full object-cover"
              />

            </div>

            {/* Floating Image */}

            <div className="absolute -bottom-12 right-0 hidden overflow-hidden rounded-3xl border-4 border-[#d4af37] shadow-2xl lg:block">

              <Image
                src="/images/about/clinic-reception.png"
                alt=""
                width={260}
                height={240}
                className="object-cover"
              />

            </div>

            {/* Experience */}

            <div className="absolute bottom-12 left-0 rounded-full border-4 border-[#d4af37] bg-[#071423] p-8 shadow-2xl">

              <div className="text-center">

                <h2 className="text-5xl font-bold text-[#d4af37]">
                  10+
                </h2>

                <p className="mt-2 text-sm uppercase tracking-widest text-white">
                  Years Experience
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <p className="text-sm font-semibold uppercase tracking-[5px] text-[#d4af37]">
              ABOUT US
            </p>

            <h2 className="mt-5 font-serif text-5xl font-semibold leading-tight text-white xl:text-6xl">

              About Dr. Sultan

              <span className="block text-[#d4af37]">
                Dental Care
              </span>

            </h2>

            <div className="mt-8 h-px w-32 bg-[#d4af37]" />

            <p className="mt-8 text-lg leading-9 text-gray-300">

              At Dr. Sultan Dental Care, we are committed to providing
              world-class dental treatments using the latest technology,
              experienced professionals, and personalized care. Our mission
              is to create healthy, confident smiles in a relaxing,
              hygienic, and friendly environment.

            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">

              {points.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <CheckCircle
                    size={20}
                    className="text-[#d4af37]"
                  />

                  <span className="text-white">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            <Link
              href="/contact"
              className="mt-12 inline-flex items-center gap-3 rounded-xl bg-[#d4af37] px-8 py-4 font-semibold text-black transition hover:scale-105"
            >

              Learn More About Us

              <ArrowRight size={18} />

            </Link>

          </div>

        </div>

        {/* Bottom Stats */}

        <div className="mt-28 grid overflow-hidden rounded-3xl border border-white/10 bg-[#08192f] md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (

            <div
              key={item.title}
              className="border-white/10 px-8 py-10 text-center lg:border-r last:border-r-0"
            >

              <h3 className="text-5xl font-bold text-[#d4af37]">
                {item.number}
              </h3>

              <p className="mt-3 text-lg text-white">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const featured = [
  {
    title: "Dental Implants",
    description:
      "Permanent, natural-looking replacement for missing teeth using advanced implant technology.",
    image: "/images/services/implant.png",
    href: "/services/dental-implants",
    large: true,
  },
  {
    title: "Smile Makeover",
    description:
      "Transform your smile with veneers, whitening, and cosmetic dentistry.",
    image: "/images/services/smile.png",
    href: "/services/smile-makeover",
    large: true,
  },
  {
    title: "Root Canal",
    description: "Pain-free treatment to save infected teeth.",
    image: "/images/services/root-canal.png",
    href: "/services/root-canal-treatment",
  },
  {
    title: "Teeth Whitening",
    description: "Professional whitening for a brighter smile.",
    image: "/images/services/whitening.png",
    href: "/services/teeth-whitening",
  },
  {
    title: "Orthodontics",
    description: "Braces & clear aligners for perfectly aligned teeth.",
    image: "/images/services/braces.png",
    href: "/services/orthodontics",
  },
];

export default function FeaturedServices() {
  return (
    <section className="bg-[#F8F9FC] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[4px] text-[#D4AF37]">
            Featured Services
          </p>

          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#071428] md:text-5xl">
            Our Most Popular Treatments
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Advanced dental solutions tailored to restore, enhance,
            and maintain your healthy smile.
          </p>
        </div>

        {/* Large Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {featured
            .filter((item) => item.large)
            .map((service) => (
              <div
                key={service.title}
                className="group overflow-hidden rounded-[32px] bg-white shadow-xl transition hover:-translate-y-2"
              >
                <div className="relative h-80">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-semibold text-[#071428]">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-600">
                    {service.description}
                  </p>

                  <Link
                    href={service.href}
                    className="mt-8 inline-flex items-center font-semibold text-[#D4AF37]"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
        </div>

        {/* Small Cards */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured
            .filter((item) => !item.large)
            .map((service) => (
              <div
                key={service.title}
                className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2"
              >
                <div className="relative h-56">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-[#071428]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-gray-600">
                    {service.description}
                  </p>

                  <Link
                    href={service.href}
                    className="mt-6 inline-flex items-center font-semibold text-[#D4AF37]"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Doctors", href: "/doctors" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const services = [
  {
    name: "General Dentistry",
    href: "/services/general-dentistry",
  },
  {
    name: "Cosmetic Dentistry",
    href: "/services/cosmetic-dentistry",
  },
  {
    name: "Dental Implants",
    href: "/services/dental-implants",
  },
  {
    name: "Root Canal Treatment",
    href: "/services/root-canal-treatment",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#071428] text-white">

      {/* Feature Bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <FeatureCard
              icon="⚙️"
              title="Modern Technology"
              text="Latest dental equipment"
            />

            <FeatureCard
              icon="❤️"
              title="Comfortable Environment"
              text="Relaxing & friendly clinic"
            />

            <FeatureCard
              icon="🚑"
              title="Emergency Care"
              text="24/7 emergency support"
            />

            <FeatureCard
              icon="🛡️"
              title="Insurance Accepted"
              text="Major insurance plans"
            />

          </div>

        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Company */}
          <div>

            <div className="flex items-center gap-3 mb-6">

              <div className="text-5xl">
                🦷
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  DR. SULTAN
                </h3>

                <p className="text-[#d4af37] tracking-[4px] text-xs">
                  DENTAL CARE
                </p>
              </div>

            </div>

            <p className="text-slate-400 leading-relaxed">
              Providing premium dental care with advanced
              technology and compassionate treatment for
              healthier smiles.
            </p>
<div className="mt-6 flex gap-3">
  <SocialButton
    icon={<FaFacebookF size={18} />}
    href="https://facebook.com/yourpage"
  />

  <SocialButton
    icon={<FaInstagram size={18} />}
    href="https://instagram.com/yourpage"
  />

  <SocialButton
    icon={<FaLinkedinIn size={18} />}
    href="https://linkedin.com/company/yourcompany"
  />
</div>

          </div>

          {/* Quick Links */}
          <div>

            <h4 className="text-[#d4af37] text-lg font-semibold mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3">

              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-[#d4af37] transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Services */}
          <div>

            <h4 className="text-[#d4af37] text-lg font-semibold mb-5">
              Services
            </h4>
<ul className="space-y-3">
  {services.map((service) => (
    <li key={service.href}>
      <Link
        href={service.href}
        className="text-gray-300 transition duration-300 hover:text-[#D4AF37]"
      >
        {service.name}
      </Link>
    </li>
  ))}
</ul>

          </div>

          {/* Contact */}
          <div>

            <h4 className="text-[#d4af37] text-lg font-semibold mb-5">
              Contact Info
            </h4>

            <div className="space-y-4 text-slate-400">

              <p>
                📍 Champasari main road,siliguri,West bengal.
              </p>

              <a
                href="tel:+918637553770"
                className="block hover:text-[#d4af37]"
              >
                📞 +91 8637553770
              </a>

              <a
                href="mailto:blackshadow786786@gmail.com"
                className="block hover:text-[#d4af37]"
              >
                ✉ blackshadow786786@gmail.com
              </a>

              <p>
                🕒 Mon - Sat: 09:00 AM - 08:00 PM
              </p>

            </div>

          </div>

          {/* Newsletter */}
          <div>

            <h4 className="text-[#d4af37] text-lg font-semibold mb-5">
              Newsletter
            </h4>

            <p className="text-slate-400 mb-5">
              Subscribe for dental tips and clinic updates.
            </p>

            <form className="flex overflow-hidden rounded-xl border border-[#d4af3730]">

              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 bg-transparent px-4 py-3 outline-none"
              />

              <button
                type="submit"
                className="bg-[#d4af37] px-5 text-black font-semibold hover:bg-[#c69b1f]"
              >
                →
              </button>

            </form>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-5">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">

            <p>
              © 2026 Dr. Sultan Dental Care. All Rights Reserved.
            </p>

          

          </div>

        </div>

      </div>

    </footer>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-3xl text-[#d4af37]">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold">
          {title}
        </h4>

        <p className="text-sm text-slate-400">
          {text}
        </p>
      </div>
    </div>
  );
}

function SocialButton({
  icon,
  href,
}: {
  icon: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af3730] transition hover:bg-[#d4af37] hover:text-black"
    >
      {icon}
    </a>
  );
}
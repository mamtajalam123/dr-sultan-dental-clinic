"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navClass = (href: string) =>
    `relative transition duration-300 hover:text-[#d4af37] ${
      pathname === href
        ? "text-[#d4af37] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-[#d4af37]"
        : "text-white"
    }`;

  return (
    <nav className="border-b border-[#d4af3720] bg-[#071428]">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex h-24 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">

            <div className="text-5xl">
              🦷
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white md:text-4xl">
                DR. SULTAN
              </h2>

              <p className="text-xs tracking-[4px] text-[#d4af37]">
                DENTAL CARE
              </p>
            </div>

          </Link>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-10 lg:flex">

            <li>
              <Link href="/" className={navClass("/")}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className={navClass("/about")}>
                About
              </Link>
            </li>

            {/* Services */}
            <li
              className="relative flex h-24 items-center"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <button
                className={`flex items-center gap-2 transition duration-300 ${
                  pathname.startsWith("/services")
                    ? "text-[#d4af37]"
                    : "text-white hover:text-[#d4af37]"
                }`}
              >
                Services

                <span
                  className={`text-xs transition duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

             {open && (
  <div className="absolute left-0 top-full z-50 w-80 overflow-hidden rounded-3xl border border-[#d4af3730] bg-[#0a1930] shadow-2xl">
    <Link
      href="/services/general-dentistry"
      className="block border-b border-white/5 px-6 py-4 text-white transition hover:bg-[#d4af37] hover:text-black"
    >
      🦷 General Dentistry
    </Link>

    <Link
      href="/services/root-canal-treatment"
      className="block border-b border-white/5 px-6 py-4 text-white transition hover:bg-[#d4af37] hover:text-black"
    >
      🦷 Root Canal Treatment
    </Link>

    <Link
      href="/services/dental-implants"
      className="block border-b border-white/5 px-6 py-4 text-white transition hover:bg-[#d4af37] hover:text-black"
    >
      💡 Dental Implants
    </Link>

    <Link
      href="/services/cosmetic-dentistry"
      className="block px-6 py-4 text-white transition hover:bg-[#d4af37] hover:text-black"
    >
      ✨ Cosmetic Dentistry
    </Link>
  </div>
)}
            </li>

            <li>
              <Link
                href="/doctors"
                className={navClass("/doctors")}
              >
                Doctors
              </Link>
            </li>

            <li>
              <Link
                href="/gallery"
                className={navClass("/gallery")}
              >
                Gallery
              </Link>
            </li>

            <li>
              <Link
                href="/testimonials"
                className={navClass("/testimonials")}
              >
                Testimonials
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={navClass("/contact")}
              >
                Contact
              </Link>
            </li>

          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            <Link
              href="/appointment"
              className="hidden rounded-xl bg-[#d4af37] px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-[#e6c14d] lg:block"
            >
              Book Appointment
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="text-3xl text-white transition hover:text-[#d4af37] lg:hidden"
            >
              ☰
            </button>

          </div>

        </div>

      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </nav>
  );
}
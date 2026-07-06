"use client";

import Link from "next/link";
import { useState } from "react";



interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}



export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  if (!isOpen) return null;

const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <aside className="fixed right-0 top-0 z-50 h-screen w-[320px] bg-[#071428] shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#d4af3730] p-6">

          <div>
            <h3 className="text-xl font-bold text-white">
              DR. SULTAN
            </h3>

            <p className="text-xs tracking-[3px] text-[#d4af37]">
              DENTAL CARE
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-3xl text-white"
          >
            ×
          </button>
        </div>

        {/* Menu */}
        <div className="p-6">

          <nav className="space-y-5">

            <Link
              href="/"
              onClick={onClose}
              className="block text-lg text-white hover:text-[#d4af37]"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={onClose}
              className="block text-lg text-white hover:text-[#d4af37]"
            >
              About
            </Link>

      <div>
  <button
    onClick={() => setServicesOpen(!servicesOpen)}
    className="flex w-full items-center justify-between text-lg text-white hover:text-[#d4af37]"
  >
    <span>Services</span>

    <span className="text-sm">
      {servicesOpen ? "−" : "+"}
    </span>
  </button>

  {servicesOpen && (
    <div className="mt-4 ml-4 border-l border-[#d4af37] pl-4">
      <div className="space-y-3">

        <Link
          href="/services/general-dentistry"
          onClick={onClose}
          className="block text-white transition hover:text-[#d4af37]"
        >
          🦷 General Dentistry
        </Link>

        <Link
          href="/services/root-canal-treatment"
          onClick={onClose}
          className="block text-white transition hover:text-[#d4af37]"
        >
          🦷 Root Canal Treatment
        </Link>

        <Link
          href="/services/dental-implants"
          onClick={onClose}
          className="block text-white transition hover:text-[#d4af37]"
        >
          💡 Dental Implants
        </Link>

        <Link
          href="/services/cosmetic-dentistry"
          onClick={onClose}
          className="block text-white transition hover:text-[#d4af37]"
        >
          ✨ Cosmetic Dentistry
        </Link>

      </div>
    </div>
  )}
</div>

            <Link
              href="/doctors"
              onClick={onClose}
              className="block text-lg text-white hover:text-[#d4af37]"
            >
              Doctors
            </Link>

            <Link
              href="/gallery"
              onClick={onClose}
              className="block text-lg text-white hover:text-[#d4af37]"
            >
              Gallery
            </Link>

            <Link
              href="/testimonials"
              onClick={onClose}
              className="block text-lg text-white hover:text-[#d4af37]"
            >
              Testimonials
            </Link>

          

            <Link
              href="/contact"
              onClick={onClose}
              className="block text-lg text-white hover:text-[#d4af37]"
            >
              Contact
            </Link>

          </nav>

          {/* CTA */}
          <div className="mt-10">

            <Link
              href="/appointment"
              onClick={onClose}
              className="block rounded-xl bg-[#d4af37] px-6 py-4 text-center font-semibold text-black transition hover:bg-[#f0c75e]"
            >
              Book Appointment
            </Link>

          </div>

          {/* Contact */}
          <div className="mt-10 border-t border-[#d4af3730] pt-6">

            <p className="text-sm text-slate-400">
              Emergency
            </p>

            <p className="mt-1 font-semibold text-white">
              +91 9876543210
            </p>

            <p className="mt-4 text-sm text-slate-400">
              Email
            </p>

            <p className="mt-1 text-white">
              info@drsultan.com
            </p>

          </div>

        </div>
      </aside>
    </>
  );
}
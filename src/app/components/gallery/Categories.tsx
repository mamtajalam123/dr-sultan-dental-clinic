"use client";

import {
  LayoutGrid,
  Building2,
  UserRound,
  ScanLine,
  ImageIcon,
  CalendarDays,
} from "lucide-react";

const categories = [
  {
    id: "all",
    title: "All",
    icon: LayoutGrid,
  },
  {
    id: "clinic",
    title: "Clinic",
    icon: Building2,
  },
  {
    id: "doctors",
    title: "Doctors",
    icon: UserRound,
  },
  {
    id: "technology",
    title: "Technology",
    icon: ScanLine,
  },
  {
    id: "patients",
    title: "Patients",
    icon: ImageIcon,
  },
  {
    id: "events",
    title: "Events",
    icon: CalendarDays,
  },
];

interface CategoriesProps {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

export default function Categories({
  active,
  setActive,
}: CategoriesProps) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[4px] text-[#D4AF37]">
            Gallery Categories
          </p>

          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#071428] md:text-5xl">
            Explore Our Gallery
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Browse our clinic, doctors, advanced technology,
            patient transformations and memorable moments.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="mt-14 flex flex-wrap justify-center gap-5">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.id}
                onClick={() => setActive(category.id)}
                className={`group flex items-center gap-3 rounded-full border px-7 py-4 font-semibold transition-all duration-300 ${
                  active === category.id
                    ? "border-[#D4AF37] bg-[#D4AF37] text-[#071428] shadow-lg"
                    : "border-gray-200 bg-white text-[#071428] hover:border-[#D4AF37] hover:bg-[#071428] hover:text-white"
                }`}
              >
                <Icon
                  size={20}
                  className={`transition-colors ${
                    active === category.id
                      ? "text-[#071428]"
                      : "text-[#D4AF37] group-hover:text-white"
                  }`}
                />

                <span>{category.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
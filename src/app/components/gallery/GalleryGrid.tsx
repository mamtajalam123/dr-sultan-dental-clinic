"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "./galleryData";


interface Props {
  active: string;
}

export default function GalleryGrid({ active }: Props) {
  // लाइटबॉक्स (मोडल) के लिए स्टेट इंडेक्स
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    active === "all"
      ? galleryImages
      : galleryImages.filter((item) => item.category === active);

  // पिछले (Prev) इमेज पर जाने का फंक्शन
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev! - 1));
    }
  };

  // अगले (Next) इमेज पर जाने का फंक्शन
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#071428]">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* 1. प्रीमियम इमेज ग्रिड लेआउट */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 transition-all duration-500">
          {filteredImages.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#d4af37]/10 bg-[#0a1930]/40 shadow-xl cursor-pointer transition-all duration-500 hover:border-[#d4af37]/30 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
            >
              {/* नेक्स्ट जेनरेशन इमेज रेंडरर */}
              <Image
                src={item.image}
                alt={`Dental Care - ${item.category}`}
                fill
                sizes="(max-w-7xl) 33vw, (max-w-md) 100vw"
                className="object-cover opacity-85 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-40"
              />

              {/* लक्ज़री डार्क-गोल्ड होवर ओवरले */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071428] via-[#071428]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                
                {/* फ्लोटिंग स्केलेबल बटन */}
                <div className="absolute top-4 right-4 h-9 w-9 bg-[#071428]/80 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-[#d4af37] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 delay-75">
                  <Maximize2 className="h-4 w-4" />
                </div>

                {/* कैटेगरी टैग एनीमेशन */}
                <div className="transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                  <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#d4af37] px-2.5 py-1 rounded bg-[#d4af37]/10 inline-block mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-white font-medium text-base capitalize tracking-wide">
                    {item.category} Highlight
                  </h4>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* खाली स्थिति (Empty State) */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 font-medium">No images found in this category.</p>
          </div>
        )}

      </div>

      {/* 2. फुल स्क्रीन एनिमेटेड लाइटबॉक्स मोडल */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-10 animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          {/* क्लोज बटन */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 p-2.5 rounded-full transition outline-none"
            onClick={() => setLightboxIndex(null)}
          >
            <X className="h-6 w-6" />
          </button>

          {/* लेफ्ट नेविगेशन एरो */}
          <button
            className="absolute left-4 sm:left-6 text-[#d4af37] hover:text-white bg-[#051124]/60 border border-white/5 hover:bg-[#d4af37] hover:text-black p-3 rounded-full transition-all outline-none"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-6 w-6 stroke-[2.5]" />
          </button>

          {/* एक्टिव इमेज कंटेनर */}
          <div
            className="relative w-full max-w-4xl aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[lightboxIndex].image}
              alt="Expanded Preview"
              fill
              className="object-contain"
              priority
            />

            {/* बॉटम इन्फो स्ट्रिप */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
                {filteredImages[lightboxIndex].category}
              </span>
            </div>
          </div>

          {/* राइट नेविगेशन एरो */}
          <button
            className="absolute right-4 sm:right-6 text-[#d4af37] hover:text-white bg-[#051124]/60 border border-white/5 hover:bg-[#d4af37] hover:text-black p-3 rounded-full transition-all outline-none"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6 stroke-[2.5]" />
          </button>
        </div>
      )}
    </section>
  );
}
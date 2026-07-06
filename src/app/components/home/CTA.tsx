import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#fdfbf7] py-16 sm:py-20 lg:py-24 xl:py-28 w-full overflow-hidden relative">
      {/* Decorative Subtle Background Pattern/Plant Container Context */}
      <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-20 lg:opacity-100 pointer-events-none hidden md:block">
        <div className="relative h-full w-full flex items-end justify-end p-0">
          {/* Green plant leaf structural placeholder matching image_bdfd99.jpg corner */}
          <div className="w-64 h-64 bg-gradient-to-tl from-emerald-800/10 to-transparent rounded-full blur-2xl" />
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="bg-white rounded-2xl border border-gray-100 p-8 sm:p-12 lg:p-16 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,.08)] transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* LEFT COLUMN: CALLOUT ICON & NARRATIVE ARCHITECTURE */}
            <div className="lg:col-span-8 flex flex-col sm:flex-row items-start gap-6">
              {/* Premium Floating Circular Icon Container */}
              <div className="flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF9EB] shadow-inner text-2xl">
                📅
              </div>
              
              {/* Text Layout */}
              <div className="flex-col justify-center">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#071428] tracking-wide leading-tight">
                  Ready to Transform Your Smile?
                </h2>
                <p className="mt-3 text-[15px] text-gray-500 leading-7 max-w-2xl">
                  Book your appointment today and take the first step towards a healthier, brighter, and more confident smile with our elite specialist network.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: ACTION COMPONENT ROUTING */}
            <div className="lg:col-span-4 flex justify-start lg:justify-end w-full">
              <Link
                href="/appointment"
                className="inline-flex h-[54px] px-8 items-center justify-center rounded-md bg-[#f5c343] hover:bg-[#e0b034] text-slate-950 font-bold text-[13px] tracking-wider uppercase shadow-md hover:shadow-[0_10px_25px_rgba(245,195,67,0.35)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center"
              >
                Book Your Appointment <span className="ml-2 text-sm transform transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
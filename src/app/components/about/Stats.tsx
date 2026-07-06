"use client";

const statItems = [
  {
    val: "10+",
    label: "Years of Experience",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.172-.435.789-.435.96 0l1.83 4.14a.75.75 0 0 0 .565.41l4.521.413c.477.043.668.625.324.954l-3.377 3.228a.75.75 0 0 0-.214.662l.96 4.475c.102.476-.411.849-.824.594l-3.951-2.474a.75.75 0 0 0-.756 0l-3.951 2.474c-.413.255-.926-.118-.824-.594l.96-4.475a.75.75 0 0 0-.214-.662L2.943 9.796c-.344-.33-.153-.911.324-.954l4.521-.413a.75.75 0 0 0 .566-.41l1.83-4.14Z" />
      </svg>
    ),
  },
  {
    val: "12K+",
    label: "Happy Patients",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    val: "25+",
    label: "Expert Dentists",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
  },
  {
    val: "5000+",
    label: "Successful Implants",
    icon: (
      <span className="text-xl font-bold leading-none select-none">🦷</span>
    ),
  },
  {
    val: "98%",
    label: "Patient Satisfaction",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M12 18.75a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5ZM9.75 9.75h.008v.008H9.75V9.75Zm4.5 0h.008v.008h-.008V9.75Z" />
      </svg>
    ),
  },
  {
    val: "100%",
    label: "Sterilized Environment",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
];

export default function Stats() {
  return (
    <div className="w-full bg-[#030914] text-white py-10 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">
        
        {/* PREMIUM STATS PANEL CONTAINER CARD */}
        <div className="w-full bg-[#051124]/40 border border-white/5 rounded-2xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-4 items-center text-center">
            
            {statItems.map((stat, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center px-2 relative group"
              >
                {/* Gold Micro Icon Minimal Frame */}
                <div className="h-10 w-10 flex items-center justify-center text-[#d4af37] opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300">
                  {stat.icon}
                </div>

                {/* Big Metric Bold Number */}
                <span className="mt-2 text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                  {stat.val}
                </span>

                {/* Description Secondary Label */}
                <span className="text-[12px] text-gray-400 mt-1.5 leading-snug max-w-[130px] font-medium">
                  {stat.label}
                </span>
                
                {/* Elegant Vertical Divider Line between grid elements (Hidden on Mobile) */}
                {idx < 5 && (
                  <div className="hidden lg:block absolute right-0 top-1/4 h-1/2 w-[1px] bg-white/10" />
                )}
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}
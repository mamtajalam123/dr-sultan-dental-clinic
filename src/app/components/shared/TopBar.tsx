export default function TopBar() {
  return (
    <div className="hidden md:block border-b border-[#d4af3730] bg-[#071428]">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex h-12 items-center justify-between text-sm text-white">

          {/* Left Section */}
          <div className="flex items-center gap-6">

            <div className="flex items-center gap-2">
              <span className="text-[#d4af37]">🕒</span>
              <span>Mon - Sat: 09:00 AM - 08:00 PM</span>
            </div>

            <div className="h-5 w-px bg-[#d4af3730]" />

            <div className="flex items-center gap-2">
              <span className="text-[#d4af37]">📞</span>
              <span>+91 8637553770</span>
            </div>

          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6">

            <a
              href="mailto:info@drsultan.com"
              className="flex items-center gap-2 hover:text-[#d4af37] transition"
            >
              <span className="text-[#d4af37]">✉</span>
              <span>blackshadow786786@gmail.com</span>
            </a>

            <div className="h-5 w-px bg-[#d4af3730]" />

            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/" className="hover:text-[#d4af37]">f</a>
              <a href="https://www.linkedin.com/" className="hover:text-[#d4af37]">in</a>
              <a href="https://www.instagram.com/accounts/login/?hl=en" className="hover:text-[#d4af37]">ig</a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
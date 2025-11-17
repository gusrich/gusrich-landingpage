"use client";

import { useState } from "react";

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    // Scroll dengan behavior smooth
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } else {
    console.warn(`Section with ID '${sectionId}' not found!`);
  }
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleMenuClick = (sectionId) => {
    scrollToSection(sectionId);
    setOpen(false); // Tutup menu setelah klik
  };

  const waLink =
    "https://wa.me/6281210818919?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20audit%20gratis%20website.";

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#3A0CA3] text-white shadow-lg overflow-x-hidden">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <div
          className="text-xl font-bold tracking-wide cursor-pointer select-none"
          onClick={() => scrollToSection("top")}
        >
          GusRich Web Programmer
          <p className="text-sm -mt-1">dari code, bukan generator</p>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-lg">
          <button onClick={() => scrollToSection("AboutMe")} className="hover:opacity-80">
            Tentang Saya
          </button>

          <button onClick={() => scrollToSection("PricingProcess")} className="hover:opacity-80">
            Paket Harga
          </button>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00E5FF] text-black font-semibold px-4 py-2 rounded-md hover:opacity-90 transition"
          >
            Minta Audit Gratis
          </a>
        </div>

        {/* HAMBURGER */}
        <button
          className="md:hidden flex flex-col gap-1 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <span className={`h-1 w-6 bg-white rounded transition ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-1 w-6 bg-white rounded transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-1 w-6 bg-white rounded transition ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden fixed top-0 right-0 h-full w-64 bg-[#3A0CA3]
          flex flex-col p-10 gap-8 text-lg transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <button
          onClick={() => handleMenuClick("AboutMe")}
          className="text-left hover:opacity-80"
        >
          Tentang Saya
        </button>
        <button
          onClick={() => handleMenuClick("PainPoint")}
          className="text-left hover:opacity-80"
        >
          Solusi
        </button>
        <button
          onClick={() => handleMenuClick("paket")}
          className="text-left hover:opacity-80"
        >
          Paket Harga
        </button>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="bg-[#00E5FF] text-black font-semibold px-4 py-2 rounded-md hover:opacity-90"
        >
          Minta Audit Gratis
        </a>
      </div>
    </nav>
  );
}

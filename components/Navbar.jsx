"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="w-full fixed top-0 left-0 z-50 
                 bg-[#3A0CA3] text-white shadow-lg"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* LOGO */}
        <div className="text-xl font-bold tracking-wide">
          GusRich Web Programmer
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-lg">
          <a href="#solusi" className="hover:opacity-80">Solusi</a>
          <a href="#paket" className="hover:opacity-80">Paket Harga</a>

          <a
            href="#audit"
            className="bg-[#00E5FF] text-black font-semibold px-4 py-2 rounded-md hover:opacity-90 transition"
          >
            Minta Audit Gratis
          </a>
        </div>

        {/* HAMBURGER (MOBILE ONLY) */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-[6px] md:hidden"
        >
          <span
            className={`block h-[3px] w-7 bg-white transition-all duration-300
            ${open ? "rotate-45 translate-y-[9px]" : ""}`}
          />
          <span
            className={`block h-[3px] w-7 bg-white transition-all duration-300
            ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-[3px] w-7 bg-white transition-all duration-300
            ${open ? "-rotate-45 -translate-y-[9px]" : ""}`}
          />
        </button>
      </div>

      {/* MOBILE MENU DRAWER */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full bg-[#3A0CA3]
                    flex flex-col p-10 gap-8 text-lg transition-all duration-300
                    ${open ? "w-64" : "w-0 overflow-hidden"}`}
      >
        <a href="#solusi" className="hover:opacity-80">Solusi</a>
        <a href="#paket" className="hover:opacity-80">Paket Harga</a>

        <a
          href="#audit"
          className="bg-[#00E5FF] text-black font-semibold px-4 py-2 rounded-md hover:opacity-90"
        >
          Minta Audit Gratis
        </a>
      </div>
    </nav>
  );
}

// components/Hero.jsx
// Tailwind version — replace previous CSS Module hero.
// Perubahan: full Tailwind utilities, responsive, accessible.

import React from "react";

/* =========================================================
   HERO COMPONENT (TAILWIND)
   - Full-bleed background (SVG)
   - Dark overlay for text contrast
   - Responsive typograpy & CTA
   - Semua komentar di bawah tiap blok agar mudah dipahami
   ========================================================= */
export default function Hero() {
  // WA link (CTA)
  const phone = "6281210818919"; // nomor WA
  const msg = "Halo GusRich, saya tertarik dengan Audit Gratis Anda!";
  const wa = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

  return (
    /* 
      SECTION: wrapper utama hero
      - min-h-[90vh] -> tinggi hero 90% viewport (mirip sebelumnya)
      - relative -> diperlukan agar overlay absolute bisa menutupi
      - bg-darkBlue -> warna dasar (di-tailwind.config kita sudah extend)
      - bg-cover bg-center -> pastikan background image menutupi dan terpusat
      - px-6 -> padding horizontal agar tidak nempel di pinggir mobile
    */
    <section
      className="relative min-h-[90vh] flex items-center justify-center px-6 bg-darkBlue bg-cover bg-center"
      // inline style untuk background-image karena Tailwind tidak otomatis baca file custom sebagai class
      style={{ backgroundImage: "url('/images/abstract-code.svg')" }}
      aria-label="Hero - GusRich Web Programmer"
    >
      {/* 
        OVERLAY: gelap tipis agar teks lebih terbaca di atas gambar
        - absolute inset-0 -> menutup seluruh area section
        - bg-black/40 -> black dengan 40% opacity (Tailwind syntax)
      */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/*
        KONTEN UTAMA: di atas overlay
        - relative + z-10 -> memastikan teks ada di lapisan teratas
        - max-w-5xl -> batasi lebar teks agar nyaman dibaca
        - text-center -> alignment teks di tengah
      */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* 
          TITLE:
          - responsive font sizes: mobile -> text-4xl, md -> text-6xl, lg -> text-7xl
          - font-extrabold -> sangat tebal seperti desain awal
          - leading-tight -> jarak antarbaris rapat
        */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-textPrimary">
          {/* break line explicit untuk kontrol sama seperti versi awal */}
          Web Programmer Spesialis Clean Code — <br />

          <span className="text-cyanAccent">Website Super Cepat (Skor 90+)</span> Dijamin
        </h1>

        {/*
          SUBTITLE / PARAGRAPH:
          - mt-6 -> margin top supaya ada jarak dari judul
          - text-base md:text-lg -> ukuran font bertambah sedikit di tablet
          - text-textPrimary/90 -> warna teks off-white sedikit transparan
        */}
        <p className="mt-6 text-base md:text-lg text-textPrimary/90 max-w-3xl mx-auto">
          Website lambat bikin hilang ranking Google. Saya membangun dari fondasi clean code —
          bukan patching tempelan. Dapatkan audit gratis dan rekomendasi teknis yang nyata.
        </p>

        {/*
          CTA BUTTON:
          - mt-8 -> jarak ke subtitle
          - inline-flex items-center justify-center -> agar link tampil seperti tombol
          - bg-cyanAccent -> warna CTA yang lo setujui (#2DD4BF)
          - text-darkBlue -> teks tombol kontras gelap
          - px-6 py-3 -> padding nyaman
          - rounded-lg -> sudut melengkung modern
          - font-semibold -> tegas
          - hover:bg-[--] -> efek hover (gunakan class custom cyanHover di config, fallback with inline style)
          - transition -> smooth transform / color
        */}
        <div className="mt-8 flex items-center justify-center">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-cyanAccent text-darkBlue font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-[#22BDAA] transition transform hover:-translate-y-0.5"
            /* aria-label untuk aksesibilitas (screen reader) */
            aria-label="Minta Audit Gratis via WhatsApp"
          >
            Audit GRATIS Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}

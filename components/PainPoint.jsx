// components/PainPoint.jsx
import React from "react";

const painPoints = [
  {
    icon: "🐌",
    anim: "animate-snail",
    title: "Lambat Saat Dibuka (> 5 detik)",
    description:
      "Pengunjung langsung kabur ke website pesaing. Google juga minus ranking untuk website lambat.",
  },
  {
    icon: "💣",
    anim: "animate-bomb",
    title: "Kelebihan Kode & Script",
    description:
      "Plugin bekas generator atau builder bikin kode bengkak & menyimpan error tersembunyi.",
  },
  {
    icon: "🕸️",
    anim: "animate-pulseSoft",
    title: "Struktur SEO Rusak",
    description:
      "Google bingung baca kode lo, dampaknya website ga muncul di hasil pencarian. Trafik keok.",
  },
];

export default function PainPoint() {
  return (
    <section className="bg-lightBlue py-20 md:py-28 mt-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-darkBlue leading-tight mb-4">
          Jangan Sampai Website Anda Sulit Muncul di Halaman Pertama Google!
        </h2>

        <p className="mt-4 mb-12 text-base md:text-lg text-darkBlue/80 max-w-2xl mx-auto">
          Website Anda seharusnya bekerja keras untuk Anda — bukan malah diam di
          halaman belakang Google karena masalah teknis berikut:
        </p>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point, index) => (
            <li
              key={index}
              className="
                bg-purpleCard 
                text-white 
                rounded-xl 
                shadow-md 
                p-6 
                text-left 
                border border-purple-300
                hover:shadow-lg hover:-translate-y-1 transition 
                flex flex-col
              "
            >
              <span className={`text-4xl mb-4 ${point.anim}`}>{point.icon}</span>

              <h3 className="text-lg font-bold">{point.title}</h3>

              <p className="mt-2 text-sm opacity-90 leading-relaxed">
                {point.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

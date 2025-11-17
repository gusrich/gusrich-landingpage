// components/SolusiTuntas.jsx
import React from "react";

const SolusiTuntas = () => {
  const phoneNumber = "6281210818919";
  const message =
    "GusRich, saya mau dibuatkan website yang siap tampil di halaman Google!";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const solutions = [
    {
      icon: "✅",
      title: "Kode Bebas Sampah (Clean Code)",
      description:
        "Saya tidak menggunakan generator atau template berlebih yang membuat website Anda rentan. Semua kode ditulis manual untuk performa maksimal dan stabilitas jangka panjang.",
    },
    {
      icon: "🚀",
      title: "Garansi PageSpeed 90+ Score",
      description:
        "Tidak ada trik instan. Saya melakukan optimasi menyeluruh agar website Anda mencapai skor 90+ di Core Web Vitals — standar performa Google untuk peringkat terbaik.",
    },
    {
      icon: "⚙️",
      title: "Struktur SEO Teknis Superior",
      description:
        "Saya memperbaiki error crawl, struktur JSON-LD, dan skema data agar website Anda dipahami Google dengan cepat dan tepat.",
    },
  ];

  return (
    <section className="bg-[#4B0082] text-white py-24 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12 tracking-tight">
          Saya Hadir Membawa Solusi Tuntas untuk Masalah Website Anda.
        </h2>

        {/* SOLUTION GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur p-8 rounded-xl text-center"
            >
              <span className="text-5xl text-[#00FFFF] mb-4 block">
                {solution.icon}
              </span>
              <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
              <p className="text-sm opacity-90 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block 
              font-bold 
              text-lg 
              text-[#4B0082] 
              bg-[#14c4ff] 
              border-[3px] 
              border-[#2DD4BF] 
              px-8 py-3 
              rounded-lg 
              shadow-md 
              hover:bg-[#2DD4BF] 
              hover:scale-105 
              hover:shadow-[0_5px_15px_rgba(0,255,255,0.4)]
              transition 
            "
          >
            BUAT WEBSITE SEKARANG!
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolusiTuntas;

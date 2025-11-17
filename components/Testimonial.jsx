// components/Testimonial.jsx
import React from "react";

const testimonials = [
  {
    quote:
      "Setelah audit dan perbaikan struktur kode, skor PageSpeed website saya naik drastis dari 55 ke 92! Pengerjaannya rapi, tidak ada kode sisa.",
    client: "Adi Wibowo, Founder TokoDigital.id",
  },
  {
    quote:
      "Website saya dulu sulit terindeks di Google. Setelah perbaikan technical SEO oleh GusRich, sekarang sudah muncul di halaman pertama.",
    client: "Rina Sari, Owner JasaDesignKu",
  },
  {
    quote:
      "GusRich bukan cuma bikin cepat, tapi bersih. Semua elemen saya cek, dan jelas ini bukan hasil builder-template. Clean code kelas pro.",
    client: "Ferdiansyah, Developer",
  },
  {
    quote:
      "Saya kirim website dengan loading 10 detik, pulang-pulang sudah 1.8 detik saja! Fix, saya menyesal duluan pakai jasa template instan.",
    client: "Nina Putri, FashionBrand",
  },
  {
    quote:
      "Tidak pakai banyak basa-basi, cuma bilang: ‘Saya mau website tanpa sampah kode’. Hasilnya? Speed tinggi, SEO bagus—jadi nomor satu di niche saya.",
    client: "Bimo Ajis, Startup Lokal",
  },
  {
    quote:
      "Pengerjaannya transparan dan jelas. Saya bisa lihat sendiri prosesnya. Sangat beda dengan yang sekadar install plugin ‘hijau’ palsu.",
    client: "Joko Priambodo, Blogger",
  },
];

export default function Testimonial() {
  return (
    <section className="bg-white py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-[#4B0082] mb-12 tracking-tight">
          Apa Kata Mereka Setelah Bersih dari Kode Sampah?
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testi, index) => (
            <div
              key={index}
              className={`p-6 bg-[#4B0082] text-white rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-xl 
                ${
                  index % 2 === 0
                    ? "animate-fadeInLeft"
                    : "animate-fadeInRight"
                }`}
            >
              <p className="text-sm italic mb-4">"{testi.quote}"</p>
              <p className="text-right font-bold text-xs opacity-90">
                — {testi.client}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

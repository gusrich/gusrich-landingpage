"use client"; // ← Tambahkan ini di paling atas

import { useState } from "react";

export default function FAQ() {
  const faqData = [
    {
      question: "Apa itu 'Clean Code' dan mengapa itu penting untuk website saya?",
      answer: "Clean Code adalah kode yang rapi & mudah dibaca, dan mudah dikelola oleh mesin Google. Ini memastikan website Anda cepat (skor PageSpeed tinggi) dan meminimalisir bug, sangat disukai Google.",
    },
    {
      question: "Apa saja yang termasuk dalam Technical SEO Superior?",
      answer: "Technical SEO Superior mencakup metadata yang benar, JSON-LD Schema, sitemap.xml, robots.txt, dan loading di bawah 2 detik — pondasi Google indexing.",
    },
    {
      question: "Berapa lama waktu yang dibutuhkan untuk perbaikan website Clean Code?",
      answer: "Tergantung seberapa 'kotor' website Anda. Kami estimasi setelah *audit gratis* dan analisis menyeluruh.",
    },
    {
      question: "Apakah ada garansi setelah perbaikan kode?",
      answer: "Ya, skor PageSpeed 90+ dan garansi bug selama periode tertentu dijamin.",
    },
    {
      question: "Apakah setelah membuat website dengan clean code langsung ada di halaman 1 Google?",
      answer: "Saya bisa menjamin, web yang saya buat bisa bersaing di halaman pertama Google namun perlu diketahui sebenarnya Banyak faktor lain seperti niche, bisnis, konten, dan positioning Bisnis anda",
    },
    {
      question: "Apa bedanya GusRich Programmer dengan jasa web lain?",
      answer: "Saya membangun website dengan kode manual, bukan generator. Setiap baris saya pahami dan tanggung jawab atas kinerjanya.",
    },
    {
      question: "Apa artinya generator web builder?",
      answer: "Metode cepat untuk membuat website, menggunakan bantuan AI tapi cenderung tidak disukai Google. Website generator jarang muncul di page 1.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-16 px-6 md:px-10 lg:px-20 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10">
        ❓ Pertanyaan yang Sering Diajukan (FAQ)
      </h2>

      <div className="space-y-4 max-w-3xl mx-auto">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden"
          >
            <button
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-700 hover:bg-gray-100 transition"
            >
              {item.question}
              <span>{activeIndex === index ? "▲" : "▼"}</span>
            </button>

            {activeIndex === index && (
              <div className="p-4 text-gray-600 bg-white border-t border-gray-200">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

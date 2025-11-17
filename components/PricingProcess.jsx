// components/PricingProcess.jsx
"use client";
import React from "react";

import { motion } from "framer-motion";

const generateWaLink = (title) => {
  const waNumber = "6281210818919";
  let message = `Halo GusRich, saya tertarik dengan paket: ${title}. Mohon info lebih lanjut.`;

  if (title.toLowerCase().includes("audit")) {
    message =
      "Halo GusRich, saya mau audit website GRATIS. Mohon dibantu cek domain saya: [NAMA_DOMAIN_ANDA]";
  } else if (title.toLowerCase().includes("fix")) {
    message =
      "Halo GusRich, saya tertarik dengan Paket FIX & OPTIMIZE. Mohon estimasi dan langkah selanjutnya.";
  } else if (title.toLowerCase().includes("building")) {
    message =
      "Halo GusRich, saya tertarik dengan Paket Building / Full Rebuild. Saya ingin konsultasi scope & harga.";
  }

  return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
};

const packages = [
  {
    icon: "🔍",
    title: "Audit Website Gratis (Tanpa Syarat)",
    body:
      "Analisa cepat kondisi website: performa, struktur, dan rekomendasi teknis. Laporan singkat + prioritas perbaikan.",
    features: [
      "Analisis performa & core web vitals",
      "Deteksi code bloat & blocking scripts",
      "Rekomendasi perbaikan prioritas",
    ],
    info: "1–2 Hari | Gratis",
    accent: "cyan",
  },
  {
    icon: "🛠",
    title: "FIX & OPTIMIZE — Perbaikan & Optimasi",
    body:
      "Refactor clean code, optimasi gambar & resource, konfigurasi caching, dan perbaikan SEO teknis untuk target PageSpeed 90+.",
    features: [
      "Clean code refactor",
      "Optimasi gambar & assets",
      "Core Web Vitals tuning",
      "Garansi 30 hari untuk perbaikan terkait",
    ],
    info: "3–5 Hari | Mulai Rp 1.500.000",
    accent: "purple",
  },
  {
    icon: "🧱",
    title: "BUILD / FULL REBUILD — Website Baru Clean Code",
    body:
      "Dibangun ulang dengan arsitektur bersih, SEO-first, dan performa tinggi. Cocok untuk bisnis serius yang mau scale.",
    features: [
      "Design + implementasi clean code",
      "SEO teknis & struktur data",
      "Setup monitoring & maintenance ringan",
    ],
    info: "7–10 Hari | Mulai Rp 3.000.000",
    accent: "cyan",
  },
  {
    icon: "💡",
    title: "BEST VALUE — Website + Marketing",
    body:
      "Website custom untuk pemilik bisnis yang ingin memanfaatkan Google sebagai mesin pencari profit tanpa repot algoritma.",
    features: [
      "halaman dengan UI profesional",
      "Copywriting marketing & CTA yang kuat",
      "Optimasi SEO untuk Google visibility",
      "Setup Google My Business & Analytics",
      "Support konten SEO awal",
      "Bantu bisnismu menemukan Positioning yang tepat dan efisien"
    ],
    info: "10–14 Hari | Mulai Rp 5.000.000",
    accent: "purple",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hover: { scale: 1.04, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)" },
};

export default function PricingProcess() {
  return (
    <section id="PricingProcess" className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-[#4B0082] mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Solusi Website yang Jelas, Jujur, dan Tuntas
        </motion.h2>

        <motion.p
          className="text-[#4B0082] text-base md:text-lg max-w-3xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Banyak pemilik bisnis sudah punya website, tapi tidak pernah muncul di Google — bahkan setelah bayar mahal.
          Di sini saya mulai dari audit untuk pastikan langkah yang tepat.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          {packages.map((pkg, i) => (
            <motion.article
              key={i}
              className="h-full flex flex-col justify-between bg-[#fcfcfc] p-6 rounded-lg shadow-sm transition-transform"
              variants={cardVariants}
              whileHover="hover"
            >
              <div
                className={`-mt-6 rounded-t-lg h-1 ${
                  pkg.accent === "cyan" ? "bg-[#00FFFF]" : "bg-[#4B0082]"
                }`}
              />

              <div>
                <div className="flex items-start gap-3 mb-4">
                  <div className="text-2xl">{pkg.icon}</div>
                  <h3 className="text-lg font-bold text-[#4B0082]">
                    {pkg.title}
                  </h3>
                </div>

                <p className="text-sm text-[#444] mb-4">{pkg.body}</p>

                <ul className="mb-6 space-y-2 text-sm text-[#444]">
                  {pkg.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#00FFFF] font-bold w-4">•</span>
                      <span className="flex-1">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="border-t pt-4 text-sm font-semibold text-[#4B0082] mb-4">
                  {pkg.info}
                </p>

                <a
                  href={generateWaLink(pkg.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#00FFFF] text-[#4B0082] font-semibold py-3 rounded-md shadow hover:bg-[#2DD4BF] transition"
                >
                  Kirim Pesan WhatsApp Sekarang
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.p
          className="text-center mt-10 text-gray-600 text-lg md:text-xl font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <span className="font-semibold">
            Semua berawal dari niat baik dan kode yang bersih.
          </span>{" "}
          <span className="font-bold text-gray-800">GusRich Web Programmer</span>{" "}
          — bantu bisnis Anda punya website yang benar-benar bekerja.
        </motion.p>
      </div>
    </section>
  );
}

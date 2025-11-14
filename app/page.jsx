// ===============================================================
// app/page.jsx
// LANDING PAGE UTAMA GUSRICH + PENJELASAN PER BARIS
// ===============================================================

// 1. IMPORT COMPONENT – Rapikan pakai alias "@/components"
import Hero from '@/components/Hero.jsx';
import PainPoint from '@/components/PainPoint.jsx';
import SolusiTuntas from '@/components/SolusiTuntas.jsx';
import Testimonial from '@/components/Testimonial.jsx';
import PricingProcess from '@/components/PricingProcess.jsx';
import ClosingArgument from '@/components/ClosingArgument.jsx';
import Faq from '@/components/FAQ.jsx';
import Footer from '@/components/Footer.jsx';


// ===============================================================
// 2. SEO METADATA (OTOMATIS DIHANDLE NEXT.JS V16)
// Metadata ini override metadata dari layout.jsx
// ===============================================================
export const metadata = {
  title: 'GusRich Programmer | Clean Code • PageSpeed 90+ • SEO Teknikal',
  description:
    'Jasa pembuatan dan perbaikan website (Next.js, React, PHP) dengan Clean Code, Technical SEO, dan garansi PageSpeed 90+.',

  openGraph: {
    title: 'GusRich Web Programmer | Clean Code & PageSpeed 90+',
    description: 'Spesialis kecepatan website, SEO teknis, dan clean code profesional.',
    url: 'https://gusrich.github.io',
    siteName: 'GusRich Web Programmer',
    images: [
      {
        url: '/og-image.jpg',     // BEST PRACTICE: pakai relative path
        width: 1200,
        height: 630,
        alt: 'GusRich Web Programmer Clean Code',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};


// ===============================================================
// 3. PAGE UTAMA – WAJIB ADA 1 export default
// ===============================================================
export default function Home() {

  // 3A. JSON-LD untuk Rich Result Google
  // Ini wajib disiapkan sebagai Object, nanti dijadikan <script>
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GusRich Web Programmer",
    "url": "https://gusrich.github.io",
    "logo": "https://gusrich.github.io/public/images/logo-gusrich.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-812-1081-8919",
      "contactType": "customer service"
    }
  };

  // 4. MAIN CONTENT — Komponen Landing Page Lo
  return (
    <main>
      {/* 
        JSON-LD harus dimasukkan sebagai raw script.
        Next.js otomatis menaruhnya hanya di output final.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* COMPONENT HALAMAN BERURUTAN */}
      <Hero />
      <PainPoint />
      <SolusiTuntas />
      <Testimonial />
      <PricingProcess />
      <ClosingArgument />
      <Faq />

      {/* FOOTER hanya ditaruh di page, bukan di layout */}
      <Footer />
    </main>
  );
}

// components/PricingProcess.jsx - SECTION 5: PAKET & PROSES (REVISI FINAL: Tambah WA CTA)

import styles from '../styles/PricingProcess.module.css'; 

// --- FUNGSI KRUSIAL: Menghasilkan Link WA dengan Pesan Khusus ---
const generateWaLink = (title) => {
    // Ganti 0 dengan 62 untuk WA Link
    const waNumber = '6281210818919'; 
    let message = '';
    
    // Logic untuk memastikan GusRich tahu klien klik paket yang mana
    if (title.includes('Audit Website Gratis')) {
        message = 'Halo GusRich, saya tertarik dengan Layanan *Audit Website Gratis* dan ingin mengajukan. Website saya [NAMA_DOMAIN_ANDA].';
    } else if (title.includes('FIX & OPTIMIZE')) {
        message = 'Halo GusRich, saya tertarik dengan *Paket FIX & OPTIMIZE* (Rp 1.5 Juta) dan siap melanjutkan ke tahap perbaikan. Mohon dibantu!';
    } else if (title.includes('FULL REBUILD')) {
        message = 'Halo GusRich, saya tertarik dengan *Paket FULL REBUILD* (Rp 5 Juta) dan ingin konsultasi lebih lanjut tentang pembangunan website baru.';
    }
    
    // Encode the message dan buat link
    return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
};
// -----------------------------------------------------------------


const packages = [
  // ... (Data paket tetap sama seperti sebelumnya, tapi sekarang akan dipanggil oleh fungsi)
  {
    icon: '🔍',
    title: 'Langkah Awal: Audit Website Gratis (Tanpa Syarat)',
    body: 'Sebelum bicara biaya, saya bantu dulu menilai kondisi website Anda. Dari sini kita tahu apakah websitenya masih bisa diperbaiki atau harus dibangun ulang dari awal.',
    features: [
      'Analisis performa & struktur kode.',
      'Laporan singkat (PDF) berisi hasil dan saran realistis.',
      'Estimasi waktu dan kebutuhan proyek.',
      'Rekomendasi apakah cukup di-fix atau perlu rebuild.'
    ],
    info: '⏱ 1–2 Hari Kerja | 💰 Gratis 100%',
    accentClass: styles.accentCyan 
  },
  {
    icon: '🛠',
    title: 'Paket FIX & OPTIMIZE – Untuk Website yang Masih Bisa Diselamatkan',
    body: 'Jika website Anda masih memiliki fondasi yang baik, saya bantu rapikan kodenya, tingkatkan kecepatannya, dan optimalkan tampilannya agar kembali bekerja maksimal.',
    features: [
      'Clean Code Refactoring tanpa ubah tampilan utama.',
      'Optimasi kecepatan (target skor 90+).',
      'SEO Teknis Dasar (struktur heading, sitemap, meta tag).',
      'Garansi 30 Hari untuk setiap perbaikan teknis.'
    ],
    info: '⏱ 3–5 Hari Kerja | 💰 Mulai dari Rp 1.500.000',
    accentClass: styles.accentPurple 
  },
  {
    icon: '🧱',
    title: 'Paket Building – Solusi Total untuk Website dengan pondasi Clean Code yang kokoh dan siap bersaing di halaman Google',
    body: 'Bagi Anda yang ingin memiliki Website yang benar dimata Google dan pemilik website lama yang sudah berat, berantakan, atau sulit dikelola, saya bangun ulang sepenuhnya dengan struktur modern dan performa tinggi.',
    features: [
      'Desain & pengkodean dengan Clean Code.',
      'Optimasi penuh SEO dan performa.',
      'Konten & CTA disusun agar benar-benar mendukung penjualan.',
      'Garansi 90 Hari + maintenance ringan.'
    ],
    info: '⏱ 7–10 Hari Kerja | 💰 Mulai dari Rp 3.000.000',
    accentClass: styles.accentCyan 
  }
];

const PricingProcess = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
        
        {/* H2 dan Intro Text lainnya... */}
        <h2 className={styles.title}>
          Solusi Website yang Jelas, Jujur, dan Tuntas
        </h2>
        <p className={styles.introText}>
          Banyak pemilik bisnis sudah punya website, tapi tidak pernah muncul di Google — bahkan setelah bayar mahal. Di sini, saya tidak langsung jualan. Saya bantu cek dulu akar masalahnya secara **GRATIS**, agar Anda tidak salah langkah.
        </p>

        {/* Grid Paket */}
        <div className={styles.packageGrid}>
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`${styles.packageCard} ${pkg.accentClass}`} 
            >
              
              <h3 className={styles.cardTitle}>
                <span className={styles.icon}>{pkg.icon}</span> {pkg.title}
              </h3>
              
              {/* Card Body, Feature List, Info Block... (Kode lama) */}
              <p className={styles.cardBody}>{pkg.body}</p>
              <ul className={styles.featureList}>
                {pkg.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <p className={styles.infoBlock}>
                {pkg.info}
              </p>
              
              {/* --- KODE BARU: CTA WHATSAPP --- */}
              <a 
                href={generateWaLink(pkg.title)} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.ctaWaButton} 
              >
                Kirim Pesan WhatsApp Sekarang
              </a>
              {/* ---------------------------------- */}

            </div>
          ))}
        </div>
        
        {/* Closing Tagline Section */}
        <p className={styles.closingTagline}>
          Semua berawal dari niat baik dan kode yang bersih. **GusRich Web Programmer — bantu bisnis anda punya website yang benar-benar bekerja.**
        </p>

      </div>
    </section>
  );
};

export default PricingProcess;
// components/SolusiTuntas.jsx - SECTION 3: SOLUSI UNIK KITA

import styles from '../styles/SolusiTuntas.module.css'; // Import CSS

const SolusiTuntas = () => {
  // --- VARIABEL WA LINK BARU UNTUK CTA INI ---
    const phoneNumber = "6281210818919"; 
    const message = "GusRich, saya mau dibuatkan website yang siap tampil di halaman Google!"; 
    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    // ------------------------------------------
  // Array data Solusi Tuntas (membuat kode lebih rapih)
  const solutions = [
    { 
      icon: '✅', 
      title: 'Kode Bebas Sampah (Clean Code)', 
      // KONTEN FINAL: Menggunakan 'Saya' dan lebih detail
      description: 'Saya tidak menggunakan generator atau template berlebih yang membuat website Anda rentan. Semua kode ditulis manual untuk performa maksimal dan stabilitas jangka panjang.' 
    },
    { 
      icon: '🚀', 
      title: 'Garansi PageSpeed 90+ Score', 
      // KONTEN FINAL: Menghubungkan 90+ ke standar peringkat Google
      description: 'Tidak ada trik instan. Saya melakukan optimasi menyeluruh agar website Anda mencapai skor 90+ di Core Web Vitals — standar performa Google untuk peringkat terbaik.' 
    },
    { 
      icon: '⚙️', 
      title: 'Struktur SEO Teknis Superior', 
      // KONTEN FINAL: Lebih lugas
      description: 'Saya memperbaiki error crawl, struktur JSON-LD, dan skema data agar website Anda dipahami Google dengan cepat dan tepat.' 
    },
  ];

  return (
    // SECTION: Menggunakan class dari CSS Module
    <section className={styles.sectionContainer}> 
      
      {/* H2 UTAMA: Judul Solusi - Menggunakan Copywriting Final */}
      <h2 className={styles.title}>
        Saya Hadir Membawa Solusi Tuntas untuk Masalah Website Anda.
      </h2>

      {/* Grid untuk 3 Poin Utama Solusi */}
      <div className={styles.solutionGrid}>
        {solutions.map((solution, index) => (
          // Mapping data ke dalam kartu (card)
          <div key={index} className={styles.solutionCard}>
            <span className={styles.icon}>{solution.icon}</span>
            <h3 className={styles.cardTitle}>{solution.title}</h3>
            <p className={styles.cardDescription}>{solution.description}</p>
          </div>
        ))}
      </div>
       {/* === CTA BARU DI BAWAH KARTU === */}
            <div className={styles.painpointCtaWrapper}> 
                <a 
                    href={waLink}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.painpointCta}
                >
                    BUAT WEBSITE SEKARANG!
                </a>
            </div>

    </section>
  );
};

// WAJIB: Export komponen
export default SolusiTuntas;
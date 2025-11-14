// components/PainPoint/PainPoint.jsx - SECTION 2: PAIN POINT

import styles from '../styles/PainPoint.module.css'; 

const painPoints = [
  {
    icon: '🐌',
    title: 'Lambat Saat Dibuka (Loading Time >5 detik)',
    description: 'Pengunjung langsung menutup halaman Anda. Dampaknya: bounce rate naik, SEO turun, konversi hilang.'
  },
  {
    icon: '💣',
    title: 'Kelebihan Kode & Script Sisa (Code Bloated)',
    description: 'Sisa-sisa generator dan plugin membuat website berat serta menyembunyikan error teknis penting.'
  },
  {
    icon: '🕸️',
    title: 'Struktur SEO Teknis Rusak',
    // KONTEN FINAL: Mengganti 'Sampah Digital'
    description: 'Website Anda sulit dipahami Google, sehingga tidak terindeks sempurna. Akibatnya, website Anda seolah “tidak terlihat” — tidak mendatangkan pengunjung dan tidak menghasilkan.'
  },

];

const PainPoint = () => {
  // --- VARIABEL WA LINK BARU UNTUK CTA INI ---
    const phoneNumber = "6281210818919"; 
    const message = "GusRich, saya mau dibuatkan website yang siap tampil di halaman Google!"; 
    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    // ------------------------------------------
  return (
    // FIX 2: Menggunakan class styles.sectionContainer
    <section className={styles.sectionContainer}>
      
      {/* FIX 2: Menggunakan class styles.title */}
      <h2 className={styles.title}>
        Jangan sampai Website Anda Sulit Muncul di Halaman Pertama Google!
      </h2>
      
      {/* FIX 2: Menggunakan class styles.introText */}
      <p className={styles.introText}>
       Website Anda Seharusnya bekerja keras untuk anda - Bukan malah diam di halaman belakang Google karena Hal berikut ; </p>
      
      {/* FIX 2: Menggunakan class styles.problemList */}
      <ul className={styles.problemList}>
        {painPoints.map((point, index) => (
          // FIX 2: Menggunakan class styles.listItem
          <li key={index} className={styles.listItem}>
            {/* Menggunakan class styles.accentIcon */}
            <span className={styles.accentIcon}>{point.icon}</span>
            <h3 className={styles.cardTitle}>{point.title}</h3> 
            <p className={styles.cardDescription}>{point.description}</p>
          </li>
        ))}
      </ul>
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

export default PainPoint;
// components/ClosingArgument.jsx - SECTION 6: CLOSING ARGUMENT

import styles from '../styles/ClosingArgument.module.css'; 

// Nomor WA dan Pesan CTA Utama (Audit GRATIS)
const waNumber = '6281210818919'; 
const ctaMessage = 'Halo GusRich, saya mau *Minta Audit GRATIS* untuk website saya. Mohon dibantu untuk proses selanjutnya. Website saya [NAMA_DOMAIN_ANDA].';
const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(ctaMessage)}`;

const ClosingArgument = () => {
  return (
    // Menggunakan background Ungu Tua untuk kontras maksimum
    <section className={styles.sectionContainer}>
      
      {/* H2 UTAMA PENUTUP */}
      <h2 className={styles.title}>
        Jangan Sampai Anda Salah Memilih Jasa Pembuatan Website!
      </h2>
      
      {/* CTA UTAMA FINAL (Tombol Cyan paling besar) */}
      <a 
        href={waLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.ctaFinalButton}
      >
        Kirim Pesan Sekarang, dan ngobrol lebih dalam
      </a>

    </section>
  );
};

export default ClosingArgument;
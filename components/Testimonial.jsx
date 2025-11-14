// components/Testimonial.jsx - SECTION 4: BUKTI SOSIAL

import styles from '../styles/Testimonial.module.css'; // Mengimpor CSS khusus Testimonial

const testimonials = [
  {
    // KONTEN FINAL Testimoni 1
    quote: "Setelah audit dan perbaikan struktur kode, skor PageSpeed website saya naik drastis dari 55 ke 92! Pengerjaannya rapi, tidak ada kode sisa. Sangat direkomendasikan.",
    client: "— Adi Wibowo, Founder TokoDigital.id",
    icon: '⭐️' // Bisa ganti dengan ikon bintang atau quote yang lo mau
  },
  {
    // KONTEN FINAL Testimoni 2
    quote: "Website saya dulu sulit terindeks di Google. Setelah perbaikan technical SEO oleh GusRich, sekarang sudah muncul di halaman pertama untuk kata kunci utama kami. Hasilnya nyata.",
    client: "— Rina Sari, Owner JasaDesignKu",
    icon: '⚡️' // Bisa ganti ikon lain
  },
];

const Testimonial = () => {
  return (
    // Menggunakan class dari CSS Module
    <section className={styles.sectionContainer}>
      
      {/* H2 UTAMA: Judul Testimonial - Menggunakan Copywriting Final */}
      <h2 className={styles.title}>
        Apa Kata Klien yang Sudah Merasakan Hasil Clean Code dan Kecepatan Maksimal?
      </h2>

      {/* Grid untuk Testimoni */}
      <div className={styles.testimonialGrid}>
        {testimonials.map((testi, index) => (
          // Mapping data ke dalam kartu testimoni
          <div key={index} className={styles.testimonialCard}>
            <span className={styles.icon}>{testi.icon}</span> {/* Ikon di sini */}
            <p className={styles.quote}>"{testi.quote}"</p>
            <p className={styles.client}>{testi.client}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Testimonial;
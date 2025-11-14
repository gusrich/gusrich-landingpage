// components/Hero.jsx
import styles from '../styles/Hero.module.css';

export default function Hero() {
  const phone = "6281210818919";
  const msg = "Halo GusRich, saya tertarik dengan Audit Gratis Anda!";
  const wa = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

  return (
    <section className={styles.heroWrapper}>
      
      {/* TEXT BLOCK */}
      <div className={styles.textBox}>
        <h1 className={styles.title}>
          Web Programmer Spesialis Clean Code —  
          <br />
          Garansi Website Super Cepat (Skor 90+)
        </h1>

        <p className={styles.subtitle}>
          Website lambat bikin hilang ranking Google.  
          Saya bangun dari fondasi clean code — bukan patching tempelan.
        </p>

        <a href={wa} target="_blank" className={styles.cta}>
          Audit GRATIS Sekarang
        </a>
      </div>

    </section>
  );
}

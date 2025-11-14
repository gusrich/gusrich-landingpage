// components/FAQ.jsx

import styles from '../styles/FAQ.module.css';

const Faq = () => {
  // Data FAQ (Lo bisa tambahkan lagi nanti)
  const faqData = [
    {
      question: "Apa itu 'Clean Code' dan mengapa itu penting untuk website saya?",
      answer: "Clean Code adalah kode yang rapi, mudah dibaca, dan mudah dikelola. Ini sangat penting karena memastikan website anda cepat (skor PageSpeed tinggi) dan meminimalisir bug, sehingga google sangat menyukai type website seperti ini.",
    },
    {
      question: "Apa saja yang termasuk dalam Technical SEO Superior?",
      answer: "Technical SEO Superior mencakup implementasi metadata yang benar, JSON-LD Schema Markup, sitemap.xml, robots.txt, dan memastikan kecepatan loading website di bawah 2 detik. Ini adalah pondasi wajib agar Google dapat mengindeks sebuah website dengan cepat dan tepat.",
    },
    {
      question: "Berapa lama waktu yang dibutuhkan untuk perbaikan website Clean Code?",
      answer: "Waktu perbaikan sangat bervariasi tergantung kompleksitas dan seberapa 'kotor' kode awal. Kami akan memberikan estimasi pasti setelah melakukan Audit GRATIS dan menganalisis kode website anda secara mendalam.",
    },
    {
      question: "Apakah ada garansi setelah perbaikan kode?",
      answer: "Ya, kami memberikan garansi skor PageSpeed 90+ dan garansi bug code selama periode tertentu. Kami memastikan website lo siap bersaing setelah layanan selesai.",
    },
    {
      question: "Apakah setelah saya membuat website menggunakan clean code, akan langsung berada di halaman pertama Google?",
      answer: "saya tidak bisa menjamin akan hal itu, banyak faktor yang mempengaruhi untuk website anda berada disana. Namun, saya pastikan, website yang saya buat, sudah memenuhi aturan main persaingan di halaman Google, baru kemudian bagaimana bisnis anda, niche anda, positioning bisnis anda, keunikan tagline bisnis anda dsb.",
    },
    {
      question: "Apa bedanya Gusrich Programmer dengan jasa web lain?",
      answer: "Saya membuat website dengan code manual, baris demi baris. Bukan generator, tempelate, elementor dan cara cepat lain. saya jamin website anda yang saya buat, saya pahami dan saya susun dengan hati dan tanggung jawab ",
    },
    {
      question: "Apakah artinya generator web builder?",
      answer: "Sebuah cara yang dilakukan kebanyakan orang untuk membuat website, cara ini mudah dan cepat, andapun bisa membuatnya, namun cara ini sangat tidak disukai oleh google, silakan tanyakan kepada pembuat website yang muncul di google, bagaimana mereka membangunnya. Saya bisa jamin, tidak secara instan / dengan generator-.",
    },
  ];

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.faqTitle}>❓ Pertanyaan yang Sering Diajukan (FAQ)</h2>
      
      <div className={styles.faqList}>
        {faqData.map((item, index) => (
          // Lo bisa mengembangkan ini menjadi Accordion Component nanti.
          <div key={index} className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>
              {item.question}
            </h3>
            <p className={styles.faqAnswer}>
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
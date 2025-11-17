// components/Header.jsx 
// ---------- HEADER FINAL + PENJELASAN PER BARIS ----------

"use client"; 
// WAJIB — karena kita pakai useState (interaktif), maka file ini harus jadi client component.

import React, { useState } from 'react'; 
// Import React dan useState untuk kontrol buka/tutup menu mobile.

import styles from '../styles/Header.module.css'; 
// Import CSS module khusus untuk header agar class name tidak bentrok.

import Image from 'next/image'; 
// Import komponen Image Next.js (lebih optimal dari <img> biasa).

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State untuk menyimpan kondisi apakah menu mobile sedang terbuka.
  // false = tertutup (awal), true = terbuka.

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // Fungsi untuk membalik kondisi state setiap kali hamburger diklik.

  const waLink = "https://wa.me/6281210818919?text=Halo GusRich, saya tertarik dengan jasa pembuatan website saya!";
  // Link WhatsApp untuk CTA (Minta Audit Gratis).

  return (
    // Semua isi header dibungkus dalam tag <header>
    <header className={styles.headerContainer}>
      {/* CLASS .headerContainer = sticky, ada background ungu, dan posisinya di paling atas halaman */}

      {/* ---------------- LOGO (optional) ---------------- */}
      {/* 
      Kalau mau pasang logo tinggal aktifkan ini:
     
      <div className={styles.logo}>
        <Image 
          src="/images/logo-gusrich.svg"
          alt="Logo GusRich"
          width={150}
          height={40}
          priority
        />
      </div>
      */}

      {/* ---------------- NAVIGASI UTAMA ---------------- */}
      <nav
        className={`${styles.nav} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}
        // styles.nav = tampilan default desktop
        // styles.mobileMenuOpen = gaya menu saat terbuka di mobile
      >
        {/* Link menu akan menutup dropdown mobile selepas diklik */}
        <a href="#solusi" className={styles.navLink} onClick={toggleMenu}>
          Solusi
        </a>

        <a href="#paket" className={styles.navLink} onClick={toggleMenu}>
          Paket Harga
        </a>

        {/* CTA HEADER */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaHeader}
          onClick={toggleMenu}
        >
          Minta Audit Gratis
        </a>
      </nav>

      {/* ---------------- HAMBURGER ICON (ONLY MOBILE) ---------------- */}
      <div
        className={`${styles.hamburgerIcon} ${isMenuOpen ? styles.open : ''}`}
        // styles.open = animasi hamburger berubah jadi X
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation"
      >
        {/* 3 garis pembentuk hamburger */}
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

    </header>
  );
};

export default Header;
// Export agar bisa dipakai di layout.jsx dan halaman lain

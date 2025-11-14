// components/Footer.jsx - FOOTER

import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.contentWrapper}>
                
                {/* Kolom 1: Copyright */}
                <p className={styles.copyright}>
                    © {new Date().getFullYear()} GusRich Web Programmer. All rights reserved.
                </p>

                {/* Kolom 2: Tautan Hukum */}
                <div className={styles.links}>
                    {/* Lo ganti # dengan link halaman asli lo ya! */}
                    <a href="#" className={styles.link}>Privacy Policy</a> 
                    <a href="#" className={styles.link}>Terms of Service</a>
                </div>

                {/* Kolom 3: Branding Tambahan */}
                <p className={styles.branding}>
                    Dibuat dengan **Clean Code** oleh GusRich.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
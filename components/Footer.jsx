// components/Footer.jsx
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear(); 

  return (
    // bg-darkBlue, text-lightGray: Asumsi warna dari setup Tailwind lo
    <footer className="bg-darkBlue text-lightGray py-10">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand & Logo (Diperbesar, Tanpa Teks Deskripsi) */}
          <div>
            <Image
              src="/images/gusrich-logo.png" 
              alt="GusRich Web Programmer Logo"
              width={500} // LEBAR LOGO (misalnya 200px)
              height={350} // TINGGI LOGO (misalnya 64px)
              className="w-52 lg:w-72 mb-4"// Class Tailwind h-16 (64px)
            />
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-cyanAccent mb-2">Navigasi</h4>
            <ul className=" space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-cyanAccent transition">
                  About Me
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyanAccent transition">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-cyanAccent transition">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyanAccent transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyanAccent transition">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Social & contact */}
          <div>
            <h4 className="text-sm font-semibold text-cyanAccent mb-2">Ikuti & Hubungi</h4>
            <div className="space-y-1 text-sm">
              <p>📧 gusrich@proton.me</p>
              <p>🌐 linkedin.com/gusrich</p>
            </div>
          </div>
        </div>

        <div className="border-t border-lightGray/20 mt-8 pt-4 text-center text-xs text-lightGray/60">
          © {currentYear} GusRich Web Programmer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
import "./globals.css";
import Navbar from "../components/Navbar.jsx";

export const metadata = {
  title: "GusRich Web Programmer | Clean Code & PageSpeed 90+",
  description: "Jasa pembuatan website clean code, cepat, dan SEO kuat tanpa plugin berat.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-[#F5F5F5]">
        <Navbar />
        
        <main className="pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}

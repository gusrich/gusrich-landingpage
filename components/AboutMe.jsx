// components/AboutMe.jsx

import Image from 'next/image';

const AboutMe = () => {
    return (
        <section id="AboutMe" className="py-20 px-4 bg-white text-gray-800">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">

                {/* TEKS */}
                <div className="lg:w-1/2">
                    <h2 className="text-3xl lg:text-4xl font-extrabold mb-5 leading-snug">
                        Kenal Lebih Dekat:
                        <span className="text-[#0891b2]"> Siapa di Balik GusRich?</span>
                    </h2>

                    <p className="leading-relaxed mb-4">
                        Halo, saya Gusrich — seorang Web Programmer yang fokus pada <strong>Clean Code</strong>   
                        dan struktur website yang ramah Google. Bukan sekadar bikin website tampil cantik, 
                        tapi dibangun dari fondasi teknis yang benar.
                    </p>

                    <p className="leading-relaxed mb-6">
                        Saya tidak menggunakan page builder seperti Elementor. Kode kembung, performa lambat,
                        dan sering jadi penyebab ranking mentok. Di sini, setiap baris kode ditulis manual agar
                        website bisa <strong>loading cepat, ringan, dan disukai algoritma Google.</strong>
                    </p>

                    <div className="my-6 p-5 border border-gray-200 bg-gray-50 rounded-lg">
                        <p className="font-semibold mb-2 text-base flex.items-start">
                            <span className="mr-2 text-green-600 text-xl">✔</span>
                            Background IT & Programming bertahun-tahun di perusahaan besar Jakarta
                        </p>
                        <p className="font-semibold mb-2 text-base flex.items-start">
                            <span className="mr-2 text-green-600 text-xl">✔</span>
                            Fokus pada Web Performance & Core Web Vitals
                        </p>
                        <p className="font-semibold mb-2 text-base flex.items-start">
                            <span className="mr-2 text-green-600 text-xl">✔</span>
                            Portofolio website dengan skor A di PageSpeed & GTmetrix
                        </p>
                        <p className="font-semibold text-base flex.items-start">
                            <span className="mr-2 text-green-600 text-xl">✔</span>
                            Selalu belajar — nggak mau berhenti di zona nyaman
                        </p>
                    </div>

                    <a
                        href="#kontak"
                        className="inline-block py-3 px-8 bg-[#0891b2] hover:bg-[#0e7490] text-white font-bold rounded-lg transition duration-300 shadow-lg"
                    >
                        Mari Diskusikan Website Bisnis Anda 
                    </a>
                </div>

                {/* FOTO */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-first lg:order-none">
                    <div className="relative w-72 h-80 lg:w-80 lg:h-96 rounded-xl overflow-hidden border-4 border-[#0891b2] transform translate-x-3 translate-y-3 shadow-xl">
                        <Image
                            src="/images/profile/gusrich-profile.webp"
                            alt="Foto Profil Gusrich - Web Programmer Clean Code"
                            width={320}
                            height={384}
                            className="object-cover w-full h-full"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;

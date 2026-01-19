'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function TentangKami() {
  return (
    <div className="min-h-screen bg-white pt-20 md:pt-24">
      <section className="bg-white pt-8 md:pt-12 pb-24 md:pb-32 lg:pb-40">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div 
            className="w-full"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <div>
              <div className="space-y-16 md:space-y-32">
                {/* Header */}
                <motion.div 
                  className="text-center space-y-8"
                  variants={fadeInUp}
                >
                  <div className="flex justify-center mb-12">
                    <Image
                      src="/images/logo/eq-group-brief-logo.png"
                      alt="EQ Group Global Logo"
                      width={300}
                      height={150}
                      className="object-contain"
                      priority
                    />
                  </div>
                  <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#0a0a0a] tracking-tight leading-[0.9]">
                    TENTANG<br />KAMI
                  </h1>
                  <div className="h-2 w-32 bg-[#0675ad] mx-auto" />
                </motion.div>

                {/* Asal Usul & Penubuhan */}
                <motion.div 
                  className="border-t border-b border-[#0a0a0a] py-16"
                  variants={fadeInUp}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    <div className="lg:col-span-5">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a0a0a] mb-8 uppercase tracking-tight">
                        Asal Usul &<br />Penubuhan
                      </h2>
                    </div>
                    <div className="lg:col-span-7 space-y-6">
                      <p className="text-xl md:text-2xl text-[#0a0a0a] leading-relaxed">
                        EQ Group Global ditubuhkan pada tahun <span className="font-bold text-[#0675ad]">2022</span> sebagai inisiatif untuk menyatukan beberapa perniagaan berpotensi tinggi di bawah satu kumpulan strategik.
                      </p>
                      <p className="text-xl md:text-2xl text-[#0a0a0a] leading-relaxed">
                        Nama "EQ" diambil daripada nama pengasasnya, <span className="font-bold text-[#0675ad]">Ezzat Qaisar</span>, menggambarkan identiti kepimpinan, nilai ketulusan dan semangat keusahawanan yang menjadi teras kepada setiap syarikat di bawah kumpulan ini.
                      </p>
                      <div className="border-l-4 border-[#0675ad] pl-8 py-6 bg-[#0a0a0a] text-white">
                        <p className="text-xl md:text-2xl italic leading-relaxed mb-4">
                          "EQ bukan sekadar singkatan nama, tetapi simbol dedikasi dan nilai yang membentuk setiap langkah perjalanan kami."
                        </p>
                        <p className="text-lg md:text-xl font-bold">— Ezzat Qaisar, Pengasas EQ Group Global</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Siapa Kami */}
                <motion.div 
                  className="border-t border-b border-[#0a0a0a] py-16"
                  variants={fadeInUp}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    <div className="lg:col-span-5">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a0a0a] mb-8 uppercase tracking-tight">
                        Siapa<br />Kami
                      </h2>
                    </div>
                    <div className="lg:col-span-7 space-y-8">
                      <p className="text-xl md:text-2xl text-[#0a0a0a] leading-relaxed">
                        EQ Group Global ialah kumpulan syarikat pelbagai industri yang berpangkalan di <span className="font-bold">Malaysia</span> dan kini mengembangkan operasi ke peringkat <span className="font-bold">antarabangsa</span>.
                      </p>
                      <p className="text-xl md:text-2xl text-[#0a0a0a] leading-relaxed">
                        Kami membina ekosistem perniagaan berasaskan nilai, ilmu, dan inovasi, dengan tumpuan kepada pembangunan insan dan kesejahteraan masyarakat.
                      </p>
                      
                      <div className="border-t border-[#0a0a0a] pt-8">
                        <p className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-6 uppercase">
                          Empat Sektor Utama
                        </p>
                        <div className="space-y-4">
                          <div className="border-l-4 border-[#0675ad] pl-6 py-3">
                            <p className="text-lg md:text-xl text-[#0a0a0a]">
                              <span className="font-bold text-[#0675ad]">Pendidikan Islamic</span> - Smart Quran Malaysia Centre (Didirikan 2024)
                            </p>
                          </div>
                          <div className="border-l-4 border-[#0675ad] pl-6 py-3">
                            <p className="text-lg md:text-xl text-[#0a0a0a]">
                              <span className="font-bold text-[#0675ad]">Sistem Pengurusan Pusat Tuisyen</span> - eMindTutor (Didirikan 2026)
                            </p>
                          </div>
                          <div className="border-l-4 border-[#0675ad] pl-6 py-3">
                            <p className="text-lg md:text-xl text-[#0a0a0a]">
                              <span className="font-bold text-[#0675ad]">Pengurusan Sumber Manusia</span> – Core HR Centre (Didirikan 2025)
                            </p>
                          </div>
                          <div className="border-l-4 border-[#0675ad] pl-6 py-3">
                            <p className="text-lg md:text-xl text-[#0a0a0a]">
                              <span className="font-bold text-[#0675ad]">F&B Antarabangsa</span> – EQ F&B Division (Akan Datang)
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-[#0a0a0a] pt-8">
                        <div className="grid grid-cols-2 gap-8">
                          <div>
                            <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0675ad] mb-2">35+</div>
                            <div className="text-base md:text-lg text-[#0a0a0a] uppercase">Jumlah Karyawan</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Visi Kami */}
                <motion.div 
                  className="bg-[#0a0a0a] text-white border-t border-b border-white py-16"
                  variants={fadeInUp}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    <div className="lg:col-span-5">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 uppercase tracking-tight">
                        Visi<br />Kami
                      </h2>
                    </div>
                    <div className="lg:col-span-7">
                      <p className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed">
                        Menjadi kumpulan perniagaan global yang berteraskan nilai, ilmu dan inovasi untuk membina masa depan yang lebih baik bagi masyarakat dan ekonomi serantau.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Misi Kami */}
                <motion.div 
                  className="border-t border-b border-[#0a0a0a] py-16"
                  variants={fadeInUp}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    <div className="lg:col-span-5">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a0a0a] mb-8 uppercase tracking-tight">
                        Misi<br />Kami
                      </h2>
                    </div>
                    <div className="lg:col-span-7 space-y-6">
                      <ol className="space-y-6 text-xl md:text-2xl text-[#0a0a0a] leading-relaxed">
                        <li className="border-l-4 border-[#0675ad] pl-6">
                          Menyatukan pelbagai industri di bawah satu ekosistem strategik.
                        </li>
                        <li className="border-l-4 border-[#0675ad] pl-6">
                          Menggalakkan pembangunan insan dan keusahawanan berasaskan nilai.
                        </li>
                        <li className="border-l-4 border-[#0675ad] pl-6">
                          Meluaskan operasi ke pasaran antarabangsa melalui kolaborasi strategik.
                        </li>
                      </ol>
                    </div>
                  </div>
                </motion.div>

                {/* Pengasas */}
                <motion.div 
                  className="bg-[#0a0a0a] text-white border-t border-b border-white py-16"
                  variants={fadeInUp}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    <div className="lg:col-span-5">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 uppercase tracking-tight">
                        Pengasas<br />EQ Group Global
                      </h2>
                    </div>
                    <div className="lg:col-span-7 space-y-6">
                      <p className="text-xl md:text-2xl text-white leading-relaxed">
                        <span className="font-bold text-[#0675ad]">Ezzat Qaisar</span> ialah seorang usahawan muda yang menjadi pengasas dan peneraju utama di sebalik EQ Group Global.
                      </p>
                      <p className="text-xl md:text-2xl text-white leading-relaxed">
                        Beliau menubuhkan kumpulan ini dengan visi untuk menyatukan pelbagai industri di bawah satu ekosistem strategik yang berasaskan nilai, ilmu, dan inovasi.
                      </p>
                      <p className="text-xl md:text-2xl text-white leading-relaxed">
                        Sejak penubuhannya pada tahun 2022, beliau telah memimpin perkembangan EQ Group Global daripada sebuah idea kecil kepada kumpulan perniagaan yang aktif dalam pendidikan, teknologi pengurusan, dan industri antarabangsa.
                      </p>
                      <p className="text-xl md:text-2xl text-white leading-relaxed">
                        Beliau berhasrat untuk mewujudkan satu sistem pengurusan bersepadu di mana setiap syarikat di bawah EQ Group Global bergerak dalam satu hala tuju yang sama dari aspek operasi, nilai dan strategi.
                      </p>
                      <p className="text-xl md:text-2xl text-white leading-relaxed">
                        Beliau berpegang pada prinsip integriti, ketulusan, dan keazaman, menjadikan EQ Group Global bukan sekadar kumpulan perniagaan tetapi platform yang memperkasa masyarakat melalui ilmu, peluang, dan nilai kemanusiaan.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

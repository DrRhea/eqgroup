'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.7]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-[#0a0a0a] h-screen flex items-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/background/home-hero.webp)',
            scale: scale,
            opacity: opacity,
          }}
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/80" />
        
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div 
              className="space-y-8"
              variants={fadeInUp}
            >
              <div className="space-y-6">
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight leading-none">
                  EQ GROUP GLOBAL
                </h1>
                <div className="h-1 w-32 bg-[#0675ad]" />
              </div>
              <p className="text-xl sm:text-2xl md:text-3xl text-white/70 font-light tracking-wide max-w-4xl leading-relaxed">
                Menerajui Pelbagai Industri Menuju Masa Depan Serantau
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div 
            className="w-full"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <div className="border-t border-b border-[#0a0a0a]">
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-24 lg:py-32"
                variants={fadeInUp}
              >
                <div className="lg:col-span-5">
                  <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a0a0a] leading-[1.1] tracking-tight">
                    EQ Group Global ialah kumpulan syarikat moden yang aktif dalam pelbagai bidang
                  </p>
                </div>
                
                <div className="lg:col-span-7 space-y-12">
                  <div className="space-y-6">
                    <p className="text-xl md:text-2xl lg:text-3xl text-[#0a0a0a] leading-relaxed">
                      <span className="font-bold text-[#0675ad]">Pendidikan</span>,{' '}
                      <span className="font-bold text-[#0675ad]">teknologi</span>,{' '}
                      <span className="font-bold text-[#0675ad]">F&B</span> dan{' '}
                      <span className="font-bold text-[#0675ad]">gaya hidup</span>.
                    </p>
                  </div>

                  <div className="h-px bg-[#0a0a0a] w-full" />

                  <div className="space-y-8">
                    <p className="text-lg md:text-xl lg:text-2xl text-[#0a0a0a] leading-relaxed">
                      EQ Group Global ialah kumpulan syarikat pelbagai industri yang berpusat di{' '}
                      <span className="font-bold">Malaysia</span> dan kini melangkah ke peringkat{' '}
                      <span className="font-bold">antarabangsa</span>. Kami percaya kepada kekuatan{' '}
                      <span className="font-bold text-[#0675ad]">ilmu</span>,{' '}
                      <span className="font-bold text-[#0675ad]">inovasi</span> dan{' '}
                      <span className="font-bold text-[#0675ad]">nilai</span> untuk membina masa depan yang mampan dan memberi impak positif kepada masyarakat.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[#0a0a0a]">
                      <div>
                        <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0675ad] mb-2">2022</div>
                        <div className="text-base md:text-lg text-[#0a0a0a]">Tahun Penubuhan</div>
                      </div>
                      <div>
                        <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0675ad] mb-2">35+</div>
                        <div className="text-base md:text-lg text-[#0a0a0a]">Jumlah Karyawan</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tentang Kami Section */}
      <section className="bg-[#0a0a0a] py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="w-full"
          >
            <div className="border-t border-b border-white">
              <div className="py-24 lg:py-32 space-y-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                  <motion.div 
                    className="lg:col-span-5 space-y-8"
                    variants={fadeInUp}
                  >
                    <div className="space-y-6">
                      <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white tracking-tight leading-[0.9]">
                        TENTANG<br />KAMI
                      </h2>
                      <div className="h-2 w-32 bg-[#0675ad]" />
                    </div>
                    <p className="text-xl md:text-2xl text-white leading-relaxed">
                      Nama "EQ" diambil daripada nama pengasasnya, <span className="font-bold text-[#0675ad]">Ezzat Qaisar</span>, menggambarkan identiti kepimpinan dan nilai ketulusan.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="lg:col-span-7 space-y-12"
                    variants={fadeInUp}
                  >
                    <div className="space-y-8">
                      <div className="border-b border-white pb-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase">Visi</h3>
                        <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                          Menjadi kumpulan perniagaan global yang berteraskan nilai, ilmu dan inovasi untuk membina masa depan yang lebih baik bagi masyarakat dan ekonomi serantau.
                        </p>
                      </div>
                      
                      <div className="space-y-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-white uppercase">Misi</h3>
                        <ul className="space-y-4 text-lg md:text-xl text-white/80 leading-relaxed">
                          <li className="border-l-4 border-[#0675ad] pl-6">Menyatukan pelbagai industri di bawah satu ekosistem strategik.</li>
                          <li className="border-l-4 border-[#0675ad] pl-6">Menggalakkan pembangunan insan dan keusahawanan berasaskan nilai.</li>
                          <li className="border-l-4 border-[#0675ad] pl-6">Meluaskan operasi ke pasaran antarabangsa melalui kolaborasi strategik.</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="border-t border-white pt-12">
                  <Link 
                    href="/tentang-kami" 
                    className="group inline-flex items-center justify-between w-full lg:w-auto border-t border-b border-white px-0 py-8 lg:px-16 lg:py-12 hover:bg-white hover:text-[#0a0a0a] transition-all duration-300"
                  >
                    <span className="text-xl md:text-2xl font-medium tracking-wide uppercase">Ketahui Lebih Lanjut</span>
                    <svg className="w-6 h-6 ml-8 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Syarikat Section */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="w-full"
          >
            <div className="border-t border-b border-[#0a0a0a]">
              <div className="py-24 lg:py-32 space-y-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                  <motion.div 
                    className="lg:col-span-5 space-y-8"
                    variants={fadeInUp}
                  >
                    <div className="space-y-6">
                      <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#0a0a0a] tracking-tight leading-[0.9]">
                        SYARIKAT
                      </h2>
                      <div className="h-2 w-32 bg-[#0675ad]" />
                    </div>
                    <p className="text-xl md:text-2xl text-[#0a0a0a] leading-relaxed">
                      Terokai syarikat-syarikat di bawah naungan EQ Group Global dan perkhidmatan yang ditawarkan.
                    </p>
                  </motion.div>

                  <motion.div 
                    className="lg:col-span-7 space-y-8"
                    variants={fadeInUp}
                  >
                    <div className="grid grid-cols-1 gap-8">
                      <Link 
                        href="/syarikat/smart-quran-malaysia-centre"
                        className="group border-t border-b border-[#0a0a0a] py-8 hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <div className="space-y-2">
                            <h3 className="text-2xl md:text-3xl font-bold uppercase">Smart Quran Malaysia Centre</h3>
                            <p className="text-base md:text-lg text-[#0a0a0a] group-hover:text-white/80">Pendidikan Islamic • Didirikan 2024</p>
                          </div>
                          <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </Link>

                      <Link 
                        href="/syarikat/emindtutor"
                        className="group border-t border-b border-[#0a0a0a] py-8 hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <div className="space-y-2">
                            <h3 className="text-2xl md:text-3xl font-bold uppercase">eMindTutor</h3>
                            <p className="text-base md:text-lg text-[#0a0a0a] group-hover:text-white/80">Sistem Pengurusan Pusat Tuisyen • Didirikan 2026</p>
                          </div>
                          <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </Link>

                      <Link 
                        href="/syarikat/core-hr-centre"
                        className="group border-t border-b border-[#0a0a0a] py-8 hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <div className="space-y-2">
                            <h3 className="text-2xl md:text-3xl font-bold uppercase">Core HR Centre</h3>
                            <p className="text-base md:text-lg text-[#0a0a0a] group-hover:text-white/80">Pengurusan Sumber Manusia • Didirikan 2025</p>
                          </div>
                          <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                </div>

                <div className="border-t border-[#0a0a0a] pt-12">
                  <Link 
                    href="/syarikat" 
                    className="group inline-flex items-center justify-between w-full lg:w-auto border-t border-b border-[#0a0a0a] px-0 py-8 lg:px-16 lg:py-12 hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
                  >
                    <span className="text-xl md:text-2xl font-medium tracking-wide uppercase">Lihat Semua Syarikat</span>
                    <svg className="w-6 h-6 ml-8 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hubungi Kami Section */}
      <section className="bg-[#0a0a0a] py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="w-full"
          >
            <div className="border-t border-b border-white">
              <div className="py-24 lg:py-32 space-y-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                  <motion.div 
                    className="lg:col-span-5 space-y-8"
                    variants={fadeInUp}
                  >
                    <div className="space-y-6">
                      <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white tracking-tight leading-[0.9]">
                        HUBUNGI<br />KAMI
                      </h2>
                      <div className="h-2 w-32 bg-[#0675ad]" />
                    </div>
                    <p className="text-xl md:text-2xl text-white leading-relaxed">
                      Hubungi kami untuk sebarang pertanyaan atau cadangan mengenai perkhidmatan kami.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="lg:col-span-7 space-y-8"
                    variants={fadeInUp}
                  >
                    <div className="space-y-8">
                      <div className="border-b border-white pb-8">
                        <div className="text-sm md:text-base uppercase text-white/60 mb-2">Alamat</div>
                        <p className="text-lg md:text-xl text-white leading-relaxed">
                          Ibu Pejabat EQ Group Global<br />
                          No. 8, Arked MDB Kuala Ketil<br />
                          09300 Baling, Kedah Darul Aman<br />
                          Malaysia
                        </p>
                      </div>

                      <div className="border-b border-white pb-8">
                        <div className="text-sm md:text-base uppercase text-white/60 mb-2">E-mel</div>
                        <a 
                          href="mailto:hq@eqgroupmalaysia.com" 
                          className="text-lg md:text-xl text-white hover:text-[#0675ad] transition-colors duration-300"
                        >
                          hq@eqgroupmalaysia.com
                        </a>
                      </div>

                      <div>
                        <div className="text-sm md:text-base uppercase text-white/60 mb-2">Jam Operasi</div>
                        <p className="text-lg md:text-xl text-white leading-relaxed">
                          Setiap Ahad - Jumaat<br />
                          7.40 Pagi - 6.30 Petang
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="border-t border-white pt-12">
                  <Link 
                    href="/hubungi-kami" 
                    className="group inline-flex items-center justify-between w-full lg:w-auto border-t border-b border-white px-0 py-8 lg:px-16 lg:py-12 hover:bg-white hover:text-[#0a0a0a] transition-all duration-300"
                  >
                    <span className="text-xl md:text-2xl font-medium tracking-wide uppercase">Maklumat Lanjut</span>
                    <svg className="w-6 h-6 ml-8 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


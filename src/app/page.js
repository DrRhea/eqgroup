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
      <section ref={heroRef} className="relative bg-white h-[12vh] flex items-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/background/home-hero.webp)',
            scale: scale,
            opacity: opacity,
          }}
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/60" />
        
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
          <motion.div 
            className="max-w-7xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none"
              variants={fadeInUp}
            >
              EQ GROUP GLOBAL
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-white/90 mt-6 font-light tracking-wide"
              variants={fadeInUp}
            >
              Menerajui Pelbagai Industri Menuju Masa Depan Serantau
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-32 md:py-40 lg:py-48">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div 
              className="space-y-16"
              variants={fadeInUp}
            >
              <div className="space-y-8">
                <p className="text-2xl md:text-3xl lg:text-4xl text-[#0a0a0a] leading-relaxed font-light">
                  EQ Group Global ialah kumpulan syarikat moden yang aktif dalam pelbagai bidang{' '}
                  <span className="font-medium text-[#0675ad]">pendidikan</span>,{' '}
                  <span className="font-medium text-[#0675ad]">teknologi</span>,{' '}
                  <span className="font-medium text-[#0675ad]">F&B</span> dan{' '}
                  <span className="font-medium text-[#0675ad]">gaya hidup</span>.
                </p>
              </div>

              <div className="h-px bg-[#0a0a0a]/10 w-full" />

              <div className="space-y-8">
                <p className="text-xl md:text-2xl lg:text-3xl text-[#0a0a0a]/70 leading-relaxed font-light">
                  EQ Group Global ialah kumpulan syarikat pelbagai industri yang berpusat di{' '}
                  <span className="font-medium text-[#0a0a0a]">Malaysia</span> dan kini melangkah ke peringkat{' '}
                  <span className="font-medium text-[#0a0a0a]">antarabangsa</span>. Kami percaya kepada kekuatan{' '}
                  <span className="font-medium text-[#0675ad]">ilmu</span>,{' '}
                  <span className="font-medium text-[#0675ad]">inovasi</span> dan{' '}
                  <span className="font-medium text-[#0675ad]">nilai</span> untuk membina masa depan yang mampan dan memberi impak positif kepada masyarakat.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tentang Kami Section */}
      <section className="bg-[#0a0a0a] py-32 md:py-40 lg:py-48">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div 
                className="space-y-8"
                variants={fadeInUp}
              >
                <div className="space-y-6">
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-none">
                    Tentang Kami
                  </h2>
                  <div className="h-1 w-24 bg-[#0675ad]" />
                </div>
                <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light">
                  Ketahui lebih lanjut tentang sejarah, visi, misi dan pengasas EQ Group Global.
                </p>
              </motion.div>
              
              <motion.div 
                className="flex justify-end"
                variants={fadeInUp}
              >
                <Link 
                  href="/tentang-kami" 
                  className="group inline-flex items-center text-white border border-white/20 px-8 py-4 hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                >
                  <span className="text-lg font-medium tracking-wide">Baca Selengkapnya</span>
                  <svg className="w-5 h-5 ml-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Syarikat Section */}
      <section className="bg-white py-32 md:py-40 lg:py-48">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div 
                className="flex justify-start order-2 lg:order-1"
                variants={fadeInUp}
              >
                <Link 
                  href="/syarikat" 
                  className="group inline-flex items-center text-[#0a0a0a] border border-[#0a0a0a]/20 px-8 py-4 hover:border-[#0a0a0a]/40 hover:bg-[#0a0a0a]/5 transition-all duration-300"
                >
                  <span className="text-lg font-medium tracking-wide">Baca Selengkapnya</span>
                  <svg className="w-5 h-5 ml-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>

              <motion.div 
                className="space-y-8 order-1 lg:order-2"
                variants={fadeInUp}
              >
                <div className="space-y-6">
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0a0a0a] tracking-tight leading-none">
                    Syarikat
                  </h2>
                  <div className="h-1 w-24 bg-[#0675ad]" />
                </div>
                <p className="text-xl md:text-2xl text-[#0a0a0a]/70 leading-relaxed font-light">
                  Terokai syarikat-syarikat di bawah naungan EQ Group Global dan perkhidmatan yang ditawarkan.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hubungi Kami Section */}
      <section className="bg-[#0a0a0a] py-32 md:py-40 lg:py-48">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div 
                className="space-y-8"
                variants={fadeInUp}
              >
                <div className="space-y-6">
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-none">
                    Hubungi Kami
                  </h2>
                  <div className="h-1 w-24 bg-[#0675ad]" />
                </div>
                <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light">
                  Hubungi kami untuk sebarang pertanyaan atau cadangan mengenai perkhidmatan kami.
                </p>
              </motion.div>
              
              <motion.div 
                className="flex justify-end"
                variants={fadeInUp}
              >
                <Link 
                  href="/hubungi-kami" 
                  className="group inline-flex items-center text-white border border-white/20 px-8 py-4 hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                >
                  <span className="text-lg font-medium tracking-wide">Baca Selengkapnya</span>
                  <svg className="w-5 h-5 ml-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

}

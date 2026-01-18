'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 30, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const fadeIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-white py-8 md:py-12 h-[12vh] flex items-center overflow-hidden">
        {/* Background Image dengan Parallax Zoom Out */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/background/home-hero.webp)',
            scale: scale,
            opacity: opacity,
          }}
        ></motion.div>
        
        {/* Overlay untuk readability */}
        <div className="absolute inset-0 bg-primary/70"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-5xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-secondary mb-6 tracking-tight"
              variants={fadeInUp}
            >
              EQ GROUP GLOBAL
            </motion.h1>
            
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-accent via-accent to-accent mx-auto mb-8"
              variants={fadeIn}
            ></motion.div>
            
            <motion.p 
              className="text-xl sm:text-2xl md:text-3xl text-secondary font-medium leading-relaxed"
              variants={fadeInUp}
            >
              Menerajui Pelbagai Industri Menuju Masa Depan Serantau
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <div className="bg-white shadow-lg p-10 md:p-16 lg:p-20">
              <div className="space-y-10 text-lg md:text-xl text-slate-700 leading-relaxed">
                <p className="text-center max-w-4xl mx-auto">
                  EQ Group Global ialah kumpulan syarikat moden yang aktif dalam pelbagai bidang{' '}
                  <span className="font-semibold text-accent">pendidikan</span>,{' '}
                  <span className="font-semibold text-accent">teknologi</span>,{' '}
                  <span className="font-semibold text-accent">F&B</span> dan{' '}
                  <span className="font-semibold text-accent">gaya hidup</span>.
                </p>

                <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent my-10"></div>

                <p className="text-center max-w-4xl mx-auto">
                  EQ Group Global ialah kumpulan syarikat pelbagai industri yang berpusat di{' '}
                  <span className="font-semibold text-slate-900">Malaysia</span> dan kini melangkah ke peringkat{' '}
                  <span className="font-semibold text-slate-900">antarabangsa</span>. Kami percaya kepada kekuatan{' '}
                  <span className="font-semibold text-accent">ilmu</span>,{' '}
                  <span className="font-semibold text-accent">inovasi</span> dan{' '}
                  <span className="font-semibold text-accent">nilai</span> untuk membina masa depan yang mampan dan memberi impak positif kepada masyarakat.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tentang Kami Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="max-w-6xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              <div className="flex-1">
                <div className="w-20 h-20 bg-primary/10 flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  Tentang Kami
                </h2>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                  Ketahui lebih lanjut tentang sejarah, visi, misi dan pengasas EQ Group Global.
                </p>
                <Link href="/tentang-kami" className="inline-flex items-center text-accent font-semibold hover:text-primary transition-colors group">
                  <span>Baca selengkapnya</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Syarikat Section */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="max-w-6xl mx-auto"
          >
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
              <div className="flex-1">
                <div className="w-20 h-20 bg-primary/10 flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  Syarikat
                </h2>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                  Terokai syarikat-syarikat di bawah naungan EQ Group Global dan perkhidmatan yang ditawarkan.
                </p>
                <Link href="/syarikat" className="inline-flex items-center text-accent font-semibold hover:text-primary transition-colors group">
                  <span>Baca selengkapnya</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hubungi Kami Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="max-w-6xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              <div className="flex-1">
                <div className="w-20 h-20 bg-primary/10 flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  Hubungi Kami
                </h2>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                  Hubungi kami untuk sebarang pertanyaan atau cadangan mengenai perkhidmatan kami.
                </p>
                <Link href="/hubungi-kami" className="inline-flex items-center text-accent font-semibold hover:text-primary transition-colors group">
                  <span>Baca selengkapnya</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

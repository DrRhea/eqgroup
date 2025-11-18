'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, ease: 'easeOut' }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-5xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight"
              variants={fadeInUp}
            >
              EQ GROUP GLOBAL
            </motion.h1>
            
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-accent mx-auto mb-8"
              variants={fadeIn}
            ></motion.div>
            
            <motion.p 
              className="text-xl sm:text-2xl md:text-3xl text-slate-700 font-medium leading-relaxed"
              variants={fadeInUp}
            >
              Menerajui Pelbagai Industri Menuju Masa Depan Serantau
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="bg-white shadow-2xl p-8 md:p-12 lg:p-16 border border-slate-200">
              <div className="space-y-8 text-lg md:text-xl text-slate-700 leading-relaxed">
                <p className="text-center">
                  EQ Group Global ialah kumpulan syarikat moden yang aktif dalam pelbagai bidang{' '}
                  <span className="font-semibold text-accent">pendidikan</span>,{' '}
                  <span className="font-semibold text-accent">teknologi</span>,{' '}
                  <span className="font-semibold text-accent">F&B</span> dan{' '}
                  <span className="font-semibold text-accent">gaya hidup</span>.
                </p>

                <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent my-8"></div>

                <p className="text-center">
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

      {/* Tentang Kami Preview Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="bg-slate-50 p-8 md:p-12 border border-slate-200">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
                Tentang Kami
              </h2>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6 text-center">
                Ketahui lebih lanjut tentang sejarah, visi, misi dan pengasas EQ Group Global.
              </p>
              <div className="text-center">
                <Link href="/tentang-kami" className="inline-block text-accent font-semibold hover:text-primary transition-colors">
                  Baca selengkapnya →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Syarikat Preview Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="bg-slate-50 p-8 md:p-12 border border-slate-200">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
                Syarikat
              </h2>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6 text-center">
                Terokai syarikat-syarikat di bawah naungan EQ Group Global dan perkhidmatan yang ditawarkan.
              </p>
              <div className="text-center">
                <Link href="/syarikat" className="inline-block text-accent font-semibold hover:text-primary transition-colors">
                  Baca selengkapnya →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hubungi Kami Preview Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="bg-slate-50 p-8 md:p-12 border border-slate-200">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
                Hubungi Kami
              </h2>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6 text-center">
                Hubungi kami untuk sebarang pertanyaan atau cadangan mengenai perkhidmatan kami.
              </p>
              <div className="text-center">
                <Link href="/hubungi-kami" className="inline-block text-accent font-semibold hover:text-primary transition-colors">
                  Baca selengkapnya →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

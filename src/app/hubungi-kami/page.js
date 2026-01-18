'use client';

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

export default function HubungiKami() {
  return (
    <div className="min-h-screen bg-white pt-14 md:pt-16">
      <section className="bg-white pt-8 md:pt-12 pb-24 md:pb-32 lg:pb-40">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div 
            className="w-full"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <div>
              <div className="space-y-24">
                {/* Header */}
                <motion.div 
                  className="text-center space-y-8"
                  variants={fadeInUp}
                >
                  <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#0a0a0a] tracking-tight leading-[0.9]">
                    HUBUNGI<br />KAMI
                  </h1>
                  <div className="h-2 w-32 bg-[#0675ad] mx-auto" />
                  <p className="text-xl md:text-2xl text-[#0a0a0a] max-w-3xl mx-auto leading-relaxed">
                    Hubungi kami untuk sebarang pertanyaan atau cadangan.
                  </p>
                </motion.div>

                {/* Contact Information */}
                <motion.div 
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16"
                  variants={fadeInUp}
                >
                  <div className="lg:col-span-5">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a0a0a] mb-8 uppercase tracking-tight">
                      Ibu Pejabat<br />EQ Group Global
                    </h2>
                  </div>
                  
                  <div className="lg:col-span-7 space-y-12">
                    <div className="border-b border-[#0a0a0a] pb-8">
                      <div className="text-sm md:text-base uppercase text-[#0a0a0a]/60 mb-3">Alamat</div>
                      <p className="text-xl md:text-2xl text-[#0a0a0a] leading-relaxed">
                        Ibu Pejabat EQ Group Global<br />
                        No. 8, Arked MDB Kuala Ketil<br />
                        09300 Baling, Kedah Darul Aman<br />
                        Malaysia
                      </p>
                    </div>

                    <div className="border-b border-[#0a0a0a] pb-8">
                      <div className="text-sm md:text-base uppercase text-[#0a0a0a]/60 mb-3">E-mel</div>
                      <a 
                        href="mailto:hq@eqgroupmalaysia.com" 
                        className="text-2xl md:text-3xl font-bold text-[#0675ad] hover:text-[#0a0a0a] transition-colors duration-300"
                      >
                        hq@eqgroupmalaysia.com
                      </a>
                    </div>

                    <div>
                      <div className="text-sm md:text-base uppercase text-[#0a0a0a]/60 mb-3">Jam Operasi</div>
                      <p className="text-xl md:text-2xl text-[#0a0a0a] leading-relaxed">
                        Setiap Ahad - Jumaat<br />
                        7.40 Pagi - 6.30 Petang
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

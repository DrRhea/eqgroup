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

export default function CoreHRCentre() {
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
                      src="/images/logo/core-hr-logo.png"
                      alt="Core HR Centre Logo"
                      width={300}
                      height={150}
                      className="object-contain"
                      priority
                    />
                  </div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#0a0a0a] tracking-tight leading-[0.9] uppercase">
                    CORE HR<br />CENTRE
                  </h1>
                  <div className="h-2 w-32 bg-[#0675ad] mx-auto" />
                </motion.div>

                {/* Quote */}
                <motion.div 
                  className="bg-[#0a0a0a] text-white border-t border-b border-white py-16"
                  variants={fadeInUp}
                >
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-relaxed text-center italic">
                    "Menyusun, Mengurus & Mengoptimumkan Potensi Tenaga Kerja Syarikat Anda."
                  </p>
                </motion.div>

                {/* Description */}
                <motion.div 
                  className="border-t border-b border-[#0a0a0a] py-16"
                  variants={fadeInUp}
                >
                  <div className="space-y-8 text-xl md:text-2xl text-[#0a0a0a] leading-relaxed">
                    <p>
                      Core HR Centre ialah anak syarikat di bawah EQ Group Global yang menawarkan perkhidmatan pengurusan sumber manusia profesional kepada syarikat luar — sama ada perusahaan kecil, sederhana atau organisasi besar.
                    </p>
                    <p>
                      Kami membantu syarikat menguruskan rekod pekerja, penggajian, caruman, kehadiran, cuti, dan penilaian prestasi melalui sistem automasi yang tersusun dan mudah digunakan.
                    </p>
                    <p>
                      Dengan pendekatan teknologi dan kepakaran HR terkini, Core HR Centre memastikan urusan sumber manusia anda berjalan lancar, patuh undang-undang dan lebih efisien.
                    </p>
                  </div>
                </motion.div>

                {/* Company Info */}
                <motion.div 
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16"
                  variants={fadeInUp}
                >
                  <div className="lg:col-span-6 border-t border-b border-[#0a0a0a] py-8">
                    <div className="text-sm md:text-base uppercase text-[#0a0a0a]/60 mb-4">Tahun Didirikan</div>
                    <div className="text-5xl md:text-6xl font-bold text-[#0675ad]">2025</div>
                  </div>
                  <div className="lg:col-span-6 border-t border-b border-[#0a0a0a] py-8">
                    <div className="text-sm md:text-base uppercase text-[#0a0a0a]/60 mb-4">No. SSM</div>
                    <div className="text-2xl md:text-3xl font-bold text-[#0a0a0a]">AS0495992-K</div>
                  </div>
                </motion.div>

                {/* Services */}
                <motion.div 
                  className="bg-[#0a0a0a] text-white border-t border-b border-white py-16"
                  variants={fadeInUp}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    <div className="lg:col-span-5">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 uppercase tracking-tight">
                        Perkhidmatan<br />Utama
                      </h2>
                    </div>
                    <div className="lg:col-span-7">
                      <ol className="space-y-6 text-xl md:text-2xl text-white leading-relaxed">
                        <li className="border-l-4 border-[#0675ad] pl-6">Pengurusan dan penyimpanan data staf</li>
                        <li className="border-l-4 border-[#0675ad] pl-6">Sistem payroll dan caruman (KWSP, SOCSO, EIS, PCB)</li>
                        <li className="border-l-4 border-[#0675ad] pl-6">Pengurusan cuti dan kehadiran digital</li>
                        <li className="border-l-4 border-[#0675ad] pl-6">Penyediaan laporan HR & analitik staf</li>
                        <li className="border-l-4 border-[#0675ad] pl-6">Konsultasi struktur organisasi & SOP HR</li>
                      </ol>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Info */}
                <motion.div 
                  className="border-t border-b border-[#0a0a0a] py-16"
                  variants={fadeInUp}
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a0a0a] mb-16 uppercase tracking-tight">
                    Maklumat Hubungan
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                    <div className="space-y-8">
                      <div className="border-b border-[#0a0a0a] pb-6">
                        <div className="text-sm md:text-base uppercase text-[#0a0a0a]/60 mb-3">No. SSM</div>
                        <div className="text-2xl md:text-3xl font-bold text-[#0a0a0a]">AS0495992-K</div>
                      </div>
                      <div className="border-b border-[#0a0a0a] pb-6">
                        <div className="text-sm md:text-base uppercase text-[#0a0a0a]/60 mb-3">No Telefon</div>
                        <div className="text-xl md:text-2xl text-[#0a0a0a]/60">Belum didaftar</div>
                      </div>
                    </div>
                    <div className="space-y-8">
                      <div className="border-b border-[#0a0a0a] pb-6">
                        <div className="text-sm md:text-base uppercase text-[#0a0a0a]/60 mb-3">WhatsApp</div>
                        <div className="text-xl md:text-2xl text-[#0a0a0a]/60">Belum didaftar</div>
                      </div>
                      <div className="border-b border-[#0a0a0a] pb-6">
                        <div className="text-sm md:text-base uppercase text-[#0a0a0a]/60 mb-3">E-mel</div>
                        <div className="text-xl md:text-2xl text-[#0a0a0a]/60">Belum didaftar</div>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-[#0a0a0a] mt-8 pt-8">
                    <div className="text-sm md:text-base uppercase text-[#0a0a0a]/60 mb-3">Jam Operasi</div>
                    <div className="text-xl md:text-2xl text-[#0a0a0a] leading-relaxed">
                      Setiap Ahad - Jumaat<br />
                      7.40 Pagi - 6.30 Petang
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

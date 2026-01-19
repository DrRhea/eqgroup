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

export default function EMindTutor() {
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
                      src="/images/logo/emindtutor-logo.png"
                      alt="eMindTutor Logo"
                      width={300}
                      height={150}
                      className="object-contain"
                      priority
                    />
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#0a0a0a] tracking-tight leading-[0.9] uppercase break-words px-4">
                    EMINDTUTOR
                  </h1>
                  <div className="h-2 w-32 bg-[#0675ad] mx-auto" />
                </motion.div>

                {/* Description */}
                <motion.div 
                  className="border-t border-b border-[#0a0a0a] py-16"
                  variants={fadeInUp}
                >
                  <div className="space-y-8 text-xl md:text-2xl text-[#0a0a0a] leading-relaxed">
                    <p>
                      eMindTutor ialah platform digital yang diasaskan untuk membantu pusat tuisyen, kelas agama dan institusi pendidikan dalam mengurus guru, pelajar, kelas dan pembayaran secara efisien. Dengan sistem "all-in-one", eMindTutor membolehkan pengurusan tenaga pengajar, pemantauan pelajar serta pemasangan sistem pembayaran langganan yang mudah digunakan.
                    </p>
                    <p>
                      Sebagai sebahagian daripada EQ Group Global, eMindTutor beraspirasi untuk memperluas cakupan ke seluruh Malaysia dan ke pasaran serantau, menawarkan penyelesaian pendidikan yang berorientasikan teknologi dan kecekapan kepada institusi pendidikan masa kini.
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
                    <div className="text-5xl md:text-6xl font-bold text-[#0675ad]">2026</div>
                  </div>
                  <div className="lg:col-span-6 border-t border-b border-[#0a0a0a] py-8">
                    <div className="text-sm md:text-base uppercase text-[#0a0a0a]/60 mb-4">Laman Web Rasmi</div>
                    <a 
                      href="https://emindtutor.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-2xl md:text-3xl font-bold text-[#0675ad] hover:text-[#0a0a0a] transition-colors duration-300"
                    >
                      emindtutor.com
                    </a>
                  </div>
                </motion.div>

                {/* Features */}
                <motion.div 
                  className="bg-[#0a0a0a] text-white border-t border-b border-white py-16"
                  variants={fadeInUp}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    <div className="lg:col-span-5">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 uppercase tracking-tight">
                        Tiga Aspek<br />Utama
                      </h2>
                    </div>
                    <div className="lg:col-span-7">
                      <ol className="space-y-8 text-xl md:text-2xl text-white leading-relaxed">
                        <li className="border-l-4 border-[#0675ad] pl-6">
                          <span className="font-bold text-[#0675ad]">Pengurusan Guru:</span> Menambah dan memantau aktiviti guru & tugasan mereka.
                        </li>
                        <li className="border-l-4 border-[#0675ad] pl-6">
                          <span className="font-bold text-[#0675ad]">Dashboard Pelajar:</span> Melihat kemajuan, kehadiran dan prestasi pelajar secara menyeluruh.
                        </li>
                        <li className="border-l-4 border-[#0675ad] pl-6">
                          <span className="font-bold text-[#0675ad]">Pembayaran Pintar:</span> Kaedah pembayaran dan langganan yang diintegrasikan dalam sistem.
                        </li>
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
                        <div className="text-sm md:text-base uppercase text-[#0a0a0a]/60 mb-3">No Telefon</div>
                        <div className="text-2xl md:text-3xl font-bold text-[#0a0a0a]">012-474 3557</div>
                      </div>
                      <div className="border-b border-[#0a0a0a] pb-6">
                        <div className="text-sm md:text-base uppercase text-[#0a0a0a]/60 mb-3">WhatsApp</div>
                        <div className="text-2xl md:text-3xl font-bold text-[#0a0a0a]">012-474 3557</div>
                      </div>
                    </div>
                    <div className="space-y-8">
                      <div className="border-b border-[#0a0a0a] pb-6">
                        <div className="text-sm md:text-base uppercase text-[#0a0a0a]/60 mb-3">E-mel</div>
                        <a href="mailto:emindtutor@gmail.com" className="text-2xl md:text-3xl font-bold text-[#0675ad] hover:text-[#0a0a0a] transition-colors">
                          emindtutor@gmail.com
                        </a>
                      </div>
                      <div className="border-b border-[#0a0a0a] pb-6">
                        <div className="text-sm md:text-base uppercase text-[#0a0a0a]/60 mb-3">Jam Operasi</div>
                        <div className="text-xl md:text-2xl text-[#0a0a0a] leading-relaxed">
                          Setiap Ahad - Jumaat<br />
                          7.40 Pagi - 6.30 Petang
                        </div>
                      </div>
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

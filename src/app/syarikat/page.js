'use client';

import Link from 'next/link';
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

export default function Syarikat() {
  const companies = [
    {
      href: '/syarikat/smart-quran-malaysia-centre',
      title: 'Smart Quran Malaysia Centre',
      subtitle: 'Pendidikan Islamic',
      year: '2024',
      description: 'Institusi pendidikan Islam moden yang memperkasa pembelajaran Al-Quran dan Fardhu Ain dalam suasana pembelajaran yang sistematik, interaktif dan fleksibel.',
      logo: '/images/logo/smart-quran-logo.png',
      alt: 'Smart Quran Malaysia Centre Logo'
    },
    {
      href: '/syarikat/emindtutor',
      title: 'eMindTutor',
      subtitle: 'Sistem Pengurusan Pusat Tuisyen',
      year: '2026',
      description: 'Platform digital "all-in-one" untuk membantu pusat tuisyen, kelas agama dan institusi pendidikan dalam mengurus guru, pelajar, kelas dan pembayaran secara efisien.',
      logo: '/images/logo/emindtutor-logo.png',
      alt: 'eMindTutor Logo'
    },
    {
      href: '/syarikat/core-hr-centre',
      title: 'Core HR Centre',
      subtitle: 'Pengurusan Sumber Manusia',
      year: '2025',
      description: 'Perkhidmatan pengurusan sumber manusia profesional untuk membantu syarikat menguruskan rekod pekerja, penggajian, caruman, kehadiran, cuti, dan penilaian prestasi.',
      logo: '/images/logo/core-hr-logo.png',
      alt: 'Core HR Centre Logo'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-14 md:pt-16">
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
              <div className="py-24 lg:py-32 space-y-24">
                {/* Header */}
                <motion.div 
                  className="text-center space-y-8"
                  variants={fadeInUp}
                >
                  <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#0a0a0a] tracking-tight leading-[0.9]">
                    SYARIKAT
                  </h1>
                  <div className="h-2 w-32 bg-[#0675ad] mx-auto" />
                  <p className="text-xl md:text-2xl text-[#0a0a0a] max-w-3xl mx-auto leading-relaxed">
                    Terokai syarikat-syarikat di bawah naungan EQ Group Global dan perkhidmatan yang ditawarkan.
                  </p>
                </motion.div>

                {/* Companies List */}
                <div className="space-y-0">
                  {companies.map((company, index) => (
                    <motion.div
                      key={company.href}
                      variants={fadeInUp}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <Link
                        href={company.href}
                        className="group block border-t border-b border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-12 lg:py-16">
                          <div className="lg:col-span-3 flex items-center justify-center lg:justify-start">
                            <div className="w-full h-32 lg:h-40 bg-white group-hover:bg-[#0a0a0a] flex items-center justify-center transition-colors">
                              <Image
                                src={company.logo}
                                alt={company.alt}
                                width={200}
                                height={120}
                                className="object-contain max-h-24 lg:max-h-32"
                              />
                            </div>
                          </div>
                          
                          <div className="lg:col-span-9 space-y-4">
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                              <div>
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-2 text-[#0a0a0a] group-hover:text-white transition-colors">
                                  {company.title}
                                </h3>
                                <div className="flex flex-wrap gap-4 text-base md:text-lg">
                                  <span className="text-[#0a0a0a] group-hover:text-white/80 font-medium uppercase">
                                    {company.subtitle}
                                  </span>
                                  <span className="text-[#0a0a0a] group-hover:text-white/60">
                                    Didirikan {company.year}
                                  </span>
                                </div>
                              </div>
                              <svg className="w-8 h-8 lg:w-10 lg:h-10 group-hover:translate-x-2 transition-transform duration-300 text-[#0a0a0a] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </div>
                            <p className="text-lg md:text-xl text-[#0a0a0a] group-hover:text-white/80 leading-relaxed max-w-4xl">
                              {company.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

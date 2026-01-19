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

export default function SmartQuranMalaysiaCentre() {
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
                      src="/images/logo/smart-quran-logo.png"
                      alt="Smart Quran Malaysia Centre Logo"
                      width={300}
                      height={150}
                      className="object-contain"
                      priority
                    />
                  </div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#0a0a0a] tracking-tight leading-[0.9] uppercase">
                    Smart Quran<br />Malaysia Centre
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
                      Smart Quran Malaysia Centre ialah sebuah institusi pendidikan Islam moden di bawah naungan EQ Group Global, ditubuhkan bagi memperkasa pembelajaran Al-Quran dan Fardhu Ain dalam suasana pembelajaran yang sistematik, interaktif dan fleksibel.
                    </p>
                    <p>
                      Pusat ini menawarkan kelas mengaji Al-Quran secara dalam talian dan bersemuka, termasuk kelas Fardhu Ain untuk dewasa dan warga emas, dengan pendekatan yang menekankan pemahaman, bacaan yang betul, dan penguasaan yang lancar.
                    </p>
                    <p>
                      Berpegang pada visi untuk melahirkan masyarakat yang mahir dan lancar membaca Al-Quran serta beramal dengan ilmunya, Smart Quran Malaysia Centre terus mengorak langkah dengan memperluas capaian ke seluruh Malaysia dan ke peringkat antarabangsa melalui sistem pembelajaran digital yang efisien dan mesra pengguna.
                    </p>
                  </div>
                </motion.div>

                {/* Company Info & Stats */}
                <motion.div 
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16"
                  variants={fadeInUp}
                >
                  <div className="lg:col-span-6 space-y-12">
                    <div className="border-t border-b border-[#0a0a0a] py-8">
                      <div className="text-sm md:text-base uppercase text-[#0a0a0a]/60 mb-4">Tahun Didirikan</div>
                      <div className="text-5xl md:text-6xl font-bold text-[#0675ad]">2024</div>
                    </div>
                    <div className="border-t border-b border-[#0a0a0a] py-8">
                      <div className="text-sm md:text-base uppercase text-[#0a0a0a]/60 mb-4">No. SSM</div>
                      <div className="text-2xl md:text-3xl font-bold text-[#0a0a0a]">003547795-P</div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-6 space-y-8">
                    <div className="border-t border-b border-[#0a0a0a] py-8">
                      <div className="text-5xl md:text-6xl font-bold text-[#0675ad] mb-4">150+</div>
                      <div className="text-xl md:text-2xl text-[#0a0a0a]">Pelajar Aktif</div>
                    </div>
                    <div className="border-t border-b border-[#0a0a0a] py-8">
                      <div className="text-5xl md:text-6xl font-bold text-[#0675ad] mb-4">4 Negara</div>
                      <div className="text-xl md:text-2xl text-[#0a0a0a]">Malaysia, Indonesia, Brunei, Singapore</div>
                    </div>
                  </div>
                </motion.div>

                {/* Products */}
                <motion.div 
                  className="bg-[#0a0a0a] text-white border-t border-b border-white py-16"
                  variants={fadeInUp}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    <div className="lg:col-span-5">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 uppercase tracking-tight">
                        Produk<br />Smart Quran
                      </h2>
                    </div>
                    <div className="lg:col-span-7">
                      <ol className="space-y-6 text-xl md:text-2xl text-white leading-relaxed">
                        <li className="border-l-4 border-[#0675ad] pl-6">Kelas Pengajian Al - Quran</li>
                        <li className="border-l-4 border-[#0675ad] pl-6">Kelas Pengajian Fardhu Ain</li>
                        <li className="border-l-4 border-[#0675ad] pl-6">Kelas Pengajian Fiqh Darah Wanita</li>
                      </ol>
                    </div>
                  </div>
                </motion.div>

                {/* Website & Registration */}
                <motion.div 
                  className="border-t border-b border-[#0a0a0a] py-16"
                  variants={fadeInUp}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    <div className="lg:col-span-6">
                      <div className="text-sm md:text-base uppercase text-[#0a0a0a]/60 mb-4">Laman Web Rasmi</div>
                      <a 
                        href="https://www.mysmartquran.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-2xl md:text-3xl font-bold text-[#0675ad] hover:text-[#0a0a0a] transition-colors duration-300"
                      >
                        www.mysmartquran.com
                      </a>
                    </div>
                    <div className="lg:col-span-6">
                      <a
                        href="https://wa.me/60103306210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-between w-full lg:w-auto border-t border-b border-[#0a0a0a] px-0 py-8 lg:px-16 lg:py-12 hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
                      >
                        <span className="text-xl md:text-2xl font-medium tracking-wide uppercase text-[#0a0a0a] group-hover:text-white transition-colors">Daftar Sekarang</span>
                        <svg className="w-6 h-6 ml-8 group-hover:translate-x-2 transition-transform duration-300 text-[#0a0a0a] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.239-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Testimonials */}
                <motion.div 
                  className="border-t border-b border-[#0a0a0a] py-16"
                  variants={fadeInUp}
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a0a0a] mb-16 uppercase tracking-tight text-center">
                    Testimoni Pelajar
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      {
                        text: "Alhamdulillah syukur. ustazah Aisyah memberikan penyampaian yang sangat baik, ilmu nye tinggi namun senang untuk saya faham. saya sangat selesa belajar dalam kelas ustazah.",
                        author: "ANISAH HAJI MUHD ALI"
                      },
                      {
                        text: "Alhamdulillah. Apa yg ustaz ajar saya faham dan ustaz sangat sabar dengan kerenah saya dan tenang dgn kemampuan saya yang sangat perlahan dalam pelajaran al quran.",
                        author: "ABDUL RAHMAN TALIB"
                      },
                      {
                        text: "Alhamdulillah, terbaik, mudah berurusan.",
                        author: "MUHAMMAD IZUWAN"
                      },
                      {
                        text: "Buat masa ini, pengajian yang dijalankan secara online kepada anak Saya amat membantu, ustaz memberi fokus semasa mengajar dan memperbetulkan kesilapan sewaktu pengajian berlangsung, sangat professional dan mengikut kehendak seperti kehendak Saya sebagai ibu bapa.",
                        author: "MUHAMMAD AZ ZUMAR BIN MUHAMMAD ZAFIE"
                      },
                      {
                        text: "Alhamdulillah Ustazah Nurul Haziqah dapat membantu banyak dari segi tajwid dan lain². Beliau juga sangat baik dan membantu jika ada masalah semasa belajar. Jika diluar waktu belajar Ustazah juga boleh beri bantuan jika nak bertanya apa² yg berkaitan.",
                        author: "NURULHUDA BINTI ABAS"
                      },
                      {
                        text: "Sangat membantu dari segi bacaan, pembetulan sebutan. Sangat berpuas hati sebagai anak muridnya terima kasih.",
                        author: "MOHD RIZAL AZLA BIN HARISH"
                      }
                    ].map((testimonial, index) => (
                      <div key={index} className="border-t border-b border-[#0a0a0a] py-8">
                        <p className="text-lg md:text-xl text-[#0a0a0a] leading-relaxed mb-6 italic">
                          "{testimonial.text}"
                        </p>
                        <p className="text-base md:text-lg font-bold text-[#0a0a0a] uppercase">
                          — {testimonial.author}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Contact Info */}
                <motion.div 
                  className="bg-[#0a0a0a] text-white border-t border-b border-white py-16"
                  variants={fadeInUp}
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16 uppercase tracking-tight">
                    Maklumat Hubungan
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                    <div className="space-y-8">
                      <div className="border-b border-white pb-6">
                        <div className="text-sm md:text-base uppercase text-white/60 mb-3">No. SSM</div>
                        <div className="text-2xl md:text-3xl font-bold text-white">003547795-P</div>
                      </div>
                      <div className="border-b border-white pb-6">
                        <div className="text-sm md:text-base uppercase text-white/60 mb-3">No Telefon</div>
                        <div className="text-2xl md:text-3xl font-bold text-white">010-330 6210</div>
                      </div>
                    </div>
                    <div className="space-y-8">
                      <div className="border-b border-white pb-6">
                        <div className="text-sm md:text-base uppercase text-white/60 mb-3">WhatsApp</div>
                        <div className="text-2xl md:text-3xl font-bold text-white">010-330 6210</div>
                      </div>
                      <div className="border-b border-white pb-6">
                        <div className="text-sm md:text-base uppercase text-white/60 mb-3">E-mel</div>
                        <a href="mailto:hq@smartquranmy.com" className="text-2xl md:text-3xl font-bold text-[#0675ad] hover:text-white transition-colors">
                          hq@smartquranmy.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-white mt-8 pt-8">
                    <div className="text-sm md:text-base uppercase text-white/60 mb-3">Jam Operasi</div>
                    <div className="text-xl md:text-2xl text-white leading-relaxed">
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

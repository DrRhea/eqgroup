import Image from 'next/image';

export default function SmartQuranMalaysiaCentre() {
  return (
    <div className="min-h-screen bg-white pt-14 md:pt-16">
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <Image
                src="/images/logo/smart-quran-logo.png"
                alt="Smart Quran Malaysia Centre Logo"
                width={300}
                height={150}
                className="object-contain"
                priority
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Smart Quran Malaysia Centre
            </h2>

            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                Smart Quran Malaysia Centre ialah sebuah institusi pendidikan Islam moden di bawah naungan EQ Group Global, ditubuhkan bagi memperkasa pembelajaran Al-Quran dan Fardhu Ain dalam suasana pembelajaran yang sistematik, interaktif dan fleksibel.
              </p>
              <p>
                Pusat ini menawarkan kelas mengaji Al-Quran secara dalam talian dan bersemuka, termasuk kelas Fardhu Ain untuk dewasa dan warga emas, dengan pendekatan yang menekankan pemahaman, bacaan yang betul, dan penguasaan yang lancar.
              </p>
              <p>
                Berpegang pada visi untuk melahirkan masyarakat yang mahir dan lancar membaca Al-Quran serta beramal dengan ilmunya, Smart Quran Malaysia Centre terus mengorak langkah dengan memperluas capaian ke seluruh Malaysia dan ke peringkat antarabangsa melalui sistem pembelajaran digital yang efisien dan mesra pengguna.
              </p>
              
              {/* Statistics */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-6 rounded-lg border border-accent/20">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">150+</h3>
                  <p className="text-slate-700">Pelajar Aktif</p>
                </div>
                <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-6 rounded-lg border border-accent/20">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">4 Negara</h3>
                  <p className="text-slate-700">Malaysia, Indonesia, Brunei, Singapore</p>
                </div>
              </div>

              <div className="mt-8 bg-slate-50 p-6 border-l-4 border-accent">
                <p className="font-semibold text-slate-900 mb-4">Produk Smart Quran:</p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Kelas Pengajian Al - Quran</li>
                  <li>Kelas Pengajian Fardhu Ain</li>
                  <li>Kelas Pengajian Fiqh Darah Wanita</li>
                </ol>
              </div>

              {/* Website & Registration */}
              <div className="mt-8 bg-primary/5 p-6 rounded-lg border border-primary/20">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Laman Web Rasmi:</h3>
                    <a 
                      href="https://www.mysmartquran.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition-colors font-medium"
                    >
                      www.mysmartquran.com
                    </a>
                  </div>
                  <a
                    href="https://wa.me/60103306210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.239-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Daftar Sekarang
                  </a>
                </div>
              </div>

              {/* Testimonials */}
              <div className="mt-12">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
                  Testimoni Pelajar
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border-2 border-slate-200 p-6 rounded-lg shadow-sm">
                    <div className="flex items-start mb-4">
                      <svg className="w-8 h-8 text-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.481.967-4.996 2.45-4.996 5.03 0 3.391 2.461 4.406 4.996 4.406v4.413h-9.979zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.481.967-5 2.45-5 5.03 0 3.391 2.461 4.406 5 4.406v4.413h-10z"/>
                      </svg>
                      <p className="text-slate-700 italic leading-relaxed">
                        Alhamdulillah syukur. ustazah Aisyah memberikan penyampaian yang sangat baik, ilmu nye tinggi namun senang untuk saya faham. saya sangat selesa belajar dalam kelas ustazah.
                      </p>
                    </div>
                    <p className="text-slate-900 font-semibold text-right">— ANISAH HAJI MUHD ALI</p>
                  </div>

                  <div className="bg-white border-2 border-slate-200 p-6 rounded-lg shadow-sm">
                    <div className="flex items-start mb-4">
                      <svg className="w-8 h-8 text-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.481.967-4.996 2.45-4.996 5.03 0 3.391 2.461 4.406 4.996 4.406v4.413h-9.979zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.481.967-5 2.45-5 5.03 0 3.391 2.461 4.406 5 4.406v4.413h-10z"/>
                      </svg>
                      <p className="text-slate-700 italic leading-relaxed">
                        Alhamdulillah. Apa yg ustaz ajar saya faham dan ustaz sangat sabar dengan kerenah saya dan tenang dgn kemampuan saya yang sangat perlahan dalam pelajaran al quran.
                      </p>
                    </div>
                    <p className="text-slate-900 font-semibold text-right">— ABDUL RAHMAN TALIB</p>
                  </div>

                  <div className="bg-white border-2 border-slate-200 p-6 rounded-lg shadow-sm">
                    <div className="flex items-start mb-4">
                      <svg className="w-8 h-8 text-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.481.967-4.996 2.45-4.996 5.03 0 3.391 2.461 4.406 4.996 4.406v4.413h-9.979zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.481.967-5 2.45-5 5.03 0 3.391 2.461 4.406 5 4.406v4.413h-10z"/>
                      </svg>
                      <p className="text-slate-700 italic leading-relaxed">
                        Alhamdulillah, terbaik, mudah berurusan.
                      </p>
                    </div>
                    <p className="text-slate-900 font-semibold text-right">— MUHAMMAD IZUWAN</p>
                  </div>

                  <div className="bg-white border-2 border-slate-200 p-6 rounded-lg shadow-sm">
                    <div className="flex items-start mb-4">
                      <svg className="w-8 h-8 text-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.481.967-4.996 2.45-4.996 5.03 0 3.391 2.461 4.406 4.996 4.406v4.413h-9.979zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.481.967-5 2.45-5 5.03 0 3.391 2.461 4.406 5 4.406v4.413h-10z"/>
                      </svg>
                      <p className="text-slate-700 italic leading-relaxed">
                        Buat masa ini, pengajian yang dijalankan secara online kepada anak Saya amat membantu, ustaz memberi fokus semasa mengajar dan memperbetulkan kesilapan sewaktu pengajian berlangsung, sangat professional dan mengikut kehendak seperti kehendak Saya sebagai ibu bapa.
                      </p>
                    </div>
                    <p className="text-slate-900 font-semibold text-right">— MUHAMMAD AZ ZUMAR BIN MUHAMMAD ZAFIE</p>
                  </div>

                  <div className="bg-white border-2 border-slate-200 p-6 rounded-lg shadow-sm">
                    <div className="flex items-start mb-4">
                      <svg className="w-8 h-8 text-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.481.967-4.996 2.45-4.996 5.03 0 3.391 2.461 4.406 4.996 4.406v4.413h-9.979zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.481.967-5 2.45-5 5.03 0 3.391 2.461 4.406 5 4.406v4.413h-10z"/>
                      </svg>
                      <p className="text-slate-700 italic leading-relaxed">
                        Alhamdulillah Ustazah Nurul Haziqah dapat membantu banyak dari segi tajwid dan lain². Beliau juga sangat baik dan membantu jika ada masalah semasa belajar. Jika diluar waktu belajar Ustazah juga boleh beri bantuan jika nak bertanya apa² yg berkaitan.
                      </p>
                    </div>
                    <p className="text-slate-900 font-semibold text-right">— NURULHUDA BINTI ABAS</p>
                  </div>

                  <div className="bg-white border-2 border-slate-200 p-6 rounded-lg shadow-sm">
                    <div className="flex items-start mb-4">
                      <svg className="w-8 h-8 text-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.481.967-4.996 2.45-4.996 5.03 0 3.391 2.461 4.406 4.996 4.406v4.413h-9.979zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.481.967-5 2.45-5 5.03 0 3.391 2.461 4.406 5 4.406v4.413h-10z"/>
                      </svg>
                      <p className="text-slate-700 italic leading-relaxed">
                        Sangat membantu dari segi bacaan, pembetulan sebutan. Sangat berpuas hati sebagai anak muridnya terima kasih.
                      </p>
                    </div>
                    <p className="text-slate-900 font-semibold text-right">— MOHD RIZAL AZLA BIN HARISH</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-slate-50 p-8 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Maklumat Hubungan</h3>
                <div className="space-y-4 text-lg text-slate-700">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">No Telefon:</h4>
                    <p className="text-slate-700">010-330 6210</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">WhatsApp:</h4>
                    <p className="text-slate-700">010-330 6210</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">E-mel:</h4>
                    <p className="text-slate-700">hq@smartquranmy.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Jam Operasi:</h4>
                    <p className="leading-relaxed">
                      Setiap Ahad - Jumaat<br />
                      7.40 Pagi - 6.30 Petang
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export default function Syarikat() {
  return (
    <div className="min-h-screen bg-white pt-14 md:pt-16">
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Syarikat
            </h2>

            <div className="space-y-16">
              {/* Smart Quran Malaysia Centre */}
              <div className="border-b border-slate-200 pb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-accent mb-6">
                  Smart Quran Malaysia Centre
                </h3>
                <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                  <p>
                    Smart Quran Malaysia Centre ialah sebuah institusi pendidikan Islam moden di bawah naungan EQ Group Global, ditubuhkan bagi memperkasa pembelajaran Al-Quran dan Fardhu Ain dalam suasana pembelajaran yang sistematik, interaktif dan fleksibel.
                  </p>
                  <p>
                    Pusat ini menawarkan kelas mengaji Al-Quran secara dalam talian dan bersemuka, termasuk kelas Fardhu Ain untuk dewasa dan warga emas, dengan pendekatan yang menekankan pemahaman, bacaan yang betul, dan penguasaan yang lancar.
                  </p>
                  <p>
                    Berpegang pada visi untuk melahirkan masyarakat yang mahir dan lancar membaca Al-Quran serta beramal dengan ilmunya, Smart Quran Malaysia Centre terus mengorak langkah dengan memperluas capaian ke seluruh Malaysia dan ke peringkat antarabangsa melalui sistem pembelajaran digital yang efisien dan mesra pengguna.
                  </p>
                  <div className="mt-6">
                    <p className="font-semibold text-slate-900 mb-3">Produk Smart Quran:</p>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                      <li>Kelas Pengajian Al - Quran</li>
                      <li>Kelas Pengajian Fardhu Ain</li>
                      <li>Kelas Pengajian Fiqh Darah Wanita</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* eMindTutor */}
              <div className="border-b border-slate-200 pb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-accent mb-6">
                  eMindTutor
                </h3>
                <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                  <p>
                    eMindTutor ialah platform digital yang diasaskan untuk membantu pusat tuisyen, kelas agama dan institusi pendidikan dalam mengurus guru, pelajar, kelas dan pembayaran secara efisien. Dengan sistem "all-in-one", eMindTutor membolehkan pengurusan tenaga pengajar, pemantauan pelajar serta pemasangan sistem pembayaran langganan yang mudah digunakan.
                  </p>
                  <p>
                    Sebagai sebahagian daripada EQ Group Global, eMindTutor beraspirasi untuk memperluas cakupan ke seluruh Malaysia dan ke pasaran serantau, menawarkan penyelesaian pendidikan yang berorientasikan teknologi dan kecekapan kepada institusi pendidikan masa kini.
                  </p>
                  <p className="mt-6 font-semibold text-slate-900">
                    Direka untuk pusat tuisyen dan kelas pendidikan moden, eMindTutor memfokuskan kepada tiga aspek utama:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 ml-4 mt-4">
                    <li><span className="font-semibold">Pengurusan Guru:</span> Menambah dan memantau aktiviti guru & tugasan mereka.</li>
                    <li><span className="font-semibold">Dashboard Pelajar:</span> Melihat kemajuan, kehadiran dan prestasi pelajar secara menyeluruh.</li>
                    <li><span className="font-semibold">Pembayaran Pintar:</span> Kaedah pembayaran dan langganan yang diintegrasikan dalam sistem.</li>
                  </ol>
                </div>
              </div>

              {/* Core HR Centre */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-accent mb-6">
                  Core HR Centre
                </h3>
                <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                  <blockquote className="border-l-4 border-accent pl-6 italic text-slate-600 my-4">
                    "Menyusun, Mengurus & Mengoptimumkan Potensi Tenaga Kerja Syarikat Anda."
                  </blockquote>
                  <p>
                    Core HR Centre ialah anak syarikat di bawah EQ Group Global yang menawarkan perkhidmatan pengurusan sumber manusia profesional kepada syarikat luar — sama ada perusahaan kecil, sederhana atau organisasi besar.
                  </p>
                  <p>
                    Kami membantu syarikat menguruskan rekod pekerja, penggajian, caruman, kehadiran, cuti, dan penilaian prestasi melalui sistem automasi yang tersusun dan mudah digunakan.
                  </p>
                  <div className="mt-6">
                    <p className="font-semibold text-slate-900 mb-3">Antara perkhidmatan utama kami:</p>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                      <li>Pengurusan dan penyimpanan data staf</li>
                      <li>Sistem payroll dan caruman (KWSP, SOCSO, EIS, PCB)</li>
                      <li>Pengurusan cuti dan kehadiran digital</li>
                      <li>Penyediaan laporan HR & analitik staf</li>
                      <li>Konsultasi struktur organisasi & SOP HR</li>
                    </ol>
                  </div>
                  <p className="mt-4">
                    Dengan pendekatan teknologi dan kepakaran HR terkini, Core HR Centre memastikan urusan sumber manusia anda berjalan lancar, patuh undang-undang dan lebih efisien.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


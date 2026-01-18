import Image from 'next/image';

export default function EMindTutor() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-14 md:pt-16">
      <section className="bg-transparent py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <Image
                src="/images/logo/emindtutor-logo.png"
                alt="eMindTutor Logo"
                width={300}
                height={150}
                className="object-contain"
                priority
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              eMindTutor
            </h2>

            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                eMindTutor ialah platform digital yang diasaskan untuk membantu pusat tuisyen, kelas agama dan institusi pendidikan dalam mengurus guru, pelajar, kelas dan pembayaran secara efisien. Dengan sistem "all-in-one", eMindTutor membolehkan pengurusan tenaga pengajar, pemantauan pelajar serta pemasangan sistem pembayaran langganan yang mudah digunakan.
              </p>
              <p>
                Sebagai sebahagian daripada EQ Group Global, eMindTutor beraspirasi untuk memperluas cakupan ke seluruh Malaysia dan ke pasaran serantau, menawarkan penyelesaian pendidikan yang berorientasikan teknologi dan kecekapan kepada institusi pendidikan masa kini.
              </p>

              {/* Company Info */}
              <div className="mt-8 bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Tahun Didirikan:</h4>
                    <p className="text-slate-700">2026</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Laman Web Rasmi:</h4>
                    <a 
                      href="https://emindtutor.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition-colors font-medium"
                    >
                      emindtutor.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="font-semibold text-slate-900 mb-4">
                  Direka untuk pusat tuisyen dan kelas pendidikan moden, eMindTutor memfokuskan kepada tiga aspek utama:
                </p>
                <ol className="list-decimal list-inside space-y-3 ml-4 bg-slate-50 p-6 border-l-4 border-accent">
                  <li>
                    <span className="font-semibold text-slate-900">Pengurusan Guru:</span> Menambah dan memantau aktiviti guru & tugasan mereka.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-900">Dashboard Pelajar:</span> Melihat kemajuan, kehadiran dan prestasi pelajar secara menyeluruh.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-900">Pembayaran Pintar:</span> Kaedah pembayaran dan langganan yang diintegrasikan dalam sistem.
                  </li>
                </ol>
              </div>

              <div className="mt-8 bg-slate-50 p-8 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Maklumat Hubungan</h3>
                <div className="space-y-4 text-lg text-slate-700">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">No Telefon:</h4>
                    <p className="text-slate-700">012-474 3557</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">WhatsApp:</h4>
                    <p className="text-slate-700">012-474 3557</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">E-mel:</h4>
                    <p className="text-slate-700">emindtutor@gmail.com</p>
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


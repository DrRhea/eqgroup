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
              
              <div className="mt-8 bg-slate-50 p-6 border-l-4 border-accent">
                <p className="font-semibold text-slate-900 mb-4">Produk Smart Quran:</p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Kelas Pengajian Al - Quran</li>
                  <li>Kelas Pengajian Fardhu Ain</li>
                  <li>Kelas Pengajian Fiqh Darah Wanita</li>
                </ol>
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


import Image from 'next/image';

export default function CoreHRCentre() {
  return (
    <div className="min-h-screen bg-white pt-14 md:pt-16">
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <Image
                src="/images/logo/core-hr-logo.png"
                alt="Core HR Centre Logo"
                width={300}
                height={150}
                className="object-contain"
                priority
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Core HR Centre
            </h2>

            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <blockquote className="border-l-4 border-accent pl-6 italic text-slate-600 my-6 text-xl">
                "Menyusun, Mengurus & Mengoptimumkan Potensi Tenaga Kerja Syarikat Anda."
              </blockquote>
              
              <p>
                Core HR Centre ialah anak syarikat di bawah EQ Group Global yang menawarkan perkhidmatan pengurusan sumber manusia profesional kepada syarikat luar — sama ada perusahaan kecil, sederhana atau organisasi besar.
              </p>
              <p>
                Kami membantu syarikat menguruskan rekod pekerja, penggajian, caruman, kehadiran, cuti, dan penilaian prestasi melalui sistem automasi yang tersusun dan mudah digunakan.
              </p>
              
              <div className="mt-8 bg-slate-50 p-6 border-l-4 border-accent">
                <p className="font-semibold text-slate-900 mb-4">Antara perkhidmatan utama kami:</p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Pengurusan dan penyimpanan data staf</li>
                  <li>Sistem payroll dan caruman (KWSP, SOCSO, EIS, PCB)</li>
                  <li>Pengurusan cuti dan kehadiran digital</li>
                  <li>Penyediaan laporan HR & analitik staf</li>
                  <li>Konsultasi struktur organisasi & SOP HR</li>
                </ol>
              </div>
              
              <p className="mt-6">
                Dengan pendekatan teknologi dan kepakaran HR terkini, Core HR Centre memastikan urusan sumber manusia anda berjalan lancar, patuh undang-undang dan lebih efisien.
              </p>

              <div className="mt-8 bg-slate-50 p-8 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Maklumat Hubungan</h3>
                <div className="space-y-4 text-lg text-slate-700">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">No Telefon:</h4>
                    <p className="text-slate-500">Belum didaftar</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">WhatsApp:</h4>
                    <p className="text-slate-500">Belum didaftar</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">E-mel:</h4>
                    <p className="text-slate-500">Belum didaftar</p>
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


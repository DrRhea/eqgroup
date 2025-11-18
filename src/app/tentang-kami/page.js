export default function TentangKami() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              TENTANG KAMI
            </h2>

            {/* Asal Usul & Penubuhan */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Asal Usul & Penubuhan
              </h3>
              <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                <p>
                  EQ Group Global ditubuhkan pada tahun 2022 sebagai inisiatif untuk menyatukan beberapa perniagaan berpotensi tinggi di bawah satu kumpulan strategik.
                </p>
                <p>
                  Nama "EQ" diambil daripada nama pengasasnya, <span className="font-semibold text-slate-900">Ezzat Qaisar</span>, menggambarkan identiti kepimpinan, nilai ketulusan dan semangat keusahawanan yang menjadi teras kepada setiap syarikat di bawah kumpulan ini.
                </p>
                <blockquote className="border-l-4 border-accent pl-6 italic text-slate-600 my-6">
                  "EQ bukan sekadar singkatan nama, tetapi simbol dedikasi dan nilai yang membentuk setiap langkah perjalanan kami."
                  <footer className="mt-2 text-slate-500">— Ezzat Qaisar, Pengasas EQ Group Global</footer>
                </blockquote>
              </div>
            </div>

            {/* Siapa Kami */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Siapa Kami
              </h3>
              <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                <p>
                  EQ Group Global ialah kumpulan syarikat pelbagai industri yang berpangkalan di <span className="font-semibold text-slate-900">Malaysia</span> dan kini mengembangkan operasi ke peringkat <span className="font-semibold text-slate-900">antarabangsa</span>.
                </p>
                <p>
                  Kami membina ekosistem perniagaan berasaskan nilai, ilmu, dan inovasi, dengan tumpuan kepada pembangunan insan dan kesejahteraan masyarakat.
                </p>
                <p className="mt-6 font-semibold text-slate-900">
                  EQ Group Global kini melibatkan empat sektor utama:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li><span className="font-semibold text-accent">Pendidikan Islamic</span> - Smart Quran Malaysia Centre</li>
                  <li><span className="font-semibold text-accent">Sistem Pengurusan Pusat Tuisyen</span> - eMindTutor</li>
                  <li><span className="font-semibold text-accent">Pengurusan Sumber Manusia</span> – Core HR Centre</li>
                  <li><span className="font-semibold text-accent">F&B Antarabangsa</span> – EQ F&B Division (Akan Datang)</li>
                </ul>
              </div>
            </div>

            {/* Visi Kami */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Visi Kami
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Menjadi kumpulan perniagaan global yang berteraskan nilai, ilmu dan inovasi untuk membina masa depan yang lebih baik bagi masyarakat dan ekonomi serantau.
              </p>
            </div>

            {/* Misi Kami */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Misi Kami
              </h3>
              <ol className="list-decimal list-inside space-y-3 text-lg text-slate-700 leading-relaxed ml-4">
                <li>Menyatukan pelbagai industri di bawah satu ekosistem strategik.</li>
                <li>Menggalakkan pembangunan insan dan keusahawanan berasaskan nilai.</li>
                <li>Meluaskan operasi ke pasaran antarabangsa melalui kolaborasi strategik.</li>
              </ol>
            </div>

            {/* Pengasas EQ Group Global */}
            <div className="bg-slate-50 p-8 md:p-12 border border-slate-200">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Pengasas EQ Group Global
              </h3>
              <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                <p>
                  <span className="font-semibold text-slate-900">Ezzat Qaisar</span> ialah seorang usahawan muda yang menjadi pengasas dan peneraju utama di sebalik EQ Group Global.
                </p>
                <p>
                  Beliau menubuhkan kumpulan ini dengan visi untuk menyatukan pelbagai industri di bawah satu ekosistem strategik yang berasaskan nilai, ilmu, dan inovasi.
                </p>
                <p>
                  Sejak penubuhannya pada tahun 2022, beliau telah memimpin perkembangan EQ Group Global daripada sebuah idea kecil kepada kumpulan perniagaan yang aktif dalam pendidikan, teknologi pengurusan, dan industri antarabangsa.
                </p>
                <p>
                  Beliau berhasrat untuk mewujudkan satu sistem pengurusan bersepadu di mana setiap syarikat di bawah EQ Group Global bergerak dalam satu hala tuju yang sama dari aspek operasi, nilai dan strategi.
                </p>
                <p>
                  Beliau berpegang pada prinsip integriti, ketulusan, dan keazaman, menjadikan EQ Group Global bukan sekadar kumpulan perniagaan tetapi platform yang memperkasa masyarakat melalui ilmu, peluang, dan nilai kemanusiaan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


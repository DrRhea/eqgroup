import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
              EQ GROUP GLOBAL
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8"></div>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-slate-700 font-medium leading-relaxed">
              Menerajui Pelbagai Industri Menuju Masa Depan Serantau
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white shadow-2xl p-8 md:p-12 lg:p-16 border border-slate-200">
              <div className="space-y-8 text-lg md:text-xl text-slate-700 leading-relaxed">
                <p className="text-center">
                  EQ Group Global ialah kumpulan syarikat moden yang aktif dalam pelbagai bidang{' '}
                  <span className="font-semibold text-blue-600">pendidikan</span>,{' '}
                  <span className="font-semibold text-indigo-600">teknologi</span>,{' '}
                  <span className="font-semibold text-purple-600">F&B</span> dan{' '}
                  <span className="font-semibold text-pink-600">gaya hidup</span>.
                </p>

                <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent my-8"></div>

                <p className="text-center">
                  EQ Group Global ialah kumpulan syarikat pelbagai industri yang berpusat di{' '}
                  <span className="font-semibold text-slate-900">Malaysia</span> dan kini melangkah ke peringkat{' '}
                  <span className="font-semibold text-slate-900">antarabangsa</span>. Kami percaya kepada kekuatan{' '}
                  <span className="font-semibold text-blue-600">ilmu</span>,{' '}
                  <span className="font-semibold text-indigo-600">inovasi</span> dan{' '}
                  <span className="font-semibold text-purple-600">nilai</span> untuk membina masa depan yang mampan dan memberi impak positif kepada masyarakat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Preview Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Terokai Lebih Lanjut
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Tentang Kami Preview */}
              <Link href="/tentang-kami" className="block bg-slate-50 p-8 border border-slate-200 hover:border-blue-600 hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Tentang Kami</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Ketahui lebih lanjut tentang sejarah, visi, misi dan pengasas EQ Group Global.
                </p>
                <span className="text-blue-600 font-semibold">Baca selengkapnya →</span>
              </Link>

              {/* Syarikat Preview */}
              <Link href="/syarikat" className="block bg-slate-50 p-8 border border-slate-200 hover:border-indigo-600 hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Syarikat</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Terokai syarikat-syarikat di bawah naungan EQ Group Global dan perkhidmatan yang ditawarkan.
                </p>
                <span className="text-indigo-600 font-semibold">Baca selengkapnya →</span>
              </Link>

              {/* Hubungi Kami Preview */}
              <Link href="/hubungi-kami" className="block bg-slate-50 p-8 border border-slate-200 hover:border-purple-600 hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Hubungi Kami</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Hubungi kami untuk sebarang pertanyaan atau cadangan mengenai perkhidmatan kami.
                </p>
                <span className="text-purple-600 font-semibold">Baca selengkapnya →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

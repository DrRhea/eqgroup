import Link from 'next/link';
import Image from 'next/image';

export default function Syarikat() {
  const companies = [
    {
      href: '/syarikat/smart-quran-malaysia-centre',
      title: 'Smart Quran Malaysia Centre',
      description: 'Institusi pendidikan Islam moden yang memperkasa pembelajaran Al-Quran dan Fardhu Ain dalam suasana pembelajaran yang sistematik, interaktif dan fleksibel.',
      logo: '/images/logo/smart-quran-logo.png',
      alt: 'Smart Quran Malaysia Centre Logo'
    },
    {
      href: '/syarikat/emindtutor',
      title: 'eMindTutor',
      description: 'Platform digital "all-in-one" untuk membantu pusat tuisyen, kelas agama dan institusi pendidikan dalam mengurus guru, pelajar, kelas dan pembayaran secara efisien.',
      logo: '/images/logo/emindtutor-logo.png',
      alt: 'eMindTutor Logo'
    },
    {
      href: '/syarikat/core-hr-centre',
      title: 'Core HR Centre',
      description: 'Perkhidmatan pengurusan sumber manusia profesional untuk membantu syarikat menguruskan rekod pekerja, penggajian, caruman, kehadiran, cuti, dan penilaian prestasi.',
      logo: '/images/logo/core-hr-logo.png',
      alt: 'Core HR Centre Logo'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-14 md:pt-16">
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Syarikat
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Terokai syarikat-syarikat di bawah naungan EQ Group Global dan perkhidmatan yang ditawarkan.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companies.map((company) => (
                <Link
                  key={company.href}
                  href={company.href}
                  className="group block bg-white border-2 border-slate-200 p-8 hover:border-accent hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-full h-32 bg-white flex items-center justify-center mb-6 group-hover:bg-slate-50 transition-colors">
                    <Image
                      src={company.logo}
                      alt={company.alt}
                      width={200}
                      height={120}
                      className="object-contain max-h-24"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 group-hover:text-accent transition-colors">
                    {company.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {company.description}
                  </p>
                  <div className="flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform">
                    <span>Ketahui lebih lanjut</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


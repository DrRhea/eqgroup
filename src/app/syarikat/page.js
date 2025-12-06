import Link from 'next/link';

export default function Syarikat() {
  const companies = [
    {
      href: '/syarikat/smart-quran-malaysia-centre',
      title: 'Smart Quran Malaysia Centre',
      description: 'Institusi pendidikan Islam moden yang memperkasa pembelajaran Al-Quran dan Fardhu Ain dalam suasana pembelajaran yang sistematik, interaktif dan fleksibel.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      href: '/syarikat/emindtutor',
      title: 'eMindTutor',
      description: 'Platform digital "all-in-one" untuk membantu pusat tuisyen, kelas agama dan institusi pendidikan dalam mengurus guru, pelajar, kelas dan pembayaran secara efisien.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      href: '/syarikat/core-hr-centre',
      title: 'Core HR Centre',
      description: 'Perkhidmatan pengurusan sumber manusia profesional untuk membantu syarikat menguruskan rekod pekerja, penggajian, caruman, kehadiran, cuti, dan penilaian prestasi.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
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
                  <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors text-accent">
                    {company.icon}
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


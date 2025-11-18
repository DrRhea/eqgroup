import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-secondary py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4">EQ Group Global</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Kumpulan syarikat moden yang aktif dalam pelbagai bidang pendidikan, teknologi, F&B dan gaya hidup.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Pautan Pantas</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/tentang-kami" className="text-slate-400 hover:text-white transition-colors">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link href="/syarikat" className="text-slate-400 hover:text-white transition-colors">
                    Syarikat
                  </Link>
                </li>
                <li>
                  <Link href="/hubungi-kami" className="text-slate-400 hover:text-white transition-colors">
                    Hubungi Kami
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Hubungi Kami</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  Ibu Pejabat EQ Group Global
                </li>
                <li>
                  No. 8, Arked MDB Kuala Ketil
                </li>
                <li>
                  09300 Baling, Kedah Darul Aman
                </li>
                <li>
                  Malaysia
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-400">
              © {currentYear} EQ Group Global. Hak cipta terpelihara.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


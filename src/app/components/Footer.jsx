import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-primary text-secondary md:py-16">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-5">
            {/* Company Info */}
            <div className="md:col-span-2">
              <Link href="/" className="inline-block mb-4 bg-white rounded-xl p-0.5 border border-slate-300">
                <Image
                  src="/images/logo/eq-group-logo.png"
                  alt="EQ Group Global Logo"
                  width={150}
                  height={50}
                  className="object-contain w-auto h-16 md:h-20"
                />
              </Link>
              <p className="mb-4 leading-relaxed text-slate-400">
                Kumpulan syarikat moden yang aktif dalam pelbagai bidang pendidikan, teknologi, F&B dan gaya hidup.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">Pautan Pantas</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="transition-colors text-slate-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/tentang-kami" className="transition-colors text-slate-400 hover:text-white">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link href="/hubungi-kami" className="transition-colors text-slate-400 hover:text-white">
                    Hubungi Kami
                  </Link>
                </li>
              </ul>
            </div>

            {/* Syarikat */}
            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">Syarikat</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/syarikat/smart-quran-malaysia-centre" className="transition-colors text-slate-400 hover:text-white">
                    Smart Quran Malaysia Centre
                  </Link>
                </li>
                <li>
                  <Link href="/syarikat/emindtutor" className="transition-colors text-slate-400 hover:text-white">
                    eMindTutor
                  </Link>
                </li>
                <li>
                  <Link href="/syarikat/core-hr-centre" className="transition-colors text-slate-400 hover:text-white">
                    Core HR Centre
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">Hubungi Kami</h4>
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
          <div className="pt-8 text-center border-t border-slate-800">
            <p className="text-slate-400">
              © {currentYear} EQ Group Global. Hak cipta terpelihara.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


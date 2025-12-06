import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: {
    default: "EQ Group Global - Menerajui Pelbagai Industri Menuju Masa Depan Serantau",
    template: "%s | EQ Group Global",
  },
  description: "EQ Group Global ialah kumpulan syarikat moden yang aktif dalam pelbagai bidang pendidikan, teknologi, F&B dan gaya hidup.",
  keywords: [
    "EQ Group Global",
    "EQ Group",
    "Malaysia",
    "Pendidikan Islam",
    "Smart Quran Malaysia Centre",
    "eMindTutor",
    "Core HR Centre",
    "F&B",
    "Perniagaan Malaysia",
    "Kumpulan Syarikat",
  ],
  authors: [{ name: "EQ Group Global" }],
  creator: "EQ Group Global",
  publisher: "EQ Group Global",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://eqgroupglobal.com"), // Update dengan domain sebenarnya
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    url: "https://eqgroupglobal.com", // Update dengan domain sebenarnya
    siteName: "EQ Group Global",
    title: "EQ Group Global - Menerajui Pelbagai Industri Menuju Masa Depan Serantau",
    description: "EQ Group Global ialah kumpulan syarikat moden yang aktif dalam pelbagai bidang pendidikan, teknologi, F&B dan gaya hidup.",
    images: [
      {
        url: "/images/logo/eq-group-logo.png",
        width: 1024,
        height: 1024,
        alt: "EQ Group Global Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EQ Group Global - Menerajui Pelbagai Industri Menuju Masa Depan Serantau",
    description: "EQ Group Global ialah kumpulan syarikat moden yang aktif dalam pelbagai bidang pendidikan, teknologi, F&B dan gaya hidup.",
    images: ["/images/logo/eq-group-logo.png"],
    creator: "@eqgroupglobal", // Update dengan Twitter handle sebenarnya jika ada
  },
  icons: {
    icon: [
      { url: "/images/logo/eq-group-logo.png", sizes: "any" },
      { url: "/images/logo/eq-group-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo/eq-group-logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo/eq-group-logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/images/logo/eq-group-logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Tambahkan verification codes jika diperlukan
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ms">
      <body className={`${montserrat.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

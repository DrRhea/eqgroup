import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "EQ Group Global - Menerajui Pelbagai Industri Menuju Masa Depan Serantau",
  description: "EQ Group Global ialah kumpulan syarikat moden yang aktif dalam pelbagai bidang pendidikan, teknologi, F&B dan gaya hidup.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ms">
      <body className={`${montserrat.variable} font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

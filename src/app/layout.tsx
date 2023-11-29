import type { Metadata } from "next";
import { Montserrat, Noto_Sans_JP, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer/Footer";
import { ThemeProider } from "@/context/ThemeContext";
import { baseMetadata, openGraphMetadata, twitterMetadata } from "@/lib/baseMetadata";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const notojp = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-notojp",
  display: "swap",
});

const sourcecodepro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-source",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body suppressHydrationWarning={true} className={`${montserrat.variable} ${notojp.variable} ${sourcecodepro.variable}`}>
        <ThemeProider>
          <div className="container">
            <Navbar />
            <main className="main">{children}</main>
            <Footer />
          </div>
        </ThemeProider>
      </body>
    </html>
  );
}

export const metadata = {
  ...baseMetadata,
  openGraph: {
    ...openGraphMetadata,
  },
  twitter: {
    ...twitterMetadata,
  },
};

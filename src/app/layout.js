import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/navbar/navbar";
import Header from "@/component/header/header";
import Footer from "@/component/footer/footer";
import WaterBubbleEffect from "@/component/UiEffect/water-boboul";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Digital Marketing Cources In Chennai | Stayindigital",
  description:
    "Practical Digital Marketing training in Pursawakkam, Chennai with 1 hour class and 4 hours of practice every day. Brand name for Placements. Call Now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Navbar />
        <Header />
        {children}
        <Footer />
        {/* <WaterBubbleEffect /> */}
      </body>
    </html>
  );
}

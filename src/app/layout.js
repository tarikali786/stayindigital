import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/navbar/navbar";
import Header from "@/component/header/header";
import Footer from "@/component/footer/footer";
import SpectralBackground from "@/component/UiEffect/network-spectrum";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Digital Marketing Courses In Chennai | Stayindigital",
  description:
    "Practical Digital Marketing training in Pursawakkam, Chennai with 1 hour class and 4 hours of practice every day. Brand name for Placements. Call Now!",
  metadataBase: new URL("https://stayindigital.com"),
  alternates: {
    canonical: "/",
    languages: { "en-US": "/" },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
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
  openGraph: {
    title: "Digital Marketing Courses In Chennai | Stayindigital",
    description:
      "Practical Digital Marketing training in Pursawakkam, Chennai with 1 hour class and 4 hours of practice every day. Brand name for Placements. Call Now!",
    url: "https://stayindigital.com/",
    siteName: "Stayindigital",
    images: [
      {
        url: "/StayLogo.png", // ✅ use static path from public/
        width: 800,
        height: 600,
        alt: "Stayindigital Logo",
      },
      {
        url: "/StayLogo.png",
        width: 1200,
        height: 630,
        alt: "Stayindigital",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Courses In Chennai | Stayindigital",
    description:
      "Practical Digital Marketing training in Pursawakkam, Chennai with 1 hour class and 4 hours of practice every day. Brand name for Placements. Call Now!",
    site: "@stayindigital",
    creator: "@stayindigital",
    images: ["/StayLogo.png"], // ✅ direct public image
  },
  other: {
    "fb:app_id": "",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Stayindigital",
              url: "https://stayindigital.com/",
              logo: "https://stayindigital.com/StayLogo.png",
              sameAs: [
                "https://www.instagram.com/stay_in_digitals?igsh=MXM3N3B5NHIxdmkzdA==",
                "https://www.linkedin.com/company/stay-in-digital/",
                "https://www.youtube.com/@StayinDigital",
                "https://x.com/StayinDigital",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Navbar />
        <Header />
        {children}
        <Footer />
        <SpectralBackground />
      </body>
    </html>
  );
}

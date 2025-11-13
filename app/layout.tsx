import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HealthyzWay - Premium SeaMoss Gel | 92+ Minerals for Optimal Health",
  description: "Experience the power of authentic Gold SeaMoss gel packed with 92+ essential minerals. Boost immunity, improve skin health, and increase energy naturally. Available in 5 delicious flavors. Order now!",
  keywords: [
    "sea moss",
    "seamoss gel",
    "gold sea moss",
    "Irish moss",
    "sea moss benefits",
    "natural supplements",
    "92 minerals",
    "immune support",
    "thyroid health",
    "skin health",
    "hair growth",
    "energy boost",
    "gut health",
    "organic sea moss",
    "HealthyzWay"
  ],
  authors: [{ name: "HealthyzWay" }],
  creator: "HealthyzWay",
  publisher: "HealthyzWay",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://healthyzway.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://healthyzway.vercel.app',
    siteName: 'HealthyzWay',
    title: 'HealthyzWay - Premium SeaMoss Gel | 92+ Minerals',
    description: 'Experience the power of authentic Gold SeaMoss gel packed with 92+ essential minerals. Boost immunity, improve skin health, and increase energy naturally.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'HealthyzWay Premium SeaMoss Gel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HealthyzWay - Premium SeaMoss Gel | 92+ Minerals',
    description: 'Experience the power of authentic Gold SeaMoss gel packed with 92+ essential minerals. Boost immunity, improve skin health, and increase energy naturally.',
    images: ['/logo.png'],
    creator: '@healthyzway',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/logo.png', sizes: 'any' },
      { url: '/logo.png', type: 'image/png' },
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  category: 'health',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

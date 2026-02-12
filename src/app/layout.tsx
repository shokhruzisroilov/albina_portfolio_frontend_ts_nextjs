import { AOSProvider, ScrollLinked } from '@/components/common';
import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

// Google Fonts
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '700'],
});

// cutsom fonts
const bricolage = localFont({
  src: [
    {
      path: '../assets/fonts/BricolageGrotesque-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/BricolageGrotesque-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-bricolage',
});

export const metadata: Metadata = {
  title: 'Albina Yildiz - Instructional & Spatial Designer',
  description:
    'Instructional designer, educator, and education spatial designer specializing in transforming learning through innovation and evidence-based design. Creating scalable, accessible learning experiences.',
  keywords: [
    'Albina Yildiz',
    'instructional designer',
    'education spatial designer',
    'learning designer',
    'EdTech',
    'online course design',
    'Canvas LMS',
    'Georgetown University',
    'EdTechUz',
    'learning technology',
    'educational design',
    'hybrid learning',
    'accessible education',
  ],
  authors: [{ name: 'Albina Yildiz' }],
  creator: 'Albina Yildiz',
  publisher: 'Albina Yildiz',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://albina-yildiz.com',
    title: 'Albina Yildiz - Instructional & Spatial Designer',
    description:
      'Transforming learning through innovation and evidence-based design. Specializing in online/hybrid courses, spatial experience design, and EdTech solutions.',
    siteName: 'Albina Yildiz Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Albina Yildiz - Instructional Designer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Albina Yildiz - Instructional & Spatial Designer',
    description:
      'Creating learner-centered experiences that are accessible, engaging, and grounded in pedagogy.',
    images: ['/twitter-image.png'],
    creator: '@albinayildiz',
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
  verification: {
    // Google verification kodi
    google: 'verification_token',
    // Yandex verification kodi
    yandex: 'verification_token',
  },
  category: 'portfolio, education, instructional design',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${bricolage.variable} antialiased`}
      >
        <AOSProvider>
          <ScrollLinked>{children}</ScrollLinked>
        </AOSProvider>
      </body>
    </html>
  );
}

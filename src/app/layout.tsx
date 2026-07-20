import type { Metadata } from "next";
import { Merriweather, Open_Sans } from "next/font/google";
import "./globals.scss";
import "./base.scss";
import { GoogleAnalytics } from "@next/third-parties/google";

const merriweather = Merriweather({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
})

const openSans = Open_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Stephen Camper | Frontend Developer",
  description: "Frontend developer portfolio — React, Next.js, WordPress, GSAP, HTML email, and interactive web experiences.",
  authors: [{ name: "Stephen Camper" }],
  icons: {
      icon: [
          { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
          { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${merriweather.variable} ${openSans.variable}`}>
      <body>
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      </body>
    </html>
  );
}
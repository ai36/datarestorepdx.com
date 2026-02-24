import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://eventgearpdx.com",
  ),

  title:
    "Professional Data Recovery in Portland OR & Vancouver WA | DataRestorePDX",
  description:
    "Fast, confidential data recovery from HDD, SSD, USB, and memory cards. Serving Portland, Oregon and Vancouver, Washington. Same-day diagnostics | DataRestorePDX",
  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon16.png",
    apple: "/favicon512.png",
  },

  openGraph: {
    title:
      "Professional Data Recovery in Portland OR & Vancouver WA | DataRestorePDX",
    description:
      "Fast, confidential data recovery from HDD, SSD, USB, and memory cards. Serving Portland, Oregon and Vancouver, Washington. Same-day diagnostics | DataRestorePDX",
    url: "/",
    siteName: "DataRestorePDX",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DataRestorePDX - Professional Data Recovery in Portland OR & Vancouver WA",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

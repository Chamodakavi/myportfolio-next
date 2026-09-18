import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chamoda Hapuarachchi | Full Stack Developer",
  description:
    "Portfolio of Chamoda Hapuarachchi - A creative partner passionate about value design, specializing in brand and digital solutions that go beyond aesthetics.",
  icons: {
    icon: "/images/logo.ico",
  },
  keywords: [
    "Chamoda Hapuarachchi",
    "Frontend Developer",
    "Full Stack Developer Sri Lanka",
    "React Developer",
    "Next.js Portfolio",
    "UI/UX Design",
    "Web Developer",
  ],
  authors: [{ name: "Chamoda Hapuarachchi" }],
  openGraph: {
    title: "Chamoda Hapuarachchi | Full Stack Developer",
    description: "Check out my latest web development projects.",
    url: "https://yourportfolio.com",
    siteName: "Chamoda Hapuarachchi Portfolio",
    images: [
      {
        url: "/images/logo.png", //use static url https://
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chamoda Hapuarachchi | Full Stack Developer",
    description:
      "Creative partner specializing in brand and digital solutions.",
    images: ["https://your-real-domain.com/images/logo.png"],
  },
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

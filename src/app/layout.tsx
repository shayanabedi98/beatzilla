import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/universal/Navbar";
import Footer from "@/components/universal/Footer";
import BackToTop from "@/components/universal/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BeatZilla",
  description: "Developed by Shayan Abedi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary text-secondary`}>
        <Navbar />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}

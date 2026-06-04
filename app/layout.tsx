import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Kiwicare Physio | Expert Physiotherapy in Mount Eden, Auckland",
  description: "Evidence-based physiotherapy services in Mount Eden, Auckland. Sports rehabilitation, chronic pain management, post-surgery recovery, dry needling and more. Book your appointment today.",
  keywords: "physiotherapy, physio, Auckland, Mount Eden, sports rehabilitation, chronic pain, ACC, New Zealand",
  icons: {
    icon: "/KiwiCare.png",
    apple: "/KiwiCare.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className={inter.className}>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}

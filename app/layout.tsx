import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kiwicarephysio.co.nz"),
  title: {
    default: "Kiwicare Physio | Expert Physiotherapy in Mount Eden, Auckland",
    template: "%s | Kiwicare Physio Auckland",
  },
  description: "Evidence-based physiotherapy services in Mount Eden, Auckland. Sports rehabilitation, chronic pain management, post-surgery recovery, dry needling, neurological rehab, and concussion management. Book today.",
  keywords: "Kiwicare, Kiwi Care, Kiwicare Physio, Kiwicare Physiotherapy, Kiwicare Physio Auckland, Kiwicare physsio, Kiwicare physsio pvt ltd, Kiwicare physio pvt ltd, Sarniya Moganathas, physiotherapy Mount Eden, physio Mount Eden, sports injury clinic Auckland, ACC physio Auckland, dry needling Mount Eden, neurological rehab Auckland, concussion management Auckland, cupping therapy Mount Eden, physiotherapy Auckland",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png?v=3",
    apple: "/favicon.png?v=3",
  },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://www.kiwicarephysio.co.nz",
    title: "Kiwicare Physio | Expert Physiotherapy in Mount Eden, Auckland",
    description: "Evidence-based physiotherapy services in Mount Eden, Auckland. Sports rehabilitation, chronic pain management, post-surgery recovery, dry needling, neurological rehab, and concussion management. Book today.",
    siteName: "Kiwicare Physio",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Kiwicare Physio - Expert Physiotherapy Mount Eden, Auckland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiwicare Physio | Expert Physiotherapy in Mount Eden, Auckland",
    description: "Evidence-based physiotherapy services in Mount Eden, Auckland. Sports rehabilitation, chronic pain management, post-surgery recovery, dry needling, neurological rehab, and concussion management. Book today.",
    images: ["/hero-image.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // WebSite Schema to display site name in Google search results correctly
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Kiwicare Physio",
    "alternateName": ["Kiwi Care", "Kiwicare", "Kiwicare Physiotherapy", "Kiwicare Physio Auckland", "Kiwicare physsio", "Kiwicare physsio pvt ltd", "Kiwicare physio pvt ltd"],
    "url": "https://www.kiwicarephysio.co.nz"
  };

  // LocalBusiness (Physiotherapy Clinic) Schema for rich search results and local maps integration
  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "Physiotherapy",
    "name": "Kiwicare Physio",
    "alternateName": ["Kiwi Care", "Kiwicare Physiotherapy", "Kiwicare physsio", "Kiwicare Physio Auckland", "Kiwicare physsio pvt ltd", "Kiwicare physio pvt ltd"],
    "url": "https://www.kiwicarephysio.co.nz",
    "logo": "https://www.kiwicarephysio.co.nz/KiwiCare.png",
    "image": "https://www.kiwicarephysio.co.nz/hero-image.png",
    "telephone": "+64-22-060-2032",
    "email": "admin@kiwicarephysio.co.nz",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mount Eden",
      "addressRegion": "Auckland",
      "postalCode": "1024",
      "addressCountry": "NZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -36.8885,
      "longitude": 174.7634
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/kiwicarephysio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      "https://www.facebook.com/share/1BT8H6cLJm/?mibextid=wwXIfr",
      "https://www.linkedin.com/company/kiwicare-physio/"
    ],
    "medicalSpecialty": [
      "PhysicalTherapy",
      "RehabilitationSpecialty"
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />
      </head>
      <body className={inter.className}>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}

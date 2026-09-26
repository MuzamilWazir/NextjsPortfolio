import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { siteConfig } from "@/lib/site";
import StructuredData from "@/components/Seo/StructuredData.jsx";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const title = siteConfig.title;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [...siteConfig.keywords],
  category: "technology",
  icons: {
    apple: [{ url: "/favicon.ico" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title,
    description: siteConfig.description,
    locale: siteConfig.locale,
    images: [
      {
        url: siteConfig.images.og.url,
        width: siteConfig.images.og.width,
        height: siteConfig.images.og.height,
        alt: siteConfig.images.og.alt,
        type: "image/png",
        secureUrl: `${siteConfig.url}${siteConfig.images.og.url}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Muzammil_wazir",
    creator: "@Muzammil_wazir",
    title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.images.og.url,
        width: siteConfig.images.og.width,
        height: siteConfig.images.og.height,
        alt: siteConfig.images.og.alt,
        type: "image/png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "PK",
    "geo.placename": siteConfig.location.city,
    "geo.position": "33.6844;73.0479",
    "ICBM": "33.6844, 73.0479",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f9fafb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <StructuredData />
      </head>
      <body
        className={`${poppins.variable} font-sans bg-gray-50 text-gray-700 text-[1rem]`}
      >
        {children}
      </body>
    </html>
  );
}

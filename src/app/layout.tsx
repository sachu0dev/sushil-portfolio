import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import { Space_Grotesk as Grotesk } from "next/font/google";
import "./globals.css";
// import { GoogleTag } from "@/components/ui/GoogleTag";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

const grotesk = Grotesk({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.devbysushil.com"),
  title: {
    default: "Sushil Kumar - Full Stack Web Developer",
    template: "%s | Sushil Kumar's Portfolio",
  },
  description:
    "Innovative full-stack web developer creating cutting-edge digital solutions. Expertise in Next.js, React, and modern web technologies. Transforming ideas into powerful, user-centric web applications.",
  keywords: [
    "Sushil Kumar",
    "Web Developer",
    "Full Stack Developer",
    "Next.js",
    "React Developer",
    "Software Engineer",
    "Web Development",
    "Portfolio",
    "Front-end",
    "Back-end",
  ],
  openGraph: {
    title: "Sushil Kumar - Full Stack Web Developer",
    description: "Explore innovative web solutions and professional expertise",
    url: "https://www.devbysushil.com",
    siteName: "Sushil Kumar Portfolio",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sushil Kumar - Web Development Portfolio",
    description: "Innovative web solutions by a full-stack developer",
    images: ["/images/logo.png"],
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
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
  },
  alternates: {
    canonical: "https://www.devbysushil.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>{/* <GoogleTag /> */}</head>
      <body
        className={`bg-[#0C0C0D] ${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${grotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

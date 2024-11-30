import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import { Space_Grotesk as Grotesk } from "next/font/google";
import "./globals.css";

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
  title: "Portfolio",
  description: "Sushil Kumar portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[#0C0C0D] ${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${grotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

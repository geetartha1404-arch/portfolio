import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PersonJsonLd } from "@/components/seo/json-ld";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Geetartha Borpatra Gohain | AI Automation & Digital Marketing",
    template: "%s | Geetartha B. Gohain",
  },
  description:
    "Portfolio of Geetartha Borpatra Gohain — radiographer-turned-AI-automation specialist. Building no-code AI pipelines, Python automation, and digital marketing systems.",
  keywords: [
    "Geetartha Borpatra Gohain",
    "AI Automation",
    "Digital Marketing",
    "Radiography",
    "Python",
    "No-Code",
    "Healthtech",
    "Portfolio",
  ],
  authors: [{ name: "Geetartha Borpatra Gohain" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
    siteName: "Geetartha B. Gohain Portfolio",
    title: "Geetartha Borpatra Gohain | AI Automation & Digital Marketing",
    description:
      "Radiographer-turned-AI-automation specialist. Building workflows, Python tools, and marketing systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Geetartha Borpatra Gohain | AI Automation & Digital Marketing",
    description:
      "Radiographer-turned-AI-automation specialist. Building workflows, Python tools, and marketing systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-background text-text-primary antialiased">
        <Navbar />
        {children}
        <Footer />
        <PersonJsonLd />
      </body>
    </html>
  );
}

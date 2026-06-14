import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jason Doty -- Application Security Engineer",
  description:
    "Senior Application Security Engineer with 13+ years of experience in manual security assessments, code reviews, threat modeling, and developer enablement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-gray-800 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

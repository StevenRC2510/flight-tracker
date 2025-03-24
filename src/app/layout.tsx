import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flight tracker",
  description: "Find you airport",
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
        <div className="relative h-screen bg-cover bg-center flex flex-col bg-[url('/assets/images/background.jpeg')]">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-blue-900/50 to-black/60 z-0" />
          {children}
        </div>
      </body>
    </html>
  );
}

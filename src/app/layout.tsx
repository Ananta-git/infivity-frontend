import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "INFIVITY – Igniting Infinite Creativity",
  description:
    "INFIVITY empowers children and students with coding, AI, robotics, and future-ready digital skills.",
  keywords: [
    "coding for kids",
    "AI learning Nepal",
    "robotics training",
    "INFIVITY",
    "digital skills",
  ],
  authors: [{ name: "INFIVITY" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

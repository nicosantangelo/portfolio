import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "./components/Navigation";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "nicosantangelo",
  description:
    "This is the personal website of Nicolás Santángelo (nicosantangelo), a programmer and all-round curious lad",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navigation />
        {children}
      </body>
      <GoogleAnalytics gaId="G-NGB9HHHLJL" />
    </html>
  );
}

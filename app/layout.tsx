import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Nicolas Santangelo (nicosantangelo)",
  description:
    "This is the personal website of Nicolás Santángelo, a programmer and all-round curious lad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
      <GoogleAnalytics gaId="G-NGB9HHHLJL" />
    </html>
  );
}

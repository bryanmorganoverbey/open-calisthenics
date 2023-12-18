import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// components
import NavBar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Open Calisthenics",
  description: "A free information library for body weight exercises"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

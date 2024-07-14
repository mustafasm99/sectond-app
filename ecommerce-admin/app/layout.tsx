import type { Metadata } from "next";          // Metadata its what hellp the Google to found the website faster 
import { Inter } from "next/font/google";     // import font
import "./globals.css";                      // invoke the css files 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Dashbord",
  description: "Admin Dashbord",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

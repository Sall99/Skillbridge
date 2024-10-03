import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";

import "./globals.css";
import { Header, TopBanner } from "@/components";

const BeVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={BeVietnamPro.className}>
        <TopBanner />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

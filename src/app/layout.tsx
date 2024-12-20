import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";

import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer, Header, TopBanner } from "@/components";

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
        <main className="m-auto max-w-_1920">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

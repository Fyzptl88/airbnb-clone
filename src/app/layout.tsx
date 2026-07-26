import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Airbnb Clone | Vacation Rentals, Homes, Experiences & Places",
  description:
    "Find vacation rentals, cabins, beach houses, unique homes and experiences around the world — all made possible by Hosts on Airbnb.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunitoSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-text-primary bg-bg-primary">
        <Navbar />
        <main className="flex-1 mx-auto">{children}</main>
      </body>
    </html>
  );
}

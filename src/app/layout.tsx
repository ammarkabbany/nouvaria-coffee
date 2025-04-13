import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  subsets: ["latin"],
})

const BabasNeue = localFont({
  src: "../fonts/BebasNeue-Regular.ttf",
  variable: "--font-babasneue",
  display: "swap",
  weight: "400"
})

export const metadata: Metadata = {
  title: "Novaria Coffee | Speciality Coffee",
  description: "Fresh Coffee, Exceptional Hospitality",
  icons: {
    icon: '/favicon.png',
    apple: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Toaster richColors theme="light" position="top-center" duration={2000} />
        {children}
      </body>
    </html>
  );
}

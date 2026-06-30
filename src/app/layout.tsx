import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Aakshay Jindal | Premium Board Prep, Commerce & CA Coaching",
  description:
    "Aakshay Jindal offers elite focused coaching for school students (Classes I-XII), Commerce, CA Foundation, and CUET in Shahdara, Delhi. Good teaching stays personal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${plusJakartaSans.variable} font-sans min-h-screen bg-white text-brand-900 antialiased selection:bg-brand-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}


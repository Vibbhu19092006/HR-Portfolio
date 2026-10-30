import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vibbhu-hr-portfolio.vercel.app"),
  title: "VIBBHU A | Aspiring HR Professional & Cyber Security Student",
  description:
    "Official portfolio of Vibbhu A. Aspiring HR professional and B.E CSE (Cyber Security) student with expertise in candidate screening, interview scheduling, student outreach, and people operations.",
  keywords: [
    "VIBBHU A",
    "HR Portfolio",
    "Aspiring HR Professional",
    "Candidate Screening",
    "Interview Scheduling",
    "Cyber Security",
    "Sri Eshwar College of Engineering",
    "Internshala Student Partner",
    "E-Cell IIT-Bombay Campus Ambassador",
  ],
  authors: [{ name: "VIBBHU A" }],
  creator: "VIBBHU A",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vibbhu-hr-portfolio.vercel.app",
    title: "VIBBHU A | Aspiring HR Professional",
    description:
      "Modern interactive portfolio of Vibbhu A. Showcasing HR skills, campus leadership, technical projects, and certifications.",
    siteName: "VIBBHU A Portfolio",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Vibbhu A - Aspiring HR Professional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VIBBHU A | Aspiring HR Professional",
    description:
      "Aspiring HR professional and B.E CSE (Cyber Security) student with expertise in candidate screening, interview scheduling, and community outreach.",
    images: ["/images/profile.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#070b14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans dark scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100 antialiased selection:bg-amber-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}

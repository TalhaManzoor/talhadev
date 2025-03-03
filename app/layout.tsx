import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Talha Manzoor — Software Engineer",
  description:
    "Building high-performance apps that redefine user experience.",
  generator: "Next.js",
  applicationName: "Talha Manzoor— Software Engineer",
  keywords: [
    "freelance",
    "android developer",
    "ios developer",
    "Mobile App Developer",
    "Flutter",
    "Web Developer",
    "Software Engineer",
    "Backend Developer",
    "Hybrid Mobile App Developer",
    "creative engineer",
    "tech",
    "pakistan",
    "mobile application",
    "software developer",
    "portfolio",
    "android",
    "ios",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Talha Manzoor — Software Engineer",
    description:
      "Building high-performance apps that redefine user experience.",
    url: "https://usmandev-243.vercel.app/",
    siteName: "https://usmandev-243.vercel.app/",
    images: [
      {
        url: "https://www.udacity.com/_next/image?url=https%3A%2F%2Fvideo.udacity-data.com%2Ftopher%2F2024%2FOctober%2F6709872f_nd0044%2Fnd0044.jpg&w=3840&q=75",
        width: 1200,
        height: 630,
        alt: "Talha Manzoor — Software Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Talha Manzoor — Software Engineer",
    description:
      "Building high-performance apps that redefine user experience.",
    creator: "victorwill__",
    creatorId: "1243720976552144897",
    images: [
      "https://www.udacity.com/_next/image?url=https%3A%2F%2Fvideo.udacity-data.com%2Ftopher%2F2024%2FOctober%2F6709872f_nd0044%2Fnd0044.jpg&w=3840&q=75",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

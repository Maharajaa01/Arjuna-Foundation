import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arjuna Foundation - Empowering Underserved Communities",
  description:
    "Arjuna Foundation is a non-profit organization focused on creating sustainable change in underserved communities through education, health, and social initiatives.",
  keywords: [
    "NGO",
    "Non-profit",
    "Arjuna Foundation",
    "Social Work",
    "Community Development",
    "Education",
    "Health",
    "India NGO",
    "Charity",
  ],
  authors: [{ name: "Arjuna Foundation", url: "https://arjunafoundation.org" }],
  creator: "Arjuna Foundation",
  metadataBase: new URL("https://arjunafoundation.org"),
  openGraph: {
    title: "Arjuna Foundation - Empowering Underserved Communities",
    description:
      "Join hands with Arjuna Foundation in making a difference. Our NGO works towards education, health, and uplifting marginalized communities.",
    url: "https://arjunafoundation.org",
    siteName: "Arjuna Foundation",
    images: [
      {
        url: "/asset/af_logo.png", 
        width: 1200,
        height: 630,
        alt: "Arjuna Foundation - NGO Banner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arjuna Foundation - Empowering Underserved Communities",
    description:
      "Support Arjuna Foundation's mission to uplift lives through education, healthcare, and community service.",
    images: ["/asset/af_logo.png"], // Replace with your actual image path
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#e6d72dff",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

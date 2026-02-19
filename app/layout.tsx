import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Katalyst — The Backend for Agentic Engineering",
    template: "%s | Katalyst",
  },
  description:
    "Turn coding agents into fullstack builders. Add backend to your apps in seconds. Database, auth, storage, functions, AI — all operated by your AI coding agent.",
  keywords: [
    "backend as a service",
    "AI coding",
    "MCP",
    "model context protocol",
    "Cursor",
    "Claude Code",
    "agentic engineering",
    "Postgres",
    "authentication",
    "serverless",
  ],
  openGraph: {
    title: "Katalyst — The Backend for Agentic Engineering",
    description:
      "Turn coding agents into fullstack builders. Add backend to your apps in seconds.",
    url: "https://katalyst.dev",
    siteName: "Katalyst",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Katalyst — The Backend for Agentic Engineering",
    description:
      "Turn coding agents into fullstack builders. Add backend to your apps in seconds.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

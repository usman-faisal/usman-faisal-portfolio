import Portfolio from "@/components/Portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usman Shamsi | Full Stack Engineer",
  description: "I write code so clean even AI asks me for comments. Based in Karachi.",
  openGraph: {
    title: "Usman Shamsi | Portfolio",
    description: "Building Cursor for marketing at Heyoz. Next.js & NestJS Specialist.",
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Usman Shamsi",
  },
};

export default function Home() {
  return <Portfolio />;
}
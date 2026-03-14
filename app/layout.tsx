import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nayaab | Find Your Crowd in Namma Bengaluru",
  description:
    "Ditch the dating apps. Find your actual crowd, join real events, and cure the big city loneliness in Bangalore. Hangouts over hookups.",
  openGraph: {
    title: "Nayaab | Find Your Crowd in Namma Bengaluru",
    description:
      "Ditch the dating apps. Find your actual crowd, join real events, and cure the big city loneliness in Bangalore. Hangouts over hookups.",
    url: "https://nayaab.app",
    siteName: "Nayaab",
    images: [
      {
        url: "/cafe.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nayaab — Find Your Crowd in Bangalore",
  description:
    "Kill the loneliness in Bangalore. Nayaab connects you with real hangouts and verified vibes. Download the Android app today.",
  keywords: ["Nayaab", "Bangalore", "social", "hangouts", "meetups", "community"],
  openGraph: {
    title: "Nayaab — Find Your Crowd in Bangalore",
    description:
      "Kill the loneliness in Bangalore. Real hangouts, verified vibes.",
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

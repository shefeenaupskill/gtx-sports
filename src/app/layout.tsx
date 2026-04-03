import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "GTX SPORTS | Athlete Performance Lab",
  description: "Elite diagnostic registration and athlete test management system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spotify - Tailwind App",
  description: "Listen to music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-zinc-50">{children}</body>
    </html>
  );
}

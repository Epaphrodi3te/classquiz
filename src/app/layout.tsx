import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FormaTikTok - Devenez un créateur TikTok professionnel",
  description:
    "Formation complète pour maîtriser TikTok : création de compte, niches virales, vidéos avec l'IA, algorithme et monétisation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-[#010101] text-white min-h-screen">{children}</body>
    </html>
  );
}

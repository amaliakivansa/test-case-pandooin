import type { Metadata } from "next";
import "./globals.css";
import ClientRootLayout from "./ClientComponent";

export const metadata: Metadata = {
  title: "Zamrood by Pandooin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ClientRootLayout>{children}</ClientRootLayout>;
}

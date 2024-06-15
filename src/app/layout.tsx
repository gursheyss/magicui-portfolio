import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { RESUME_DATA } from "@/data/resume-data";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: `${RESUME_DATA.contact.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}

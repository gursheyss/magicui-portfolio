import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { RESUME_DATA } from "@/data/resume-data";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

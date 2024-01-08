import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { OptionProvider } from "./option-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Select",
  description: "Created By Armaan Sahoo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <OptionProvider>
        <body
          className={cn(
            "min-h-screen font-sans antialiased grainy",
            inter.className
          )}
        >
          {children}
        </body>
      </OptionProvider>
    </html>
  );
}

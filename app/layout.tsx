import { Providers } from "./providers";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Associação Vinícius Carvalheido",
  description: "Transformando vidas através de ações sociais",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          inter.className
        )}
        suppressHydrationWarning
      >
        <Providers>
          <div className="relative min-h-screen">
            {children}
            <Toaster />
          </div>
        </Providers>
      </body>
    </html>
  );
}


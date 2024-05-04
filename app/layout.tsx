import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import RootProviders from "@/components/providers/RootProviders";
import { Toaster } from "@/components/ui/sonner";
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Money Mate",
  description: "Money Mate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className="dark"
        style={{
          colorScheme: "dark",
        }}
      >
        <body className={inter.className}>
          <Toaster richColors position="bottom-right" />
          <RootProviders>
            {children}
            <SpeedInsights />
          </RootProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}

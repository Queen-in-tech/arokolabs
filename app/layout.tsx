import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://arokolabs.com"),
  title: {
    default: "Àrokò Labs — AI Operations Partner",
    template: "%s | Àrokò Labs",
  },
  description: "We replace manual business workflows with AI-driven systems that execute work automatically.",
  authors: [{ name: "Àrokò Labs" }],
  openGraph: {
    type: "website",
    siteName: "Àrokò Labs",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@arokolabs",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/logo4.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Àrokò Labs",
              url: "https://arokolabs.com",
              logo: "https://arokolabs.com/logo4.png",
              description: "We replace manual business workflows with AI-driven systems that execute work automatically.",
              sameAs: [
                "https://www.instagram.com/arokolabs",
                "https://www.linkedin.com/company/aroko-labs",
              ],
              contactPoint: { "@type": "ContactPoint", contactType: "sales", url: "https://arokolabs.com/contact" },
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

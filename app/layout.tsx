import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import "@/styles.css";

export const metadata: Metadata = {
  title: {
    default: "Vaibhavi Srivastava — Writing",
    template: "%s | Vaibhavi Srivastava",
  },
  description:
    "Articles on software, systems and the craft of building things. By Vaibhavi Srivastava.",
  openGraph: {
    title: "Vaibhavi Srivastava — Writing",
    description:
      "Articles on software, systems and the craft of building things. By Vaibhavi Srivastava.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

function SiteHeader() {
  const navLinkClass =
    "text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="font-display text-xl leading-none tracking-tight text-foreground">
          WRITING
        </Link>
        <nav aria-label="Site" className="flex items-center gap-5 sm:gap-7">
          <Link href="/" className={navLinkClass}>
            Home
          </Link>
          <Link href="/all" className={navLinkClass}>
            Articles
          </Link>
          <a
            href="https://medium.com/@uxie7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-baseline gap-1 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Medium
            <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Instrument+Serif&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}

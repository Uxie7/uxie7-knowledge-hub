import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vaibhavi Srivastava — Writing" },
      {
        name: "description",
        content:
          "Articles on software, systems and the craft of building things. By Vaibhavi Srivastava.",
      },
      { property: "og:title", content: "Vaibhavi Srivastava — Writing" },
      {
        property: "og:description",
        content:
          "Articles on software, systems and the craft of building things. By Vaibhavi Srivastava.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Instrument+Serif&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function SiteHeader() {
  const navLinkClass =
    "text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline";
  const activeNavClass =
    "text-[11px] font-medium uppercase tracking-[0.16em] text-foreground underline-offset-4";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <Link
          to="/"
          className="font-display text-xl leading-none tracking-tight text-foreground"
        >
          WRITING
        </Link>
        <nav aria-label="Site" className="flex items-center gap-5 sm:gap-7">
          <Link to="/" className={navLinkClass} activeProps={{ className: activeNavClass }}>
            Home
          </Link>
          <Link
            to="/all"
            className={navLinkClass}
            activeProps={{ className: activeNavClass }}
          >
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

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}

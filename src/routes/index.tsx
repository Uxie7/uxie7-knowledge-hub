import { createFileRoute, Link } from "@tanstack/react-router";

import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import heroImage from "@/assets/covers/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
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
  }),
  component: Landing,
});

function Landing() {
  const featured = articles.slice(0, 4);

  return (
    <main className="mx-auto w-full max-w-[1440px] px-5 pb-20 sm:px-8 lg:px-12">
      {/* ---- Masthead ---- */}
      <header className="pt-16 sm:pt-24">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Vaibhavi Srivastava · Est. 2026
        </p>
        <h1 className="mt-6 max-w-[14ch] font-display text-[clamp(3.25rem,9vw,8.5rem)] leading-[0.94] tracking-tight text-foreground">
          Software, systems &amp; the craft of building them
        </h1>

        <div className="mt-10 flex flex-col gap-8 border-t border-border pt-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            Articles about how software gets made — the systems we live
            inside, the tools we trust, and the craft of work that lasts.
            Everything is published on Medium.
          </p>
          <Link
            to="/all"
            className="group inline-flex shrink-0 items-baseline gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-foreground underline-offset-4 hover:underline"
          >
            See articles
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-200 ease-out group-hover:translate-y-0.5"
            >
              ↓
            </span>
          </Link>
        </div>
      </header>

      {/* ---- Hero image: the dominant visual of the page ---- */}
      <section className="mt-12 sm:mt-16">
        <div className="aspect-[16/10] w-full overflow-hidden bg-secondary sm:aspect-[21/9]">
          <img
            src={heroImage}
            alt="Abstract geometric composition in cream, charcoal and slate blue"
            width={1920}
            height={1088}
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-3 flex items-baseline justify-between text-[11px] text-muted-foreground">
          <span>Fig. 01 — Composition in cream, charcoal &amp; slate</span>
          <span className="hidden sm:inline">
            {articles.length} articles · Updated monthly
          </span>
        </div>
      </section>

      {/* ---- Selected writing ---- */}
      <section className="mt-20 sm:mt-28">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground">
            Selected writing
          </h2>
          <Link
            to="/all"
            className="group inline-flex shrink-0 items-baseline gap-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            View articles
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </div>

        <div className="mt-5 h-px w-full bg-border" />

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-4 xl:gap-x-7">
          {featured.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* ---- Statement ---- */}
      <section className="mt-24 border-t border-border pt-16 sm:mt-32">
        <blockquote className="mx-auto max-w-3xl text-center">
            <p className="font-display text-3xl leading-snug tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              “I write to understand what I built — and to remember why it
              mattered.”
            </p>
            <footer className="mt-6 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Vaibhavi Srivastava
            </footer>
        </blockquote>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-px bg-border sm:grid-cols-3">
          {[
            { label: "Articles published", value: String(articles.length) },
            { label: "Topics covered", value: "Software · Systems · Tools" },
            { label: "New articles", value: "Roughly every two weeks" },
          ].map((item) => (
            <div key={item.label} className="bg-background px-5 py-6 text-center">
              <p className="font-display text-2xl text-foreground">{item.value}</p>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-10 flex flex-col gap-3 border-t border-border pb-2 pt-5 text-xs text-muted-foreground sm:flex-row sm:items-baseline sm:justify-between">
        <span>
          © 2026 <span className="text-foreground">uxie7</span>
        </span>
        <div className="flex items-baseline gap-5">
          <a
            href="https://github.com/archangel2006"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            GitHub ↗
          </a>
          <a
            href="https://medium.com/@uxie7"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Medium ↗
          </a>
        </div>
      </footer>
    </main>
  );
}

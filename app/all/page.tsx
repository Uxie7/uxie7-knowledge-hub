import type { Metadata } from "next";

import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "The complete collection of articles on software, systems and the craft of building things. By Vaibhavi Srivastava.",
};

export default function ArticlesPage() {
  return (
    <main className="mx-auto w-full max-w-[1440px] px-5 pb-10 sm:px-8 lg:px-12">
      <header className="grid items-end gap-6 pb-12 pt-16 sm:grid-cols-[minmax(0,1fr)_auto] sm:pb-14 sm:pt-24">
        <div className="min-w-0">
          <h1 className="font-display text-6xl leading-none tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            ARTICLES
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            Every published article, most recent first.
          </p>
        </div>
        <p className="shrink-0 text-xs text-muted-foreground sm:pb-2 sm:text-right">
          {articles.length} articles · published on Medium
        </p>
      </header>

      <div className="h-px w-full bg-border" />

      <section className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:mt-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-x-7">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </section>

      <footer className="mt-10 flex flex-col gap-3 border-t border-border pt-5 text-xs text-muted-foreground sm:flex-row sm:items-baseline sm:justify-between">
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

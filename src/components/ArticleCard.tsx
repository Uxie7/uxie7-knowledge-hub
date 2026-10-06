import type { Article } from "@/data/articles";

/**
 * A single article card in the archive grid.
 *
 * The image IS the card. At rest it is completely unobstructed; on hover (or
 * keyboard focus) a quiet gradient scrim rises from the bottom edge and the
 * title, category · read time and "Read more ↗" fade in over it. The whole
 * card is a link to the article's Medium URL.
 */
export function ArticleCard({ article }: { article: Article }) {
  return (
    <a
      href={article.mediumUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${article.title} — read on Medium`}
      className="group block outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
    >
      <div className="relative aspect-[1/1.12] w-full overflow-hidden bg-secondary">
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-300 ease-out will-change-transform group-hover:scale-[1.025]"
        />
        {/* Scrim + info: invisible at rest, fades in on hover/focus. */}
        <div className="card-scrim absolute inset-0 flex flex-col justify-end p-4 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 group-focus-visible:opacity-100">
          <div className="translate-y-1.5 transition-transform duration-200 ease-out group-hover:translate-y-0 group-focus-visible:translate-y-0">
            <h3 className="font-sans text-[15px] font-semibold leading-snug text-paper">
              {article.title}
            </h3>
            <p className="mt-1.5 text-[11px] text-paper-muted">
              {article.category} · {article.readTime}
            </p>
            <span className="mt-2.5 inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-[0.14em] text-paper">
              Read more
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/data/articles";

describe("ArticleCard", () => {
  it("links an article cover to its Medium article", () => {
    const article = articles[0];
    if (!article) throw new Error("Expected at least one article");

    render(<ArticleCard article={article} />);

    expect(
      screen.getByRole("link", {
        name: `${article.title} — read on Medium`,
      }),
    ).toHaveAttribute("href", article.mediumUrl);
    expect(screen.getByRole("img", { name: article.title })).toBeInTheDocument();
  });
});

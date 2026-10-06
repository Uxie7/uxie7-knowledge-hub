# uxie7

Build a complete responsive personal article showcase website for my writing.

The website is an editorial-style visual archive of my articles. The actual articles will be published on Medium, so this website is only the showcase/index. Clicking an article card should open its corresponding Medium URL.

DESIGN DIRECTION

Clean, minimal, editorial and designer-focused.

Think:

- contemporary digital publication
- curated visual archive
- strong typography
- generous whitespace
- clean grid
- restrained interaction
- sophisticated rather than corporate

Do NOT make this look like:

- a SaaS dashboard
- a blog CMS
- a documentation website
- a generic portfolio template
- rounded-card UI
- excessive glassmorphism
- excessive shadows
- overly complicated animations

Use a warm cream/off-white background with near-black typography and a restrained soft blue accent.

LAYOUT

Create ONE continuous vertically scrollable page.

Do NOT use pagination.
Do NOT create separate archive pages.
Do NOT use "load more".

The page should contain the entire article collection in one continuous grid.

Desktop:
4-column grid.

Tablet:
3-column grid.

Mobile:
1 or 2 columns depending on screen width.

Keep the grid spacious and balanced.

ARTICLE CARDS

Each article should primarily be represented by ONE large visual/image.

Cards should be approximately square but slightly taller than square.

Target aspect ratio:
approximately 1:1.1 or 1:1.15.

Do not make the cards tall portrait cards.

The image should occupy almost the entire card.

The visual is the primary element of every card.

IMPORTANT HOVER BEHAVIOR:

When the user is NOT hovering:

- show the image almost completely unobstructed
- no text overlay
- no large labels
- no permanent metadata over the image

When the user HOVERS:

- introduce a very subtle translucent overlay or slight darkening
- KEEP MOST OF THE IMAGE VISIBLE
- do NOT cover the image with a large opaque panel
- do NOT replace the image
- do NOT blur the entire image
- do NOT create a large solid color block over it

The hover overlay should occupy only the visual area necessary for the text.

Show:

ARTICLE TITLE

CATEGORY · READ TIME

READ MORE ↗

Keep the title concise and elegant.

The image should remain clearly visible behind the information.

The hover transition should be subtle and quick:

- slight image movement or scale is acceptable
- subtle overlay fade
- subtle text fade/slide

Do not use dramatic animations.

CARD CONTENT

For now, populate the site with placeholder articles.

Each article should have:

- id
- title
- category
- short description
- image
- date
- read time
- Medium URL

Use approximately 12–16 placeholder articles so the continuous scroll can be properly evaluated.

Use placeholder images with different visual compositions so the grid does not look repetitive.

Structure the article data separately from the UI components so I can easily replace the placeholder information later.

I should be able to replace:

title
category
image
date
read time
Medium URL

without modifying the card component or page layout.

LINK BEHAVIOR

The entire card should be clickable.

Clicking a card should open its associated Medium article.

For now, use placeholder Medium URLs.

Do not build an internal article-reading page.

HEADER / INTRO

Keep the top of the page minimal.

Something like:

WRITING

A collection of things I've learned,
explored, and tried to explain.

Optionally show the number of articles.

Do not make the introduction excessively large.

The article grid should become the main visual focus fairly quickly.

GRID

Use consistent card dimensions and spacing.

Do not put every card inside an additional bordered container.

The image itself should define the card.

Avoid excessive lines and decorative UI elements.

Use whitespace to create structure instead.

TYPOGRAPHY

Use a refined editorial typography system.

Large display type can be used for the main "WRITING" heading, but keep it controlled.

Article titles should be bold and highly readable.

Metadata should be small and restrained.

Do not overuse uppercase letter spacing.

VISUAL FEEL

The final website should feel like:

a carefully curated independent digital publication / personal knowledge archive.

It should feel visual first, quiet, sophisticated and intentional.

The article images should do most of the visual work.

The hover interaction should simply reveal enough information to make the user want to click.

RESPONSIVENESS

Make the entire experience responsive and preserve the visual hierarchy across desktop, tablet and mobile.

IMPORTANT FINAL CONSTRAINT:

DO NOT COVER THE ARTICLE IMAGE TOO MUCH ON HOVER.

The image must remain the dominant visual element.

The hover state should feel like information appearing ON TOP OF the image, not a card turning into a text panel.

## Development

This is a Next.js App Router project. Use Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

The home page is available at `http://localhost:3000`; the full article
collection is at `/all`. Production builds use `npm run build` and can be
started locally with `npm start`.

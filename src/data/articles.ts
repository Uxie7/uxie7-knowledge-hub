import cover01 from "@/assets/covers/cover-01.jpg";
import cover02 from "@/assets/covers/cover-02.jpg";
import cover03 from "@/assets/covers/cover-03.jpg";
import cover04 from "@/assets/covers/cover-04.jpg";
import cover05 from "@/assets/covers/cover-05.jpg";
import cover06 from "@/assets/covers/cover-06.jpg";
import cover07 from "@/assets/covers/cover-07.jpg";
import cover08 from "@/assets/covers/cover-08.jpg";
import cover09 from "@/assets/covers/cover-09.jpg";
import cover10 from "@/assets/covers/cover-10.jpg";
import cover11 from "@/assets/covers/cover-11.jpg";
import cover12 from "@/assets/covers/cover-12.jpg";
import type { StaticImageData } from "next/image";

export interface Article {
  /** Stable slug-like identifier. */
  id: string;
  /** Article title, shown on hover and used as the image alt text. */
  title: string;
  /** One-word topic label, shown with the read time. */
  category: string;
  /** Short one-line description. Kept in data for future use (e.g. SEO). */
  description: string;
  /** Cover image URL — imported asset or any absolute URL. */
  image: StaticImageData;
  /** Publication date, formatted as a short human-readable string. */
  date: string;
  /** Estimated read time, e.g. "6 min". */
  readTime: string;
  /** Full URL of the published Medium article. */
  mediumUrl: string;
}

/*
 * PLACEHOLDER DATA
 * ----------------
 * Replace title / category / image / date / readTime / mediumUrl freely.
 * Nothing else in the UI depends on these values beyond the interface above.
 */
export const articles: Article[] = [
  {
    id: "the-quiet-discipline-of-side-projects",
    title: "The Quiet Discipline of Side Projects",
    category: "Craft",
    description: "Why unfinished personal work teaches more than shipped client work.",
    image: cover01,
    date: "Sep 28, 2026",
    readTime: "6 min",
    mediumUrl: "https://medium.com/@yourhandle/the-quiet-discipline-of-side-projects",
  },
  {
    id: "design-systems-are-opinions",
    title: "Design Systems Are Opinions",
    category: "Design",
    description: "Every token, component and spacing rule is an argument about taste.",
    image: cover02,
    date: "Sep 14, 2026",
    readTime: "8 min",
    mediumUrl: "https://medium.com/@yourhandle/design-systems-are-opinions",
  },
  {
    id: "notes-on-slowness",
    title: "Notes on Slowness",
    category: "Culture",
    description: "What happens to quality when nobody is watching the clock.",
    image: cover03,
    date: "Sep 2, 2026",
    readTime: "5 min",
    mediumUrl: "https://medium.com/@yourhandle/notes-on-slowness",
  },
  {
    id: "what-good-documentation-actually-costs",
    title: "What Good Documentation Actually Costs",
    category: "Systems",
    description: "An honest accounting of the time writing docs really takes.",
    image: cover04,
    date: "Aug 21, 2026",
    readTime: "9 min",
    mediumUrl: "https://medium.com/@yourhandle/what-good-documentation-actually-costs",
  },
  {
    id: "interfaces-that-trust-the-user",
    title: "Interfaces That Trust the User",
    category: "Interface",
    description: "Confirmation dialogs are often just products of our own insecurity.",
    image: cover05,
    date: "Aug 10, 2026",
    readTime: "7 min",
    mediumUrl: "https://medium.com/@yourhandle/interfaces-that-trust-the-user",
  },
  {
    id: "reading-code-like-a-writer",
    title: "Reading Code Like a Writer",
    category: "Writing",
    description: "Editing prose and refactoring software are the same instinct.",
    image: cover06,
    date: "Jul 30, 2026",
    readTime: "6 min",
    mediumUrl: "https://medium.com/@yourhandle/reading-code-like-a-writer",
  },
  {
    id: "the-grid-is-not-a-cage",
    title: "The Grid Is Not a Cage",
    category: "Design",
    description: "Structure is what makes deliberate rule-breaking legible.",
    image: cover07,
    date: "Jul 18, 2026",
    readTime: "5 min",
    mediumUrl: "https://medium.com/@yourhandle/the-grid-is-not-a-cage",
  },
  {
    id: "on-choosing-boring-technology",
    title: "On Choosing Boring Technology",
    category: "Tools",
    description: "The most exciting stack is the one you never have to think about.",
    image: cover08,
    date: "Jul 6, 2026",
    readTime: "4 min",
    mediumUrl: "https://medium.com/@yourhandle/on-choosing-boring-technology",
  },
  {
    id: "a-vocabulary-for-feedback",
    title: "A Vocabulary for Feedback",
    category: "Process",
    description: "How precise words make critique easier to give and easier to hear.",
    image: cover09,
    date: "Jun 24, 2026",
    readTime: "8 min",
    mediumUrl: "https://medium.com/@yourhandle/a-vocabulary-for-feedback",
  },
  {
    id: "small-screens-small-promises",
    title: "Small Screens, Small Promises",
    category: "Interface",
    description: "Designing for mobile means designing for one intent at a time.",
    image: cover10,
    date: "Jun 12, 2026",
    readTime: "6 min",
    mediumUrl: "https://medium.com/@yourhandle/small-screens-small-promises",
  },
  {
    id: "the-archive-instinct",
    title: "The Archive Instinct",
    category: "Culture",
    description: "Why we save things we will never read again — and why that's fine.",
    image: cover11,
    date: "May 30, 2026",
    readTime: "7 min",
    mediumUrl: "https://medium.com/@yourhandle/the-archive-instinct",
  },
  {
    id: "learning-in-public-slowly",
    title: "Learning in Public, Slowly",
    category: "Writing",
    description: "Publishing before you feel ready is a feature, not a bug.",
    image: cover12,
    date: "May 18, 2026",
    readTime: "5 min",
    mediumUrl: "https://medium.com/@yourhandle/learning-in-public-slowly",
  },
];

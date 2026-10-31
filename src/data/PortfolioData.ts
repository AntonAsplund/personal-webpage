import placeholderImage from '../assets/images/portfolio-placeholder.svg'

/**
 * Interface for the portfolio cards.
 * A card with `href` links to the work, a card with `img` shows an image, otherwise it is text only.
 */

export interface PortfolioEntry {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  img?: string;
  imgAlt?: string;
}

// Placeholder content until the real work has been gathered.
export const PortfolioData: PortfolioEntry[] = [
  {
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Lorem", "Ipsum"],
    href: "https://github.com/AntonAsplund",
  },
  {
    title: "Consectetur adipiscing",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tags: ["Dolor", "Sit", "Amet"],
    img: placeholderImage,
    imgAlt: "Placeholder image",
  },
  {
    title: "Sed do eiusmod",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    tags: ["Tempor", "Incididunt"],
  },
];

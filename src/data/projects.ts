export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  result: string;
  year: string;
  tags: string[];
  visual: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Meridian Retail",
    category: "Retail & E-Commerce",
    description:
      "A complete digital growth strategy combining brand positioning, e-commerce optimization, and customer acquisition.",
    result: "340% Revenue Growth",
    year: "2024",
    tags: ["Marketing", "E-Commerce", "Growth"],
    visual: "meridian",
  },
  {
    id: 2,
    title: "Atlas Capital",
    category: "Finance & Consulting",
    description:
      "Strategic consulting and fundraising support designed to prepare the company for its next stage of growth.",
    result: "$12M Series A",
    year: "2025",
    tags: ["Finance", "Strategy", "Consulting"],
    visual: "atlas",
  },
  {
    id: 3,
    title: "Nova Ventures",
    category: "Technology & Automation",
    description:
      "A market-entry strategy and automation infrastructure built for a technology company expanding into the MENA region.",
    result: "MENA Expansion",
    year: "2025",
    tags: ["Automation", "Technology", "Strategy"],
    visual: "nova",
  },
];
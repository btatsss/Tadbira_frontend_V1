export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  label: string;
  tags: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: "Marketing & Branding",
    label: "GROWTH",
    description:
      "We create clear brand identities and marketing strategies that help your business stand out, reach the right audience, and grow consistently.",
    icon: "↗",
    tags: ["Brand Identity", "Marketing Strategy", "Content"],
  },
  {
    id: 2,
    title: "Software & Automation Services",
    label: "TECHNOLOGY",
    description:
      "We build custom software systems and automate business workflows — from POS and ERP platforms to complete digital operations that save time and reduce manual work.",
    icon: "⚡",
    tags: ["POS Systems", "ERP Platforms", "Automation"],
  },
  {
    id: 3,
    title: "Business & Finance Consulting",
    label: "STRATEGY",
    description:
      "We help businesses structure their finances, plan their growth, and make smarter decisions through practical consulting and clear financial strategies.",
    icon: "◈",
    tags: ["Finance Strategy", "Business Planning", "Advisory"],
  },
];
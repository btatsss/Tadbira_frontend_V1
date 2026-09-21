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
    title: "Marketing",
    label: "GROWTH",
    description:
      "We build focused marketing strategies that connect your business with the right audience and create sustainable growth.",
    icon: "↗",
    tags: ["Strategy", "Branding", "Growth"],
  },
  {
    id: 2,
    title: "Business Consulting",
    label: "STRATEGY",
    description:
      "We help businesses understand challenges, identify opportunities, and build practical strategies for their next stage.",
    icon: "◈",
    tags: ["Strategy", "Operations", "Planning"],
  },
  {
    id: 3,
    title: "Finance Services",
    label: "FINANCE",
    description:
      "We provide structured financial solutions that help businesses understand performance and make clearer decisions.",
    icon: "₣",
    tags: ["Financial Planning", "Analysis", "Advisory"],
  },
  {
    id: 4,
    title: "Automation",
    label: "TECHNOLOGY",
    description:
      "We automate repetitive processes and connect digital workflows to reduce manual work and improve efficiency.",
    icon: "⚡",
    tags: ["Automation", "Workflows", "Integration"],
  },
];
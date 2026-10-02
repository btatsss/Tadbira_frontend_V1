export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  result: string;
  tags: string[];
  visual: string;
  section?: string;
  image?: string;
}

export const projects: Project[] = [
  // ============ SYSTEMS ============
  {
    id: 1,
    title: "ERP Finance",
    category: "Finance & Accounting",
    description:
      "A complete finance system with Accounts Receivable and Accounts Payable dashboards, plus a full tax system supporting both Egypt and Saudi Arabia regulations.",
    result: "Complete Finance Control",
    tags: ["Finance", "AR/AP", "Taxes"],
    visual: "atlas",
    section: "systems",
  },
  {
    id: 2,
    title: "Tadbira POS",
    category: "Retail & Sales",
    description:
      "A complete point-of-sale system for managing sales, inventory, invoices, and cash registers with speed and efficiency. Supports barcode scanning, reports, user permissions, and Excel import/export through a simple, professional interface.",
    result: "Full Sales Control",
    tags: ["POS", "Inventory", "Barcode"],
    visual: "meridian",
    section: "systems",
  },
  {
    id: 3,
    title: "HR Management System",
    category: "HR & Enterprise",
    description:
      "A complete HR platform for managing employees, attendance, payroll, leaves, departments, and positions. Built to simplify daily HR operations and give managers full control from one dashboard.",
    result: "Complete HR Control",
    tags: ["HR", "Payroll", "Attendance"],
    visual: "hr",
    section: "systems",
  },

  // ============ MARKETING ============
  {
    id: 4,
    title: "Hand Modeling Session",
    category: "Photography",
    description:
      "A professional hand modeling session for Rouge Perfumes, featuring creative hand poses showcasing luxury fragrance products through elegant positioning and high-end studio lighting. The session focused on telling the brand story through hands, using luxury props and a refined color palette.",
    result: "Brand Photography",
    tags: ["Photography", "Hand Model", "Product"],
    visual: "photo",
    image: "hand-modeling",
    section: "marketing",
  },
  {
    id: 5,
    title: "Brainoo Cafe",
    category: "Food & Beverage",
    description:
      "A complete product photography session for Brainoo Cafe, capturing specialty coffee drinks, dessert presentation, and the cafe's cozy atmosphere for social media and brand identity. The shoot covered menu highlights, lifestyle shots, and interior mood photography.",
    result: "Cafe Branding",
    tags: ["Photography", "Cafe", "Branding"],
    visual: "photo",
    image: "brainoo-cafe",
    section: "marketing",
  },
  {
    id: 6,
    title: "Alrifai Perfumes",
    category: "Product Photography",
    description:
      "A luxury perfume product photography for Alrifai, featuring high-quality shots of fragrance bottles, raw ingredients, and behind-the-scenes. Designed as an Instagram carousel with full creative direction, covering product details, ingredients, and lifestyle context.",
    result: "Product Campaign",
    tags: ["Photography", "Perfumes", "Design"],
    visual: "photo",
    image: "alrifai-perfumes",
    section: "marketing",
  },
];
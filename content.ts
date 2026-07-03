export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  stack: string[];
  outcome: string;
  year: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "kernl",
    name: "Kernl",
    tagline: "Business OS for early-stage startups",
    description:
      "An in-progress operating layer for founders' messy stack — tasks, docs, people, revenue — shaped into one calm command center.",
    role: "Lead Engineer & Product Designer",
    stack: ["Next.js", "PostgreSQL", "tRPC", "Prisma"],
    outcome: "Currently under active development.",
    year: "In build",
    accent: "#D9481E",
  },
  {
    slug: "mura",
    name: "Mura",
    tagline: "AI-mentor learning & employment platform",
    description:
      "An in-progress mentorship platform that pairs learners with an AI guide and routes them toward real, paid work.",
    role: "Full-Stack Developer & Architect",
    stack: ["Remix", "Node", "OpenAI", "Supabase"],
    outcome: "Currently under active development.",
    year: "In build",
    accent: "#E6612E",
  },
  {
    slug: "ardon",
    name: "ARDON",
    tagline: "Streetwear brand — identity + commerce",
    description:
      "An in-progress streetwear label built end-to-end: visual identity, packaging system, and commerce direction.",
    role: "Brand & Product Designer",
    stack: ["Shopify Hydrogen", "Figma", "Sanity"],
    outcome: "Currently under active development.",
    year: "In build",
    accent: "#B83A16",
  },
];

export const pillars = [
  {
    n: "01",
    title: "Backend Architecture",
    desc: "Systems designed to scale before they have to.",
  },
  {
    n: "02",
    title: "Full-Stack Development",
    desc: "Database to interface — one owner, no handoff loss.",
  },
  {
    n: "03",
    title: "Brand & UI Design",
    desc: "Identity systems that survive product growth.",
  },
  {
    n: "04",
    title: "Product Strategy",
    desc: "Decisions grounded in real shipping constraints.",
  },
];

export const services = [
  {
    name: "MVP Development",
    desc: "A production-grade product shipped in weeks, not quarters — engineered to be your foundation, not a throwaway prototype.",
    scope: "From 4 weeks · End-to-end build",
    points: ["Architecture & data modeling", "Full-stack implementation", "Deploy & launch"],
  },
  {
    name: "Brand + Product System",
    desc: "A cohesive identity and design system — logo, type, color, components — so your product feels intentional from day one.",
    scope: "From 2 weeks · Identity + UI kit",
    points: ["Visual identity & guidelines", "Component & design system", "Marketing site"],
  },
  {
    name: "Backend Architecture & Automation",
    desc: "Backend systems, APIs, and automations built to carry weight — clean schemas, observability, and zero busywork.",
    scope: "From 1 week · Architecture sprint",
    points: ["System design & APIs", "Automations & integrations", "Performance & reliability"],
  },
];

export const process = [
  {
    n: "01",
    title: "Discovery",
    desc: "We define the real problem, the constraints, and what success looks like before a line of code.",
  },
  {
    n: "02",
    title: "Architecture",
    desc: "I design the data model, system boundaries, and tech direction — the decisions that are expensive to undo.",
  },
  {
    n: "03",
    title: "Build",
    desc: "Tight, weekly loops with working software. You see progress, not just invoices.",
  },
  {
    n: "04",
    title: "Launch",
    desc: "Deploy, instrument, and hand off something you actually own and understand.",
  },
];

export const systems = [
  "Kernl",
  "Mura",
  "ARDON",
];

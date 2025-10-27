import divinecare from "/images/divinecare.png";
import mantaHq from "/images/mantaHq.png";
import uiLand from "/images/uiLand.png";
import finance3 from "/images/finance3.png";
import headless from "/images/headless.png";
import invoice from "/images/invoice.png";
import school from "/images/school.png";
import space from "/images/space.png";
import fbnPrep from "/images/fbnPrep.png";
import ecommerce2 from "/images/ecommerce2.png";
import dataanalytics from "/images/dataanalytics.png";

export const data = {
  experience: [
    {
      position: "Product Engineer • MantaHQ (Remote) ↗",
      duration: "2024 - Present",
      url: "https://mantahq.com/",
      about:
        "Developed the frontend for a no-code backend generation platform using React, TypeScript, and SCSS, integrating real-time API feedback and collaborating closely with founders to shape UX and product decisions from prototype to launch.",
      skills: [
        "SCSS",
        "React",
        "TypeScript",
        "Postman",
        "API Integration",
        "React Query",
      ],
    },

    {
      position: "Frontend Developer • UiLand Design (Remote) ↗",
      duration: "2023 - 2024",
      url: "https://uiland.design/",
      about:
        "Built performant UIs with TypeScript, Next.js, and Tailwind CSS, improving efficiency and load speed while collaborating with designers and backend teams to deliver accessible, high-impact user experiences.",
      skills: [
        "TailwindCSS",
        "JavaScript",
        "TypeScript",
        "NextJs",
      ],
    },
  ],

  landingPageProjects: [
    {
      name: "MantaHq",
      description: "A low code platform for creating and managing APIs.",
      imgURL: `${mantaHq}`,
      hostedUrl: "https://www.mantahq.com/",
      featured: true,
      techUsed: ["React", "Typescript", "SCSS", "Zod", "Tanstack Query"],
    },
    {
      name: "UiLand Design",
      description: "A landing page for a brand that assists startups in achieving their aims",
      imgURL: `${uiLand}`,
      hostedURL: "https://uiland.design/",
      featured: true,
      techUsed: ["Next.js", "Typescript", "TailwindCSS", "Tanstack Query"],

    },
    {
      name: "Finance Management System",
      description: "Real-time balance tracking, category-based expense organization, and a clean, data-driven dashboard optimized for fast performance and great mobile usability.",
      imgURL: `${finance3}`,
      repoURL: "",
      hostedURL: "https://chinedu-finance-management-system.vercel.app/",
      featured: false,
      techUsed: ["React", "Tailwindcss", "chart.js"],
    },
    {
      name: "Headless Shopify E-commerce Store",
      description: "Shopify headless e-commerce app using Next.js Server Components, GraphQL APIs, route prefetching, and optimized media for fast, modern shopping UX.",
      imgURL: `${headless}`,
      repoURL: "",
      hostedURL: "https://my-store2-gray.vercel.app/",
      featured: false,
      techUsed: ["Next.js", "Typescript", "TailwindCSS", "Tanstack Query"],
    },
    {
      name: "Advanced Invoicing Application",
      description: "invoicing app with invoice lifecycle tracking, smart filtering, and real-time validation, supported by Context API state management.",
      imgURL: `${invoice}`,
      repoURL: "",
      hostedURL: "https://chinedu-invoice-app.vercel.app/",
      featured: false,
      techUsed: ["React", "TailwindCSS"],
    },
    {
      name: "Porfolio: My E-commerce Page",
      description: "My E-commerce Page",
      imgURL: `${ecommerce2}`,
      repoURL: "",
      hostedURL: "https://nedu-e-commerce-page.vercel.app/",
      featured: false,
      techUsed: ["React", "TailwindCSS"],
    },
  ],

  archiveProjects: [
    {
      name: "Educity International School",
      description: "A school website for Educity",
      techUsed: ["React", "TailwindCSS"],
      imgUrl: `${school}`,
      repoURL: "https://github.com/Nyelus101/my-school",
      hostedURL: "https://my-school-swart.vercel.app/",
      featured: false,
    },
    {
      name: "Space Tourism Website",
      description: "Space Tourism Website",
      techUsed: ["React", "TailwindCSS"],
      imgUrl: `${space}`,
      repoURL: "https://github.com/Nyelus101/space-tourism-frontend-mentor",
      hostedURL: "https://space-tourism-frontend-mentor2.vercel.app/",
      featured: false,
    },
    {
      name: "FBN Employment Guide Prep",
      description: "FBN Employment Guide Prep",
      techUsed: ["React", "TailwindCSS"],
      imgUrl: `${fbnPrep}`,
      repoURL: "https://github.com/Nyelus101/FBN-Employment-guide-prep",
      hostedURL: "https://fbn-employment-guide-prep.vercel.app/",
      featured: false,
    },
    {
      name: "Data Analytics Landing Page",
      description: "Data Analytics Landing Page",
      techUsed: ["React", "TailwindCSS"],
      imgUrl: `${dataanalytics}`,
      repoURL: "https://github.com/Nyelus101/gpt3_nedu2",
      hostedURL: "https://gpt3-nedu2.vercel.app/",
      featured: false,
    },
  ],

  skills: [
    "TailwindCSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Shopify - Liquid + Headless",
    "ContentfulCMS",
    "Framer",
    "Git/Github",
    
  ],

  liveProjects: [
    {
      url: "https://www.mantahq.com/",
      title: "MantaHq",
      description: "A low code platform for creating and managing APIs.",
    },
    {
      url: "https://uiland.design/",
      title: "Uiland Design",
      description: "A landing page for a brand that assists startups in achieving their aims.",
    },
  ],
};

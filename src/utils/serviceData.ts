import { Service } from "@/types/types";
import { Code, Globe, Layers, Layout, Palette, Zap } from "lucide-react";

export const services: Service[] = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description:
      "End-to-end web application development with modern technologies, from database to user interface.",
    features: [
      "React, Next.js & TypeScript",
      "Node.js & Express Backend",
      "MongoDB, PostgreSQL & Prisma",
      "RESTful & GraphQL APIs",
    ],
    popular: true,
  },
  {
    icon: Layout,
    title: "Frontend Development",
    description:
      "Beautiful, responsive, and performant user interfaces built with the latest frontend frameworks.",
    features: [
      "React & Next.js Applications",
      "Tailwind CSS & shadcn/ui",
      "Responsive & Mobile-First",
      "Animations & Interactions",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description:
      "Pixel-perfect implementation of designs with attention to detail and user experience best practices.",
    features: [
      "Figma to Code Conversion",
      "Design System Development",
      "Component Libraries",
      "Accessibility (WCAG)",
    ],
  },
  {
    icon: Globe,
    title: "Landing Pages & Websites",
    description:
      "High-converting landing pages and professional websites that make a lasting impression.",
    features: [
      "SEO Optimized Pages",
      "Fast Loading Performance",
      "Contact Forms & Analytics",
      "CMS Integration",
    ],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Speed up your web applications with advanced optimization techniques for better user experience.",
    features: [
      "Core Web Vitals Improvement",
      "Code Splitting & Lazy Loading",
      "Image & Asset Optimization",
      "Caching Strategies",
    ],
  },
  {
    icon: Layers,
    title: "Web App Maintenance",
    description:
      "Ongoing support, updates, and improvements to keep your web applications running smoothly.",
    features: [
      "Bug Fixes & Updates",
      "Feature Enhancements",
      "Security Patches",
      "Performance Monitoring",
    ],
  },
];

import { Service } from "@/types/types";
import {
  Cloud,
  Code,
  Database,
  Palette,
  Search,
  Settings,
  ShoppingCart,
  Smartphone,
} from "lucide-react";

export const services: Service[] = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies.",
    features: [
      "Responsive design for all devices",
      "Modern React/Next.js applications",
      "Progressive Web Apps (PWA)",
      "SEO optimized",
      "Fast loading speeds",
    ],
    popular: true,
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    features: [
      "React Native development",
      "Cross-platform solutions",
      "Native performance",
      "App store deployment",
      "Ongoing maintenance",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love.",
    features: [
      "User research & personas",
      "Wireframing & prototyping",
      "Visual design",
      "Design systems",
      "Usability testing",
    ],
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Robust server-side solutions and API development.",
    features: [
      "RESTful & GraphQL APIs",
      "Database design & optimization",
      "Authentication & security",
      "Third-party integrations",
      "Scalable architecture",
    ],
    popular: true,
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Complete online store setup with payment integration.",
    features: [
      "Custom e-commerce platforms",
      "Payment gateway integration",
      "Inventory management",
      "Shopping cart functionality",
      "Order tracking systems",
    ],
  },
  {
    icon: Search,
    title: "SEO & Marketing",
    description: "Improve your online visibility and reach more customers.",
    features: [
      "Technical SEO optimization",
      "Content strategy",
      "Performance optimization",
      "Analytics setup",
      "Social media integration",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Deploy and manage your applications in the cloud.",
    features: [
      "AWS/Azure/GCP deployment",
      "CI/CD pipeline setup",
      "Server configuration",
      "Database hosting",
      "Monitoring & maintenance",
    ],
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    description: "Ongoing support to keep your projects running smoothly.",
    features: [
      "Bug fixes & updates",
      "Performance monitoring",
      "Security patches",
      "Feature enhancements",
      "24/7 support available",
    ],
  },
];

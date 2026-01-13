import { type LucideIcon, Lightbulb, Code2, Rocket } from "lucide-react";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "We discuss your project goals, requirements, and create a detailed roadmap with clear milestones and deliverables.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Design & Development",
    description:
      "I build your solution using modern tech stack, following best practices with regular updates and feedback cycles.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Testing & Deployment",
    description:
      "Comprehensive testing, optimization, and smooth deployment to production with ongoing support and maintenance.",
    icon: Rocket,
  },
];

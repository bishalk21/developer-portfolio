export interface Technology {
  name: string;
  category: string;
  color?: string;
  icon: string; // Icon from lucide-react or emoji
}

export const iconsData: Technology[] = [
  // Frontend
  {
    name: "HTML5",
    category: "Frontend",
    color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    icon: "Code2",
  },
  {
    name: "CSS3",
    category: "Frontend",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    icon: "Paintbrush",
  },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend",
    color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    icon: "FileJson",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    color: "bg-blue-400/10 text-blue-400 border-blue-400/20",
    icon: "FileCode2",
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    icon: "Layout",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
    icon: "Palette",
  },
  {
    name: "Shadcn/UI",
    category: "Frontend",
    color: "bg-slate-500/10 text-slate-300 border-slate-500/20",
    icon: "Component",
  },

  // JS Frameworks & Libraries
  {
    name: "Vite.js",
    category: "Build Tool",
    color: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    icon: "Zap",
  },
  {
    name: "ReactJS",
    category: "Framework",
    color: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20",
    icon: "Atom",
  },
  {
    name: "Next.js",
    category: "Framework",
    color: "bg-white/10 text-white border-white/20",
    icon: "Triangle",
  },
  {
    name: "Redux",
    category: "State Management",
    color: "bg-purple-600/10 text-purple-400 border-purple-600/20",
    icon: "Database",
  },
  {
    name: "Redux Toolkit",
    category: "State Management",
    color: "bg-purple-600/10 text-purple-400 border-purple-600/20",
    icon: "Boxes",
  },
  {
    name: "React Router",
    category: "Routing",
    color: "bg-red-500/10 text-red-400 border-red-500/20",
    icon: "Route",
  },

  // Backend & APIs
  {
    name: "Node.js",
    category: "Backend",
    color: "bg-green-500/10 text-green-400 border-green-500/20",
    icon: "Server",
  },
  {
    name: "Express.js",
    category: "Backend",
    color: "bg-gray-500/10 text-gray-300 border-gray-500/20",
    icon: "Globe",
  },
  {
    name: ".NET Core",
    category: "Backend",
    color: "bg-blue-600/10 text-blue-400 border-blue-600/20",
    icon: "Network",
  },
  {
    name: "C#",
    category: "Backend",
    color: "bg-green-600/10 text-green-400 border-green-600/20",
    icon: "Code",
  },
  {
    name: "RESTful APIs",
    category: "API",
    color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    icon: "Api",
  },

  // Databases
  {
    name: "MongoDB",
    category: "Database",
    color: "bg-green-600/10 text-green-500 border-green-600/20",
    icon: "Database",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    icon: "DatabaseZap",
  },
  {
    name: "SQL Server",
    category: "Database",
    color: "bg-red-600/10 text-red-400 border-red-600/20",
    icon: "HardDrive",
  },
  {
    name: "Mongoose",
    category: "Database",
    color: "bg-green-700/10 text-green-500 border-green-700/20",
    icon: "Leaf",
  },

  // Authentication
  {
    name: "JWT",
    category: "Auth",
    color: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    icon: "Key",
  },
  {
    name: "Passport.js",
    category: "Auth",
    color: "bg-green-500/10 text-green-400 border-green-500/20",
    icon: "Shield",
  },
  {
    name: "OAuth 2.0",
    category: "Auth",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    icon: "Lock",
  },
  {
    name: "RBAC",
    category: "Auth",
    color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    icon: "UserCheck",
  },

  // Testing
  {
    name: "Jest",
    category: "Testing",
    color: "bg-red-500/10 text-red-400 border-red-500/20",
    icon: "TestTube2",
  },
  {
    name: "React Testing Library",
    category: "Testing",
    color: "bg-red-400/10 text-red-300 border-red-400/20",
    icon: "FlaskConical",
  },
  {
    name: "Playwright",
    category: "Testing",
    color: "bg-green-500/10 text-green-400 border-green-500/20",
    icon: "Play",
  },
  {
    name: "Babel.js",
    category: "Testing",
    color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    icon: "Repeat",
  },

  // DevOps & Tools
  {
    name: "Git",
    category: "DevOps",
    color: "bg-orange-600/10 text-orange-400 border-orange-600/20",
    icon: "GitBranch",
  },
  {
    name: "GitHub",
    category: "DevOps",
    color: "bg-gray-600/10 text-gray-300 border-gray-600/20",
    icon: "Github",
  },
  {
    name: "Docker",
    category: "DevOps",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    icon: "Container",
  },
  {
    name: "CI/CD",
    category: "DevOps",
    color: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    icon: "GitCommit",
  },
  {
    name: "NPM",
    category: "Package Manager",
    color: "bg-red-600/10 text-red-400 border-red-600/20",
    icon: "Package",
  },
  {
    name: "Webpack",
    category: "Build Tool",
    color: "bg-blue-400/10 text-blue-300 border-blue-400/20",
    icon: "Box",
  },
  {
    name: "Parcel",
    category: "Build Tool",
    color: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    icon: "PackageOpen",
  },

  // Cloud & Serverless
  {
    name: "AWS",
    category: "Cloud",
    color: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    icon: "Cloud",
  },
  {
    name: "AWS Lambda",
    category: "Cloud",
    color: "bg-orange-600/10 text-orange-400 border-orange-600/20",
    icon: "Blocks",
  },
  {
    name: "AWS S3",
    category: "Cloud",
    color: "bg-orange-700/10 text-orange-500 border-orange-700/20",
    icon: "Folder",
  },
  {
    name: "API Gateway",
    category: "Cloud",
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    icon: "Network",
  },
  {
    name: "Amazon Cognito",
    category: "Cloud",
    color: "bg-red-500/10 text-red-400 border-red-500/20",
    icon: "Users",
  },
  {
    name: "MS Azure",
    category: "Cloud",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    icon: "CloudCog",
  },
  {
    name: "Heroku",
    category: "Cloud",
    color: "bg-purple-600/10 text-purple-400 border-purple-600/20",
    icon: "Rocket",
  },
  {
    name: "Vercel",
    category: "Cloud",
    color: "bg-white/10 text-white border-white/20",
    icon: "Zap",
  },

  // Performance & Optimization
  {
    name: "Redis Caching",
    category: "Performance",
    color: "bg-red-600/10 text-red-400 border-red-600/20",
    icon: "Gauge",
  },
  {
    name: "Code Splitting",
    category: "Performance",
    color: "bg-green-500/10 text-green-400 border-green-500/20",
    icon: "Split",
  },
  {
    name: "Lazy Loading",
    category: "Performance",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    icon: "Loader2",
  },

  // Project Management
  {
    name: "JIRA",
    category: "Project Mgmt",
    color: "bg-blue-600/10 text-blue-400 border-blue-600/20",
    icon: "Trello",
  },
  {
    name: "Agile/Scrum",
    category: "Project Mgmt",
    color: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    icon: "Users2",
  },
  {
    name: "ServiceNow",
    category: "Project Mgmt",
    color: "bg-green-600/10 text-green-400 border-green-600/20",
    icon: "Workflow",
  },

  // Design & Other Tools
  {
    name: "Figma",
    category: "Design",
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    icon: "Figma",
  },
  {
    name: "VS Code",
    category: "Tools",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    icon: "Code2",
  },

  // Networking & Systems
  {
    name: "TCP/IP",
    category: "Networking",
    color: "bg-slate-500/10 text-slate-300 border-slate-500/20",
    icon: "Cable",
  },
  {
    name: "DNS/DHCP",
    category: "Networking",
    color: "bg-slate-600/10 text-slate-400 border-slate-600/20",
    icon: "Globe2",
  },
  {
    name: "VPN",
    category: "Networking",
    color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    icon: "ShieldCheck",
  },

  // Messaging & Monitoring
  {
    name: "Kafka",
    category: "Messaging",
    color: "bg-gray-600/10 text-gray-300 border-gray-600/20",
    icon: "MessageSquare",
  },
  {
    name: "Splunk",
    category: "Monitoring",
    color: "bg-green-500/10 text-green-400 border-green-500/20",
    icon: "Activity",
  },
  {
    name: "VMware",
    category: "Virtualization",
    color: "bg-blue-600/10 text-blue-400 border-blue-600/20",
    icon: "Layers",
  },
];

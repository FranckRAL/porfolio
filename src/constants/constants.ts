
import {          
  Database,     
  Code2,
  LayoutDashboard,
  Terminal, 
  Workflow, 
  Wrench, 
  Linkedin, 
  Facebook, 
  Twitter, 
  MessageCircle, 
  Github,
  Layout, 
  Smartphone,
  ShieldCheck     
} from "lucide-react";
import { SkillCategory, Service } from "@/types/types";

export const SERVICES: Service[] = [
  {
    id: 'web-fullstack',
    icon: Code2,
    title: {
      fr: "Développement Fullstack",
      en: "Fullstack Development"
    },
    description: {
      fr: "Création d'applications web performantes et scalables, du design de la base de données PostgreSQL jusqu'à l'interface Next.js.",
      en: "Building high-performance, scalable web applications, from PostgreSQL database design to Next.js interfaces."
    },
    color: "#0070f3"
  },
  {
    id: 'ui-ux',
    icon: Layout,
    title: {
      fr: "Design UI/UX",
      en: "UI/UX Design"
    },
    description: {
      fr: "Conception d'interfaces immersives et intuitives. Focus sur l'expérience utilisateur et l'esthétique moderne (Thème Abyss).",
      en: "Crafting immersive and intuitive interfaces. Focused on user experience and modern aesthetics (Abyss Theme)."
    },
    color: "#7928ca"
  },
  {
    id: 'mobile-app',
    icon: Smartphone,
    title: {
      fr: "Applications Mobiles",
      en: "Mobile Apps"
    },
    description: {
      fr: "Développement d'applications mobiles cross-platform fluides et réactives pour iOS et Android.",
      en: "Developing smooth and responsive cross-platform mobile applications for both iOS and Android."
    },
    color: "#ff0080"
  },
  {
    id: 'maintenance',
    icon: ShieldCheck,
    title: {
      fr: "Maintenance & Optimisation",
      en: "App Maintenance"
    },
    description: {
      fr: "Audit, correction de bugs et amélioration continue de vos applications pour garantir sécurité et pérennité.",
      en: "Auditing, bug fixing, and continuous improvement of your applications to ensure security and longevity."
    },
    color: "#50e3c2"
  }
];

export const NAV_LINKS = [
  {
        'id': 'home',
        'path': '#hero'
    },
    {
        'id': 'about',
        'path': '#about'
    },
    {
        'id': 'services',
        'path': '#services'
    },
    {
        'id': 'projects',
        'path': '#projects'
    },
    {
        'id': 'skills',
        'path': '#skills'
    },
    {
        'id': 'contact',
        'path': '#contact'
    },
]

export const CATEGORIES = ["Web App", "Mobile App", "Desktop App", "Other"];

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    titleKey: "categories.programming",
    icon: Code2,
    skills: [
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "PHP", level: 80 },
    ]
  },
  {
    id: "frontend",
    titleKey: "categories.frontend",
    icon: LayoutDashboard,
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 70 },
    ]
  },
  {
    id: "backend",
    titleKey: "categories.backend",
    icon: Database,
    skills: [
      { name: "Node.js & Express", level: 88 },
      { name: "Django", level: 85 },
      { name: "REST APIs", level: 95 },
      { name: "PostgreSQL", level: 80 },
    ]
  },
  {
    id: "tools",
    titleKey: "categories.tools",
    icon: Terminal,
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "Shell Scripting", level: 85 },
      { name: "PowerShell", level: 75 },
    ]
  },
  {
    id: "management",
    titleKey: "categories.management",
    icon: Workflow,
    skills: [
      { nameKey: "skills.agile", level: 85 },
      { nameKey: "skills.softwareDesign", level: 80 },
      { nameKey: "skills.technicalWriting", level: 75 },
    ]
  },
  {
    id: "quality",
    titleKey: "categories.quality",
    icon: Wrench,
    skills: [
      { nameKey: "skills.codeReview", level: 90 },
      { nameKey: "skills.unitTesting", level: 75 },
      { nameKey: "skills.teamwork", level: 95 },
      { nameKey: "skills.communication", level: 90 },
    ]
  }
];

// export const skillCategories: SkillCategory[] = [
//   {
//     title: "Programming Languages",
//     icon: Code2,
//     skills: [
//       { name: "TypeScript", level: 85 },
//       { name: "JavaScript", level: 90 },
//       { name: "Python", level: 85 },
//       { name: "PHP", level: 80 },
//     ]
//   },
//   {
//     title: "Frontend Excellence",
//     icon: LayoutDashboard,
//     skills: [
//       { name: "React.js", level: 90 },
//       { name: "Next.js", level: 85 },
//       { name: "Tailwind CSS", level: 95 },
//       { name: "Framer Motion", level: 70 },
//     ]
//   },
//   {
//     title: "Backend & Systems",
//     icon: Database,
//     skills: [
//       { name: "Node.js", level: 88 },
//       { name: "Django", level: 82 },
//       { name: "PostgreSQL", level: 80 },
//       { name: "REST APIs", level: 95 },
//     ]
//   },
//   {
//     title: "Tools & DevOps",
//     icon: Terminal,
//     skills: [
//       { name: "Git & GitHub", level: 90 },
//       { name: "Docker", level: 70 },
//       { name: "Shell Scripting", level: 85 },
//       { name: "PowerShell", level: 75 },
//     ]
//   },
//   {
//     title: "Project Management",
//     icon: Workflow,
//     skills: [
//       { name: "Agile / Scrum", level: 85 },
//       { name: "Software Design", level: 80 },
//       { name: "Technical Writing", level: 75 },
//     ]
//   },
//   {
//     title: "Quality & Soft Skills",
//     icon: Wrench,
//     skills: [
//       { name: "Code Review", level: 90 },
//       { name: "Unit Testing", level: 75 },
//       { name: "Teamwork", level: 95 },
//       { name: "Communication", level: 90 },
//     ]
//   }
// ];

 export const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/your-profile" },
    { name: "GitHub", icon: Github, href: "https://github.com/your-username" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/your-profile" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/your-handle" },
    { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/your-number" },
  ];
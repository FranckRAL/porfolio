
import { 
  Search,       
  Palette,      
  Zap,          
  Database,     
  Code2,        
  Rocket,
  LayoutDashboard,
  Terminal, 
  Workflow, 
  Wrench, 
  Linkedin, 
  Facebook, 
  Twitter, 
  MessageCircle, 
  Github      
} from "lucide-react";
import { SkillCategory } from "@/types/types";
import { TempService } from "@/types/types";
import { Project } from "@/types/types";

export const services: TempService[] = [
  {
    title: "Dynamic Web Applications",
    description: "Building interactive, fast, and scalable websites using modern technologies that provide a seamless user experience.",
    icon: Zap,
  },
  {
    title: "Backend Engineering",
    description: "Developing robust server-side architectures, API integrations, and secure database management to power your business logic.",
    icon: Database,
  },
  {
    title: "Product from Scratch",
    description: "Transforming your raw ideas into a fully functional digital product, handling everything from technical design to final execution.",
    icon: Code2,
  },
  {
    title: "Experience Design (UI/UX)",
    description: "Modernizing existing interfaces and creating intuitive designs that improve user engagement and strengthen your brand identity.",
    icon: Palette,
  },
  {
    title: "SEO & Performance",
    description: "Optimizing your digital presence to rank higher on search engines and ensuring lightning-fast loading speeds for your users.",
    icon: Search,
  },
  {
    title: "Deployment & Scaling",
    description: "Managing the lifecycle of your application, from secure hosting setups to scaling infrastructure as your traffic grows.",
    icon: Rocket,
  }
];

export const navLinks = [
  {
        'label': 'Home',
        'path': '#hero'
    },
    {
        'label': 'About',
        'path': '#about'
    },
    {
        'label': 'Services',
        'path': '#services'
    },
    {
        'label': 'Projects',
        'path': '#projects'
    },
    {
        'label': 'Skills',
        'path': '#skills'
    },
    {
        'label': 'Contact',
        'path': '#contact'
    },
]


export const projects: Project[] = [
  {
    id: "1",
    title: "Abyss E-Commerce",
    description: "A high-performance online store for deep-sea diving gear.",
    longDescription: "A full-scale e-commerce platform built to handle high traffic. It features a custom-built cart system, real-time inventory tracking, and a sleek dark-themed UI that matches the brand's professional identity.",
    thumbnail: "https://picsum.photos/400/500?random=2",
    category: "Web App",
    tech: ["Next.js", "Stripe", "Tailwind CSS", "PostgreSQL"],
    link: "https://demo.example.com",
    github: "https://github.com/franck/abyss-shop",
    features: ["Server-side rendering", "Secure payments", "Admin dashboard", "SEO Optimized"],
  },
  {
    id: "2",
    title: "Nova Mobile Wallet",
    description: "Secure cryptocurrency wallet with real-time tracking.",
    longDescription: "A mobile-first crypto wallet focusing on security and ease of use. Integrated with multiple blockchains to provide users with a unified view of their digital assets.",
    thumbnail: "https://picsum.photos/400/500?random=3",
    category: "Mobile App",
    tech: ["React Native", "Firebase", "Web3.js"],
    link: "#",
    github: "https://github.com/franck/nova-wallet",
    features: ["Biometric login", "Multi-chain support", "Live price alerts"],
  },
  {
    id: "3",
    title: "CloudSync Desktop",
    description: "Cross-platform file synchronization tool for teams.",
    longDescription: "A desktop application that allows seamless file sharing and synchronization across different operating systems, featuring end-to-end encryption.",
    thumbnail: "https://picsum.photos/400/500?random=4",
    category: "Desktop App",
    tech: ["Electron", "Node.js", "Rust"],
    link: "#",
    github: "https://github.com/franck/cloudsync",
    features: ["Background syncing", "Encrypted storage", "Low CPU usage"],
  },
  {
    id: "4",
    title: "Oceanic UI Kit",
    description: "A comprehensive design system for maritime applications.",
    longDescription: "A complete UI/UX overhaul for an oceanographic research firm. This project involved creating a custom design system and over 50+ reusable components.",
    thumbnail: "https://picsum.photos/400/500?random=5", 
    category: "UI/UX",
    tech: ["Figma", "Adobe XD", "Storybook"],
    link: "#",
    features: ["Design tokens", "Dark mode support", "Accessibility compliant"],
  },
  {
    id: "5",
    title: "Lumina Dashboard",
    description: "Real-time analytics dashboard for SaaS platforms.",
    longDescription: "A complex data visualization project that transforms raw server metrics into beautiful, interactive charts and actionable insights.",
    thumbnail: "https://picsum.photos/400/500?random=6",
    category: "Web App",
    tech: ["Next.js", "Chart.js", "Django API"],
    link: "https://lumina.example.com",
    github: "https://github.com/franck/lumina-viz",
    features: ["Real-time sockets", "Interactive charts", "CSV Exporting"],
  },
  {
    id: "6",
    title: "Pulse Fitness",
    description: "Workout tracking app with social features.",
    longDescription: "A mobile application designed to help fitness enthusiasts track their progress and share routines within a community.",
    thumbnail: "https://picsum.photos/400/500?random=7",
    category: "Mobile App",
    tech: ["Flutter", "GraphQL", "Supabase"],
    link: "#",
    github: "https://github.com/franck/pulse-fit",
    features: ["Custom routine builder", "Community feed", "Progress tracking"],
  },
];


export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "TypeScript", level: 92 },
      { name: "JavaScript", level: 95 },
      { name: "Python", level: 85 },
      { name: "PHP", level: 75 },
    ]
  },
  {
    title: "Frontend Excellence",
    icon: LayoutDashboard,
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Tailwind CSS", level: 98 },
      { name: "Framer Motion", level: 80 },
    ]
  },
  {
    title: "Backend & Systems",
    icon: Database,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Django", level: 82 },
      { name: "PostgreSQL", level: 80 },
      { name: "REST APIs", level: 95 },
    ]
  },
  {
    title: "Tools & DevOps",
    icon: Terminal,
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "Vercel / Netlify", level: 85 },
      { name: "Linux Arch", level: 75 },
    ]
  },
  {
    title: "Project Management",
    icon: Workflow,
    skills: [
      { name: "Agile / Scrum", level: 85 },
      { name: "Software Design", level: 80 },
      { name: "Technical Writing", level: 75 },
    ]
  },
  {
    title: "Quality & Soft Skills",
    icon: Wrench,
    skills: [
      { name: "Code Review", level: 90 },
      { name: "Unit Testing", level: 75 },
      { name: "Teamwork", level: 95 },
      { name: "Communication", level: 90 },
    ]
  }
];

 export const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/your-profile" },
    { name: "GitHub", icon: Github, href: "https://github.com/your-username" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/your-profile" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/your-handle" },
    { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/your-number" },
  ];
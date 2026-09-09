import {
  Globe2,
  CodeXml,
  Database,
  Cloud,
  Smartphone,
  Apple,
  Wrench,
  Terminal,
  Layout,
  ShieldCheck,
  Rocket,
  Users,
  BookOpen,
  Home,
  Mail,
  Briefcase,
  Toolbox,
  Book,
} from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SkillCategory, Service, SkillCategory2, SoftSkill } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "web-fullstack",
    icon: CodeXml,
    title: {
      fr: "Développement Fullstack",
      en: "Fullstack Development",
    },
    description: {
      fr: "Je transforme vos idées en applications web rapides, évolutives et sécurisées, de la conception au déploiement.",
      en: "I turn your ideas into fast, scalable, and secure web applications, from design to deployment.",
    },
    color: "#0070f3",
  },
  {
    id: "ui-ux",
    icon: Layout,
    title: {
      fr: "Design UI/UX",
      en: "UI/UX Design",
    },
    description: {
      fr: "Conception d'interfaces immersives et intuitives. Focus sur l'expérience utilisateur et l'esthétique moderne",
      en: "Crafting immersive and intuitive interfaces. Focused on user experience and modern aesthetics",
    },
    color: "#7928ca",
  },
  {
    id: "mobile-app",
    icon: Smartphone,
    title: {
      fr: "Applications Mobiles",
      en: "Mobile Apps",
    },
    description: {
      fr: "Développement d'applications mobiles cross-platform fluides et réactives pour iOS et Android.",
      en: "Developing smooth and responsive cross-platform mobile applications for both iOS and Android.",
    },
    color: "#ff0080",
  },
  {
    id: "maintenance",
    icon: ShieldCheck,
    title: {
      fr: "Maintenance & Optimisation",
      en: "App Maintenance",
    },
    description: {
      fr: "Audit, correction de bugs et amélioration continue de vos applications pour garantir sécurité et pérennité.",
      en: "Auditing, bug fixing, and continuous improvement of your applications to ensure security and longevity.",
    },
    color: "#50e3c2",
  },
];

export const NAV_LINKS = [
  {
    id: "home",
    path: "/",
    Icon: Home,
  },

  {
    id: "services",
    path: "/services",
    Icon: Toolbox,
  },
  {
    id: "projects",
    path: "/projects",
    Icon: Briefcase,
  },
  {
    id: "skills",
    path: "/skills",
    Icon: CodeXml,
  },
  {
    id: "contact",
    path: "/contact",
    Icon: Mail,
  },
];

export const CATEGORIES = ["Web", "Mobile", "Desktop", "Other"];


export const SKILLS: SkillCategory[] = [
  // ─────────────────────────────────────
  // DÉVELOPPEMENT WEB
  // ─────────────────────────────────────

  {
    id: "frontend",
    category: "web",
    Icon: Globe2,
    skills: [
      { name: "HTML5" },
      { name: "CSS3 / SCSS" },
      { name: "JavaScript (ES6+)" },
      { name: "TypeScript" },
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
  },

  {
    id: "backend",
    category: "web",
    Icon: CodeXml,
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "NestJS" },
      { name: "PHP" },
      { name: "Laravel" },
      { name: "RESTful API" },
    ],
  },

  {
    id: "databases",
    category: "web",
    Icon: Database,
    skills: [
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "SQLite" },
      { name: "Prisma ORM" },
    ],
  },

  {
    id: "devops",
    category: "web",
    Icon: Cloud,
    skills: [
      { name: "Git / GitHub" },
      { name: "Docker" },
      { name: "Vercel" },
      { name: "CI / CD" },
      { name: "Postman" },
    ],
  },

  // ─────────────────────────────────────
  // DÉVELOPPEMENT MOBILE
  // ─────────────────────────────────────

  {
    id: "android",
    category: "mobile",
    Icon: Smartphone,
    skills: [
      { name: "Kotlin" },
      { name: "Jetpack Compose" },
      { name: "MVVM / Clean Architecture" },
      { name: "Coroutines / Flow" },
    ],
  },

  {
    id: "Cross-platform",
    category: "mobile",
    Icon: Apple,
    skills: [
      { name: "Flutter" },
      { name: "React Native" },
      { name: "Xamarin" },
      { name: "Ionic" },
    ],
  },

  {
    id: "mobile-tools",
    category: "mobile",
    Icon: Wrench,
    skills: [
      { name: "Android Studio" },
      { name: "Xcode" },
      { name: "Firebase" },
      { name: "REST API" },
    ],
  },


];

export const METHODOLOGIES: string[] = [  "Agile/Scrum", "Kanban", "TDD", "Clean Code", ]

export const OTHER_SKILLS: string[] = [
  "ui_ux",
  "responsive",
  "seo",
  "testing",
  "code_review"
]

export const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/franck-laurent-365a72279",
  },
  { name: "GitHub", icon: FaGithub, href: "https://github.com/FranckRal" },
  {
    name: "Facebook",
    icon: FaFacebook,
    href: "https://www.facebook.com/franck.laurent.9216",
  },
  {
    name: "WhatsApp",
    icon: IoLogoWhatsapp,
    href: "https://wa.me/+261339325613",
  },
];



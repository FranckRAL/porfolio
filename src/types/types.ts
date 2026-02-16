import { LucideIcon } from "lucide-react";
import { Project, Testimonial } from '@/generated/prisma/client';


export type ProjectCategory = "Web App" | "Mobile App" | "Desktop App" | "UI/UX";

export interface ProjectFromDB {
  id: string;
  year: string;
  category: string;
  role: string;
  imageUrl: string;
  stack: { slug: string; logoUrl: string }[]; // Adapté à ton JSON
  liveUrl?: string | null;
  githubUrl?: string | null;
  title: Record<string, string>; // { fr: "...", en: "..." }
  description: Record<string, string>;
  features: Record<string, string[]>;
  challenges?: Record<string, string> | null;
}

export interface Skill {
  name?: string;
  nameKey?: string; // Pour les termes traduisibles dans le JSON
  level: number;
}

export interface SkillCategory {
  id: string;
  titleKey: string;
  icon: LucideIcon;
  skills: Skill[];
}

// export interface SkillItem {
//   name: string;
//   level: number;
// }

// export interface SkillCategory {
//   title: string;
//   icon: LucideIcon;
//   skills: SkillItem[];
// }

export type SerializedProject = Omit<Project, "createdAt" | "updatedAt"> & {
  createdAt: string;
  updatedAt: string;
};

export type Translation = {
  fr: string;
  en: string;
};

export interface Service {
  id: string;
  icon: LucideIcon; 
  title: Translation;
  description: Translation;
  color?: string;
  technos?: string[];
}

export type SerializedTestimonial = Omit<Testimonial, "createdAt" | "updatedAt"> & {
  createdAt: string;
  updatedAt: string;
};
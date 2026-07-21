import { LucideIcon } from "lucide-react";
import { Project, Testimonial } from './../../generated/prisma/client';


export type ProjectCategory = "Web App" | "Mobile App" | "Desktop App" | "UI/UX";

export interface ProjectFromDB {
  id: string;
  year: string;
  category: string;
  role: string;
  imageUrl: string;
  stack: { slug: string; logoUrl: string }[]; 
  liveUrl?: string | null;
  githubUrl?: string | null;
  title: Record<string, string>; 
  description: Record<string, string>;
  features: Record<string, string[]>;
  challenges?: Record<string, string> | null;
}

export interface ProjectView {
  id: string;
  year: string;
  category: string;
  role: string;
  imageUrl: string;
  stack: { slug: string; logoUrl: string }[];
  liveUrl?: string | null;
  githubUrl?: string | null;
  title: Record<string, string>;
  description: Record<string, string>;
  features: Record<string, string[]>;
  challenges?: Record<string, string> | null;
  createdAt: string;
  updatedAt: string;
}

export interface Skill {
  name?: string;
  nameKey?: string; 
  level: number;
}

export interface SkillCategory {
  id: string;
  titleKey: string;
  icon: LucideIcon;
  skills: Skill[];
}

// fixed categoryIcon type to LucideIcon for consistency with Service interface
export interface Skill2 {
  skillName: string;
  icon: string;
}

export interface SkillCategory2{
  id: String;
  categoryName: string;
  CategoryIcon: LucideIcon;
  skills: Skill2[];
}

export interface SoftSkill {
  name: string;
  Icon: LucideIcon;
}

// -----------------------------------------

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
  content: { fr: string; en: string };
  createdAt: string;
  updatedAt: string;
};
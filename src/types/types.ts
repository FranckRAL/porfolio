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
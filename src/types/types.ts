import { LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon; 
}

export type ProjectCategory = "Web App" | "Mobile App" | "Desktop App" | "UI/UX";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  category: ProjectCategory;
  tech: string[];
  link?: string;
  github?: string;
  features: string[];
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: SkillItem[];
}
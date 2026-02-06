import { LucideIcon } from "lucide-react";
import { Project, Service, Testimonial } from '@/generated/prisma/client';


export type ProjectCategory = "Web App" | "Mobile App" | "Desktop App" | "UI/UX";


export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: SkillItem[];
}

export type SerializedProject = Omit<Project, "createdAt" | "updatedAt"> & {
  createdAt: string;
  updatedAt: string;
};

export type SerializedService = Omit<Service, "createdAt" | "updatedAt"> & {
  createdAt: string;
  updatedAt: string;
};

export type SerializedTestimonial = Omit<Testimonial, "createdAt" | "updatedAt"> & {
  createdAt: string;
  updatedAt: string;
};
"use client";

import React, { useState, useEffect } from "react";
import { X, Upload, Send, Github, Globe, Loader2, Code2, Calendar } from "lucide-react";
import { createProject, updateProject } from "@/actions/project";
import { CldUploadWidget } from 'next-cloudinary';
import { ProjectFromDB as Project } from "@/types/types";
import Image from 'next/image';

export default function ProjectModal({ isOpen, onClose, projectToEdit }: { isOpen: boolean; onClose: () => void; projectToEdit?: Project | null }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState<'fr' | 'en'>('en');
  
  const [formData, setFormData] = useState({
    year: new Date().getFullYear().toString(),
    category: "Fullstack",
    role: "Lead Developer",
    imageUrl: "",
    stackInput: "",
    githubUrl: "",
    liveUrl: "",
    title: { fr: "", en: "" },
    description: { fr: "", en: "" },
    features: { fr: "", en: "" },
    challenges: { fr: "", en: "" }
  });

  useEffect(() => {
    if (isOpen) {
      if (projectToEdit) {
        setFormData({
          year: projectToEdit.year,
          category: projectToEdit.category,
          role: projectToEdit.role,
          imageUrl: projectToEdit.imageUrl,
          stackInput: projectToEdit.stack.map(s => s.slug).join(", "),
          githubUrl: projectToEdit.githubUrl || "",
          liveUrl: projectToEdit.liveUrl || "",
          title: { fr: projectToEdit.title.fr, en: projectToEdit.title.en },
          description: { fr: projectToEdit.description.fr, en: projectToEdit.description.en },
          features: { 
            fr: (projectToEdit.features.fr as string[]).join(", "), 
            en: (projectToEdit.features.en as string[]).join(", ") 
          },
          challenges: { 
            fr: projectToEdit.challenges?.fr || "", 
            en: projectToEdit.challenges?.en || "" 
          }
        });
      } else {
        setFormData({
          year: new Date().getFullYear().toString(),
          category: "Fullstack", role: "Lead Developer", imageUrl: "", stackInput: "", githubUrl: "", liveUrl: "",
          title: { fr: "", en: "" }, description: { fr: "", en: "" }, features: { fr: "", en: "" }, challenges: { fr: "", en: "" }
        });
      }
    }
  }, [isOpen, projectToEdit]);

  const handleI18nChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: { ...prev[field as keyof typeof prev], [activeTab]: value }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const stack = formData.stackInput.split(",").map(s => ({
      slug: s.trim(),
      logoUrl: `/icons/${s.trim().toLowerCase()}.svg`
    })).filter(s => s.slug !== "");

    const finalData = {
      ...formData,
      stack,
      features: {
        fr: formData.features.fr.split(",").map(f => f.trim()).filter(f => f !== ""),
        en: formData.features.en.split(",").map(f => f.trim()).filter(f => f !== ""),
      }
    };

    const result = projectToEdit 
      ? await updateProject(projectToEdit.id, finalData)
      : await createProject(finalData as any);

    if (result.success) onClose();
    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-abyss-950/95 backdrop-blur-xl" onClick={onClose} />
      
      <div className="relative w-full max-w-4xl bg-bg-card border border-primary/20 rounded-[2.5rem] shadow-2xl flex flex-col max-h-[95vh] overflow-hidden">
        
        {/* HEADER */}
        <div className="p-6 border-b border-primary/10 flex justify-between items-center bg-abyss-900/50">
          <div className="flex items-center gap-6">
            <h2 className="font-title text-xl font-bold text-text-main">Vessel Deployment</h2>
            <div className="flex bg-abyss-950 p-1 rounded-xl border border-primary/10">
              {(['en', 'fr'] as const).map(lang => (
                <button 
                  key={lang} type="button" onClick={() => setActiveTab(lang)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === lang ? 'bg-primary text-abyss-900 shadow-lg' : 'text-text-muted hover:text-text-main'}`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          <button onClick={onClose} className="text-text-muted hover:text-primary transition-colors"><X size={24} /></button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 overflow-y-auto space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* LEFT: Core Data */}
            <div className="lg:col-span-8 space-y-6">
              <div className="relative">
                <input 
                  type="text" required value={formData.title[activeTab]} 
                  onChange={(e) => handleI18nChange('title', e.target.value)}
                  placeholder={`Project Name (${activeTab.toUpperCase()})`}
                  className="w-full bg-abyss-900 border border-primary/10 rounded-xl p-4 text-text-main focus:border-primary outline-none text-xl font-bold"
                />
              </div>

              <textarea 
                required value={formData.description[activeTab]} 
                onChange={(e) => handleI18nChange('description', e.target.value)}
                placeholder={`Detailed description in ${activeTab === 'fr' ? 'French' : 'English'}...`}
                className="w-full bg-abyss-900 border border-primary/10 rounded-xl p-4 text-text-main h-32 resize-none outline-none focus:border-primary"
              />

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={18} />
                  <input type="text" value={formData.year} onChange={(e) => setFormData(p => ({...p, year: e.target.value}))} className="w-full bg-abyss-900 border border-primary/10 rounded-xl p-3 pl-12 text-sm outline-none" placeholder="Year" />
                </div>
                <div className="relative">
                  <Code2 className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={18} />
                  <input type="text" value={formData.category} onChange={(e) => setFormData(p => ({...p, category: e.target.value}))} className="w-full bg-abyss-900 border border-primary/10 rounded-xl p-3 pl-12 text-sm outline-none" placeholder="Category" />
                </div>
              </div>
            </div>

            {/* RIGHT: Visual & Links */}
            <div className="lg:col-span-4 space-y-6">
              <CldUploadWidget uploadPreset="portfolio" onSuccess={(res: any) => setFormData(p => ({...p, imageUrl: res.info.secure_url}))}>
                {({ open }) => (
                  <button type="button" onClick={() => open()} className="w-full aspect-video lg:aspect-square border-2 border-dashed border-primary/20 rounded-2xl flex flex-col items-center justify-center hover:border-primary transition-all relative overflow-hidden group">
                    {formData.imageUrl ? (
                      <>
                        <Image src={formData.imageUrl} alt="" fill className="object-cover" />
                        <div className="absolute inset-0 bg-abyss-900/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                          <Upload className="text-primary" />
                        </div>
                      </>
                    ) : (
                      <div className="text-center p-4">
                        <Upload className="mx-auto text-text-muted mb-2" />
                        <span className="text-xs font-bold text-text-muted">Transmit Cover</span>
                      </div>
                    )}
                  </button>
                )}
              </CldUploadWidget>

              <div className="space-y-3">
                <div className="flex items-center gap-2 bg-abyss-900 border border-primary/10 rounded-xl p-3">
                  <Github size={16} className="text-text-muted" />
                  <input type="url" value={formData.githubUrl} onChange={(e) => setFormData(p => ({...p, githubUrl: e.target.value}))} placeholder="Repo URL" className="bg-transparent outline-none text-xs w-full" />
                </div>
                <div className="flex items-center gap-2 bg-abyss-900 border border-primary/10 rounded-xl p-3">
                  <Globe size={16} className="text-text-muted" />
                  <input type="url" value={formData.liveUrl} onChange={(e) => setFormData(p => ({...p, liveUrl: e.target.value}))} placeholder="Live URL" className="bg-transparent outline-none text-xs w-full" />
                </div>
              </div>
            </div>
          </div>

          {/* ADDITIONAL FIELDS */}
          <div className="space-y-4">
             <label className="text-xs font-mono text-primary uppercase tracking-widest">Stack & Features</label>
             <input 
                type="text" value={formData.stackInput} 
                onChange={(e) => setFormData(p => ({...p, stackInput: e.target.value}))}
                placeholder="Stack slugs (e.g: nextjs, tailwind, prisma, framer-motion)"
                className="w-full bg-abyss-900 border border-primary/10 rounded-xl p-4 text-sm outline-none focus:border-primary"
             />
             <textarea 
                value={formData.features[activeTab]} 
                onChange={(e) => handleI18nChange('features', e.target.value)}
                placeholder={`Key features in ${activeTab.toUpperCase()} (comma separated)...`}
                className="w-full bg-abyss-900 border border-primary/10 rounded-xl p-4 text-sm h-20 resize-none outline-none focus:border-primary"
             />
          </div>

          <button 
            type="submit" disabled={isSubmitting}
            className="w-full bg-primary text-abyss-900 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
          >
            {isSubmitting ? <Loader2 className="animate-spin" /> : <Send size={20} />}
            {projectToEdit ? "Confirm Update" : "Deploy to Abyss"}
          </button>
        </form>
      </div>
    </div>
  );
}
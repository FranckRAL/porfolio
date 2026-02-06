"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, Upload, Send, Github, Globe, Star, Code2, CheckCircle, Loader2 } from "lucide-react";
import { createProject, updateProject } from "@/actions/project";
import { CldUploadWidget } from 'next-cloudinary';
import { SerializedProject as Project } from "@/types/types";
import Image from 'next/image';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectToEdit?: Project | null; 
}

export default function ProjectModal({ isOpen, onClose, projectToEdit }: ProjectModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    category: "Web",
    techStack: "", 
    githubUrl: "",
    liveUrl: "",
    isFeatured: false,
  });

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // 1. Initialisation des données (Mode Upsert)
  useEffect(() => {
    if (isOpen) {
      if (projectToEdit) {
        // Mode ÉDITION
        setFormData({
          title: projectToEdit.title,
          description: projectToEdit.description,
          imageUrl: projectToEdit.imageUrl,
          category: projectToEdit.category,
          techStack: projectToEdit.techStack.join(", "), // Array -> String
          githubUrl: projectToEdit.githubUrl || "",
          liveUrl: projectToEdit.liveUrl || "",
          isFeatured: projectToEdit.isFeatured,
        });
      } else {
        // Mode CRÉATION (Reset)
        setFormData({
          title: "",
          description: "",
          imageUrl: "",
          category: "Web",
          techStack: "",
          githubUrl: "",
          liveUrl: "",
          isFeatured: false,
        });
      }
    }
  }, [isOpen, projectToEdit]);

  // Auto-expand textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [formData.description]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const techArray = formData.techStack
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s !== "");

      let result;

      if (projectToEdit) {
        // 💡 UPDATE
        result = await updateProject(projectToEdit.id, {
          ...formData,
          techStack: techArray,
        });
      } else {
        // 💡 CREATE
        result = await createProject({
          ...formData,
          techStack: techArray,
        });
      }

      if (result.success) {
        onClose();
      } else {
        alert("Transmission failed: " + result.error);
      }
    } catch (error) {
      console.error("Critical failure:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-abyss-900/95 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full max-w-3xl bg-bg-card border border-abyss-800 rounded-2xl shadow-2xl flex flex-col max-h-[95vh]">
        
        {/* Header Dynamique */}
        <div className="p-6 border-b border-abyss-800 flex justify-between items-center bg-abyss-900/50">
          <div>
            <h2 className="font-title text-2xl font-bold text-text-main">
              {projectToEdit ? "Project Modification" : "Project Configuration"}
            </h2>
            <p className="text-xs text-text-muted uppercase tracking-tighter">
              {projectToEdit ? `Updating ID: ${projectToEdit.id}` : "Initialize New Abyss Entry"}
            </p>
          </div>
          <button onClick={onClose} className="text-text-muted hover:text-primary transition-colors">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-6">
          
          {/* Featured Toggle */}
          <div className="flex items-center gap-3 p-3 bg-abyss-900/50 rounded-xl border border-abyss-800">
            <input
              type="checkbox"
              name="isFeatured"
              id="isFeatured"
              checked={formData.isFeatured}
              onChange={handleChange}
              className="w-5 h-5 accent-primary cursor-pointer"
            />
            <label htmlFor="isFeatured" className="flex items-center gap-2 cursor-pointer select-none">
              <Star size={16} className={formData.isFeatured ? "text-primary fill-primary" : "text-text-muted"} />
              <span className="text-sm font-medium">Mark as Featured Project</span>
            </label>
          </div>

          {/* Floating Label: Title */}
          <div className="relative group">
            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full bg-abyss-900 border border-abyss-800 rounded-lg p-4 pt-6 text-text-main focus:outline-none focus:border-primary transition-all"
            />
            <label className="absolute left-4 top-4 text-text-muted transition-all pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">
              Project Title
            </label>
          </div>

          {/* Floating Label: Tech Stack */}
          <div className="relative group">
            <Code2 className="absolute right-4 top-5 text-abyss-700" size={20} />
            <input
              type="text"
              name="techStack"
              required
              value={formData.techStack}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full bg-abyss-900 border border-abyss-800 rounded-lg p-4 pt-6 text-text-main focus:outline-none focus:border-primary transition-all"
            />
            <label className="absolute left-4 top-4 text-text-muted transition-all pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">
              Tech Stack (comma separated)
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest ml-1">Domain</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-abyss-900 border border-abyss-800 rounded-lg p-3 text-text-main focus:outline-none focus:border-primary transition-all"
              >
                <option value="Web">Web Development</option>
                <option value="App">Mobile App</option>
                <option value="Cybersecurity">Cybersecurity</option>
              </select>
            </div>

            {/* Cloudinary Upload */}
            <div className="space-y-2">
                <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest ml-1">
                  Visual Asset (Cover)
                </label>
  
                <CldUploadWidget 
                  uploadPreset="portfolio"
                  onSuccess={(result: any) => {
                    if (result.info && typeof result.info !== "string") {
                      setFormData(prev => ({ ...prev, imageUrl: result.info.secure_url }));
                    }
                  }}
                >
                  {({ open }) => (
                    <button
                      type="button"
                      onClick={() => open()}
                      className={`w-full border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center transition-all group ${
                        formData.imageUrl 
                          ? "border-emerald-500/50 bg-emerald-500/5" 
                          : "border-abyss-800 bg-abyss-900/30 hover:border-primary/50"
                      }`}
                    >
                      {formData.imageUrl ? (
                        <div className="flex flex-col items-center gap-2">
                          <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-emerald-500/30">
                            <Image 
                              src={formData.imageUrl} 
                              alt="Preview"
                              width={200}
                              height={200}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <p className="text-emerald-400 text-xs font-bold flex items-center gap-1">
                            <CheckCircle size={14} /> Asset Linked
                          </p>
                        </div>
                      ) : (
                        <>
                          <Upload size={24} className="text-text-muted group-hover:text-primary mb-2" />
                          <p className="text-sm font-medium text-text-main">Transmit Asset</p>
                        </>
                      )}
                    </button>
                  )}
                </CldUploadWidget>
              </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group">
              <Github className="absolute right-4 top-5 text-abyss-700" size={20} />
              <input
                type="url"
                name="githubUrl"
                value={formData.githubUrl}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full bg-abyss-900 border border-abyss-800 rounded-lg p-4 pt-6 text-text-main focus:outline-none focus:border-primary transition-all"
              />
              <label className="absolute left-4 top-4 text-text-muted transition-all pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">
                GitHub Repository
              </label>
            </div>
            <div className="relative group">
              <Globe className="absolute right-4 top-5 text-abyss-700" size={20} />
              <input
                type="url"
                name="liveUrl"
                value={formData.liveUrl}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full bg-abyss-900 border border-abyss-800 rounded-lg p-4 pt-6 text-text-main focus:outline-none focus:border-primary transition-all"
              />
              <label className="absolute left-4 top-4 text-text-muted transition-all pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">
                Live Preview
              </label>
            </div>
          </div>

          <div className="relative">
            <textarea
              ref={textareaRef}
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full bg-abyss-900 border border-abyss-800 rounded-lg p-4 pt-6 text-text-main focus:outline-none focus:border-primary transition-all resize-none overflow-hidden min-h-25"
            />
            <label className="absolute left-4 top-4 text-text-muted transition-all pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">
              Detailed Description
            </label>
          </div>

          <div className="flex gap-4 sticky bottom-0 bg-bg-card pt-4 pb-2">
            <button type="button" onClick={onClose} className="flex-1 py-3 rounded-xl border border-abyss-800 font-semibold hover:bg-abyss-900 transition-all">
              Abort
            </button>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="flex-1 py-3 rounded-xl bg-primary text-abyss-900 font-bold hover:shadow-[0_0_20px_rgba(0,123,255,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
              {projectToEdit ? "Update Vessel" : "Deploy Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
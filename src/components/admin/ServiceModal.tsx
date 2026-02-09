"use client";

import React, { useState, useEffect } from "react";
import { X, Send, Loader2, Info, HelpCircle } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { createService, updateService } from "@/actions/service";
import { SerializedService } from "@/types/types";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceToEdit?: SerializedService | null;
}

export default function ServiceModal({ isOpen, onClose, serviceToEdit }: ServiceModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    icon: "Activity",
  });

  useEffect(() => {
    if (isOpen) {
      if (serviceToEdit) {
        setFormData({
          title: serviceToEdit.title,
          description: serviceToEdit.description,
          icon: serviceToEdit.icon || "Activity",
        });
      } else {
        setFormData({ title: "", description: "", icon: "Activity" });
      }
    }
  }, [isOpen, serviceToEdit]);

  // Dynamically render the icon for preview
  const IconPreview = (LucideIcons as any)[formData.icon] || HelpCircle;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const result = serviceToEdit 
        ? await updateService(serviceToEdit.id, formData)
        : await createService(formData);

      if (result.success) onClose();
      else alert(result.error);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-abyss-900/90 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full max-w-lg bg-bg-card border border-abyss-800 rounded-2xl shadow-2xl flex flex-col">
        <div className="p-6 border-b border-abyss-800 flex justify-between items-center bg-abyss-900/50">
          <h2 className="font-title text-xl font-bold text-text-main">
            {serviceToEdit ? "Modify Service" : "New Service Capability"}
          </h2>
          <button onClick={onClose} className="text-text-muted hover:text-primary"><X size={20} /></button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Icon Selector Preview */}
          <div className="flex items-center gap-4 p-4 bg-abyss-900/50 rounded-xl border border-abyss-800">
            <div className="p-3 bg-primary/10 rounded-lg text-primary">
              <IconPreview size={32} />
            </div>
            <div className="flex-1">
              <label className="text-[10px] font-bold text-text-muted uppercase block mb-1">Lucide Icon Name</label>
              <input
                type="text"
                value={formData.icon}
                onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                placeholder="Ex: Shield, Zap, Code..."
                className="w-full bg-transparent border-none p-0 text-text-main focus:ring-0 placeholder:text-abyss-700"
              />
            </div>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Service Title"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full bg-abyss-900 border border-abyss-800 rounded-lg p-3 text-text-main focus:border-primary outline-none transition-all"
            />
            <textarea
              placeholder="Describe the mission..."
              required
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-abyss-900 border border-abyss-800 rounded-lg p-3 text-text-main focus:border-primary outline-none transition-all resize-none"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 py-3 rounded-lg border border-abyss-800 text-text-muted hover:bg-abyss-900 transition-all">Cancel</button>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="flex-1 py-3 rounded-lg bg-primary text-abyss-900 font-bold hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.4)] transition-all flex items-center justify-center gap-2"
            >
              {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
              {serviceToEdit ? "Update" : "Deploy"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
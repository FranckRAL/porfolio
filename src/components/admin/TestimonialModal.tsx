"use client";

import React, { useState, useEffect } from "react";
import { X, Send, Loader2, Quote } from "lucide-react";
import { createTestimonial, updateTestimonial } from "@/actions/testimonial";
import { SerializedTestimonial } from "@/types/types";

interface TestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  testimonialToEdit?: SerializedTestimonial | null;
}

export default function TestimonialModal({ isOpen, onClose, testimonialToEdit }: TestimonialModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    content: "",
    avatarUrl: "",
  });

  useEffect(() => {
    if (isOpen) {
      if (testimonialToEdit) {
        setFormData({
          name: testimonialToEdit.name,
          role: testimonialToEdit.role,
          content: testimonialToEdit.content,
          avatarUrl: testimonialToEdit.avatarUrl || "",
        });
      } else {
        setFormData({ name: "", role: "", content: "", avatarUrl: "" });
      }
    }
  }, [isOpen, testimonialToEdit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const result = testimonialToEdit 
      ? await updateTestimonial(testimonialToEdit.id, formData)
      : await createTestimonial(formData);

    if (result.success) onClose();
    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-abyss-900/90 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-bg-card border border-abyss-800 rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-6 border-b border-abyss-800 flex justify-between items-center bg-abyss-900/50">
          <h2 className="font-title text-xl font-bold text-text-main flex items-center gap-2">
            <Quote size={20} className="text-primary" /> {testimonialToEdit ? "Edit Echo" : "New Echo"}
          </h2>
          <button onClick={onClose} className="text-text-muted hover:text-primary transition-colors"><X size={20} /></button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <input
            type="text"
            placeholder="Author Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-abyss-900 border border-abyss-800 rounded-lg p-3 text-text-main focus:border-primary outline-none"
          />
          <input
            type="text"
            placeholder="Role (ex: CEO at Atlantis)"
            required
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full bg-abyss-900 border border-abyss-800 rounded-lg p-3 text-text-main focus:border-primary outline-none"
          />
          <textarea
            placeholder="What did they say about your submarine?"
            required
            rows={4}
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            className="w-full bg-abyss-900 border border-abyss-800 rounded-lg p-3 text-text-main focus:border-primary outline-none resize-none"
          />
          
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 py-3 rounded-lg border border-abyss-800 text-text-muted hover:bg-abyss-900">Cancel</button>
            <button type="submit" disabled={isSubmitting} className="flex-1 py-3 rounded-lg bg-primary text-abyss-900 font-bold hover:shadow-lg flex items-center justify-center gap-2">
              {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
              {testimonialToEdit ? "Update" : "Broadcast"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
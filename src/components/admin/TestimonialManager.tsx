"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, Quote, User } from "lucide-react";
import TestimonialModal from "@/components/admin/TestimonialModal";
import { deleteTestimonial } from "@/actions/testimonial";
import { SerializedTestimonial } from "@/types/types";

export default function TestimonialManager({ initialTestimonials }: { initialTestimonials: SerializedTestimonial[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<SerializedTestimonial | null>(null);

  const handleEdit = (t: SerializedTestimonial) => {
    setSelectedTestimonial(t);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-text-main font-title">Surface Echos</h1>
          <p className="text-text-muted text-xs uppercase tracking-widest mt-1">Client Testimonials</p>
        </div>
        <button 
          onClick={() => { setSelectedTestimonial(null); setIsModalOpen(true); }}
          className="bg-primary text-abyss-900 px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all"
        >
          <Plus size={20} /> Add Echo
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {initialTestimonials.map((t) => (
          <div key={t.id} className="bg-bg-card border border-abyss-800 rounded-2xl p-6 relative group">
            <Quote className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors" size={40} />
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-abyss-900 border border-abyss-800 flex items-center justify-center text-primary">
                <User size={24} />
              </div>
              <div>
                <h3 className="text-text-main font-bold">{t.name}</h3>
                <p className="text-xs text-primary/70">{t.role}</p>
              </div>
            </div>

            <p className="text-text-muted text-sm italic leading-relaxed mb-6">
              &quot;{t.content}&quot;
            </p>

            <div className="flex justify-end gap-2 border-t border-abyss-800 pt-4">
              <button onClick={() => handleEdit(t)} className="p-2 text-text-muted hover:text-primary transition-colors">
                <Edit2 size={18} />
              </button>
              <button 
                onClick={async () => { if(confirm("Silence this echo?")) await deleteTestimonial(t.id) }}
                className="p-2 text-text-muted hover:text-red-500 transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <TestimonialModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        testimonialToEdit={selectedTestimonial} 
      />
    </div>
  );
}
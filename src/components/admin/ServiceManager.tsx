"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, HelpCircle } from "lucide-react";
import * as LucideIcons from "lucide-react";
import ServiceModal from "./ServiceModal";
import { deleteService } from "@/actions/service";
import { SerializedService } from "@/types/types";

export default function ServiceManager({ initialServices }: { initialServices: SerializedService[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<SerializedService | null>(null);

  const handleEdit = (service: SerializedService) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-text-main font-title">Service Modules</h1>
          <p className="text-text-muted text-xs uppercase tracking-[0.2em] mt-1">Core Abyss Capabilities</p>
        </div>
        <button 
          onClick={() => { setSelectedService(null); setIsModalOpen(true); }}
          className="bg-primary text-abyss-900 px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all"
        >
          <Plus size={20} /> Initialize Service
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {initialServices.map((service) => {
          const IconComponent = (LucideIcons as any)[service.icon || ""] || HelpCircle;
          
          return (
            <div key={service.id} className="group relative bg-bg-card border border-abyss-800 rounded-2xl p-6 hover:border-primary/50 transition-all shadow-xl">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-abyss-900 rounded-xl text-primary border border-abyss-800 group-hover:border-primary/30 transition-colors">
                  <IconComponent size={28} />
                </div>
                <div className="flex gap-1">
                  <button onClick={() => handleEdit(service)} className="p-2 text-text-muted hover:text-primary transition-colors">
                    <Edit2 size={16} />
                  </button>
                  <button 
                    onClick={async () => { if(confirm("Terminate this service?")) await deleteService(service.id) }}
                    className="p-2 text-text-muted hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-text-main font-title mb-2 italic">
                {service.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed line-clamp-3">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>

      <ServiceModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceToEdit={selectedService} 
      />
    </div>
  );
}
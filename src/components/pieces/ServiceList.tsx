"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { SERVICES } from "@/constants/constants";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Délai entre chaque carte
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // Ease out quint pour un effet fluide
    },
  },
};

export default function ServicesList() {
  const locale = useLocale() as "fr" | "en";
  

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {SERVICES.map((service) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={service.id}
            variants={itemVariants}
            className="group p-8 rounded-4xl bg-abyss-900/10 border border-primary/5 hover:border-primary/20 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
          >
            {/* Effet de lueur bioluminescente au survol */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10"
              style={{ background: `radial-gradient(circle at center, ${service.color}, transparent 70%)` }}
            />

            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
              <Icon className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
              {service.title[locale]}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              {service.description[locale]}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
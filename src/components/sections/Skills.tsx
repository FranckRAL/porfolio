"use client";
import { motion } from "framer-motion";
import { skillCategories } from "@/constants/constants";
import SkillCard from "@/components/pieces/SkillCard";

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-bg-page relative overflow-hidden">
      {/* Decorative Abyss Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-mono text-sm tracking-[0.3em] uppercase"
          >
            Technical Arsenal
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-title text-4xl md:text-6xl font-bold"
          >
            Capabilities & <span className="text-primary italic">Expertise</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-lg max-w-xl mx-auto"
          >
            Hover over a category to reveal my proficiency levels and technical depth.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <SkillCard key={idx} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
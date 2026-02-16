"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { SkillCategory } from "@/types/types";
import { useTranslations } from "next-intl";

const SkillCard = ({ category }: { category: SkillCategory }) => {
  const [isHovered, setIsHovered] = useState(false);
  const t = useTranslations('Skills');

  return (
    <motion.div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="p-8 rounded-[2rem] bg-abyss-900/20 border border-primary/10 backdrop-blur-md hover:border-primary/40 transition-all duration-500 group relative overflow-hidden"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-abyss-950 transition-all duration-500">
          <category.icon size={24} />
        </div>
        <h3 className="font-title text-xl font-bold">{t(category.titleKey)}</h3>
      </div>

      <div className="space-y-6">
        {category.skills.map((skill, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex justify-between items-end">
              <span className="text-sm font-medium text-text-main/80">
                {skill.nameKey ? t(skill.nameKey) : skill.name}
              </span>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                className="text-xs font-mono text-primary font-bold"
              >
                {skill.level}%
              </motion.span>
            </div>
            
            <div className="h-1.5 w-full bg-primary/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: isHovered ? `${skill.level}%` : "0%" }}
                transition={{ duration: 1, ease: "circOut", delay: idx * 0.1 }}
                className="h-full bg-gradient-to-r from-primary/40 to-primary rounded-full relative"
              >
                <div className="absolute right-0 top-0 h-full w-2 bg-white blur-[4px] opacity-50" />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
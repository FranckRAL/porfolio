"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SKILLCATEGORIES, SOFTSKILLS } from "@/constants/constants";
import SkillCategory from "../pieces/SkillCategory";
import SoftSkill from "../pieces/SoftSkill";
import Image from "next/image";

const Skills = () => {
  const t = useTranslations("Skills");

  return (
    <section id="skills" className="py-24  relative overflow-hidden">
      {/* Decorative Abyss Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-mono text-sm tracking-[0.3em] uppercase"
          >
            {t("subtitle")}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-title text-4xl md:text-6xl font-bold"
          >
            {t.rich("title", {
              em: (chunks) => (
                <span className="text-primary italic">{chunks}</span>
              ),
            })}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-lg max-w-xl mx-auto"
          >
            {t("description")}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-6"
        >
          {/* {skillCategories.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))} */}

          {SKILLCATEGORIES.map((category) => (
            <SkillCategory key={category.categoryName} {...category} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full group p-6 rounded-4xl bg-abyss-900/10 dark:bg-primary/5 border border-primary/5 dark:border-primary/10 dark:hover:border-primary/30 hover:border-primary/20 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
        >
          <div className="flex items-center justify-between flex-wrap">
            <div className="flex items-center gap-4 md:w-1/4">
              <Image src="/icons/svgs/diploma-svgrepo-com.svg" alt="skill icon" width={50} height={50} className=" flex items-center justify-center p-4 w-20 h-20 rounded-lg border dark:border-white/30 border-primary/30 bg-bg-page/5 shadow-[inset_0_1px_3px_rgba(255,255,255,0.4)]"/>
              <div>
                <h3 className="flex gap-2 items-center font-semibold">
                {t("soft_skills.education.title")}
              </h3>
              <p className="text-text-main text-xs mt-2">{t("soft_skills.education.description")}</p>
              </div>
            </div>
            <div className="grid grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-4 md:w-3/4 pt-6 md:p-0 justify-center items-center">
              {SOFTSKILLS.map((softSkill) => (
              <SoftSkill key={softSkill.name} name={t(`soft_skills.${softSkill.name}.title`)} description={t(`soft_skills.${softSkill.name}.description`)} Icon={softSkill.Icon} />
            ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

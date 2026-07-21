import { SkillCategory2 } from "@/types";
import SkillBubble from "./SkillBubble";

const SkillCategory = ({
  categoryName,
  CategoryIcon,
  skills,
}: SkillCategory2) => {
  return (
    <div className="w-full group p-8 rounded-4xl bg-abyss-900/10 dark:bg-primary/10 border border-primary/5 dark:border-primary/20 dark:hover:border-primary/35 hover:border-primary/20 transition-all duration-300 backdrop-blur-sm relative overflow-hidden">
      <h3 className="text-lg font-bold text-text-main group-hover:text-primary transition-colors">
        <p className="flex items-center gap-2">
          <span className=" flex items-center justify-center mr-2 w-10 h-10 rounded-lg border dark:border-white/30 border-primary/30 bg-bg-page/5 shadow-[inset_0_1px_3px_rgba(255,255,255,0.4)]">
            <CategoryIcon />
          </span>
          {categoryName}
        </p>
      </h3>
      <div className="flex flex-nowrap gap-8 md:gap-4 mt-8 w-full  justify-center">
        {skills.map((skill, index) => (
          <SkillBubble
            key={index}
            skillName={skill.skillName}
            icon={skill.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;

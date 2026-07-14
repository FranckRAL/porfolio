import { LucideIcon } from "lucide-react";

interface SoftSkillProps {
  name: string;
  description: string;
  Icon: LucideIcon;
}

const SoftSkill = ({ name, description, Icon }: SoftSkillProps) => {

  return (
    <div className="border-s border-primary/10 p-6 ">
      <h3 className="flex gap-2 items-center font-semibold text-base">
        <span className=" flex items-center justify-center  w-10 h-10 p-2 rounded-full border dark:border-white/30 border-primary/30 bg-bg-page/5 shadow-[inset_0_1px_3px_rgba(255,255,255,0.4)]">
          <Icon />
        </span>
        {name}
      </h3>
      {/* <p className="text-text-main text-xs mt-2">{description}</p> */}
    </div>
  );
};

export default SoftSkill;

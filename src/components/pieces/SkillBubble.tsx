import Image from "next/image";

interface SkillBubbleProps {
  skillName: string;
  icon: string;
}

const SkillBubble = ({ skillName, icon }: SkillBubbleProps) => {
  let iconPath = `/icons/svgs/${icon}-svgrepo-com.svg`;

  return skillName.toLowerCase() === "git/github" ? (
    <div className="flex flex-col items-center gap-1">
      <div className=" hover:scale-105 w-auto h-14  xl:w-auto xl:h-15 p-3 flex items-center justify-center rounded-full border dark:border-white/30 border-primary/30 bg-bg-page/5 shadow-[inset_0_1px_3px_rgba(255,255,255,0.4)]">
        <span className="flex items-center justify-center gap-1 w-full h-full p-2">
          <Image
          src="/icons/svgs/git-svgrepo-com.svg"
          alt={skillName}
          width={12}
          height={12}
          className="object-contain rounded-full w-8 h-8"
        />
        <Image
          src="/icons/svgs/github-svgrepo-com.svg"
          alt={skillName}
          width={12}
          height={12}
          className="object-contain rounded-full w-8 h-8"
        />
        </span>
        
      </div>
      <p className=" text-xs font-medium text-text-main pt-2">
        {skillName}
      </p>
    </div>
  ) : (
    <div className="flex flex-col items-center gap-1">
      <div className="hover:scale-105 w-14 h-14  xl:w-15 xl:h-15 p-3 flex items-center justify-center rounded-full border dark:border-white/30 border-primary/30 bg-bg-page/5  shadow-[inset_0_1px_3px_rgba(255,255,255,0.4)]">
        <Image
          src={iconPath}
          alt={skillName}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      <p className="text-xs font-medium text-text-main pt-2">
        {skillName}
      </p>
    </div>
  );
};

export default SkillBubble;

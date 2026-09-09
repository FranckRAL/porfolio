import { SkillCategory } from "@/types"

interface SkillCardProps extends SkillCategory {}

const SkillCard = ({ id, category, Icon, skills }: SkillCardProps) => {
  return (
    <div className="flex gap-4 items-center p-4 border border-primary/10 bg-primary/5 backdrop-blur-[1px] group hover:bg-primary/10  rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <div className="h-full self-start">
          <Icon className="w-8 h-8 p-2 bg-primary/10 group-hover:bg-primary/20 rounded text-primary transition-all duration-300" />
      </div>
      <div className="flex flex-col gap-2 h-full self-start">
        <h3 className="font-handwritten text-xl font-bold">{id.charAt(0).toUpperCase() + id.slice(1)}</h3>
        <ul className="list-disc list-inside text-text-muted py-1 text-sm">
          {skills.map((skill, index) => (
            <li key={index} className="py-1">{skill.name}</li>
          ))}
        </ul>
        <div className="flex gap-1 items-end mt-auto">
          {
            Array.from({ length: 5 }, (_, index) => (
              <span key={index} className="block w-2.5 h-2.5 bg-yellow-500/50 rounded-full" />
            ))
          }
          <span className="block w-2.5 h-2.5 bg-gray-300 rounded-full mr-1" />
        </div>
      </div>
    </div>
  )
}

export default SkillCard
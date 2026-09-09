import { useTranslations } from "next-intl";
import { StarIcon, CheckCircle } from "lucide-react";
import { BiBulb } from "react-icons/bi";
import Subtitle from "../pieces/Subtitle";
import { SKILLS, OTHER_SKILLS, METHODOLOGIES } from "@/constants";
import SkillCard from "../pieces/SkillCard";

const Skills = () => {
  const t = useTranslations("Skills");

  const webdevSkills = SKILLS.filter((skill) => skill.category === "web");
  const mobiledevSkills = SKILLS.filter((skill) => skill.category === "mobile");

  return (
    <section className="pt-20 px-6 pb-30  relative overflow-hidden">
      <header className="flex flex-col items-center md:flex-row gap-10">
        {/* <SectionTitle translationContext='Skills'/> */}
        <div>
          <div className="flex gap-4 items-center my-2">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
            <h1 className="text-4xl md:text-5xl font-bold text-text-main font-handwritten">
              {t.rich("title", {
                span: (chunk) => (
                  <span className="text-primary italic">{chunk}</span>
                ),
                em: (chunk) => <em className="text-primary italic">{chunk}</em>,
              })}
            </h1>
          </div>
          <div>
            <svg
              className="w-full h-5 md:h-6  max-w-md"
              viewBox="0 0 300 20"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="
                        M2 12
                        C40 10, 75 11, 105 10
                        C140 9, 170 11, 205 11
                        C235 10, 265 12, 298 13
                      "
                stroke="#2563eb"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="text-text-muted text-md leading-relaxed pt-4">
           {t('description')}
          </p>
        </div>
        {/* taped continuous learning text  */}
        <div className="bg-yellow-100 border border-yellow-200 rounded-lg p-6 mb-6 w-xs shadow-lg relative">
          <h2 className="text-xl font-handwritten mb-4 flex items-center">
            <StarIcon className=" w-6 h-6 mr-2 text-yellow-400 animate-pulse" />
            {t("continuous_learning")}
          </h2>
          <p className="text-text-muted font-decorative text-md leading-relaxed">
            {t("continuous_learning_description")}
          </p>

          {/* Decorative tape */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 md:-right-8 w-[40%] h-8 bg-yellow-200/70  shadow-xs" />
          <div className=" h-10 flex items-center justify-end">
            <svg
              className="w-[50%] text-primary"
              width="220"
              height="80"
              viewBox="0 0 220 80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 57
       C25 42, 31 25, 38 27
       C45 29, 32 53, 39 57
       C47 61, 56 38, 62 38
       C69 38, 60 58, 67 59
       C75 60, 81 31, 88 32
       C96 33, 83 57, 92 59
       C101 61, 106 38, 113 39
       C120 40, 111 56, 119 57
       C131 59, 139 42, 146 43
       C153 44, 146 56, 154 58
       C166 61, 177 48, 185 47"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <path
                d="M82 67
       C108 71, 151 69, 195 61"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
      </header>
      <article className="mt-10">
        <Subtitle subtitle={t("webdev_subtitle")} />
        <div className="grid *:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {webdevSkills.map((skill) => (
            <SkillCard key={skill.id} {...skill} />
          ))}
        </div>
      </article>
      <article className="mt-10">
        <Subtitle subtitle={t("mobiledev_subtitle")} />
        <div className="grid *:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {mobiledevSkills.map((skill) => (
            <SkillCard key={skill.id} {...skill} />
          ))}

          {/* Other skills  */}
          <div className="relative  p-4 bg-yellow-100 border border-yellow-200 backdrop-blur-[1px] group hover:scale-105  rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col gap-2 h-full self-start">
              <h3 className="font-handwritten text-xl text-wrap font-bold">
                {t("otherskills_subtitle")}
              </h3>
              <ul className="list-disc list-inside text-text-muted py-1 text-sm">
                {OTHER_SKILLS.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 my-1">
                    {" "}
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-wrap">{t(skill)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Signature decorative  */}
            <div className="absolute bottom-2 right-2 flex items-center justify-end">
              <svg
                className="w-[50%] text-primary"
                width="220"
                height="80"
                viewBox="0 0 220 80"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 57
       C25 42, 31 25, 38 27
       C45 29, 32 53, 39 57
       C47 61, 56 38, 62 38
       C69 38, 60 58, 67 59
       C75 60, 81 31, 88 32
       C96 33, 83 57, 92 59
       C101 61, 106 38, 113 39
       C120 40, 111 56, 119 57
       C131 59, 139 42, 146 43
       C153 44, 146 56, 154 58
       C166 61, 177 48, 185 47"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <path
                  d="M82 67
       C108 71, 151 69, 195 61"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.7"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <StarIcon className="w-10 h-10 p-2 absolute top-2 right-2  text-yellow-400 group-hover:animate-pulse" />
          </div>
        </div>
      </article>
      <article className="mt-10">
        <Subtitle subtitle={t("methodologie_subtitle")} />
        <div className="flex flex-col lg:flex-row  gap-6">
          <ul className="flex gap-4  h-full ">
            {METHODOLOGIES.map((methodology) => (
              <li
                key={methodology}
                className="text-sm p-2 bg-primary/10 rounded-sm text-nowrap"
              >
                {methodology}
              </li>
            ))}
          </ul>
          <div className="p-2 bg-green-100 rounded-sm flex items-center gap-4 border border-green-200  text-green-500">
            <BiBulb className="w-8 h-full shrink-0  p-1" />
            <p className="font-handwritten text-lg">{t("good_tech")}</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Skills;

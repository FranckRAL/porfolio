
import Link from "next/link";
import { ProjectView } from "@/types";
import { useLocale } from "next-intl";
import {
  User,
  Calendar,
  Folder,
  ArrowLeft,
  CheckCircle,
  Lightbulb,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { useTranslations } from "next-intl";
import Subtitle from "../pieces/Subtitle";
import ProjectCarousel from "./ProjectCarousel";

interface ProjectDetailsProps {
  project: ProjectView;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const locale = useLocale();
  const t = useTranslations("ProjectDetails");

  const title =
    project.title[locale] ??
    project.title.en ??
    Object.values(project.title)[0];

  const description =
    project.description[locale] ??
    project.description.en ??
    Object.values(project.description)[0];

  const features = project.features[locale] ?? project.features.en ?? [];

  const challenges = project.challenges?.[locale] ?? project.challenges?.en;

  return (
    <section className="container mx-auto px-6 pt-10 pb-20 md:py-20 relative">

      {/* Back to the Projects Link  */}
      <Link
        href="/projects"
        className=" mb-8 absolute top-4 left-4 flex items-center gap-2 font-handwritten text-lg group hover:text-primary z-50"
      >
        {" "}
        <ArrowLeft className="group-hover:-translate-x-1" />{" "}
        <span>{t("backToProjects")}</span>
      </Link>

      <div className="mt-10 flex flex-col md:flex-row gap-10">
        {/* LEFT CONTENT  */}
        <div className="flex-1 flex flex-col gap-10 w-full md:w-3/5">
          <div className="md:hidden">
            <ProjectCarousel images={[project.imageUrl, project.imageUrl]} />
          </div>
          <header className="flex flex-col gap-4 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold font-handwritten text-text-main ">
              {title}
            </h1>
            <div className="w-full flex justify-center md:justify-start">
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
            <div className="flex flex-row gap-5 md:gap-10  justify-center md:justify-start items-center flex-wrap lg:flex-nowrap">
              <p className=" text-sm text-text-muted font-mono">
                <mark className="flex  justify-start items-center gap-1 p-1 rounded bg-yellow-100">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={project.year.toString()}>{project.year}</time>
                </mark>
              </p>
              <p className=" text-sm text-text-muted font-mono">
                <mark className="flex  justify-start items-center gap-1 p-1 rounded bg-yellow-100">
                  <Folder className="w-4 h-4" />
                <span className="text-nowrap">{project.category}</span>
                </mark>
              </p>
              <p className=" text-text-muted font-mono">
                <mark className="flex  justify-start items-center gap-1 p-1 rounded bg-yellow-100">
                  <User className="w-4 h-4" />
                  <span className="text-nowrap">{project.role}</span>
                </mark>
              </p>
            </div>
          </header>
          <div className="flex-1 flex flex-col gap-4">
            <Subtitle subtitle={t("project_description")} />
            <p>{description}</p>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <Subtitle subtitle={t("project_features")} />
            <ul className="flex flex-col gap-2">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="text-text-muted p-2 rounded bg-primary/10 hover:bg-primary/20 transition duration-300 border border-primary/50 flex items-center gap-2"
                >
                  <CheckCircle className="inline-block mr-2 w-4 h-4 " />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Subtitle subtitle={t("project_challenges")} />
            <div className="flex items-center gap-4 text-yellow-500 p-2 group rounded bg-yellow-50 hover:bg-yellow-100 transition duration-300 border border-yellow-300">
              <Lightbulb className=" w-20 aspect-square group-hover:animate-bounce " />
              <p>{challenges}</p>
            </div>
          </div>
        </div>
        
        {/* RIGHT CONTENT */}
        <div className="flex-1 flex flex-col gap-4 w-full md:w-2/5">
          {/* Project illustration */}
          <div className="hidden md:block">
            <ProjectCarousel
            images={[project.imageUrl, project.imageUrl, project.imageUrl]}
          />
          </div>
          {/* Techstack and links */}
          <div className="mt-8 flex flex-col text-center gap-2 md:gap-10">
            <div className="flex-1">
              <Subtitle subtitle={t("tech_stack")} />
              <ul className="flex flex-wrap gap-2 mt-1 justify-start ">
                {project.stack.map((tech, index) => (
                  <li
                    key={index}
                    title={tech}
                    className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/50 p-2 h-fit  rounded-lg text-xs transition duration-300 flex justify-center items-center shrink-0"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full">
              <Subtitle subtitle={t("project_links")} />
              <div className="flex md:flex-col lg:flex-row  gap-4  items-center justify-center  mt-4">
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grow py-3 px-4  flex items-center gap-2 justify-center bg-primary text-white rounded-full  hover:bg-primary/80 transition duration-300 "
                  >
                    <TbWorld className=" w-4 h-4" />
                    {t("view_live")}
                  </Link>
                )}

                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grow py-3 px-4 flex items-center gap-2 justify-center rounded-full border border-primary/50 transition duration-300 "
                  >
                    <FaGithub className=" w-4 h-4" />
                    {t("view_github")}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

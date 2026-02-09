import prisma from "@/lib/db";
import ProjectManager from "@/components/admin/ProjectManager";

// On force le rendu dynamique pour toujours avoir les derniers projets
export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  // 1. Récupération des données brutes depuis la base de données
  const projectsBruts = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  // 2. Sérialisation manuelle et propre :
  // On transforme les objets Date en ISO strings pour que le Client puisse les lire sans erreur.
  const projects = projectsBruts.map((project) => ({
    ...project,
    createdAt: project.createdAt.toISOString(),
    updatedAt: project.updatedAt.toISOString(),
  }));

  return (
    <div className="p-4">
      {/* 3. Injection dans le Manager que tu as déjà créé */}
      <ProjectManager initialProjects={projects} />
    </div>
  );
}
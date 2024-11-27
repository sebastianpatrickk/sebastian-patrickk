import { TypographyH3, TypographyP } from "@/components/Typography";
import { Project } from "@/lib/db/schema";
import { formatDate } from "@/lib/utils";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      key={project.id}
      className="flex cursor-pointer items-start gap-4 py-4 hover:underline sm:py-6 md:gap-10"
    >
      <TypographyP className="hidden w-[12ch] text-sm sm:inline-block">
        {formatDate(project.createdAt)}
      </TypographyP>
      <div className="flex-1 sm:space-y-2">
        <TypographyH3 className="text-sm">{project.name}</TypographyH3>
        <TypographyP className="inline-block w-[12ch] text-sm sm:hidden">
          {formatDate(project.createdAt)}
        </TypographyP>
        <TypographyP className="mt-2 text-sm">
          {project.description}
        </TypographyP>
      </div>
    </div>
  );
}

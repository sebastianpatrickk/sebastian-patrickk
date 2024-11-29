import { TypographyH3, TypographyP } from "@/components/Typography";
import { Project } from "@/lib/db/schema";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={project?.link} target="_blank">
      <div
        key={project.id}
        className="group flex cursor-pointer items-start gap-4 py-4 sm:py-4 md:gap-10"
      >
        <TypographyP className="hidden w-[12ch] text-base group-hover:underline sm:inline-block">
          {formatDate(project.createdAt)}
        </TypographyP>
        <div className="flex-1 sm:space-y-2">
          <TypographyH3 className="text-base group-hover:underline">
            {project.name}
          </TypographyH3>
          <TypographyP className="inline-block w-[12ch] text-base group-hover:underline sm:hidden">
            {formatDate(project.createdAt)}
          </TypographyP>
          <TypographyP className="mt-2 text-base group-hover:underline">
            {project.description}
          </TypographyP>
        </div>
      </div>
    </Link>
  );
}

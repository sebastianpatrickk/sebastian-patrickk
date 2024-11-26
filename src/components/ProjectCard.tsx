import { TypographyH3, TypographyP } from "@/components/Typography";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <div
      key={project.id}
      className="flex cursor-pointer items-start gap-4 py-4 hover:underline sm:py-6 md:gap-10"
    >
      <TypographyP className="hidden w-[12ch] text-sm sm:inline-block">
        {project.date}
      </TypographyP>
      <div className="flex-1 sm:space-y-2">
        <TypographyH3 className="text-sm">{project.title}</TypographyH3>
        <TypographyP className="inline-block w-[12ch] text-sm sm:hidden">
          {project.date}
        </TypographyP>
        <TypographyP className="mt-2 text-sm">
          {project.description}
        </TypographyP>
      </div>
    </div>
  );
}

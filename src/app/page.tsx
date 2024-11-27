import ProjectCard from "@/components/ProjectCard";
import Separator from "@/components/Separator";
import { Shell, ShellContent } from "@/components/Shell";
import { TypographyH2, TypographyP } from "@/components/Typography";
import { buttonVariants } from "@/components/ui/button";
import { getProjects, getSkills } from "@/lib/db/queries";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  const skills = await getSkills();

  return (
    <>
      <Shell>
        <ShellContent className="flex flex-col justify-start gap-4">
          <TypographyH2>Today</TypographyH2>
          <div className="space-y-3">
            <TypographyP>
              Studying to be a software engineer, implementing and building
              amazing things everyday. Currently intrested into weightlifting,
              skateboaring and learning English.
            </TypographyP>
            <TypographyP>
              These days working at{" "}
              <Link
                href="https://www.taskgrip.com"
                target="_blank"
                className={buttonVariants({ variant: "link" })}
              >
                {" "}
                taskgrip
              </Link>
            </TypographyP>
          </div>
        </ShellContent>
      </Shell>
      <Separator />
      <Shell>
        <ShellContent className="flex flex-col justify-start gap-4">
          <TypographyH2 className="font-semibold">Skills</TypographyH2>
          <TypographyP className="leading-6">
            I work with{" "}
            {skills.map((skill, i, arr) => (
              <span key={skill.id}>
                <Link
                  href="/"
                  target="_blank"
                  className={buttonVariants({ variant: "link" })}
                >
                  {skill.name}
                </Link>
                {arr.length - 1 !== i && ","}{" "}
              </span>
            ))}
             
          </TypographyP>
        </ShellContent>
      </Shell>
      <Separator />
      <Shell>
        <ShellContent className="flex flex-col justify-start gap-4">
          <TypographyH2 className="font-semibold">Projects</TypographyH2>

          <div className="flex w-full flex-col">
            {projects.map((item) => (
              <ProjectCard key={item.id} project={item} />
            ))}
          </div>
        </ShellContent>
      </Shell>
      <Separator />
      <Shell>
        <ShellContent className="flex flex-col justify-start gap-4">
          <TypographyH2 className="font-semibold">Writings</TypographyH2>

          <div className="flex w-full flex-col gap-2">
            {projects.map((item) => (
              <ProjectCard key={item.id} project={item} />
            ))}
          </div>
        </ShellContent>
      </Shell>
    </>
  );
}

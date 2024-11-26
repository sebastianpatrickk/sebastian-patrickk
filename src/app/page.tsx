import ProjectCard from "@/components/ProjectCard";
import { Shell, ShellContent } from "@/components/Shell";
import { TypographyH2, TypographyP } from "@/components/Typography";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const skills = ["typescript", "python", "react", "nextjs", "postgres", "ci/cd"];

const projects = [
  {
    id: 1,
    title: "Placeme",
    date: "Feb 18, 2023",
    description:
      "My first full-stack web app lets users post visited places on an interactive map.",
  },
  {
    id: 2,
    title: "EverWebinar custom forms implementation",
    date: "Jan 23, 2023",
    description:
      "Custom form for a webinar tool, API-integrated, tested on 100k+ users.",
  },
  {
    id: 3,
    title: "Devboards",
    date: "Apr 28, 2024",
    description:
      "A colaborative developer-focused project management tool inspired by Trello.",
  },
];

export default function Home() {
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
      <Shell>
        <ShellContent className="flex flex-col justify-start gap-4">
          <TypographyH2 className="font-semibold">Skills</TypographyH2>
          <TypographyP className="leading-6">
            I work with{" "}
            {skills.map((skill, i, arr) => (
              <>
                <Link
                  key={skill}
                  href="https://www.taskgrip.com"
                  target="_blank"
                  className={buttonVariants({ variant: "link" })}
                >
                  {skill}
                </Link>
                {arr.length - 1 !== i && ","}{" "}
              </>
            ))}
             
          </TypographyP>
        </ShellContent>
      </Shell>
      <Shell>
        <ShellContent className="flex flex-col justify-start gap-6 sm:gap-8 md:gap-12">
          <TypographyH2 className="font-semibold">Projects</TypographyH2>
          <div className="flex w-full flex-col">
            {projects.map((item) => (
              <ProjectCard key={item.id} project={item} />
            ))}
          </div>
        </ShellContent>
      </Shell>
    </>
  );
}

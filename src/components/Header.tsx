import Link from "next/link";
import { Shell, ShellContent } from "@/components/Shell";
import { buttonVariants } from "./ui/button";

export default function Header() {
  return (
    <Shell className="border-t border-dashed border-border">
      <ShellContent className="flex items-center justify-between">
        <Link href="/">
          <div className="flex flex-col items-start">
            <h2>Sebastian Patrick Klen</h2>
            <h2>Software Engineer</h2>
          </div>
        </Link>
        <div className="flex gap-4">
          <Link href="/" className={buttonVariants({ variant: "link" })}>
            GitHub
          </Link>
          <Link href="/" className={buttonVariants({ variant: "link" })}>
            CV
          </Link>
        </div>
      </ShellContent>
    </Shell>
  );
}

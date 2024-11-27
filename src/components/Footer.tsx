import Link from "next/link";
import { Shell, ShellContent } from "./Shell";
import { buttonVariants } from "./ui/button";

export default function Footer() {
  return (
    <Shell className="border-t border-dashed border-border">
      <ShellContent className="flex items-center justify-start gap-4">
        <Link href="/" className={buttonVariants({ variant: "link" })}>
          X
        </Link>
        <Link href="/" className={buttonVariants({ variant: "link" })}>
          GitHub
        </Link>
        <Link href="/" className={buttonVariants({ variant: "link" })}>
          LinkedIn
        </Link>
      </ShellContent>
    </Shell>
  );
}

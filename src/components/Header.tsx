import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function Header() {
  return (
    <header className="w-full border-y border-dashed border-border">
      <nav className="relative mx-auto flex max-w-screen-md items-center justify-between border-dashed border-border px-4 py-4 md:border-x md:px-6">
        <Link href="/">
          <div className="flex flex-col items-start">
            <h2>Sebastian Patrick Klen</h2>
            <h2>Software Engineer</h2>
          </div>
        </Link>
        <div className="flex gap-4">
          <Link
            href="https://github.com/sebastianpatrickk"
            target="_blank"
            className={buttonVariants({ variant: "link" })}
          >
            GitHub
          </Link>
          <Link href="/" className={buttonVariants({ variant: "link" })}>
            CV
          </Link>
        </div>
      </nav>
    </header>
  );
}

import * as React from "react";

import { cn } from "@/lib/utils";

const Shell = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("w-full", className)} {...props} />
));
Shell.displayName = "Shell";

const ShellContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mx-auto max-w-screen-md border-none border-border px-4 py-7 md:border-x md:border-dashed md:px-6 md:py-6",

      className,
    )}
    {...props}
  />
));
ShellContent.displayName = "ShellContent";

export { Shell, ShellContent };

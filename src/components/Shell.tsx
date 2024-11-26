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
      "mx-auto my-7 max-w-screen-md px-4 md:my-8 md:px-10",
      className,
    )}
    {...props}
  />
));
ShellContent.displayName = "ShellContent";

export { Shell, ShellContent };

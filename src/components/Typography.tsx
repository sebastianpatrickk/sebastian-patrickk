import * as React from "react";

import { cn } from "@/lib/utils";

const TypographyH1 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1 ref={ref} className={cn("text-lg font-semibold", className)} {...props} />
));
TypographyH1.displayName = "TypographyH1";

const TypographyH2 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("text-base font-semibold", className)}
    {...props}
  />
));
TypographyH2.displayName = "TypographyH2";

const TypographyH3 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn("text-sm font-semibold", className)} {...props} />
));
TypographyH3.displayName = "TypographyH3";

const TypographyP = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <h2 ref={ref} className={cn("text-muted-foreground", className)} {...props} />
));
TypographyP.displayName = "TypographyP";

export { TypographyH1, TypographyH2, TypographyH3, TypographyP };

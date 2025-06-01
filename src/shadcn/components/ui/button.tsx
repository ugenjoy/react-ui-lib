import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/shadcn/lib/utils"

const buttonVariants = cva(
  "uikit:inline-flex uikit:items-center uikit:justify-center uikit:gap-2 uikit:whitespace-nowrap uikit:rounded-md uikit:text-sm uikit:font-medium uikit:transition-all uikit:disabled:pointer-events-none uikit:disabled:opacity-50 uikit:[&_svg]:pointer-events-none uikit:[&_svg:not([class*=size-])]:size-4 uikit:shrink-0 uikit:[&_svg]:shrink-0 uikit:outline-none uikit:focus-visible:border-ring uikit:focus-visible:ring-ring/50 uikit:focus-visible:ring-[3px] uikit:aria-invalid:ring-destructive/20 uikit:dark:aria-invalid:ring-destructive/40 uikit:aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "uikit:bg-primary uikit:text-primary-foreground uikit:shadow-xs uikit:hover:bg-primary/90",
        destructive:
          "uikit:bg-destructive uikit:text-white uikit:shadow-xs uikit:hover:bg-destructive/90 uikit:focus-visible:ring-destructive/20 uikit:dark:focus-visible:ring-destructive/40 uikit:dark:bg-destructive/60",
        outline:
          "uikit:border uikit:bg-background uikit:shadow-xs uikit:hover:bg-accent uikit:hover:text-accent-foreground uikit:dark:bg-input/30 uikit:dark:border-input uikit:dark:hover:bg-input/50",
        secondary:
          "uikit:bg-secondary uikit:text-secondary-foreground uikit:shadow-xs uikit:hover:bg-secondary/80",
        ghost:
          "uikit:hover:bg-accent uikit:hover:text-accent-foreground uikit:dark:hover:bg-accent/50",
        link: "uikit:text-primary uikit:underline-offset-4 uikit:hover:underline",
      },
      size: {
        default: "uikit:h-9 uikit:px-4 uikit:py-2 uikit:has-[>svg]:px-3",
        sm: "uikit:h-8 uikit:rounded-md uikit:gap-1.5 uikit:px-3 uikit:has-[>svg]:px-2.5",
        lg: "uikit:h-10 uikit:rounded-md uikit:px-6 uikit:has-[>svg]:px-4",
        icon: "uikit:size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "font-montserrat bg-bluePrimary text-creamPrimary shadow hover:bg-bluePrimary/90",
        destructive:
          "font-montserrat bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "font-montserrat border-2 shadow-sm hover:bg-white/60 hover:text-accent-foreground",
        secondary:
          "font-montserrat bg-slate-100 text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "font-montserrat hover:bg-accent hover:text-accent-foreground",
        link: "font-montserrat text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        full: 'font-semibold rounded-xl text-sm h-full w-full',
        sm: 'rounded-xl py-2 px-2 font-semibold md:py-2 md:px-3 md:text-sm',
        md: 'rounded-xl py-3 px-5 text-sm font-semibold text-md md:py-3 md:px-5 md:text-md',
        lg: 'rounded-xl py-3 px-7 text-lg md:px-8 md:py-3 md:text-xl',
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'

import { cn } from '@/shadcn/lib/utils'

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'uikit:peer uikit:border-input uikit:dark:bg-input/30 uikit:data-[state=checked]:bg-primary uikit:data-[state=checked]:text-primary-foreground uikit:dark:data-[state=checked]:bg-primary uikit:data-[state=checked]:border-primary uikit:focus-visible:border-ring uikit:focus-visible:ring-ring/50 uikit:aria-invalid:ring-destructive/20 uikit:dark:aria-invalid:ring-destructive/40 uikit:aria-invalid:border-destructive uikit:size-4 uikit:shrink-0 uikit:rounded-[4px] uikit:border uikit:shadow-xs uikit:cursor-pointer uikit:transition-shadow uikit:outline-none uikit:focus-visible:ring-[3px] uikit:disabled:cursor-not-allowed uikit:disabled:opacity-50',
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="uikit:flex uikit:items-center uikit:justify-center uikit:text-current uikit:transition-none"
      >
        <CheckIcon className="uikit:size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }

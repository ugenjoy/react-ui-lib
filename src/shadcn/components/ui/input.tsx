import * as React from 'react'

import { cn } from '@/shadcn/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'uikit:file:text-foreground uikit:placeholder:text-muted-foreground uikit:selection:bg-primary uikit:selection:text-primary-foreground uikit:dark:bg-input/30 uikit:border-input uikit:flex uikit:h-9 uikit:w-full uikit:min-w-0 uikit:rounded-md uikit:border uikit:bg-transparent uikit:px-3 uikit:py-1 uikit:text-base uikit:shadow-xs uikit:transition-[color,box-shadow] uikit:outline-none uikit:file:inline-flex uikit:file:h-7 uikit:file:border-0 uikit:file:bg-transparent uikit:file:text-sm uikit:file:font-medium uikit:disabled:pointer-events-none uikit:disabled:cursor-not-allowed uikit:disabled:opacity-50 uikit:md:text-sm',
        'uikit:focus-visible:border-ring uikit:focus-visible:ring-ring/50 uikit:focus-visible:ring-[3px]',
        'uikit:aria-invalid:ring-destructive/20 uikit:dark:aria-invalid:ring-destructive/40 uikit:aria-invalid:border-destructive',
        className
      )}
      {...props}
    />
  )
}

export { Input }

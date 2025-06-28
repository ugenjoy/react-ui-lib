import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { XIcon } from 'lucide-react'

import { cn } from '@/shadcn/lib/utils'

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        'uikit:data-[state=open]:animate-in uikit:data-[state=closed]:animate-out uikit:data-[state=closed]:fade-out-0 uikit:data-[state=open]:fade-in-0 uikit:fixed uikit:inset-0 uikit:z-50 uikit:bg-black/50',
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          'uikit:bg-background uikit:data-[state=open]:animate-in uikit:data-[state=closed]:animate-out uikit:data-[state=closed]:fade-out-0 uikit:data-[state=open]:fade-in-0 uikit:data-[state=closed]:zoom-out-95 uikit:data-[state=open]:zoom-in-95 uikit:fixed uikit:top-[50%] uikit:left-[50%] uikit:z-50 uikit:grid uikit:w-full uikit:max-w-[calc(100%-2rem)] uikit:translate-x-[-50%] uikit:translate-y-[-50%] uikit:gap-4 uikit:rounded-lg uikit:border uikit:border-border uikit:p-6 uikit:shadow-lg uikit:duration-200 uikit:sm:max-w-lg',
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="uikit:ring-offset-background uikit:cursor-pointer uikit:focus:ring-ring uikit:data-[state=open]:bg-accent uikit:data-[state=open]:text-muted-foreground uikit:absolute uikit:top-4 uikit:right-4 uikit:rounded-xs uikit:opacity-70 uikit:transition-opacity uikit:hover:opacity-100 uikit:focus:ring-2 uikit:focus:ring-offset-2 uikit:focus:outline-hidden uikit:disabled:pointer-events-none uikit:[&_svg]:pointer-events-none uikit:[&_svg]:shrink-0 uikit:[&_svg:not([class*=size-])]:size-4"
          >
            <XIcon />
            <span className="uikit:sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-header"
      className={cn(
        'uikit:flex uikit:flex-col uikit:gap-2 uikit:text-center uikit:sm:text-left',
        className
      )}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        'uikit:flex uikit:flex-col-reverse uikit:gap-2 uikit:sm:flex-row uikit:sm:justify-end',
        className
      )}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        'uikit:text-lg uikit:leading-none uikit:font-semibold',
        className
      )}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn('uikit:text-muted-foreground uikit:text-sm', className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}

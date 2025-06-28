import * as React from 'react'

import { cn } from '@/shadcn/lib/utils'

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn(
        'uikit:bg-card uikit:text-card-foreground uikit:flex uikit:flex-col uikit:gap-6 uikit:rounded-xl uikit:border uikit:border-border uikit:py-6 uikit:shadow-sm',
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        'uikit:@container/card-header uikit:grid uikit:auto-rows-min uikit:grid-rows-[auto_auto] uikit:items-start uikit:gap-1.5 uikit:px-6 uikit:has-data-[slot=card-action]:grid-cols-[1fr_auto] uikit:[.border-b]:pb-6',
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn('uikit:leading-none uikit:font-semibold', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn('uikit:text-muted-foreground uikit:text-sm', className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        'uikit:col-start-2 uikit:row-span-2 uikit:row-start-1 uikit:self-start uikit:justify-self-end',
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-content"
      className={cn('uikit:px-6', className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        'uikit:flex uikit:items-center uikit:px-6 uikit:[.border-t]:pt-6',
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}

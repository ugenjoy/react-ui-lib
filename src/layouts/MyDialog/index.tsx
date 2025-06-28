import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shadcn/components/ui/dialog'
import { cn } from '@/shadcn/lib/utils'
import { ReactNode, useState } from 'react'

type MyCardPropsType = {
  title?: string
  description?: string
  trigger?: ReactNode
  content?: ReactNode
  footer?: ReactNode
  className?: string
}

function MyDialog({
  title,
  description,
  trigger,
  content,
  footer,
  className,
}: MyCardPropsType) {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent className={cn(className)}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {content}
      </DialogContent>
      <DialogFooter>{footer}</DialogFooter>
    </Dialog>
  )
}

export default MyDialog

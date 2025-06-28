import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shadcn/components/ui/card'
import { cn } from '@/shadcn/lib/utils'
import { ReactNode } from 'react'

type MyCardPropsType = {
  title?: string
  description?: string
  action?: ReactNode
  content?: ReactNode
  footer?: ReactNode
  className?: string
}

function MyCard({
  title,
  description,
  action,
  content,
  footer,
  className,
}: MyCardPropsType) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardAction>{action}</CardAction>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter>{footer}</CardFooter>
    </Card>
  )
}

export default MyCard

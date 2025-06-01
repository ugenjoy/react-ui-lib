import { Button, buttonVariants } from '@/shadcn/components/ui/button'
import { VariantProps } from 'class-variance-authority'

function MyButton({
  children,
  ...rest
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  return (
    <Button className="uikit:hover:cursor-pointer" {...rest}>
      {children}
    </Button>
  )
}

export default MyButton

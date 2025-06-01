import { Input } from '@/shadcn/components/ui/input'

function MyInput({ ...rest }: React.ComponentProps<'input'>) {
  return <Input {...rest} />
}

export default MyInput

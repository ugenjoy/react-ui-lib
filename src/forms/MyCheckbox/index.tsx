import { Checkbox } from '@/shadcn/components/ui/checkbox'
import { CheckedState } from '@radix-ui/react-checkbox'
import { useState } from 'react'

type MyCheckboxPropsType = {
  text: string
  defaultChecked?: CheckedState
}

function MyCheckbox({ text, defaultChecked }: MyCheckboxPropsType) {
  const [checked, setChecked] = useState<CheckedState>(defaultChecked ?? false)

  return (
    <span
      className="uikit:flex uikit:gap-2 uikit:items-center uikit:hover:cursor-pointer"
      onClick={() => setChecked(!checked)}
    >
      <Checkbox checked={checked} onCheckedChange={setChecked} />
      <p className="uikit:text-sm">{text}</p>
    </span>
  )
}

export default MyCheckbox

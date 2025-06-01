import type { InputHTMLAttributes } from 'react'

function Input({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="text"
      className="uikit:bg-zinc-200 uikit:p-2 uikit:rounded-md"
      {...rest}
    />
  )
}

export default Input

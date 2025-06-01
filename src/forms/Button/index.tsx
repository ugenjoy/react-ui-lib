import type { ButtonHTMLAttributes } from 'react'

function Button({
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className="uikit:bg-red-500 uikit:p-2 uikit:rounded-md"
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button

import { AnchorHTMLAttributes } from 'react'

function Link({ children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className="uikit:text-red-500 uikit:hover:cursor-pointer" {...rest}>
      {children}
    </a>
  )
}

export default Link

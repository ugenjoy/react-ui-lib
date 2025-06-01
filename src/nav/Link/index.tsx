import { AnchorHTMLAttributes } from 'react'

function Link({ children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className="uikit:text-red-500" {...rest}>
      {children}
    </a>
  )
}

export default Link

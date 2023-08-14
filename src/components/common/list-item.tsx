import Link from 'next/link'
import { LiHTMLAttributes, ReactElement } from 'react'

interface Props extends LiHTMLAttributes<HTMLLIElement> {
  linkTo?: string
  as: ReactElement
}

const ListItem = ({ linkTo, as, ...props }: Props) => {
  return (
    <Link href={linkTo ?? ''}>
      <li {...props}>{as}</li>
    </Link>
  )
}

export default ListItem

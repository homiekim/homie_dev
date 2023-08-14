import { HTMLAttributes, ReactNode } from 'react'

import ListItem from './list-item'

interface Props extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode
}

const List = ({ children, ...props }: Props) => {
  return <ul {...props}>{children}</ul>
}

List.Item = ListItem

export default List

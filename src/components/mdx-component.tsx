import { ReactElement } from 'react'
import { MDXComponents } from 'mdx/types'

import CustomImage from './custom-image'

const MDXComponent: MDXComponents = {
  pre: v => {
    const isBox = (v.children as ReactElement).props.children
    return typeof isBox === 'string' ? (
      <div className="rounded bg-slate-300 p-2">{isBox}</div>
    ) : (
      <pre {...v} />
    )
  },
  a: v => {
    return <a className="text-blue-400" target="_blank" {...v} />
  },
  img: v => {
    return <CustomImage src={v.src!} alt={v.alt!} />
  },
}

export default MDXComponent

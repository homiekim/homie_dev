import Link from 'next/link'
import { memo } from 'react'

const NavBar = () => {
  return (
    <nav className="fixed left-0 top-0 z-10 flex h-[60px] w-full justify-center bg-white">
      <div className="flex w-full max-w-3xl items-center justify-between px-4 text-2xl font-bold">
        <h4>
          <Link href={'/'}>Homie Blog</Link>
        </h4>
        <ul className="flex gap-4">
          <li>
            <Link href={'/posts'}>Posts</Link>
          </li>
          <li>
            <Link href={'/about'}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default memo(NavBar)

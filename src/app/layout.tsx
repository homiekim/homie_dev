import React from 'react'

import './globals.css'
import NavBar from '@components/nav-bar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="mx-auto max-w-3xl p-4 pt-[60px] ">{children}</main>
      </body>
    </html>
  )
}

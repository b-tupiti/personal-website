import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Posts',
  description: 'View my posts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        {children}
    </>
  )
}

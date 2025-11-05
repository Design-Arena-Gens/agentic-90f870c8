import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Talent Finder - Top AI Engineers & Researchers',
  description: 'Discover top emerging AI engineers and researchers from LinkedIn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

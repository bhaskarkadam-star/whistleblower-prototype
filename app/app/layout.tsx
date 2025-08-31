import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Whistleblower Prototype',
  description: 'Anonymous reporting prototype',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: "20px", fontFamily: "Arial" }}>
        {children}
      </body>
    </html>
  )
}

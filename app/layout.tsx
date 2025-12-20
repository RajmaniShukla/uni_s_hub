import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Universal Study Hub - Your Global Gateway to Quality Education',
  description: 'A unified learning platform where students and parents can raise academic queries for any subject and get connected with the best tutors and teachers across all international standards.',
  keywords: 'online education, tutoring, study queries, international curriculum, verified tutors, academic guidance',
  authors: [{ name: 'Universal Study Hub' }],
  openGraph: {
    title: 'Universal Study Hub - Your Global Gateway to Quality Education',
    description: 'Ask. Learn. Connect with the Best Tutors Worldwide',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


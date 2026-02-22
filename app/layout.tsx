import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Universal Study Hub | Your Global Gateway to Quality Education',
  description: 'A unified learning platform where students and parents can raise academic queries for any subject and get connected with the best tutors and teachers across all international standards.',
  keywords: ['education', 'tutoring', 'online learning', 'study help', 'academic support', 'international education', 'tutors'],
  authors: [{ name: 'Universal Study Hub' }],
  openGraph: {
    title: 'Universal Study Hub | Your Global Gateway to Quality Education',
    description: 'Ask. Learn. Connect with the Best Tutors Worldwide',
    url: 'https://universalstudyhub.com',
    siteName: 'Universal Study Hub',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Universal Study Hub',
    description: 'Your Global Gateway to Quality Education',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors`}>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <div id="main-content">
          {children}
        </div>
      </body>
    </html>
  )
}

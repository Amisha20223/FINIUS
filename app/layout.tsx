import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/theme/provider'
import { Analytics } from '@/components/Analytics'

import { sharedMetadata } from '@/config/metadata'

import { fonts } from '@/styles/fonts'
import '@/styles/globals.css'

export const metadata: Metadata = {
  ...sharedMetadata,
  title: {
    template: '%s | FINUS App',
    default: 'FINIUS App - Unlock Finance knowledge.',
  },
  description:
    'Master Finance with the FINIUS app - fun and easy way to handle finance like a pro!',
  keywords: ['FINIUS', 'Finanace', 'Learn About It'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          fontSize: '0.875rem',
          borderRadius: '0.5rem',
          colorPrimary: 'hsl(142, 71%, 45%)',
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${fonts} flex flex-col font-sans`}>
          <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  )
}

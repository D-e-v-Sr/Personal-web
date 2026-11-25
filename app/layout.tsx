import type { Metadata } from 'next'
import { Nunito, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const nunito = Nunito({
  subsets: ["latin"],
  variable: '--font-sans'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'Sharaf | Full Stack Developer',
  description: 'Full-Stack Web Developer with 7+ years of experience building high-performance websites and web applications. Available for opportunities in India and UAE.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <a
          href="#site-content"
          className="fixed left-4 top-4 z-[100] -translate-y-16 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <div id="site-content">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange={false}
          >
            {children}
          </ThemeProvider>
          <Analytics />
        </div>
      </body>
    </html>
  )
}

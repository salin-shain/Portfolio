'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({ children }) {
  return <ThemeProvider defaultTheme='light' attribute="class">{children}</ThemeProvider>
}
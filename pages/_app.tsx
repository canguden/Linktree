import Header from '@/components/header'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider enableSystem={true} attribute="class">
    <Header />
  <Component {...pageProps} />
  </ThemeProvider>
  )
}

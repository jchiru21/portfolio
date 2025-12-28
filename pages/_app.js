// pages/_app.js
import { ThemeProvider } from "next-themes"
import "@/styles/globals.css"

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="portfolio-theme">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

// pages/_app.js
import { useEffect } from "react"
import { ThemeProvider } from "next-themes"
import "@/styles/globals.css"

export default function App({ Component, pageProps }) {
  useEffect(() => {
    let timeoutId = null
    const idleMs = 800 // visible for 800ms after last activity
    const edgeThresholdPx = 80 // distance from right edge to trigger show

    const showScrolling = () => {
      // add class to both html and body to be resilient across setups
      document.documentElement.classList.add("scrolling")
      document.body.classList.add("scrolling")

      if (timeoutId) clearTimeout(timeoutId)

      timeoutId = setTimeout(() => {
        document.documentElement.classList.remove("scrolling")
        document.body.classList.remove("scrolling")
        timeoutId = null
      }, idleMs)
    }

    // pointermove handler that also shows scrollbar when pointer is near right edge
    const onPointerMoveEdge = (e) => {
      // show whenever pointer is near the right edge or user actively moves the pointer
      if (window.innerWidth - e.clientX < edgeThresholdPx) {
        showScrolling()
      }
    }

    // events to consider as "activity" for showing scrollbar
    const events = ["scroll", "wheel", "pointermove", "touchstart", "touchmove", "keydown", "mousemove"]

    events.forEach((ev) => window.addEventListener(ev, showScrolling, { passive: true }))
    window.addEventListener("pointermove", onPointerMoveEdge)

    // show on initial load briefly (so users see it's custom)
    showScrolling()

    return () => {
      events.forEach((ev) => window.removeEventListener(ev, showScrolling))
      window.removeEventListener("pointermove", onPointerMoveEdge)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

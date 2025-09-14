// components/Navbar.js
import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = ["Home", "About Me", "Skills", "Projects", "Experience", "Education", "Contact"]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-gradient-to-r from-gray-900/80 via-gray-900/70 to-black/60 shadow-[0_6px_24px_rgba(2,6,23,.6)]"
            : "bg-transparent"
        }`}
        aria-label="Primary Navigation"
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-6 py-3">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            offset={-70}
            duration={600}
            className="w-12 h-12 flex items-center justify-center rounded-full 
                       bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold text-lg 
                       cursor-pointer shadow-md hover:scale-105 transform transition duration-200"
            aria-label="Go to home"
            onClick={() => setOpen(false)}
          >
            <span className="select-none">CJ</span>
          </Link>

          {/* Desktop links (hidden on small screens) */}
          <div className="hidden md:flex items-center gap-6 text-gray-200">
            {links.map((item) => {
              const id = item.toLowerCase().replace(/\s+/g, "")
              return (
                <Link
                  key={item}
                  to={id}
                  spy={true}
                  activeClass="text-blue-300 border-b-2 border-blue-400"
                  smooth={true}
                  offset={-70}
                  duration={600}
                  className="cursor-pointer relative py-1 px-1 text-sm font-medium transition-colors duration-200 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                  role="link"
                  tabIndex={0}
                  aria-label={`Go to ${item}`}
                >
                  <span className="inline-block">{item}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen((v) => !v)}
              className="p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-800/60 transition"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile sliding menu */}
        <div
          className={`md:hidden fixed top-[64px] left-0 right-0 z-40 bg-black/60 backdrop-blur-sm transition-transform duration-200 ${
            open ? "transform translate-y-0" : "transform -translate-y-full"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-2">
            {links.map((item) => {
              const id = item.toLowerCase().replace(/\s+/g, "")
              return (
                <Link
                  key={item}
                  to={id}
                  spy={true}
                  activeClass="text-blue-300"
                  smooth={true}
                  offset={-70}
                  duration={600}
                  onClick={() => setOpen(false)}
                  className="block text-gray-200 py-2 px-3 rounded hover:bg-gray-800/40 hover:text-blue-300 transition"
                >
                  {item}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>

      {/* spacer prevents content from sitting under fixed navbar */}
      <div aria-hidden className="h-14 md:h-16" />
    </>
  )
}

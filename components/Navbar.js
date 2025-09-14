// components/Navbar.js
import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = ["Home", "About Me", "Skills", "Projects", "Experience", "Education", "Contact"]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-gray-900/80 shadow-lg"
          : "bg-transparent"
      }`}
      aria-label="Primary Navigation"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          offset={-70}
          duration={600}
          className="w-12 h-12 flex items-center justify-center rounded-full 
                     bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-lg 
                     cursor-pointer shadow-md hover:scale-105 transition"
        >
          CJ
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-gray-200">
          {links.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase().replace(/\s+/g, "")}
              spy={true}
              activeClass="text-blue-300 border-b-2 border-blue-400"
              smooth={true}
              offset={-70}
              duration={600}
              className="cursor-pointer text-sm font-medium hover:text-blue-300 transition"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200 hover:text-blue-400 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-lg shadow-lg"
          >
            <div className="flex flex-col items-center gap-6 py-6 text-gray-200">
              {links.map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase().replace(/\s+/g, "")}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  className="cursor-pointer text-lg font-medium hover:text-blue-300 transition"
                  onClick={() => setMenuOpen(false)} // close menu after click
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

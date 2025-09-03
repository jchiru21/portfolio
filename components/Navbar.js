// components/Navbar.js
import { useState, useEffect } from "react"
import { Link } from "react-scroll"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = ["Home", "About Me", "Skills", "Projects", "Experience", "Education", "Contact"]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled ? "backdrop-blur-lg bg-gray-900/70 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Glowing Logo */}
        <Link
          to="home"
          smooth={true}
          offset={-70}
          duration={600}
          className="w-12 h-12 flex items-center justify-center 
                     rounded-full bg-blue-600 text-white font-bold text-lg 
                     cursor-pointer shadow-lg hover:scale-110 transition 
                     animate-pulse"
        >
          CJ
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6 text-gray-300">
          {links.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase().replace(/\s+/g, "")}
              smooth={true}
              offset={-70}
              duration={600}
              className="cursor-pointer hover:text-blue-400 transition"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

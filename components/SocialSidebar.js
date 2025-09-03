// components/SocialSidebar.js
import { Github, Linkedin } from "lucide-react"
import { FaXTwitter } from "react-icons/fa6" 

export default function SocialSidebar() {
  return (
    <div className="fixed left-6 top-1/3 z-50 flex flex-col gap-6 items-center">
      {/* GitHub */}
      <a
        href="https://github.com/jchiru21"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-400 transition"
      >
        <Github size={24} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/chiranjeevijoshi"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-400 transition"
      >
        <Linkedin size={24} />
      </a>

      {/* Twitter (X) */}
      <a
        href="https://x.com/Chiranj43820149?s=08"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-400 transition"
      >
        <FaXTwitter size={22} />
      </a>

      {/* Decorative line */}
      <div className="w-px h-24 bg-gray-600 mt-2"></div>
    </div>
  )
}

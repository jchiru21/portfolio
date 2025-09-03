import { Github, Linkedin, Twitter} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-center py-6 border-t border-gray-800">
      <p className="text-gray-500 text-sm mb-2">
        © {new Date().getFullYear()} Chiranjeevi Joshi. All rights reserved.
      </p>

      <div className="flex justify-center gap-6 text-gray-400 text-sm">
        <a
          href="https://github.com/jchiru21"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-400 transition"
        >
          <Github size={16} /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/chiranjeevijoshi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-400 transition"
        >
          <Linkedin size={16} /> LinkedIn
        </a>
        <a
          href="https://x.com/Chiranj43820149?s=08"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-400 transition"
        >
          <Twitter size={16} /> X
        </a>
       
      </div>
    </footer>
  )
}

import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-center py-6 border-t border-gray-800">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Chiranjeevi Joshi. All rights reserved.
      </p>
    </footer>
  )
}

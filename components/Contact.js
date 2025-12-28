import { motion } from "framer-motion"
import { Mail, Phone, Github, Linkedin } from "lucide-react"
import { SiLeetcode } from "react-icons/si"

export default function Contact() {
  return (
    <div id="contact" className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">📬 Let’s Connect</h2>

      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Direct Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-card p-6 min-h-[140px]"
        >
          <h3 className="text-xl font-bold mb-4">Direct</h3>
          <div className="space-y-3">
            <p className="flex items-center gap-2 text-gray-300">
              <Mail size={18} className="text-blue-400" />
              <a href="mailto:joshichiranjeevi9@gmail.com" className="hover:text-blue-400 transition">
                joshichiranjeevi9@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2 text-gray-300">
              <Phone size={18} className="text-green-400" />
              +91 7899659451
            </p>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="glass-card p-6 min-h-[140px]"
        >
          <h3 className="text-xl font-bold mb-4">Social</h3>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://github.com/jchiru21" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--bg-secondary)]/80 border border-[var(--border-color)] transition">
              <Github size={18} className="text-white" />
              <span className="text-gray-200 text-sm">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/chiranjeevijoshi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--bg-secondary)]/80 border border-[var(--border-color)] transition">
              <Linkedin size={18} className="text-blue-400" />
              <span className="text-gray-200 text-sm">LinkedIn</span>
            </a>
            <a href="https://leetcode.com/u/Chiranjeevijoshi/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--bg-secondary)]/80 border border-[var(--border-color)] transition">
              <SiLeetcode size={18} className="text-yellow-400" />
              <span className="text-gray-200 text-sm">LeetCode</span>
            </a>
            <a href="https://x.com/Chiranj43820149?s=08" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--bg-secondary)]/80 border border-[var(--border-color)] transition">
              <span className="inline-block w-4 h-4 rounded-full bg-sky-400" />
              <span className="text-gray-200 text-sm">Twitter/X</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

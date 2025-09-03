import { motion } from "framer-motion"
import { Mail, Phone } from "lucide-react"

export default function Contact() {
  return (
    <div id="contact" className="max-w-6xl mx-auto py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-12 text-white">📬 Contact</h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        {/* Email */}
        <p className="flex justify-center items-center gap-2 text-gray-300">
          <Mail size={18} className="text-blue-400" />
          <a
            href="mailto:joshichiranjeevi9@gmail.com"
            className="hover:text-blue-400 transition"
          >
            joshichiranjeevi9@gmail.com
          </a>
        </p>

        {/* Phone */}
        <p className="flex justify-center items-center gap-2 text-gray-300">
          <Phone size={18} className="text-green-400" />
          +91 7899659451
        </p>
      </motion.div>
    </div>
  )
}

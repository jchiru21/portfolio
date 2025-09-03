import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="flex flex-col items-center text-center py-32 bg-gradient-to-r from-blue-900 to-gray-900">
      <motion.h1 
        className="text-6xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Chiranjeevi Joshi
      </motion.h1>
      
      <motion.p 
        className="mt-4 text-xl text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Software Engineer | AI/ML Innovator | Full-Stack Developer
      </motion.p>
      
      <motion.div 
        className="mt-6 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a href="/resume.pdf" className="px-6 py-3 rounded bg-blue-600 hover:bg-blue-700">
          View Resume
        </a>
        <a href="#contact" className="px-6 py-3 rounded bg-gray-800 hover:bg-gray-700">
          Get in Touch
        </a>
      </motion.div>
    </div>
  )
}

import { motion } from "framer-motion"

export default function About() {
  return (
    <div id="about me" className="max-w-5xl mx-auto py-20 px-6 text-center">
      <motion.img
        src="/avatar.png"   // add your avatar image in /public
        alt="Chiranjeevi Avatar"
        className="w-32 h-32 mx-auto rounded-full glass-card"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
      <h2 className="text-4xl font-bold mt-6">About Me</h2>
      <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
        Software Engineer | AI/ML Enthusiast | Full-Stack Developer. Passionate about building intelligent systems,
        scalable apps, and solving real-world problems using machine learning and system design. Experienced with
        Python, C++, React, and modern ML frameworks.
      </p>
    </div>
  )
}

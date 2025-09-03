import { motion } from "framer-motion"

export default function Coursework() {
  const courses = [
    "Advanced Machine Learning", 
    "Data Structures & Algorithms", 
    "Operating Systems", 
    "Natural Language Processing", 
    "Cloud Computing"
  ]

  return (
    <div className="max-w-6xl mx-auto py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-10">📘 Coursework</h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {courses.map((c, idx) => (
          <motion.span
            key={c}
            className="px-4 py-2 bg-gray-800 rounded-full text-sm shadow"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {c}
          </motion.span>
        ))}
      </div>
    </div>
  )
}

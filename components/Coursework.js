import { motion } from "framer-motion"
import { BookOpen } from "lucide-react"

const Coursework = () => {
  const courses = {
    "Core Computer Science": [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Object-Oriented Programming",
      "Software Engineering",
    ],
    "Machine Learning & AI": [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Pattern Recognition",
    ],
    "Systems & DevOps": [
      "Cloud Computing",
      "Distributed Systems",
      "Microservices Architecture",
      "CI/CD & DevOps",
    ],
  }

  return (
    <section id="coursework" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Relevant Coursework</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Academic foundation in computer science and machine learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(courses).map(([category, courseList], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover:border-blue-500/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <BookOpen className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-bold">{category}</h3>
              </div>
              <ul className="space-y-2">
                {courseList.map((course, idx) => (
                  <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Coursework

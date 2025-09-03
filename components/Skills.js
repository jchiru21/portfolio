import { motion } from "framer-motion"
import { Code, Database, Cpu, Wrench } from "lucide-react"

export default function Skills() {

  const skills = [
    { 
      title: "Languages", 
      icon: <Code size={22} />, 
      list: ["C++", "Python", "Java", "SQL"] 
    },
    { 
      title: "Web/Backend", 
      icon: <Database size={22} />, 
      list: ["React", "Node.js", "Flask", "REST APIs"] 
    },
    { 
      title: "ML/AI", 
      icon: <Cpu size={22} />, 
      list: ["TensorFlow", "PyTorch", "OpenCV", "NLP", "Computer Vision"] 
    },
    { 
      title: "Tools", 
      icon: <Wrench size={22} />, 
      list: ["Git", "Docker", "Linux", "MySQL"] 
    },
  ]

  return (
    <div id="skills" className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">
        🚀 Skills & Technologies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((s, idx) => (
          <motion.div
            key={s.title}
            className="p-6 rounded-xl bg-gray-800 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-transparent hover:border-blue-500"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-blue-400 font-semibold mb-3">
              {s.icon} {s.title}
            </div>
            <ul className="text-gray-300 space-y-1">
              {s.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

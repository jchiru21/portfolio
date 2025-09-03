import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "Image Segmentation for Scene Understanding",
      description: "DeepLabV3+ on IDD dataset for autonomous driving.",
      tech: ["Python", "PyTorch", "DeepLabV3+"],
      link: "#"
    },
    {
      title: "Text Summarization & Translation",
      description: "BERT + Flask app for multilingual summarization.",
      tech: ["TensorFlow", "Keras", "Flask"],
      link: "#"
    },
    {
      title: "Real-Time Object Detection",
      description: "OpenCV + Flask + WebSocket for live camera feeds.",
      tech: ["Python", "OpenCV", "Flask"],
      link: "#"
    },
  ]

  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold mb-10 text-center">📂 Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((proj, index) => (
          <motion.div
            key={proj.title}
            className="p-6 rounded-xl bg-gray-900 shadow hover:shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-xl mb-2">{proj.title}</h3>
            <p className="text-gray-400 text-sm">{proj.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {proj.tech.map((t) => (
                <span key={t} className="text-xs bg-blue-600 px-2 py-1 rounded">{t}</span>
              ))}
            </div>
            <a href={proj.link} className="inline-block mt-4 text-blue-400 hover:underline">View More</a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

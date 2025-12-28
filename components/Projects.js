// components/Projects.js
import { motion } from "framer-motion"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Intelligent Text Processing Platform",
      description:
        "PyTorch and Hugging Face platform for multilingual summarization with a reranker pipeline, Flask API, and interactive web UI.",
      image: "/images/project2.png",
      github: "https://github.com/jchiru21"
    },
    {
      title: "Road Scene Understanding With Segmentation",
      description:
        "SegFormer-based semantic segmentation model trained on the IDD dataset with custom preprocessing, mixed precision training, and automated evaluation.",
      image: "/images/project1.png",
      github: "https://github.com/jchiru21"
    },
    {
      title: "Ecom Chat — API",
      description:
        "Dockerized Node.js and TypeScript API with PostgreSQL, Redis, and Prisma, featuring one-command setup and live debugging support.",
      image: "/images/project3.png",
      github: "https://github.com/jchiru21/ecom-chat-monorepo"
    },
    {
      title: "Text Summarization & Translation",
      description: "BERT + Flask app for multilingual summarization.",
      image: "/images/project4.png",
      github: "https://github.com/jchiru21"
    }
  ]

  return (
    <div id="projects" className="py-2">
      <h2 className="text-4xl font-bold mb-8 text-center text-[var(--text-primary)]">📂 Projects</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-10">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.title}
            className="glass-card overflow-hidden hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* next/image optimizes and prevents lint warning */}
            <div className="w-full h-48 relative">
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-t-lg"
              />
            </div>

            <div className="p-6">
              <h3 className="font-bold text-xl text-[var(--text-primary)]">{proj.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm mt-2">{proj.description}</p>

              <div className="mt-4">
                <a
                  href={proj.github}
                  className="text-sm text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

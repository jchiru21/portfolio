// components/Projects.js
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Image Segmentation for Scene Understanding",
      description: "DeepLabV3+ on the IDD dataset for autonomous driving.",
      image: "/images/project1.png",
      github: "https://github.com/jchiru21"
    },
    {
      title: "Text Summarization & Translation",
      description: "BERT + Flask app for multilingual summarization.",
      image: "/images/project2.png",
      github: "https://github.com/jchiru21"
    },
    {
      title: "Real-Time Object Detection",
      description: "OpenCV + Flask + WebSocket for live camera feeds.",
      image: "/images/project3.png",
      github: "https://github.com/jchiru21"
    },
    {
      title: "Netflix Clone",
      description:
        "Netflix UI rebuilt using React, TS, Material UI with animations, slick carousel, video.js, and state management.",
      image: "/images/netflix-clone.png",
      github: "https://github.com/jchiru21"
    }
  ];

  return (
    <div id="projects" className="bg-gray-950 py-20 px-6">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">
        📂 Projects
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-10">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.title}
            className="rounded-xl overflow-hidden bg-gray-800 shadow-lg hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="font-bold text-xl text-white">{proj.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{proj.description}</p>

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
  );
}

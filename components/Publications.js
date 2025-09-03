import { motion } from "framer-motion"

export default function Publications() {
  const publications = [
    {
      title: "Summarisation and Translation using NLP",
      journal: "IJRASET, Vol. 12, Issue 5, May 2024",
      doi: "https://doi.org/10.22214/ijraset.2024.61391"
    }
  ]

  return (
    <div className="bg-gray-900 py-20 px-6">
      <h2 className="text-4xl font-bold mb-10 text-center">📑 Publications</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {publications.map((pub, idx) => (
          <motion.div
            key={pub.title}
            className="p-6 rounded-xl bg-gray-800 shadow"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-xl">{pub.title}</h3>
            <p className="text-gray-400">{pub.journal}</p>
            <a href={pub.doi} className="text-blue-400 hover:underline mt-2 inline-block">
              View DOI
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

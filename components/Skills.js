export default function Skills() {
    const skills = {
      Languages: ["C++", "Python", "JavaScript"],
      "Web/Backend": ["React", "Node.js", "Express"],
      "ML/AI": ["TensorFlow", "PyTorch", "NLP", "Computer Vision"],
      Tools: ["Git", "Docker", "SQL", "MongoDB"],
    }
  
    return (
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold mb-10 text-center">🚀 Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category} className="p-6 rounded-xl shadow bg-white">
              <h3 className="font-bold text-lg mb-3">{category}</h3>
              <ul className="space-y-1 text-gray-700">
                {list.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
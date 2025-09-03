export default function Experience() {
    const experience = [
      {
        role: "Software Developer Intern",
        company: "XYZ Corp",
        duration: "2024",
        details: "Worked on AI/ML pipeline automation and backend APIs."
      },
    ]
  
    return (
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold mb-10 text-center">💼 Experience</h2>
        {experience.map((exp) => (
          <div key={exp.role} className="mb-6 border-l-4 border-blue-600 pl-4">
            <h3 className="font-bold">{exp.role}</h3>
            <p>{exp.company} — {exp.duration}</p>
            <p className="text-gray-600">{exp.details}</p>
          </div>
        ))}
      </div>
    )
  }
  
export default function Education() {
    const education = [
      { degree: "B.Tech in Computer Science", school: "Your University", year: "2023" }
    ]
  
    return (
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-semibold mb-10 text-center">🎓 Education</h2>
        {education.map((edu) => (
          <div key={edu.degree} className="mb-6 text-center">
            <h3 className="font-bold">{edu.degree}</h3>
            <p>{edu.school} — {edu.year}</p>
          </div>
        ))}
      </div>
    )
  }
  
export default function Navbar() {
    return (
      <nav className="sticky top-0 bg-white shadow z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-bold text-lg">Chiranjeevi Joshi</h1>
          <div className="space-x-6">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#experience" className="hover:text-blue-600">Experience</a>
            <a href="#education" className="hover:text-blue-600">Education</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>
    )
  }
  
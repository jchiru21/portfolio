import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Coursework from "@/components/Coursework"
import Publications from "@/components/Publications"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="bg-gray-950 text-gray-100">
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="experience"><Experience /></section>
      <section id="education"><Education /></section>
      <section id="coursework"><Coursework /></section>
      <section id="publications"><Publications /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </main>
  )
}

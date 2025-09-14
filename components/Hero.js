// components/Hero.js
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

// stable codeSets outside component
const codeSets = [
  [
    "def build_future(ai, code):",
    "    return ai + code + ' 🚀'",
    "print(build_future('ML', 'Engineering'))"
  ],
  [
    "class Developer:",
    "    def __init__(self, name):",
    "        self.name = 'Chiranjeevi Joshi'"
  ],
  [
    "import torch",
    "model = torch.nn.Transformer()",
    "print('Optimizing AI Inference ⚡')"
  ],
  [
    "for skill in ['Python', 'AI/ML', 'Full-Stack']:",
    "    print(f'Leveling up {skill} ✅')",
    "print('Ready for Challenges! 🔥')"
  ],
  [
    "function innovate(tech) {",
    "  return `${tech} at scale 🚀`; }",
    "console.log(innovate('AI/ML'));"
  ],
  [
    "int main() {",
    "  cout << \"Engineering the Future 🚀\" << endl;",
    "  return 0;}",
  ]
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [text, setText] = useState(codeSets[0].map(() => ""))
  const [setIndex, setSetIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!mounted) return
    const currentSet = codeSets[setIndex % codeSets.length]
    const typeSpeed = deleting ? 30 : 60
    const holdDelay = 1500

    let timer
    if (!deleting && charIndex <= currentSet[0].length) {
      timer = setTimeout(() => {
        setText(currentSet.map(line => line.slice(0, charIndex)))
        setCharIndex(ci => ci + 1)
      }, typeSpeed)
    } else if (!deleting && charIndex > currentSet[0].length) {
      timer = setTimeout(() => setDeleting(true), holdDelay)
    } else if (deleting && charIndex >= 0) {
      timer = setTimeout(() => {
        setText(currentSet.map(line => line.slice(0, charIndex)))
        setCharIndex(ci => ci - 1)
      }, typeSpeed)
    } else if (deleting && charIndex < 0) {
      setDeleting(false)
      setCharIndex(0)
      setSetIndex(si => si + 1)
    }

    return () => clearTimeout(timer)
    // codeSets is defined outside the component and is stable,
    // eslint should be satisfied by the deps below.
  }, [mounted, charIndex, deleting, setIndex])

  return (
    <div
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <motion.h1
        className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        Hello, I&apos;m Chiranjeevi
      </motion.h1>

      <motion.p className="mt-4 text-xl text-gray-300 max-w-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.9 }}>
        Software Developer
      </motion.p>

      <motion.div
        className="mt-8 w-full max-w-3xl bg-black/40 glass-card border border-white/10 px-6 py-6 rounded-lg font-mono text-left text-sm text-blue-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.9 }}
      >
        <div className="space-y-2">
          {text.map((line, i) => (
            <div key={i}>
              <code>{line}<span className="blink">|</span></code>
            </div>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        .blink { display:inline-block; width:10px; animation: blink 1s steps(2,start) infinite; color:#60a5fa; }
        @keyframes blink { to { visibility: hidden; } }
      `}</style>
    </div>
  )
}

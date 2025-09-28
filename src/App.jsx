"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

// Components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Loader from "./components/Loader"
import CustomCursor from "./components/CustomCursor"

// Pages
import Home from "./pages/Home"
import Features from "./pages/Features"
import Progress from "./pages/Progress"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
      <div className="App">
        <CustomCursor />

        <AnimatePresence>{loading && <Loader />}</AnimatePresence>

        {!loading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Navbar />

            <main className="min-h-screen">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/features" element={<Features />} />
                <Route path="/progress" element={<Progress />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>

            <Footer />
          </motion.div>
        )}
      </div>
  )
}

export default App

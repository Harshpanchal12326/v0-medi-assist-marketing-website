import "./App.css"
import { ThemeProvider } from "./context/ThemeContext"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Ecosystem from "./components/Ecosystem"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import Testimonials from "./components/Testimonials"
import Pricing from "./components/Pricing"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <Ecosystem />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

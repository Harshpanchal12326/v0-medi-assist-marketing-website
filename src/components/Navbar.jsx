"use client"

import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (e, id) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const element = document.getElementById(id.replace("#", ""))
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="logo">MA</div>
          <span className="brand-name">MediAssist</span>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={(e) => scrollToSection(e, "#home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#features" onClick={(e) => scrollToSection(e, "#features")}>
              Features
            </a>
          </li>
          <li>
            <a href="#ecosystem" onClick={(e) => scrollToSection(e, "#ecosystem")}>
              Products
            </a>
          </li>
          <li>
            <a href="#pricing" onClick={(e) => scrollToSection(e, "#pricing")}>
              Pricing
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

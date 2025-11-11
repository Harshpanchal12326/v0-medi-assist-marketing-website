"use client"
import { useTheme } from "../context/ThemeContext"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="theme-toggle">
      <button
        className={`toggle-btn ${theme === "light" ? "active" : ""}`}
        onClick={() => toggleTheme("light")}
        title="Light mode"
      >
        ☀️
      </button>
      <button
        className={`toggle-btn ${theme === "dark" ? "active" : ""}`}
        onClick={() => toggleTheme("dark")}
        title="Dark mode"
      >
        🌙
      </button>
    </div>
  )
}

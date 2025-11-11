import ThemeToggle from "./ThemeToggle"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>MediAssist</h4>
          <p>Empowering digital healthcare through unified platforms.</p>
        </div>

        <div className="footer-section">
          <h4>Products</h4>
          <ul>
            <li>
              <a href="#ecosystem">CareFlow Pro</a>
            </li>
            <li>
              <a href="#ecosystem">PharmAssist</a>
            </li>
            <li>
              <a href="#ecosystem">HealthHub</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2025 MediAssist. All rights reserved.</p>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  )
}

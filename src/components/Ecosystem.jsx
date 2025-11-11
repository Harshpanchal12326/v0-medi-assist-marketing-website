export default function Ecosystem() {
  const ecosystemItems = [
    {
      id: 1,
      icon: "01",
      title: "CareFlow Pro",
      subtitle: "Doctor Portal",
      description:
        "Desktop & Web application for physicians to manage patient records, prescriptions, and consultations with precision.",
    },
    {
      id: 2,
      icon: "02",
      title: "PharmAssist",
      subtitle: "Pharmacy Management",
      description:
        "Comprehensive pharmacy software to process prescriptions, manage inventory, and track medicine dispensing in real-time.",
    },
    {
      id: 3,
      icon: "03",
      title: "HealthHub",
      subtitle: "Patient App",
      description:
        "Mobile & Web platform for patients to book appointments, manage health records, and stay connected with providers.",
    },
  ]

  return (
    <section id="ecosystem" className="ecosystem">
      <div className="section-container">
        <h2 className="section-title">Our Products</h2>
        <p className="section-subtitle">Comprehensive ecosystem designed for modern healthcare</p>

        <div className="ecosystem-grid">
          {ecosystemItems.map((item) => (
            <div key={item.id} className="ecosystem-card">
              <div className="card-number">{item.icon}</div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-subtitle">{item.subtitle}</p>
              <p className="card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

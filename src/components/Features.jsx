export default function Features() {
  const features = [
    {
      title: "Real-time Data Sync",
      description:
        "Instant synchronization across all platforms ensures everyone has access to the latest patient information.",
    },
    {
      title: "Secure & HIPAA Compliant",
      description: "Enterprise-grade encryption protecting sensitive healthcare data",
    },
    { title: "Intuitive Interface", description: "User-friendly design reduces training time and increases adoption" },
    {
      title: "Advanced Analytics",
      description: "Comprehensive reporting tools to track performance and improve outcomes",
    },
    {
      title: "Scalable Architecture",
      description: "Built to grow with your practice, from clinics to healthcare networks",
    },
    { title: "24/7 Support", description: "Dedicated support team available around the clock" },
  ]

  return (
    <section id="features" className="features">
      <div className="section-container">
        <h2 className="section-title">Why Choose MediAssist</h2>
        <p className="section-subtitle">Industry-leading features designed for healthcare professionals</p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

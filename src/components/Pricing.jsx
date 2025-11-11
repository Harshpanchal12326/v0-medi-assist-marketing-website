export default function Pricing() {
  const pricingPlans = [
    {
      id: 1,
      type: "CareFlow Pro",
      price: "$299",
      period: "/month",
      description: "For individual practitioners",
      features: ["Patient Records", "Appointment Scheduling", "Digital Prescriptions", "Mobile Access"],
    },
    {
      id: 2,
      type: "PharmAssist",
      price: "$199",
      period: "/month",
      description: "For individual pharmacies",
      features: ["Prescription Management", "Inventory Tracking", "Sales Reports", "Customer Database"],
      highlighted: true,
    },
    {
      id: 3,
      type: "HealthHub",
      price: "Free",
      period: "forever",
      description: "For all patients",
      features: ["Health Records", "Appointment Tracking", "Prescription Updates", "Appointment Reminders"],
    },
  ]

  return (
    <section id="pricing" className="pricing">
      <div className="section-container">
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <p className="section-subtitle">Choose the plan that fits your needs</p>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className={`pricing-card ${plan.highlighted ? "highlighted" : ""}`}>
              <h3 className="plan-type">{plan.type}</h3>
              <p className="plan-description">{plan.description}</p>

              <div className="price">
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>

              <button className="btn btn-pricing">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

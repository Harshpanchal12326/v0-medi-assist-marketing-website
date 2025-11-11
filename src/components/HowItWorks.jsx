export default function HowItWorks() {
  const steps = [
    { number: "1", title: "Register Institution", description: "Set up your clinic or pharmacy in minutes" },
    { number: "2", title: "Configure Workflow", description: "Customize the platform to match your processes" },
    { number: "3", title: "Invite Team Members", description: "Add staff with role-based access controls" },
    { number: "4", title: "Start Managing Patients", description: "Begin seeing benefits immediately" },
  ]

  return (
    <section className="how-it-works">
      <div className="section-container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">Get started in four simple steps</p>

        <div className="flow-container">
          {steps.map((step, index) => (
            <div key={index} className="flow-step">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && <div className="flow-arrow">→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

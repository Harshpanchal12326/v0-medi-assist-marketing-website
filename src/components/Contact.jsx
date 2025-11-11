"use client"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [newsletter, setNewsletter] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for reaching out! We'll be in touch soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  const handleNewsletter = (e) => {
    e.preventDefault()
    alert(`Newsletter signup confirmed for ${newsletter}`)
    setNewsletter("")
  }

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have questions? Our team is here to help. Reach out and we'll respond as soon as possible.
        </p>

        <div className="contact-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>

          <div className="newsletter-box">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Stay updated with the latest healthcare insights and MediAssist features.</p>
            <form onSubmit={handleNewsletter}>
              <input
                type="email"
                placeholder="Enter your email"
                value={newsletter}
                onChange={(e) => setNewsletter(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-secondary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

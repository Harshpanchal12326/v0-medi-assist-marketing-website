"use client"

import { useState } from "react"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      role: "Chief Medical Officer",
      text: "MediAssist transformed how we manage patient records. The seamless integration has reduced prescription errors significantly.",
    },
    {
      id: 2,
      name: "Rajesh Patel",
      role: "Pharmacy Manager",
      text: "Our pharmacy efficiency improved by 40% within the first month. The inventory management features save us hours daily.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Patient Services Director",
      text: "Patients love the app. Appointment reminders and health record access have dramatically improved our satisfaction scores.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="testimonials">
      <div className="section-container">
        <h2 className="section-title">What Our Users Say</h2>
        <p className="section-subtitle">Trusted by healthcare providers across the region</p>

        <div className="testimonial-slider">
          <div className="testimonial-card">
            <p className="testimonial-text">"{current.text}"</p>
            <div className="testimonial-author">
              <div className="author-info">
                <h4 className="author-name">{current.name}</h4>
                <p className="author-role">{current.role}</p>
              </div>
            </div>
          </div>

          <div className="slider-controls">
            <button className="slider-btn" onClick={prevTestimonial}>
              ←
            </button>
            <div className="slider-indicators">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`indicator ${index === currentIndex ? "active" : ""}`}
                  onClick={() => setCurrentIndex(index)}
                ></div>
              ))}
            </div>
            <button className="slider-btn" onClick={nextTestimonial}>
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

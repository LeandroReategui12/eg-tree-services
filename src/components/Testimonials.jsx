import { useEffect, useState } from "react";
import { TESTIMONIALS } from "../data/site";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % TESTIMONIALS.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section__intro reveal">
          <p className="eyebrow">Testimonials</p>
          <h2>What customers say about our work</h2>
        </div>

        <div className="testimonials__track">
          {TESTIMONIALS.map((item, i) => (
            <blockquote key={item.name} className={`quote${i === index ? " is-active" : ""}`}>
              <p>“{item.quote}”</p>
              <cite>
                {item.name} <span>Customer</span>
              </cite>
            </blockquote>
          ))}
        </div>

        <div className="testimonials__controls">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => setIndex((current) => (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => setIndex((current) => (current + 1) % TESTIMONIALS.length)}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

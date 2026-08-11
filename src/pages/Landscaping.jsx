import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { usePageMeta } from "../hooks/usePageMeta";
import { BASE } from "../data/site";

export default function Landscaping() {
  usePageMeta(
    "Landscaping Services | EG Tree Services LLC",
    "High-quality flower bed and mulch installation landscaping services in Cleveland, TX from EG Tree Services LLC."
  );

  return (
    <>
      <PageHero
        image={`${BASE}/2024/02/High-Quality-Landscaping-Services-in-Cleveland-TX-9.jpg`}
        title="High Quality Landscaping in Cleveland, TX"
        lead="Flower bed and mulch installations that create vibrant, welcoming outdoor spaces reflecting your style."
      />

      <section className="section">
        <div className="container prose-grid">
          <div className="reveal">
            <p className="eyebrow">Landscaping</p>
            <h2>Outdoor spaces designed to look lived-in and loved</h2>
            <p>
              EG Tree Services LLC specializes in landscaping details that make a lasting difference — from defining
              flower beds to applying mulch that protects soil, retains moisture, and elevates curb appeal.
            </p>
            <p>
              Whether you want a refreshed front yard or a polished commercial entrance, our team brings practical
              design sense and clean installation workmanship.
            </p>
          </div>
          <figure className="media-frame reveal reveal--delay-1">
            <img
              src={`${BASE}/2024/02/High-Quality-Landscaping-Services-in-Cleveland-TX-3.jpg`}
              alt="Landscaping in Cleveland, TX"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container detail-grid">
          <article className="detail reveal">
            <img
              src={`${BASE}/2024/02/High-Quality-Landscaping-Services-in-Cleveland-TX-2.jpg`}
              alt="Flower bed installation"
              loading="lazy"
            />
            <h3>Flower Beds Installation</h3>
            <p>
              We create structured, colorful flower beds that frame your property and complement existing trees and
              hardscape — built to look intentional and stay healthy.
            </p>
          </article>
          <article className="detail reveal reveal--delay-1">
            <img
              src={`${BASE}/2024/02/High-Quality-Landscaping-Services-in-Cleveland-TX-4.jpg`}
              alt="Mulch installation"
              loading="lazy"
            />
            <h3>Mulch Installation</h3>
            <p>
              Professional mulch application improves soil health, reduces weeds, and gives beds a finished look.
              Contact us to schedule mulch installation and refresh your outdoor spaces.
            </p>
          </article>
          <article className="detail reveal reveal--delay-2">
            <img
              src={`${BASE}/2024/02/High-Quality-Landscaping-Services-in-Cleveland-TX-1.jpg`}
              alt="Completed landscaping project"
              loading="lazy"
            />
            <h3>Complete Outdoor Refresh</h3>
            <p>
              Pair landscaping with our tree and cleaning services for a cohesive property transformation — one team,
              one schedule, one clean result.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__intro reveal">
            <p className="eyebrow">Gallery</p>
            <h2>Recent landscaping work</h2>
          </div>
          <div className="projects__mosaic reveal">
            <img
              src={`${BASE}/2024/02/High-Quality-Landscaping-Services-in-Cleveland-TX-7.jpg`}
              alt="Landscaping project"
              loading="lazy"
            />
            <img
              src={`${BASE}/2024/02/High-Quality-Landscaping-Services-in-Cleveland-TX-5.jpg`}
              alt="Mulched beds"
              loading="lazy"
            />
            <img
              src={`${BASE}/2024/02/High-Quality-Landscaping-Services-in-Cleveland-TX-6.jpg`}
              alt="Outdoor landscaping"
              loading="lazy"
            />
            <img
              src={`${BASE}/2024/02/High-Quality-Landscaping-Services-in-Cleveland-TX-8.jpg`}
              alt="Property landscaping"
              loading="lazy"
            />
          </div>
          <div className="section__cta reveal">
            <Link className="btn btn--primary" to="/contact">
              Request Landscaping Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

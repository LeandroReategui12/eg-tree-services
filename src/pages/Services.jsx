import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { usePageMeta } from "../hooks/usePageMeta";

const ROWS = [
  {
    title: "Tree Services",
    text: "Precise trimming, safe removal, fertilization, and stump grinding for a clean finish.",
    to: "/tree-services",
    image: "/img/services/tree-services/tree-removal/WhatsApp Image 2026-08-13 at 17.17.29.jpeg",
    flip: false,
  },
  {
    title: "Landscaping",
    text: "Flower beds, mulch, sod, and outdoor upgrades that reflect how you want the property to feel.",
    to: "/landscaping",
    image: "/img/services/landscaping-property-improvements/flower-bed-installation/WhatsApp Image 2026-08-13 at 17.17.03.jpeg",
    flip: true,
  },
  {
    title: "Lot Clearing & Cleanup",
    text: "Storm recovery, brush clearing, and land prep that leaves usable ground behind.",
    to: "/lot-clearing",
    image: "/img/services/tree-services/lot-clearing/WhatsApp Image 2026-08-13 at 17.16.27.jpeg",
    flip: false,
  },
];

export default function Services() {
  usePageMeta(
    "Our Services | EG Tree Services LLC",
    "Top-line tree services, landscaping, storm cleanup, and outdoor cleaning from EG Tree Services LLC in Cleveland, TX."
  );

  return (
    <>
      <PageHero
        image="/img/services/landscaping-property-improvements/fence-installation-repair/WhatsApp Image 2026-08-13 at 17.14.25.jpeg"
        title="Outdoor services for Cleveland properties"
        lead="Quality work across tree care, landscaping, and lot clearing — one crew, one schedule."
      />

      <section className="section">
        <div className="container">
          <div className="section__intro reveal">
            <p className="eyebrow">What We Offer</p>
            <h2>Choose the work your property needs.</h2>
          </div>
          <div className="service-stack">
            {ROWS.map((row) => (
              <article
                key={row.to}
                className={`service-row reveal${row.flip ? " service-row--flip" : ""}`}
                style={{ "--service-image": `url('${row.image}')` }}
              >
                <div className="service-row__media" aria-hidden="true"></div>
                <div className="service-row__body">
                  <h3>{row.title}</h3>
                  <p>{row.text}</p>
                  <Link className="text-link" to={row.to}>
                    Explore
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="section__cta reveal">
            <Link className="btn btn--accent" to="/contact">
              Schedule Your Service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { usePageMeta } from "../hooks/usePageMeta";
import { PHONE_HREF } from "../data/site";

const DETAILS = [
  {
    title: "Tree Removal",
    text: "Assessed, planned, and executed so nearby structures and landscaping stay protected.",
    image: "/img/services/tree-services/tree-removal/WhatsApp Image 2026-08-13 at 17.16.28.jpeg",
  },
  {
    title: "Tree Trimming",
    text: "Health, shape, and clearance cuts that reduce hazards and keep canopies strong.",
    image: "/img/services/tree-services/tree-removal/WhatsApp Image 2026-08-13 at 17.17.29.jpeg",
  },
  {
    title: "Stump Grinding",
    text: "A clean finish after removal so the yard becomes usable again.",
    image: "/img/services/tree-services/stump-grinding/WhatsApp Image 2026-08-13 at 17.16.02.jpeg",
  },
  {
    title: "Storm Damage Cleanup",
    text: "Fallen limbs and hazardous trees cleared quickly when weather hits.",
    image: "/img/services/tree-services/storm-damage-cleanup/WhatsApp Image 2026-08-13 at 17.16.03.jpeg",
  },
];

export default function TreeServices() {
  usePageMeta(
    "Tree Services | EG Tree Services LLC",
    "Top-rated tree removal, trimming, stump grinding, and fertilization in Cleveland, TX by EG Tree Services LLC."
  );

  return (
    <>
      <PageHero
        image="/img/services/tree-services/tree-removal/WhatsApp Image 2026-08-13 at 17.17.29.jpeg"
        title="Tree services done with precision"
        lead="Safe removal, careful trimming, stump grinding, and storm response for Cleveland properties."
      />

      <section className="section">
        <div className="container prose-grid">
          <div className="reveal">
            <p className="eyebrow">Tree Care</p>
            <h2>Arborists who prioritize safety and a clean finish.</h2>
            <p>
              Every job starts with the tree, the structures around it, and how you use the property. We plan the cut,
              protect what stays, and leave the site orderly.
            </p>
          </div>
          <figure className="media-frame reveal reveal--delay-1">
            <img
              src="/img/services/tree-services/land-clearing/WhatsApp Image 2026-08-13 at 17.17.38.jpeg"
              alt="Tree clearing equipment"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section__intro reveal">
            <p className="eyebrow">Services</p>
            <h2>Specialized care for every stage.</h2>
          </div>
          <div className="detail-grid">
            {DETAILS.map((item, index) => (
              <article key={item.title} className={`detail reveal${index % 3 === 1 ? " reveal--delay-1" : index % 3 === 2 ? " reveal--delay-2" : ""}`}>
                <img src={item.image} alt={item.title} loading="lazy" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="urgency">
        <div className="container urgency__inner reveal">
          <div>
            <h2>Ready to elevate the greenery?</h2>
            <p>Quality, safety, and clear communication on every Cleveland tree job.</p>
          </div>
          <div className="urgency__actions">
            <Link className="btn btn--accent" to="/contact">
              Free Estimate
            </Link>
            <a className="btn btn--ghost-dark" href={PHONE_HREF}>
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

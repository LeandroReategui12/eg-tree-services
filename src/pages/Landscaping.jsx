import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Landscaping() {
  usePageMeta(
    "Landscaping Services | EG Tree Services LLC",
    "High-quality flower bed and mulch installation landscaping services in Cleveland, TX from EG Tree Services LLC."
  );

  return (
    <>
      <PageHero
        image="/img/services/landscaping-property-improvements/sod-installation/WhatsApp Image 2026-08-13 at 17.15.42.jpeg"
        title="Landscaping that feels lived-in and finished"
        lead="Flower beds, mulch, sod, and outdoor upgrades that raise curb appeal."
      />

      <section className="section">
        <div className="container prose-grid">
          <div className="reveal">
            <p className="eyebrow">Landscaping</p>
            <h2>Beds, lawns, and details that hold together.</h2>
            <p>
              From defining a flower bed to laying sod and installing fences, we focus on clean edges, healthy soil
              coverage, and a result that matches the rest of the property.
            </p>
          </div>
          <figure className="media-frame reveal reveal--delay-1">
            <img
              src="/img/before-after/flower-bed-stone-porch/after.jpeg"
              alt="Finished flower bed"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container detail-grid">
          <article className="detail reveal">
            <img
              src="/img/services/landscaping-property-improvements/flower-bed-installation/WhatsApp Image 2026-08-13 at 17.16.46.jpeg"
              alt="Flower bed installation"
              loading="lazy"
            />
            <h3>Flower Bed Installation</h3>
            <p>Structured beds with solid borders, ready for plants and mulch.</p>
          </article>
          <article className="detail reveal reveal--delay-1">
            <img
              src="/img/services/landscaping-property-improvements/mulch-installation/WhatsApp Image 2026-08-13 at 17.15.43.jpeg"
              alt="Mulch installation"
              loading="lazy"
            />
            <h3>Mulch Installation</h3>
            <p>Fresh coverage that protects soil, reduces weeds, and finishes the look.</p>
          </article>
          <article className="detail reveal reveal--delay-2">
            <img
              src="/img/services/landscaping-property-improvements/sod-installation/WhatsApp Image 2026-08-13 at 17.15.26.jpeg"
              alt="Sod installation"
              loading="lazy"
            />
            <h3>Sod Installation</h3>
            <p>Graded ground and new turf for yards ready to grow in.</p>
          </article>
          <article className="detail reveal">
            <img
              src="/img/services/landscaping-property-improvements/fence-installation-repair/WhatsApp Image 2026-08-13 at 17.14.45.jpeg"
              alt="Fence installation"
              loading="lazy"
            />
            <h3>Fence Installation</h3>
            <p>Privacy fencing and repairs that square up the property line.</p>
          </article>
        </div>
        <div className="container section__cta reveal">
          <Link className="btn btn--primary" to="/contact">
            Request Landscaping Estimate
          </Link>
        </div>
      </section>
    </>
  );
}

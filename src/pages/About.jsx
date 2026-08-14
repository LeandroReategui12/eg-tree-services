import PageHero from "../components/PageHero";
import { usePageMeta } from "../hooks/usePageMeta";

export default function About() {
  usePageMeta(
    "About Us | EG Tree Services LLC",
    "Learn about EG Tree Services LLC — tree care, landscaping, and cleaning specialists serving Cleveland, TX and surrounding cities."
  );

  return (
    <>
      <PageHero
        image="/img/services/landscaping-property-improvements/mulch-installation/WhatsApp Image 2026-08-13 at 17.13.59.jpeg"
        title="Tree services specialists in Cleveland, TX"
        lead="EG Tree Services LLC — outdoor professionals for homes and businesses across East Texas."
      />

      <section className="section">
        <div className="container prose-grid">
          <div className="reveal">
            <p className="eyebrow">Who We Are</p>
            <h2>Dedicated outdoor professionals for every property.</h2>
            <p>
              We maintain the health and safety of trees, refresh landscapes, and clear land with the same standard:
              careful planning, clean execution, and respect for your property.
            </p>
            <p>
              Beyond tree care, we handle mulch and flower beds, yard cleanup, fencing, and lot clearing — so one team
              can take a project from hazard to finished.
            </p>
          </div>
          <figure className="media-frame reveal reveal--delay-1">
            <img
              src="/img/services/tree-services/tree-removal/WhatsApp Image 2026-08-13 at 17.16.28.jpeg"
              alt="EG Tree Services crew at work"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container split-cards">
          <article className="reveal">
            <p className="eyebrow">Mission</p>
            <h2>What drives the work</h2>
            <p>
              Deliver comprehensive tree care, landscaping, and cleaning in Cleveland and nearby communities — with
              professionalism, quality craftsmanship, and care for the land.
            </p>
          </article>
          <article className="reveal reveal--delay-1">
            <p className="eyebrow">Vision</p>
            <h2>A greener East Texas</h2>
            <p>
              Properties that feel healthy, open, and well kept — trees managed safely, landscapes that welcome people
              home, and outdoor spaces ready for their next use.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__intro reveal">
            <p className="eyebrow">Coverage</p>
            <h2>Serving a 60-mile radius from Cleveland, TX</h2>
          </div>
          <ul className="chip-list reveal">
            <li>Montgomery</li>
            <li>San Jacinto</li>
            <li>Liberty</li>
            <li>Harris</li>
            <li>Walker</li>
            <li>Trinity</li>
            <li>Grimes</li>
            <li>Waller</li>
          </ul>
        </div>
      </section>
    </>
  );
}

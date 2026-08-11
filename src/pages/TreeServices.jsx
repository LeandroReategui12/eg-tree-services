import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { usePageMeta } from "../hooks/usePageMeta";
import { BASE, PHONE_HREF } from "../data/site";

export default function TreeServices() {
  usePageMeta(
    "Tree Services | EG Tree Services LLC",
    "Top-rated tree removal, trimming, stump grinding, and fertilization in Cleveland, TX by EG Tree Services LLC."
  );

  return (
    <>
      <PageHero
        image={`${BASE}/2024/02/Top-Rated-Tree-Services-in-Cleveland-TX-4.jpg`}
        title="Top Rated Tree Services in Cleveland, TX"
        lead="Expert arborists delivering safe removal, precise trimming, stump grinding, and fertilization for residential and commercial properties."
      />

      <section className="section">
        <div className="container prose-grid">
          <div className="reveal">
            <p className="eyebrow">Tree Care</p>
            <h2>Tree services by EG Tree Services LLC</h2>
            <p>
              Welcome to EG Tree Services LLC, your top-rated destination for professional tree services in Cleveland,
              TX. Transform your outdoor space with tree removal, tree trimming, stump grinding, and tree fertilization.
            </p>
            <p>
              Our expert arborists handle every job with precision — prioritizing safety, minimizing disruption, and
              promoting long-term tree health and vitality.
            </p>
          </div>
          <figure className="media-frame reveal reveal--delay-1">
            <img
              src={`${BASE}/2024/02/Top-Rated-Tree-Services-in-Cleveland-TX-5.jpg`}
              alt="Tree trimming in Cleveland, TX"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section__intro reveal">
            <p className="eyebrow">Our Tree Services</p>
            <h2>Specialized care for every stage of the job</h2>
          </div>
          <div className="detail-grid">
            <article className="detail reveal">
              <img
                src={`${BASE}/2024/02/Top-Rated-Tree-Services-in-Cleveland-TX-9.jpg`}
                alt="Tree removal"
                loading="lazy"
              />
              <h3>Tree Removal Services</h3>
              <p>
                Careful planning and execution from assessment through cleanup. We consider tree health, size, and
                proximity to structures to remove trees safely while protecting your property.
              </p>
            </article>
            <article className="detail reveal reveal--delay-1">
              <img
                src={`${BASE}/2024/02/Top-Rated-Tree-Services-in-Cleveland-TX-6.jpg`}
                alt="Tree trimming"
                loading="lazy"
              />
              <h3>Tree Trimming Services</h3>
              <p>
                Routine trimming enhances tree health, shape, and aesthetics — reducing hazards and helping trees thrive
                season after season.
              </p>
            </article>
            <article className="detail reveal reveal--delay-2">
              <img
                src={`${BASE}/2024/02/Top-Rated-Tree-Services-in-Cleveland-TX-7.jpg`}
                alt="Stump grinding"
                loading="lazy"
              />
              <h3>Stump Grinding Services</h3>
              <p>
                After removal, stump grinding delivers a clean, polished finish so you can reclaim usable yard space
                without leftover obstacles.
              </p>
            </article>
            <article className="detail reveal">
              <img
                src={`${BASE}/2024/02/Top-Rated-Tree-Services-in-Cleveland-TX-10.jpg`}
                alt="Tree fertilization"
                loading="lazy"
              />
              <h3>Tree Fertilization Services</h3>
              <p>
                Targeted fertilization promotes long-term health and vitality, giving your trees the nutrients they need
                to grow stronger.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="urgency">
        <div className="container urgency__inner reveal">
          <div>
            <h2>Ready to elevate your property’s greenery?</h2>
            <p>Trust EG Tree Services for quality, safety, and customer satisfaction in Cleveland, TX.</p>
          </div>
          <div className="urgency__actions">
            <Link className="btn btn--accent" to="/contact">
              Free Estimate
            </Link>
            <a className="btn btn--dark" href={PHONE_HREF}>
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

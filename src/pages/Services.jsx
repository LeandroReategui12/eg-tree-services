import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { usePageMeta } from "../hooks/usePageMeta";
import { BASE } from "../data/site";

export default function Services() {
  usePageMeta(
    "Our Services | EG Tree Services LLC",
    "Top-line tree services, landscaping, storm cleanup, and outdoor cleaning from EG Tree Services LLC in Cleveland, TX."
  );

  return (
    <>
      <PageHero
        image={`${BASE}/2024/02/Top-Rated-Tree-Services-in-Cleveland-TX-7.jpg`}
        title="Top Line Tree Services in Cleveland, TX"
        lead="Quality, professionalism, and customer satisfaction for over a decade — tree care, landscaping, and outdoor cleaning."
      />

      <section className="section">
        <div className="container">
          <div className="section__intro reveal">
            <p className="eyebrow">What We Offer</p>
            <h2>Check out the top-notch services we offer</h2>
            <p>
              EG Tree Services LLC has been synonymous with quality for over a decade. Our arborists, landscapers, and
              cleaning experts are passionate about enhancing the beauty and health of your outdoor spaces.
            </p>
          </div>
          <div className="feature-rows">
            <article className="feature-row reveal">
              <img
                src={`${BASE}/2024/02/Top-Rated-Tree-Services-in-Cleveland-TX-8.jpg`}
                alt="Tree services"
                loading="lazy"
              />
              <div>
                <h3>Tree Services</h3>
                <p>
                  Precise trimming, safe and efficient removal, fertilization to boost growth, and stump grinding for a
                  clean finish.
                </p>
                <Link className="text-link" to="/tree-services">
                  Explore tree services
                </Link>
              </div>
            </article>
            <article className="feature-row feature-row--reverse reveal">
              <img
                src={`${BASE}/2024/02/High-Quality-Landscaping-Services-in-Cleveland-TX-7.jpg`}
                alt="Landscaping services"
                loading="lazy"
              />
              <div>
                <h3>Landscaping Services</h3>
                <p>
                  We specialize in flower bed and mulch installations, creating vibrant outdoor spaces that reflect your
                  unique style.
                </p>
                <Link className="text-link" to="/landscaping">
                  Explore landscaping
                </Link>
              </div>
            </article>
            <article className="feature-row reveal">
              <img
                src={`${BASE}/2024/02/Lot-Clearing-in-Cleveland-TX-2.jpg`}
                alt="Lot clearing and cleaning"
                loading="lazy"
              />
              <div>
                <h3>Lot Clearing & Cleaning</h3>
                <p>
                  Storm damage cleanup, pressure washing, and lot clearing to rejuvenate surfaces and restore your
                  property after severe weather.
                </p>
                <Link className="text-link" to="/lot-clearing">
                  Explore lot clearing
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section__intro reveal">
            <p className="eyebrow">Why Choose Us</p>
            <h2>Built for residential and commercial properties</h2>
          </div>
          <ul className="why__grid">
            <li className="reveal">
              <strong>Expertise & Experience</strong>
              <span>Over 15 years mastering tailored outdoor solutions.</span>
            </li>
            <li className="reveal reveal--delay-1">
              <strong>Comprehensive Solutions</strong>
              <span>One-stop service for tree care, landscaping, and cleaning.</span>
            </li>
            <li className="reveal reveal--delay-2">
              <strong>Insured Team</strong>
              <span>Safety and security for employees and customers.</span>
            </li>
            <li className="reveal">
              <strong>State-of-the-Art Equipment</strong>
              <span>Advanced tools for precise, efficient results.</span>
            </li>
            <li className="reveal reveal--delay-1">
              <strong>Residential & Commercial</strong>
              <span>Services tailored to homeowners and businesses.</span>
            </li>
            <li className="reveal reveal--delay-2">
              <strong>Customer-Centric</strong>
              <span>We listen, keep you informed, and prioritize satisfaction.</span>
            </li>
          </ul>
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

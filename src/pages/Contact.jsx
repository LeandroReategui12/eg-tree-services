import { Link } from "react-router-dom";
import EstimateForm from "../components/EstimateForm";
import PageHero from "../components/PageHero";
import { usePageMeta } from "../hooks/usePageMeta";
import { BASE, EMAIL, EMAIL_HREF, HOURS, PHONE, PHONE_HREF } from "../data/site";

export default function Contact() {
  usePageMeta(
    "Contact Us | EG Tree Services LLC",
    "Get a free estimate for affordable tree services in Cleveland, TX. Call (281) 676-0474 or request a quote online."
  );

  return (
    <>
      <PageHero
        image={`${BASE}/2024/02/Top-Rated-Tree-Services-in-Cleveland-TX-8.jpg`}
        title="Affordable Tree Services in Cleveland, TX"
        lead="Transparent pricing and exceptional value — contact EG Tree Services LLC for a personalized free estimate."
      />

      <section className="section contact" id="contact">
        <div className="container contact__grid">
          <div className="contact__copy reveal">
            <p className="eyebrow">Get a Free Estimate</p>
            <h2>Contact us for affordable environmental solutions</h2>
            <p>
              Discover the perfect blend of quality and affordability. From tree removal and trimming to stump grinding
              and fertilization, we deliver cost-effective service without compromising results.
            </p>
            <p>
              <strong>Why choose our affordable tree services?</strong> Pricing transparency, customer satisfaction, and
              exceptional value for your investment.
            </p>
            <ul className="coverage__facts">
              <li>
                <strong>Phone</strong> <a href={PHONE_HREF}>{PHONE}</a>
              </li>
              <li>
                <strong>Email</strong> <a href={EMAIL_HREF}>{EMAIL}</a>
              </li>
              <li>
                <strong>Hours</strong> {HOURS}
              </li>
              <li>
                <strong>Area</strong> Cleveland, TX + 60-mile radius
              </li>
            </ul>
          </div>
          <EstimateForm />
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section__intro reveal">
            <p className="eyebrow">Learn More</p>
            <h2>Explore our services while you reach out</h2>
          </div>
          <div className="services__list">
            <article
              className="service reveal"
              style={{
                "--service-image": `url('${BASE}/2024/02/Top-Rated-Tree-Services-in-Cleveland-TX-8.jpg')`,
              }}
            >
              <div className="service__media" aria-hidden="true"></div>
              <div className="service__body">
                <h3>Tree Services</h3>
                <p>Removal, trimming, stump grinding, and fertilization.</p>
                <Link className="text-link" to="/tree-services">
                  Find out
                </Link>
              </div>
            </article>
            <article
              className="service reveal reveal--delay-1"
              style={{
                "--service-image": `url('${BASE}/2024/02/High-Quality-Landscaping-Services-in-Cleveland-TX-9.jpg')`,
              }}
            >
              <div className="service__media" aria-hidden="true"></div>
              <div className="service__body">
                <h3>Landscaping Services</h3>
                <p>Flower beds and mulch installations for lasting curb appeal.</p>
                <Link className="text-link" to="/landscaping">
                  Find out
                </Link>
              </div>
            </article>
            <article
              className="service reveal reveal--delay-2"
              style={{
                "--service-image": `url('${BASE}/2024/02/Lot-Clearing-in-Cleveland-TX-2.jpg')`,
              }}
            >
              <div className="service__media" aria-hidden="true"></div>
              <div className="service__body">
                <h3>Lot Clearing Services</h3>
                <p>Clearing, storm cleanup, and pressure washing.</p>
                <Link className="text-link" to="/lot-clearing">
                  Find out
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

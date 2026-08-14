import { Link } from "react-router-dom";
import EstimateForm from "../components/EstimateForm";
import Testimonials from "../components/Testimonials";
import { usePageMeta } from "../hooks/usePageMeta";
import { LOCAL_PROJECT_IMAGES } from "../data/gallery";
import { BASE, EMAIL, EMAIL_HREF, HOURS, MAP_EMBED, PHONE, PHONE_HREF } from "../data/site";

const SERVICES = [
  {
    title: "Tree Services",
    text: "Removal, trimming, stump grinding, and fertilization — handled safely for homes and businesses.",
    to: "/tree-services",
    image: "/img/services/tree-services/tree-removal/WhatsApp Image 2026-08-13 at 17.17.29.jpeg",
  },
  {
    title: "Landscaping",
    text: "Flower beds, mulch, sod, and outdoor upgrades that make a property feel finished.",
    to: "/landscaping",
    image: "/img/services/landscaping-property-improvements/sod-installation/WhatsApp Image 2026-08-13 at 17.15.42.jpeg",
  },
  {
    title: "Lot Clearing",
    text: "Clear overgrowth, recover from storms, and prepare land for what comes next.",
    to: "/lot-clearing",
    image: "/img/services/tree-services/lot-clearing/WhatsApp Image 2026-08-13 at 17.16.27.jpeg",
  },
];

export default function Home() {
  usePageMeta(
    "EG Tree Services LLC | Top Quality Tree Services in Cleveland, TX",
    "Professional tree removal, trimming, stump grinding, landscaping, and lot clearing in Cleveland, TX. 15+ years experience. Available 24/7."
  );

  return (
    <>
      <section className="hero">
        <video
          className="hero__media"
          autoPlay
          muted
          loop
          playsInline
          poster="/img/services/tree-services/tree-removal/WhatsApp Image 2026-08-13 at 17.16.28.jpeg"
        >
          <source src={`${BASE}/2024/02/EG-Tree-Services-LLC-Video.mp4`} type="video/mp4" />
        </video>
        <div className="hero__veil"></div>
        <div className="container hero__content">
          <p className="hero__brand reveal">EG Tree Services LLC</p>
          <h1 className="reveal reveal--delay-1">Tree care built for Cleveland properties.</h1>
          <p className="hero__lead reveal reveal--delay-2">
            Safe removal, clean finishes, and outdoor work across East Texas — available 24/7.
          </p>
          <div className="hero__actions reveal reveal--delay-3">
            <Link className="btn btn--accent" to="/contact">
              Get a Free Estimate
            </Link>
            <a className="btn btn--ghost" href={PHONE_HREF}>
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      <section className="section about">
        <div className="container about__grid">
          <div className="about__copy reveal">
            <p className="eyebrow">About Us</p>
            <h2>Fifteen years of outdoor craft in Cleveland, TX.</h2>
            <p>
              EG Tree Services LLC brings arborists, landscapers, and clearing crews under one team — so your property
              gets careful work, less disruption, and a finish you can live with.
            </p>
            <Link className="text-link" to="/about">
              Meet the company
            </Link>
          </div>
          <figure className="about__figure reveal reveal--delay-1">
            <img
              src="/img/services/landscaping-property-improvements/flower-bed-installation/WhatsApp Image 2026-08-13 at 17.17.03.jpeg"
              alt="EG Tree Services landscaping work"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="container">
          <div className="section__intro reveal">
            <p className="eyebrow">What We Offer</p>
            <h2>Outdoor services that leave the property ready.</h2>
          </div>
          <div className="service-stack">
            {SERVICES.map((service, index) => (
              <article
                key={service.to}
                className={`service-row reveal${index % 2 ? " service-row--flip" : ""}`}
                style={{ "--service-image": `url('${service.image}')` }}
              >
                <div className="service-row__media" aria-hidden="true"></div>
                <div className="service-row__body">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <Link className="text-link" to={service.to}>
                    Explore {service.title.toLowerCase()}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="urgency">
        <div className="container urgency__inner reveal">
          <div>
            <h2>Need help tonight?</h2>
            <p>Storm damage, hazardous limbs, or an urgent clearing job — EG answers around the clock.</p>
          </div>
          <div className="urgency__actions">
            <a className="btn btn--accent" href={PHONE_HREF}>
              Call {PHONE}
            </a>
            <Link className="btn btn--ghost-dark" to="/contact">
              Request Estimate
            </Link>
          </div>
        </div>
      </section>

      <section className="section why">
        <div className="container">
          <div className="section__intro reveal">
            <p className="eyebrow">Why EG</p>
            <h2>What property owners count on.</h2>
          </div>
          <ul className="why__list">
            <li className="reveal">
              <strong>15+ years</strong>
              <span>Proven methods on residential and commercial sites.</span>
            </li>
            <li className="reveal reveal--delay-1">
              <strong>Insured crew</strong>
              <span>Safety for workers, neighbors, and your structures.</span>
            </li>
            <li className="reveal reveal--delay-2">
              <strong>60-mile reach</strong>
              <span>Cleveland, TX and the surrounding East Texas towns.</span>
            </li>
            <li className="reveal">
              <strong>24/7 response</strong>
              <span>Emergency tree and outdoor help when weather hits.</span>
            </li>
          </ul>
        </div>
      </section>

      <Testimonials />

      <section className="section projects">
        <div className="container">
          <div className="section__intro reveal">
            <p className="eyebrow">Projects</p>
            <h2>Recent work across Cleveland yards.</h2>
          </div>
          <div className="strip-gallery reveal">
            {LOCAL_PROJECT_IMAGES.map((src) => (
              <img key={src} src={src} alt="EG Tree Services project" loading="lazy" />
            ))}
          </div>
          <div className="section__cta reveal">
            <Link className="btn btn--primary" to="/projects">
              Open full gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="section coverage">
        <div className="container coverage__grid">
          <div className="coverage__copy reveal">
            <p className="eyebrow">Service Area</p>
            <h2>Based in Cleveland. Working the region.</h2>
            <p>
              From zip 77328 we cover roughly sixty miles — tree care, landscaping, and lot clearing for homes and
              commercial properties.
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
            </ul>
          </div>
          <div className="coverage__map reveal reveal--delay-1">
            <iframe
              title="EG Tree Services LLC map"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="container contact__grid">
          <div className="contact__copy reveal">
            <p className="eyebrow">Free Estimate</p>
            <h2>Tell us about the property.</h2>
            <p>
              Share the address, the job, and the best number to reach you. We’ll follow up with a clear quote — or call
              us anytime at {PHONE}.
            </p>
          </div>
          <EstimateForm />
        </div>
      </section>
    </>
  );
}

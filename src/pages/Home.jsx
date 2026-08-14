import { Link } from "react-router-dom";
import EstimateForm from "../components/EstimateForm";
import Testimonials from "../components/Testimonials";
import { usePageMeta } from "../hooks/usePageMeta";
import { BASE, EMAIL, EMAIL_HREF, HOURS, MAP_EMBED, PHONE, PHONE_HREF, SOCIALS } from "../data/site";

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
          poster={`${BASE}/2024/02/Top-Rated-Tree-Services-in-Cleveland-TX-4.jpg`}
        >
          <source src={`${BASE}/2024/02/EG-Tree-Services-LLC-Video.mp4`} type="video/mp4" />
        </video>
        <div className="hero__veil"></div>

        <div className="container hero__content">
          <p className="hero__brand reveal">EG Tree Services LLC</p>
          <h1 className="reveal reveal--delay-1">Tree care built for Cleveland properties.</h1>
          <p className="hero__lead reveal reveal--delay-2">
            Removal, trimming, stump grinding, and fertilization — done safely for homes and businesses across East
            Texas.
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

      <section className="section about" id="about">
        <div className="container about__grid">
          <div className="about__copy reveal">
            <p className="eyebrow">About Us</p>
            <h2>Your premier destination for top-notch tree care in Cleveland, TX.</h2>
            <p>
              Welcome to EG Tree Services LLC. With a commitment to excellence and a passion for arboriculture, our team
              provides unparalleled tree care for residential and commercial clients — including tree removal, tree
              trimming, stump grinding, and tree fertilization.
            </p>
            <p>
              Our expert arborists handle every job with precision, prioritizing safety and minimizing disruption to
              your property. Over 15 years of experience means proven techniques, clean finishes, and trees that stay
              healthier longer.
            </p>
            <Link className="text-link" to="/services">
              Explore our services
            </Link>
          </div>
          <figure className="about__figure reveal reveal--delay-1">
            <img
              src={`${BASE}/2024/02/Top-Rated-Tree-Services-in-Cleveland-TX-4.jpg`}
              alt="Tree removal services in Cleveland, TX"
              width="1000"
              height="600"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section className="urgency">
        <div className="container urgency__inner reveal">
          <div>
            <h2>Urgent tree or landscaping concern?</h2>
            <p>Don’t wait. EG Tree Services LLC is here 24/7 — ready to respond promptly and protect your property.</p>
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

      <section className="section services" id="services">
        <div className="container">
          <div className="section__intro reveal">
            <p className="eyebrow">What We Offer</p>
            <h2>Top-notch outdoor services for homes and businesses</h2>
            <p>
              With over 15 years of experience, EG Tree Services LLC delivers comprehensive solutions across Cleveland,
              Texas and surrounding areas within 60 miles.
            </p>
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
                <p>Precise trimming, safe removal, fertilization to boost growth, and stump grinding for a clean finish.</p>
                <Link className="text-link" to="/tree-services">
                  Find out more
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
                <p>Bedflower and mulch installations that create vibrant outdoor spaces reflecting your style.</p>
                <Link className="text-link" to="/landscaping">
                  Find out more
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
                <p>Clear overgrowth and prepare land efficiently so your property is ready for its next chapter.</p>
                <Link className="text-link" to="/lot-clearing">
                  Find out more
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="band">
        <div
          className="band__media"
          style={{
            backgroundImage: `url('${BASE}/2024/02/Pressure-Washing-in-Cleveland-TX-1.jpg')`,
          }}
        ></div>
        <div className="band__veil"></div>
        <div className="container band__content reveal">
          <p className="eyebrow eyebrow--light">Revitalize Your Space</p>
          <h2>Professional cleaning that makes outdoor areas feel new again</h2>
          <p>Elevate the cleanliness and appeal of your property with EG Tree Services LLC’s dedicated outdoor cleaning team.</p>
          <div className="hero__actions">
            <a className="btn btn--accent" href={PHONE_HREF}>
              Call Us Now
            </a>
            <Link className="btn btn--ghost" to="/contact">
              Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <section className="section why" id="why-us">
        <div className="container">
          <div className="section__intro reveal">
            <p className="eyebrow">Why Choose Us</p>
            <h2>Reasons clients trust EG Tree Services LLC</h2>
          </div>

          <ul className="why__grid">
            <li className="reveal">
              <strong>15+ Years Experience</strong>
              <span>Unparalleled expertise on every residential and commercial project.</span>
            </li>
            <li className="reveal reveal--delay-1">
              <strong>Comprehensive Services</strong>
              <span>Tree care, landscaping, lot clearing, and outdoor cleaning under one team.</span>
            </li>
            <li className="reveal reveal--delay-2">
              <strong>Insured</strong>
              <span>Committed to excellence, safety, and security for employees and customers.</span>
            </li>
            <li className="reveal">
              <strong>Quality Workmanship</strong>
              <span>State-of-the-art equipment and proven techniques for a clean finish.</span>
            </li>
            <li className="reveal reveal--delay-1">
              <strong>60-Mile Coverage</strong>
              <span>Serving Cleveland, Texas and communities across the surrounding region.</span>
            </li>
            <li className="reveal reveal--delay-2">
              <strong>24/7 Availability</strong>
              <span>Emergency tree and landscaping response whenever you need us.</span>
            </li>
          </ul>
        </div>
      </section>

      <Testimonials />

      <section className="section projects" id="projects">
        <div className="container">
          <div className="section__intro reveal">
            <p className="eyebrow">Our Projects</p>
            <h2>See our tree services projects</h2>
            <p>
              From residential transformations to commercial enhancements, our portfolio reflects the expertise and
              dedication we bring to every job in Cleveland, TX.
            </p>
          </div>

          <div className="projects__mosaic reveal">
            <img
              src="/img/services/tree-services/tree-removal/WhatsApp Image 2026-08-13 at 17.17.29.jpeg"
              alt="Tree removal project in Cleveland, TX"
              loading="lazy"
            />
            <img
              src="/img/services/landscaping-property-improvements/sod-installation/WhatsApp Image 2026-08-13 at 17.15.42.jpeg"
              alt="Sod installation project"
              loading="lazy"
            />
            <img
              src="/img/services/landscaping-property-improvements/fence-installation-repair/WhatsApp Image 2026-08-13 at 17.14.25.jpeg"
              alt="Fence installation project"
              loading="lazy"
            />
            <img
              src="/img/services/landscaping-property-improvements/mulch-installation/WhatsApp Image 2026-08-13 at 17.13.59.jpeg"
              alt="Mulch and flower bed project"
              loading="lazy"
            />
            <img
              src="/img/services/tree-services/storm-damage-cleanup/WhatsApp Image 2026-08-13 at 17.16.03.jpeg"
              alt="Storm damage cleanup"
              loading="lazy"
            />
            <img
              src="/img/before-after/flower-bed-stone-porch/after.jpeg"
              alt="Finished flower bed project"
              loading="lazy"
            />
          </div>

          <div className="section__cta reveal">
            <Link className="btn btn--primary" to="/projects">
              See More Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="section coverage">
        <div className="container coverage__grid">
          <div className="coverage__copy reveal">
            <p className="eyebrow">Service Area</p>
            <h2>Area we cover</h2>
            <p>
              Based in Cleveland, Texas 77328, we serve clients within roughly 60 miles — bringing reliable tree care,
              landscaping, and lot clearing across the region.
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
            <div className="socials">
              {SOCIALS.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.label}
                </a>
              ))}
            </div>
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
            <p className="eyebrow">Get a Free Estimate</p>
            <h2>Contact us for affordable tree care solutions</h2>
            <p>
              Transparent pricing, exceptional value, and professional results — from tree removal and trimming to stump
              grinding and fertilization. Tell us about your property and we’ll get back with a personalized quote.
            </p>
          </div>
          <EstimateForm />
        </div>
      </section>
    </>
  );
}

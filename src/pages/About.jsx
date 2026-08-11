import PageHero from "../components/PageHero";
import { usePageMeta } from "../hooks/usePageMeta";
import { BASE } from "../data/site";

export default function About() {
  usePageMeta(
    "About Us | EG Tree Services LLC",
    "Learn about EG Tree Services LLC — tree care, landscaping, and cleaning specialists serving Cleveland, TX and surrounding cities."
  );

  return (
    <>
      <PageHero
        image={`${BASE}/2024/02/EG-Tree-Services-LLC-2.jpg`}
        title="Tree Services Specialist in Cleveland, TX"
        lead="Welcome to EG Tree Services LLC — your premier destination for top-notch tree care, landscaping, and outdoor cleaning."
      />

      <section className="section">
        <div className="container prose-grid">
          <div className="reveal">
            <p className="eyebrow">Who We Are</p>
            <h2>Dedicated outdoor professionals for homes and businesses</h2>
            <p>
              At EG Tree Services LLC, we understand the importance of maintaining the health and beauty of your trees.
              Our dedicated team is equipped with the expertise and resources to handle a wide range of tree services,
              ensuring your landscape stays safe, healthy, and beautiful.
            </p>
            <p>
              Beyond tree care, we provide top-quality landscaping — from mulch installation to garden design — plus
              cleaning services like debris removal, gutter cleaning, and lot clearing to keep outdoor areas neat and
              welcoming.
            </p>
            <p>
              Ready to transform your property into a stunning oasis of beauty and tranquility? Contact us to schedule a
              consultation tailored to your unique requirements.
            </p>
          </div>
          <figure className="media-frame reveal reveal--delay-1">
            <img
              src={`${BASE}/2024/02/Top-Rated-Tree-Services-in-Cleveland-TX-4.jpg`}
              alt="EG Tree Services team at work"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container split-cards">
          <article className="reveal">
            <p className="eyebrow">Mission</p>
            <h2>What drives our work</h2>
            <p>
              Our mission is to provide comprehensive tree care, landscaping, and cleaning services in Cleveland, Texas,
              and the surrounding areas. We are dedicated to enhancing the beauty and health of outdoor spaces,
              fostering a deep connection between individuals and nature — with professionalism, quality artistry, and
              environmental sustainability.
            </p>
          </article>
          <article className="reveal reveal--delay-1">
            <p className="eyebrow">Vision</p>
            <h2>A greener, more vibrant East Texas</h2>
            <p>
              We envision a world where every property reflects the harmony of well-maintained trees, lush landscapes,
              and pristine outdoor environments. We aspire to be recognized as industry pioneers who exceed expectations
              and contribute to the communities we serve.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__intro reveal">
            <p className="eyebrow">Cities Coverage</p>
            <h2>Serving a 60-mile radius from Cleveland, TX</h2>
            <p>
              Our coverage includes Montgomery, San Jacinto, Liberty, Harris, Walker, Trinity, Grimes, and Waller.
              Available 24/7 for urgent tree and landscaping concerns.
            </p>
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

      <section className="section section--soft">
        <div className="container">
          <div className="section__intro reveal">
            <p className="eyebrow">Why Choose Us</p>
            <h2>Reasons clients trust EG Tree Services LLC</h2>
          </div>
          <ul className="why__grid">
            <li className="reveal">
              <strong>15+ Years Experience</strong>
              <span>Unparalleled expertise on every project we undertake.</span>
            </li>
            <li className="reveal reveal--delay-1">
              <strong>Comprehensive Services</strong>
              <span>Tree care, landscaping, and cleaning under one team.</span>
            </li>
            <li className="reveal reveal--delay-2">
              <strong>Insured</strong>
              <span>Committed to excellence, safety, and security.</span>
            </li>
            <li className="reveal">
              <strong>Quality Workmanship</strong>
              <span>State-of-the-art equipment and proven techniques.</span>
            </li>
            <li className="reveal reveal--delay-1">
              <strong>Convenient Coverage</strong>
              <span>Accessible across a wide range of East Texas cities.</span>
            </li>
            <li className="reveal reveal--delay-2">
              <strong>24/7 Availability</strong>
              <span>Round-the-clock response for urgent concerns.</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

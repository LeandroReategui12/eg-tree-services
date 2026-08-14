import EstimateForm from "../components/EstimateForm";
import PageHero from "../components/PageHero";
import { usePageMeta } from "../hooks/usePageMeta";
import { EMAIL, EMAIL_HREF, HOURS, PHONE, PHONE_HREF } from "../data/site";

export default function Contact() {
  usePageMeta(
    "Contact Us | EG Tree Services LLC",
    "Get a free estimate for affordable tree services in Cleveland, TX. Call (281) 676-0474 or request a quote online."
  );

  return (
    <>
      <PageHero
        image="/img/services/landscaping-property-improvements/yard-cleanup/WhatsApp Image 2026-08-13 at 17.14.46.jpeg"
        title="Request a free estimate"
        lead="Transparent pricing and straightforward follow-up — call or send the form."
      />

      <section className="section contact" id="contact">
        <div className="container contact__grid">
          <div className="contact__copy reveal">
            <p className="eyebrow">Get in Touch</p>
            <h2>Tell us what the property needs.</h2>
            <p>
              Tree removal, landscaping, fencing, sod, or lot clearing — share details and we’ll respond with next
              steps.
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
                <strong>Area</strong> Cleveland, TX + 60 miles
              </li>
            </ul>
          </div>
          <EstimateForm />
        </div>
      </section>
    </>
  );
}

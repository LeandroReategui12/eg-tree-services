import { Link } from "react-router-dom";
import { ADDRESS, EMAIL, EMAIL_HREF, HOURS, LOGO, PHONE, PHONE_HREF, SOCIALS } from "../data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <Link className="footer__brand" to="/">
          <img src={LOGO} alt="EG Tree Services LLC" width="180" height="136" />
        </Link>
        <p className="footer__tagline">Tree care and outdoor work for Cleveland, TX — done clean, done safe, done right.</p>
        <a className="btn btn--accent" href={PHONE_HREF}>
          Call {PHONE}
        </a>
      </div>

      <div className="container footer__grid">
        <div>
          <h3>Services</h3>
          <Link to="/tree-services">Tree Services</Link>
          <Link to="/landscaping">Landscaping</Link>
          <Link to="/lot-clearing">Lot Clearing</Link>
          <Link to="/services">All Services</Link>
        </div>
        <div>
          <h3>Company</h3>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h3>Reach us</h3>
          <p>{ADDRESS}</p>
          <a href={PHONE_HREF}>{PHONE}</a>
          <a href={EMAIL_HREF}>{EMAIL}</a>
          <p>{HOURS}</p>
        </div>
        <div>
          <h3>Social</h3>
          {SOCIALS.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© 2026 EG Tree Services LLC</p>
        <p>Serving Cleveland, TX and a 60-mile radius</p>
      </div>
    </footer>
  );
}

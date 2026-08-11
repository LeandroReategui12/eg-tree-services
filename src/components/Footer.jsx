import { Link } from "react-router-dom";
import { ADDRESS, EMAIL, EMAIL_HREF, HOURS, LOGO, PHONE, PHONE_HREF } from "../data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Link className="footer__brand" to="/">
            <img src={LOGO} alt="EG Tree Services LLC" width="160" height="105" />
          </Link>
          <p>Your premier destination for top-notch tree care solutions in Cleveland.</p>
        </div>
        <div>
          <h3>Our Services</h3>
          <Link to="/tree-services">Tree Services</Link>
          <Link to="/landscaping">Landscaping Services</Link>
          <Link to="/lot-clearing">Lot Clearing Services</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <p>{ADDRESS}</p>
          <a href={PHONE_HREF}>{PHONE}</a>
          <a href={EMAIL_HREF}>{EMAIL}</a>
          <p>{HOURS}</p>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>Copyright © 2026 EG Tree Services LLC</p>
        <Link to="/about">About Us</Link>
      </div>
    </footer>
  );
}

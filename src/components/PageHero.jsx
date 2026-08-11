import { Link } from "react-router-dom";
import { PHONE, PHONE_HREF } from "../data/site";

export default function PageHero({ image, title, lead }) {
  return (
    <section className="page-hero" style={{ "--page-hero": `url('${image}')` }}>
      <div className="page-hero__veil"></div>
      <div className="container page-hero__content">
        <p className="hero__brand reveal">EG Tree Services LLC</p>
        <h1 className="reveal reveal--delay-1">{title}</h1>
        {lead ? <p className="hero__lead reveal reveal--delay-2">{lead}</p> : null}
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
  );
}

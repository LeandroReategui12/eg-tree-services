import { Link } from "react-router-dom";
import BeforeAfter from "../components/BeforeAfter";
import PageHero from "../components/PageHero";
import ProjectGallery from "../components/ProjectGallery";
import { usePageMeta } from "../hooks/usePageMeta";
import { galleryItems } from "../data/gallery";

export default function Projects() {
  usePageMeta(
    "Our Projects | EG Tree Services LLC",
    "Explore demanded tree service, landscaping, and lot clearing projects by EG Tree Services LLC in Cleveland, TX."
  );

  return (
    <>
      <PageHero
        image="/img/services/landscaping-property-improvements/sod-installation/WhatsApp Image 2026-08-13 at 17.15.42.jpeg"
        title="Most Demanded Tree Services Projects"
        lead="Residential transformations and commercial enhancements that show our expertise across Cleveland, TX."
      />

      <section className="section section--soft">
        <div className="container">
          <div className="section__intro reveal">
            <p className="eyebrow">Results</p>
            <h2>Before & after from real jobs</h2>
            <p>
              A few clear transformations from recent EG Tree Services work — flower beds, mulch, and sod installation.
            </p>
          </div>
          <BeforeAfter />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__intro reveal">
            <p className="eyebrow">Portfolio</p>
            <h2>Projects of EG Tree Services LLC</h2>
            <p>
              Browse the full job gallery — tree work, landscaping, fencing, sod, and more. Click any photo to open it
              larger.
            </p>
          </div>
          <ProjectGallery items={galleryItems} />
          <div className="section__cta reveal">
            <Link className="btn btn--accent" to="/contact">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

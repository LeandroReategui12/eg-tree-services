import PageHero from "../components/PageHero";
import { usePageMeta } from "../hooks/usePageMeta";

export default function LotClearing() {
  usePageMeta(
    "Lot Clearing Services | EG Tree Services LLC",
    "Professional lot clearing, storm damage cleanup, and pressure washing in Cleveland, TX by EG Tree Services LLC."
  );

  return (
    <>
      <PageHero
        image="/img/services/tree-services/lot-clearing/WhatsApp Image 2026-08-13 at 17.16.27.jpeg"
        title="Lot clearing with a clean finish"
        lead="Clear overgrowth, recover from storms, and open land for building or landscaping."
      />

      <section className="section">
        <div className="container prose-grid">
          <div className="reveal">
            <p className="eyebrow">Lot Clearing</p>
            <h2>From overgrown to construction-ready.</h2>
            <p>
              We remove trees, brush, and debris with attention to surrounding landscape and safe equipment use — ideal
              for new builds, curb appeal, and reclaiming unused ground.
            </p>
          </div>
          <figure className="media-frame reveal reveal--delay-1">
            <img
              src="/img/services/tree-services/land-clearing/WhatsApp Image 2026-08-13 at 17.17.38.jpeg"
              alt="Lot clearing machine"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section__intro reveal">
            <p className="eyebrow">What We Handle</p>
            <h2>Clearing, storm recovery, and haul-off.</h2>
          </div>
          <div className="detail-grid">
            <article className="detail reveal">
              <img
                src="/img/services/tree-services/storm-damage-cleanup/WhatsApp Image 2026-08-13 at 17.16.03.jpeg"
                alt="Storm damage cleanup"
                loading="lazy"
              />
              <h3>Storm Damage Cleanup</h3>
              <p>Hazardous limbs and fallen trees cleared so the property is safe again.</p>
            </article>
            <article className="detail reveal reveal--delay-1">
              <img
                src="/img/services/tree-services/lot-clearing/WhatsApp Image 2026-08-13 at 17.16.27.jpeg"
                alt="Lot clearing"
                loading="lazy"
              />
              <h3>Lot & Brush Clearing</h3>
              <p>Systematic removal and responsible disposal for residential and commercial lots.</p>
            </article>
            <article className="detail reveal reveal--delay-2">
              <img
                src="/img/services/landscaping-property-improvements/dirt-grading-leveling/WhatsApp Image 2026-08-13 at 17.15.05.jpeg"
                alt="Dirt grading"
                loading="lazy"
              />
              <h3>Dirt Grading</h3>
              <p>Level ground prep that sets up sod, landscaping, or the next build phase.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

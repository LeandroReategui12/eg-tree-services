import PageHero from "../components/PageHero";
import { usePageMeta } from "../hooks/usePageMeta";
import { BASE } from "../data/site";

export default function LotClearing() {
  usePageMeta(
    "Lot Clearing Services | EG Tree Services LLC",
    "Professional lot clearing, storm damage cleanup, and pressure washing in Cleveland, TX by EG Tree Services LLC."
  );

  return (
    <>
      <PageHero
        image={`${BASE}/2024/02/Lot-Clearing-in-Cleveland-TX-2.jpg`}
        title="Professional Lot Clearing in Cleveland, TX"
        lead="Clear overgrowth, recover from storm damage, and restore outdoor surfaces with a team focused on safety and clean results."
      />

      <section className="section">
        <div className="container prose-grid">
          <div className="reveal">
            <p className="eyebrow">Lot Clearing</p>
            <h2>Lot clearing services by EG Tree Services LLC</h2>
            <p>
              EG Tree Services LLC is a trusted name in Cleveland, TX for quality, reliability, and customer
              satisfaction. Our lot clearing services prepare land for construction, improve curb appeal, and transform
              neglected spaces into clean, usable property.
            </p>
            <p>
              Certified arborists and skilled professionals prioritize safety, environmental responsibility, and tailored
              solutions for every residential and commercial project.
            </p>
          </div>
          <figure className="media-frame reveal reveal--delay-1">
            <img
              src={`${BASE}/2024/02/Lot-Clearing-in-Cleveland-TX-1.jpg`}
              alt="Lot clearing in Cleveland, TX"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section__intro reveal">
            <p className="eyebrow">What We Handle</p>
            <h2>Clearing, storm recovery, and surface cleaning</h2>
          </div>
          <div className="detail-grid">
            <article className="detail reveal">
              <img
                src={`${BASE}/2024/02/Cleaning-damage-tree-by-storm-1.jpg`}
                alt="Storm damage cleanup"
                loading="lazy"
              />
              <h3>Storm Damage Tree Cleaning</h3>
              <p>
                When severe weather hits, we assess hazardous branches, remove fallen limbs and debris, and restore
                safety and aesthetics quickly — with preventative measures that protect trees going forward.
              </p>
            </article>
            <article className="detail reveal reveal--delay-1">
              <img src={`${BASE}/2024/02/Lot-Clearing-in-Cleveland-TX-2.jpg`} alt="Lot clearing" loading="lazy" />
              <h3>Lot Clearing Services</h3>
              <p>
                We systematically remove trees, vegetation, and debris, dispose of materials responsibly, and preserve
                surrounding landscape integrity — ideal for new builds, curb appeal, and reclaiming unused space.
              </p>
            </article>
            <article className="detail reveal reveal--delay-2">
              <img
                src={`${BASE}/2024/02/Pressure-Washing-in-Cleveland-TX-1.jpg`}
                alt="Pressure washing"
                loading="lazy"
              />
              <h3>Pressure Washing Services</h3>
              <p>
                Restore driveways, walkways, and outdoor surfaces by removing dirt, mold, and stubborn stains with
                equipment calibrated for each material.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__intro reveal">
            <p className="eyebrow">Benefits</p>
            <h2>Why property owners clear with EG</h2>
          </div>
          <ul className="why__grid">
            <li className="reveal">
              <strong>Construction Ready</strong>
              <span>Create a clean slate for new building projects.</span>
            </li>
            <li className="reveal reveal--delay-1">
              <strong>Curb Appeal</strong>
              <span>Clear overgrowth that hides your property’s best features.</span>
            </li>
            <li className="reveal reveal--delay-2">
              <strong>Wildfire Risk Reduction</strong>
              <span>Remove dead vegetation and excess fuel sources.</span>
            </li>
            <li className="reveal">
              <strong>Usable Space</strong>
              <span>Turn neglected areas into gardens, recreation, or landscaping.</span>
            </li>
            <li className="reveal reveal--delay-1">
              <strong>Soil Health</strong>
              <span>Minimize unnecessary disruption for future planting.</span>
            </li>
            <li className="reveal reveal--delay-2">
              <strong>Property Value</strong>
              <span>A maintained lot is more attractive to buyers.</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

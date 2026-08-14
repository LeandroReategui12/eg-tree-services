import { BEFORE_AFTER } from "../data/gallery";

export default function BeforeAfter({ items = BEFORE_AFTER }) {
  return (
    <div className="before-after">
      {items.map((item) => (
        <article key={item.id} className="before-after__card reveal">
          <div className="before-after__copy">
            <p className="eyebrow">Before & After</p>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </div>
          <div className="before-after__pair">
            <figure>
              <img src={item.before} alt={`${item.title} before`} loading="lazy" />
              <figcaption>Before</figcaption>
            </figure>
            <figure>
              <img src={item.after} alt={`${item.title} after`} loading="lazy" />
              <figcaption>After</figcaption>
            </figure>
          </div>
        </article>
      ))}
    </div>
  );
}

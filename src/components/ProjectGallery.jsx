import { useEffect, useId, useMemo, useRef, useState } from "react";

const FILTERS = [
  { id: "all", label: "All work" },
  { id: "tree-services", label: "Tree Services" },
  { id: "landscaping-property-improvements", label: "Landscaping" },
];

function encodeSrc(src) {
  return src
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/")
    .replace(/%2F/g, "/");
}

export default function ProjectGallery({ items, initialCount = 18 }) {
  const [filter, setFilter] = useState("all");
  const [visible, setVisible] = useState(initialCount);
  const [active, setActive] = useState(null);
  const dialogRef = useRef(null);
  const labelId = useId();

  const filtered = useMemo(() => {
    if (filter === "all") return items;
    return items.filter((item) => item.group === filter);
  }, [filter, items]);

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  useEffect(() => {
    setVisible(initialCount);
  }, [filter, initialCount]);

  useEffect(() => {
    if (active == null) return undefined;

    const onKey = (event) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((index) => (index + 1) % shown.length);
      }
      if (event.key === "ArrowLeft") {
        setActive((index) => (index - 1 + shown.length) % shown.length);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    dialogRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, shown.length]);

  return (
    <div className="gallery">
      <div className="gallery__toolbar reveal" role="tablist" aria-label="Filter gallery">
        {FILTERS.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={filter === item.id}
            className={`gallery__filter${filter === item.id ? " is-active" : ""}`}
            onClick={() => setFilter(item.id)}
          >
            {item.label}
          </button>
        ))}
        <p className="gallery__count">
          Showing {shown.length} of {filtered.length}
        </p>
      </div>

      <div className="gallery__grid">
        {shown.map((item, index) => (
          <button
            key={item.src}
            type="button"
            className={`gallery__item reveal gallery__item--${(index % 7) + 1}`}
            onClick={() => setActive(index)}
            aria-label={`Open ${item.label} photo`}
          >
            <img src={encodeSrc(item.src)} alt={item.label} loading="lazy" />
            <span className="gallery__meta">
              <strong>{item.label}</strong>
            </span>
          </button>
        ))}
      </div>

      {hasMore ? (
        <div className="gallery__more reveal">
          <button type="button" className="btn btn--primary" onClick={() => setVisible((count) => count + 12)}>
            Load more photos
          </button>
        </div>
      ) : null}

      {active != null && shown[active] ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelId}
          ref={dialogRef}
          tabIndex={-1}
          onClick={() => setActive(null)}
        >
          <button type="button" className="lightbox__close" aria-label="Close gallery" onClick={() => setActive(null)}>
            ×
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Previous photo"
            onClick={(event) => {
              event.stopPropagation();
              setActive((index) => (index - 1 + shown.length) % shown.length);
            }}
          >
            ‹
          </button>
          <figure className="lightbox__figure" onClick={(event) => event.stopPropagation()}>
            <img src={encodeSrc(shown[active].src)} alt={shown[active].label} />
            <figcaption id={labelId}>
              {shown[active].label}
              <span>
                {active + 1} / {shown.length}
              </span>
            </figcaption>
          </figure>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            aria-label="Next photo"
            onClick={(event) => {
              event.stopPropagation();
              setActive((index) => (index + 1) % shown.length);
            }}
          >
            ›
          </button>
        </div>
      ) : null}
    </div>
  );
}

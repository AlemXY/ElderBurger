type Props = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
};
export const PageHero = ({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: Props) => (
  <section className={`page-hero ${image ? "has-image" : ""}`}>
    <div className="container page-hero-inner">
      <div className="page-hero-copy">
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          {eyebrow}
        </span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {image && (
        <div className="page-hero-media">
          <img src={image} alt={imageAlt || ""} />
        </div>
      )}
    </div>
  </section>
);

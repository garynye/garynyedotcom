import * as React from "react";
import { studioProducts } from "./portfolioData";

function StudioProduct({ product }) {
  const heading = product.href ? (
    <a
      href={product.href}
      target="_blank"
      rel="noopener noreferrer"
      className="studio-product-link"
    >
      {product.name}
    </a>
  ) : (
    product.name
  );

  return (
    <article className="studio-product">
      <img
        className="studio-product-artwork"
        src={product.artwork}
        alt={product.artworkAlt}
      />
      <div className="studio-product-copy">
        <div className="studio-product-heading">
          <h3>{heading}</h3>
          <span>{product.status}</span>
        </div>
        <p>{product.description}</p>
        {product.linkLabel ? (
          <a
            href={product.href}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-link"
          >
            {product.linkLabel}
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default function StudioSection() {
  return (
    <section id="studio" className="studio-section" aria-labelledby="studio-heading">
      <div className="studio-introduction">
        <p className="section-kicker">Studio</p>
        <h2 id="studio-heading">Curious Ventures</h2>
        <p className="studio-summary">
          My independent product studio for practical AI and thoughtfully
          engineered software.
        </p>
        <p className="studio-role">Founder &amp; Managing Member</p>
      </div>

      <div className="studio-products">
        {studioProducts.map((product) => (
          <StudioProduct key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
}

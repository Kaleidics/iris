import React from "react";
import Moment from "react-moment";

import "./clickableImageCarousel.css";

function ClickableImageCarousel({ article, height, summary }) {
  const { abstract, multimedia, published_date, section, title } = article;
  return (
    <div className="clickableImageCarousel" style={{ height: height }}>
      <article
        className="carousel-slide"
        style={{
          backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.5), 
          rgba(0, 0, 0, 0.5)
        ),url(${multimedia[0].url})`,
        }}
      >
        <div className="carousel-text-container">
          <h2 className="carousel-title">{title}</h2>
          {summary && <p className="carousel-abstract">{abstract}</p>}
          <p className="carousel-subsection">
            <span className="subsection-spacing">{section}</span>
            <span className="subsection-spacing">/</span>
            <span className="subsection-spacing">
              <Moment format="MMMM Do YYYY" date={published_date} />
            </span>
          </p>
        </div>
      </article>
    </div>
  );
}

export default ClickableImageCarousel;

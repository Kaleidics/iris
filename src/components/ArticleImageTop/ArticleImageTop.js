import React, { useEffect, useState } from "react";
import Moment from "react-moment";

import "./articleImageTop.css";

function ArticleImageTop({ article }) {
  const { abstract, media, published_date, section, title } = article;
  return (
    <div className="article-image-top-container">
      <article className="article-image-top">
        <div className="article-image-top-thumbnail-container">
          <img
            className="article-image-top-thumbnail"
            src={media[0]["media-metadata"][2].url}
            alt={title}
          />
        </div>
        <div className="article-image-top-text-container">
          <h2 className="article-image-top-title">{title}</h2>
          <p className="article-image-top-abstract">{abstract}</p>
          <div className="article-image-top-subsection">
            <span className="article-image-top-section article-image-top-spacing">
              {section}
            </span>
            <span className="article-image-top-spacing">/</span>
            <span className="article-image-top-spacing">
              <Moment format="MMMM Do YYYY" date={published_date} />
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ArticleImageTop;

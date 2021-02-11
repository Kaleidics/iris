import React, { useEffect, useState } from "react";
import Moment from "react-moment";

import getArticlesTop from "../../api/getArticlesTop";

import "./articleImageOverlay.css";

function ArticleImageOverlay({ article, height, summary }) {
  const { abstract, multimedia, published_date, section, title } = article;
  return (
    <div className="article-container" style={{ height: height }}>
      <article
        className="article"
        style={{
          backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.5), 
      rgba(0, 0, 0, 0.5)
    ),url(${multimedia[0].url})`,
        }}
      >
        <div className="article-text-container">
          <h2 className="article-title">{title}</h2>
          {summary && <p className="article-abstract">{abstract}</p>}
          <p className="article-subsection">
            <span className="article-spacing">{section}</span>
            <span className="article-spacing">/</span>
            <span className="article-spacing">
              <Moment format="MMMM Do YYYY" date={published_date} />
            </span>
          </p>
        </div>
      </article>
    </div>
  );
}

export default ArticleImageOverlay;

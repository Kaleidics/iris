import React, { useEffect, useState } from "react";
import Moment from "react-moment";

import getArticlesTop from "../../api/getArticlesTop";

import "./clickableImageCarousel.css";

function ClickableImageCarousel({ topic }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getArticlesTop(topic, setData);
  }, []);

  console.log(data);

  if (!data[0]) {
    return <> </>;
  }

  const { multimedia, published_date, section, title } = data[0];
  return (
    <div className="clickableImageCarousel">
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

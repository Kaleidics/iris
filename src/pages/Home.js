import React, { useEffect, useState } from "react";

import getArticlesTop from "../api/getArticlesTop";
import getArticlesPopular from "../api/getArticlesPopular";

import Heading from "../components/Heading/Heading";
import ArticleGroup from "../components/ArticleGroup/ArticleGroup";
import ArticleImageOverlay from "../components/ArticleImageOverlay/ArticleImageOverlay";
import Carousel from "../components/Carousel/Carousel";
import ClickableImageCarousel from "../components/ClickableImageCarousel/ClickableImageCarousel";

function Home(props) {
  const [topArticles, setTopArticles] = useState([]);
  const [popularArticles, setPopularArticles] = useState([]);

  useEffect(() => {
    getArticlesTop("automobiles", setTopArticles);
    getArticlesPopular(setPopularArticles);
  }, []);

  if (!topArticles[0] || !popularArticles[0]) {
    return <> </>;
  }

  return (
    <>
      <Heading />
      <div className="flex-column-row flex-center mw-base height-500-m-d">
        <div className="mw-850 mr-10-dx">
          <ArticleImageOverlay article={topArticles[0]} />
        </div>
        <div className="flex-row-column mw-430">
          <div className="mb-10-dx width-height-100">
            <ArticleImageOverlay article={topArticles[1]} />
          </div>
          <div className="width-height-100">
            <ArticleImageOverlay article={topArticles[2]} />
          </div>
        </div>
      </div>
      <div className="bg-light plr-10-mx pt-40-dx mtb-80-dx">
        <ArticleGroup articleData={popularArticles} />
        <div className="mt-80-dx">
          <Carousel>
            <ArticleImageOverlay
              article={topArticles[1]}
              height="480px"
              summary
            />
            <ArticleImageOverlay
              article={topArticles[2]}
              height="480px"
              summary
            />
            <ArticleImageOverlay
              article={topArticles[3]}
              height="480px"
              summary
            />
            <ArticleImageOverlay
              article={topArticles[4]}
              height="480px"
              summary
            />
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Home;

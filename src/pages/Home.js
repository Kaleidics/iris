import React from "react";

import Heading from "../components/Heading/Heading";
import ClickableImageCarousel from "../components/ClickableImageCarousel/ClickableImageCarousel";
import ArticleImageOverlay from "../components/ArticleImageOverlay/ArticleImageOverlay";
import ArticleGroup from "../components/ArticleGroup/ArticleGroup";

function Home(props) {
  return (
    <>
      <Heading />
      <div className="flex-column-row flex-center mw-base height-500-m-d">
        <div className="mw-850 mr-10-dx">
          <ClickableImageCarousel topic="automobiles" />
        </div>
        <div className="flex-row-column mw-430">
          <div className="mb-10-dx width-height-100">
            <ArticleImageOverlay topic="sports" />
          </div>
          <div className="width-height-100">
            <ArticleImageOverlay topic="food" />
          </div>
        </div>
      </div>
      <div className="bg-light plr-10-mx ptb-40-dx mtb-80-dx">
        <ArticleGroup />
      </div>
    </>
  );
}

export default Home;

import React from "react";

import ArticleImageTop from "../ArticleImageTop/ArticleImageTop";

function ArticleGroup({ articleData }) {
  let topThreeArticles = articleData.slice(0, 3);
  let articles = topThreeArticles.map((article) => (
    <ArticleImageTop article={article} key={article.id} />
  ));

  return (
    <div className="flex-column-row flex-between align-items-center mw-base">
      {articles}
    </div>
  );
}

export default ArticleGroup;

import React, { useEffect, useState } from "react";

import ArticleImageTop from "../ArticleImageTop/ArticleImageTop";

import getArticlesPopular from "../../api/getArticlesPopular";

function ArticleGroup(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getArticlesPopular(setData);
  }, []);

  console.log(data);

  if (!data[0]) {
    return <> </>;
  }

  let topThreeArticles = data.slice(0, 3);
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

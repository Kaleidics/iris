import { API_BASE_URL } from "../config";

const getArticlesTop = async (topic, setter) => {
  const url = API_BASE_URL + "/api/top-articles/" + topic;
  const response = await fetch(url);
  const articles = await response.json();

  // We only want to show articles that have a picture
  let curatedArticles = articles.filter(
    (article) => article.multimedia && article.multimedia.length > 0
  );

  setter(curatedArticles);
};

export default getArticlesTop;

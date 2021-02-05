const getArticlesPopular = async (setter) => {
  const url = process.env.REACT_APP_API_URL + "/api/most-popular/";
  const response = await fetch(url);
  const articles = await response.json();

  // We only want to show articles that have a picture
  let curatedArticles = articles.filter(
    (article) => article.media && article.media.length > 0
  );

  setter(articles);
};

export default getArticlesPopular;
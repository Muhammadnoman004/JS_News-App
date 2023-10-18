let getDevNews = document.getElementById("DivNews");
let apiKey = "8c8d1dfc665a40c5affe11ea36632f31";
let apiUrl =
  "https://newsapi.org/v2/everything?from=2023-09-30&sortBy=publishedAt&q=";
let input = "Pakistan";

fetch(apiUrl + input + `&apiKey=${apiKey}`)
  .then((Response) => Response.json())
  .then((data) => {
    let arr = data.articles;


    arr.forEach((currNews) => {
      let urlImage = currNews.urlToImage;
      let news = currNews.title;
      let des = currNews.description;

      if (urlImage != null) {
        getDevNews.innerHTML += `<div class="card m-4" style="width: 18rem;">
            <img src="${urlImage}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${news}</h5>
              <p class="card-text">${des}</p>
            </div>
          </div>`;
      } else {
        return;
      }
    });
  });

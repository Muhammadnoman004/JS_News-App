let getDevNews = document.getElementById("DivNews")
let apiKey =  "8c8d1dfc665a40c5affe11ea36632f31"
let apiUrl = "https://newsapi.org/v2/everything?from=2023-09-16&sortBy=publishedAt&q=" 
let input = "Pakistan"

fetch(apiUrl + input + `&apiKey=${apiKey}`)
.then(Response => Response.json())
.then(data => {
    console.log(data.articles[0])
    let urlImage = data.articles[0].urlToImage
    let news = data.articles[0].title
    let des = data.articles[0].description
    // console.log(urlImage)
    // console.log(news)
    // console.log(des)
    for(let i = 0; i < data.length; i++){

    }
   


})
const res = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=547e02e8bcd84ae1b95e11b720d27e6c"

res.then((data) => {
    let parent = document.getElementById("newsBox");
    showNewsData(data, parent);
});
async function get() {
    let newSearch = document.getElementById("inputBox").value;
    let newsData = document.getElementById("newsBox");
    newsData.innerHTML = null;

    try {
        let res = await fetch(
            `https://newsapi.org/v2/everything?q=${newSearch}&apiKey=547e02e8bcd84ae1b95e11b720d27e6c`
        );
        let data = await res.json();
        let s = data.articles;
        s.forEach(({ title, author, content, urlToImage, publishedAt, url }) => {
            let a = document.createElement("a");
            a.setAttribute("href", url);

            let maindiv = document.createElement("div");
            maindiv.id = "nbox1";
            // a.setAttribute("href", url);

            let div1 = document.createElement("a");
            div1.id = "title-box";
            let div2 = document.createElement("div");
            div2.id = "desc-box";
            let div3 = document.createElement("div");
            div3.id = "img-box";

            let titles = document.createElement("h3");
            titles.innerText = title;
            titles.id = "titles";
            titles.setAttribute("href", url);

            let auth = document.createElement("h5");
            auth.innerText = author;
            auth.id = "authors";

            let pub = document.createElement("h5");
            pub.innerText = publishedAt;
            pub.id = "published";

            let desc = document.createElement("a");
            desc.innerHTML = content;
            desc.id = "desc";

            let img = document.createElement("img");
            img.src = urlToImage;
            img.id = "newsimg";

            div1.append(titles, auth, pub);
            div2.append(desc);
            div3.append(img);

            maindiv.append(div1, div2, div3);
            a.append(maindiv);
            newsData.append(a);
        });
    } catch (err) {
        console.log("err:", err);
    }
}
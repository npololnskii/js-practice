

function createArticleDiv(text, articleId){
    const aDiv = document.createElement("div");
    const content = document.createTextNode(text);

    aDiv.appendChild(content);
    document.body.appendChild(aDiv);

    const a = document.createElement('a');
    a.appendChild(document.createTextNode("read more ->"));
    //a.title = "my title text";
    a.href = `./article.html?id=${articleId}`;
    document.body.appendChild(a);
}

async function getPostsByPage() {
    let page = await fetch('https://gorest.co.in/public-api/posts?page=10')
    let pageData = await page.json()
    return pageData
}

(async ()=>{
    posts = await getPostsByPage()
    for (let p of posts['data']){
        createArticleDiv(p['title'], p['id'])
    }
})()

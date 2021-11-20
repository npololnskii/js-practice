const pageParams = new URLSearchParams(window.location.search); 
const aId = pageParams.get('id');

let createArticle = (data) => {
    const aDiv = document.createElement("div");
    const content = document.createTextNode(data['body']);
    aDiv.appendChild(content);
    document.body.appendChild(aDiv);
}

let getArticle = async  (id) => {
    return await fetch(` https://gorest.co.in/public-api/posts/${id}`)
}

(async () => {
    resp = await getArticle(aId)
    data = await resp.json()
    createArticle(data['data'])
    console.log(data)  
})()


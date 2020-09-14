function fetchContent(page){
    fetch('https://rickandmortyapi.com/api/character/?page=' + page)
    .then(res => res.json())
    .then(json => {
        const container = document.getElementsByClassName('row')[1]
        const card = document.createElement('div')
        json.results.forEach(element => {
            card.classList = 'col-lg-3 col-md-6 col-sm-6 col-xs-12 my-3'
            content = `
                <div class="col-lg-3 col-sm-12 col-xs-12 my-3">
                <div class="card text-dark bg-white mx-2 my-3">
                    <div class="card-body">
                        <img src="${element.image}" width="100%" height="100%">
                        <br>
                        <br>
                        <h4 class="card-title" id="name">${element.name}</h4>
                        <p class="card-text" id="details">${element.status}</p>
                    </div>
                </div>
                </div>
            ` ;
            console.log(json.results[1].name)
            container.innerHTML += content
        });
    })
}
fetchContent(1)
var page = 2
console.log("wabba labba dub dub")
document.getElementById("page").addEventListener("click",function(){
    console.log(page)
    fetchContent(page)
    page++
})
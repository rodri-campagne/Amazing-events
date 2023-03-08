let query = location.search
let params = new URLSearchParams(query);
let id_query = params.get (`_id`)
console.log(id_query);

function defineDetails(events) {
    return `
    <div class="row g-0">
            <div class="col-md-4">
                <img src="${each.image}" class="img-fluid rounded-start" alt="${each.name}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${each.name}</h5>
                    <p class="card-text">${each.description}</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
    </div>
    `  
}

/* function printTemplates(id_query,animal,array_animales) {
    let container = document.querySelector(id_query)
    animal = array_animales.find(each => each.name === animal)
    //animal = array_animales.filter(each => each.nombre === animal)[0]
    let details = defineDetails(events)
    container.innerHTML = details //en este caso no es necesario el join() porque no es un array (directamente es un string)
}
printTemplates('#detail_container',id_query,events)  */
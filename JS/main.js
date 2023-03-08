console.log(data);
const events = data.events
console.log(events);

let allEvents = []

function printEvents(){
    for (let card of events){
    let listaEvents = 
    `<div class="event-card col h-100 tarjeta">
        <div class="card shadow-sm">
            <img src="${card.image}" alt="${card.name}" class="img-fit">
            <h4 class="card-title bg-light bg-opacity-70 text-center">${card.name}</h4>
            <div class="card-body">
                <h6 class="card-subtitle small mb-4"><span class="text-muted">Category : </span><span class="strong">${card.category}</span></h6>
                <p class="card-text">${card.description}</p>
                
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">                                
                        <button type="button" class="btn btn-sm btn-outline-info"><a href="details.html?id=${card._id}">View event</a></bsutton>
                    </div>
                    <small class="text-muted">${card.price}</small>
                </div>
            </div>

            <div class="card-footer">
                <small class="text-muted">Last updated 10 misn ago</small>
            </div>
        </div>
    </div>`
        allEvents.push(listaEvents);
        console.log(allEvents);
    }
    let cardEvent = document.getElementById(`cardContainer`);
    cardEvent.innerHTML = allEvents.join(``);
}

printEvents();
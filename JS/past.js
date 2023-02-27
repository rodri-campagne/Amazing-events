console.log(data);
const events = data.events
console.log(events);

let pastEvents = []

function printPastEvents(){
    for (let card of events){
    if (card.date<data.currentDate){
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
                        <button type="button" class="btn btn-sm btn-outline-info"><a href="details.html">View event</a></button>
                    </div>
                    <small class="text-muted">${card.price}</small>
                </div>
            </div>

            <div class="card-footer">
                <small class="text-muted">Last updated 10 min ago</small>
            </div>
        </div>
    </div>`
        
            pastEvents.push(listaEvents);
            console.log(pastEvents);
        } 
    }
    let cardEvent = document.getElementById(`pastContainer`);
    cardEvent.innerHTML = pastEvents.join(``);
}

printPastEvents();
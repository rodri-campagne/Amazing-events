let categories = []
data.events.forEach(each =>{
    if(!categories.includes(each.category)){
        categories.push(each.category)
    }
})
console.log(categories);


function printChecks(_id, categories) {
    let selector = document.querySelector (_id)
    categories = categories.map(each => {
        return ` 
        <div class="form-check form-check-inline">
            <input onclick="capture()" class="form-check-input" type="checkbox" name="category" id="${each}" value="${each}">
            <label class="form-check-label" for="${each}">${each}</label>
        </div>`
    })
    categories.push(`<input onkeyup="capture()" id="search" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">`)
    categories.innerHTML = categories.join('')
}

printChecks('check', categories);


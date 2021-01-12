document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#poke-form').addEventListener('submit', submitHandler)
    document.addEventListener('keydown', (event) => {
        console.log(event);
    })
})

function sayHiPokemon(event) {
    let tableRows = document.querySelectorAll('tr')
    tableRows.forEach((tr) => {
        tr.addEventListener('click', logText)
    })
}

function logText(event){
    console.log(event.currentTarget.innerText)
}



function submitHandler(event) {
    event.preventDefault()
    console.log(event.target.pokeName.value);
    let name = event.target.pokeName.value
    let type = event.target.pokeType.value
    let weight = event.target.pokeWeight.value
    let img = event.target.pokeImg.value
    
    addPokemon(name, type, weight, img);

    document.querySelector('#poke-form').reset()
}

function addPokemon(name, type, weight, img){
    
    let tableBody = document.querySelector("#table")
    
    let tableRow = document.createElement('tr')
    
    let tHead = document.createElement('th')
    tHead.scope = "row"
    tHead.textContent = name
    
    
    let pokeType = document.createElement('td')
    pokeType.textContent = type
    pokeType.id = type
    
    let pokeWeight = document.createElement('td')
    pokeWeight.textContent = weight
    
    let imageBox = document.createElement('td')
    
    let pokeImage = document.createElement('img')
    pokeImage.src = img
    
    imageBox.appendChild(pokeImage)
    tableRow.append(tHead, pokeType, pokeWeight, imageBox)
    tableBody.appendChild(tableRow)
    
    tableRow.addEventListener('click', logText)
    
    
}




























// function addBubbleDelete(){
//     document.querySelector('#table').addEventListener('click', (event) => {
//         console.log(event.target.nodeName);
//         if(event.target.nodeName === 'IMG'){
//             event.target.remove()
//         }
        
//     })
// }


// function getRow() {
//     document.querySelectorAll('tr').forEach((row) => {
//         row.addEventListener('click', (event) => {
//             console.log(event.currentTarget.innerText);
//         })
//     })
// }
function getAnimals(){
    fetch("http://localhost:3000/characters")
    .then((response)=>response.json())
    .then((data)=>arrangeData(data))
}
function arrangeData(animals){
    for(animal of animals){
        const card = document.createElement("div")
        const insert =`
        <h1>${animal.name}</h1>
        <img src="${animal.image}">
        <button id="${animal.id}" value="${animal.votes}" > Votes: ${animal.votes}</button>
        
        `
        
        card.innerHTML= insert
        document.body.append(card)
        let currentLikes = document.getElementById(`${animal.id}`).value
        const likeButton = document.getElementById(`${animal.id}`)
        likeButton.addEventListener("click",()=>{
            currentLikes = parseInt(currentLikes)+1
            console.log(currentLikes)
            likeButton.textContent = `Votes: ${currentLikes}`
        })
    }
}
getAnimals()
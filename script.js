function getData(){
    fetch("http://localhost:3000/characters")
    .then(response => response.json())
    .then(data => arrangeData(data))
}

function arrangeData(animals){
    for(animal of animals){
        const card = document.createElement("div")
        card.innerHTML = `<h3 value="${animal.id}">${animal.name}</h3>`
        document.body.append(card)

        const name =document.querySelector("h3")
        const valueIndex = parseInt(name.value)
        console.log(valueIndex);
        name.addEventListener("click",()=>{
            if(animal.id == 1){
                const cardContent = document.createElement("div")

            cardContent.innerHTML=`
            <h1>${animal.name}</h1>
            <img src="${animal.image}">
            <button id="${animal.id}" value="${animal.votes}" > Votes: ${animal.votes}</button>
            `
            card.appendChild(cardContent)
            } else {}
            
        })
    
        
    }

}

getData()
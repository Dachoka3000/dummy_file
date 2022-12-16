function getData(){
    fetch("http://localhost:3000/characters")
    .then(response => response.json())
    .then(data => arrangeData(data))
}

function arrangeData(animals){

    for(animal of animals){
        const card = document.createElement("div")
        document.body.append(card)

        const cardContent = document.createElement("li")
        
        cardContent.innerHTML = `<h3 value="${animal.id}" id="${animal.id}">${animal.name}</h3>`
        card.appendChild(cardContent)

        let items = card.children
        console.log(items);

        for(let i=0; i<items.length; i++){
            let item= items[i]
            item.addEventListener("click", ()=>{
                console.log(item);
                
                fetch(`http://localhost:3000/characters/${i+1}`)
                .then(res=>res.json())
                .then(animal=>{
                    const animalContent = document.createElement("div")

            animalContent.innerHTML=`
            <h1>${animal.name}</h1>
            <img src="${animal.image}">
            <button value="${animal.votes}" > Votes: ${animal.votes}</button>

            
            `
            let holder = document.getElementById(`${animal.id}`)
            holder.appendChild(animalContent)
            //document.body.append(animalContent)
                })

            })
        }
        // let child = children[i]

        // child.addEventListener("click",()=>{

        //     console.log(children)
        //     //fetch()
        // })
        // const name =document.querySelector("h3")
        // const valueIndex = parseInt(name.value)
        // console.log(valueIndex);
        // name.addEventListener("click",()=>{
        //     if(animal.id == 1){
        //         const cardContent = document.createElement("div")

        //     cardContent.innerHTML=`
        //     <h1>${animal.name}</h1>
        //     <img src="${animal.image}">
        //     <button id="${animal.id}" value="${animal.votes}" > Votes: ${animal.votes}</button>
        //     `
        //     card.appendChild(cardContent)
        //     } else {}
            
        // })
    
        
    }
}

getData()
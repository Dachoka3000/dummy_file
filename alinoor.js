const url = "http://localhost:3000/characters";
function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch(url)
    .then((resp) => resp.json())
    .then((characters) => renderAnimals(characters));
  return renderAnimals;
}
function renderAnimals(characters) {
  const main = document.querySelector("main");
  characters.forEach((animal) => {
    const h2 = document.createElement("h2");
    h2.className = "li";
    h2.addEventListener("click", () => {
      if (animal.id === 1) {
        getMrCute();
      } else if (animal.id === 2) {
        getMxMonkey();
      } else if (animal.id === 3) {
        getMsZebra();
      } else if (animal.id === 4) {
        getDrLion();
      } else if (animal.id === 5) {
        getMmePanda();
      }
    });
    h2.innerHTML = animal.name;
    main.appendChild(h2);
  });
}
//getting Mr Cute
function getMrCute() {
  fetch(url)
    .then((resp) => resp.json())
    .then((result) => {
      const obj = result[0];
      const card = document.getElementsByClassName("demo");
      let button = document.createElement("button");
      button.addEventListener("click", deleteBox);
      button.id = "back";
      button.textContent = "BACK";
      let list = document.createElement("div");
      list.className = "card";
      list.innerHTML = `
      <img id="pic" src="${obj.image}"/>
    <div class="details">
     <h2 id = "name">${obj.name}</h2>
     <h2 id= "totalvotes" >Votes:  ${obj.votes}</h2>
     <div id = "votes">
     <button  id = "btn-1" value="${obj.votes}">VOTE</button>
    </div>
    </div> `
      document.querySelector("#demo").appendChild(list);
      list.appendChild(button);

      let voteButton = document.getElementById("btn-1")
      let votes = document.getElementById("btn-1").value
      voteButton.addEventListener("click",()=>{
        votes=parseInt(votes)+1
        let displayVotes = document.getElementById("totalvotes")
        displayVotes.textContent=`Votes: ${votes}`
      })
    });
  let e = document.querySelector("main");
  let child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
}
//getting Mx Monkey
function getMxMonkey() {
  fetch(url)
    .then((resp) => resp.json())
    .then((result) => {
      const obj = result[1];
      const card = document.getElementsByClassName("demo");
      let button = document.createElement("button");
      button.addEventListener("click", deleteBox);
      button.id = "back";
      button.textContent = "BACK";
      let list = document.createElement("div");
      list.className = "card";
      list.innerHTML = `
      <img id="pic" src="${obj.image}"/>
      <div class="details">
       <h2 id = "name">${obj.name}</h2>
       <h2 id= "totalvotes" value="${obj.votes}">Votes:  ${obj.votes}</h2>
       <div id = "votes">
       <button id = "btn-2" value="${obj.votes}">VOTE</button>
      </div>
      </div>
    `;
      document.querySelector("#demo").appendChild(list);
      list.appendChild(button);
      let voteButton = document.getElementById("btn-2")
      let votes = document.getElementById("btn-2").value
      voteButton.addEventListener("click",()=>{
        votes=parseInt(votes)+1
        let displayVotes = document.getElementById("totalvotes")
        displayVotes.textContent=`Votes: ${votes}`
      })
  })

    
  let e = document.querySelector("main");
  let child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
} 

//getting Ms Zebra
function getMsZebra() {
  fetch(url)
    .then((resp) => resp.json())
    .then((result) => {
      const obj = result[2];
      const card = document.getElementsByClassName("demo");
      let button = document.createElement("button");
      button.addEventListener("click", deleteBox);
      button.id = "back";
      button.textContent = "BACK";
      let list = document.createElement("div");
      list.className = "card";
      list.innerHTML = `
      <img id="pic" src="${obj.image}"/>
    <div class="details">
     <h2 id = "name">${obj.name}</h2>
     <h2 id= "totalvotes" >Votes:  ${obj.votes}</h2>
     <div id = "votes">
     <button id = "btn-3" value="${obj.votes}">VOTE</button>
    </div>
    </div>
    `;
      document.querySelector("#demo").appendChild(list);
      list.appendChild(button);
      let voteButton = document.getElementById("btn-3")
      let votes = document.getElementById("btn-3").value
      voteButton.addEventListener("click",()=>{
        votes=parseInt(votes)+1
        let displayVotes = document.getElementById("totalvotes")
        displayVotes.textContent=`Votes: ${votes}`
      })
    });
  let e = document.querySelector("main");
  let child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
}
//getting Dr Lion
function getDrLion() {
  fetch(url)
    .then((resp) => resp.json())
    .then((result) => {
      const obj = result[3];
      const card = document.getElementsByClassName("demo");
      let button = document.createElement("button");
      button.addEventListener("click", deleteBox);
      button.id = "back";
      button.textContent = "BACK";
      let list = document.createElement("div");
      list.className = "card";
      list.innerHTML = `
      <img id="pic" src="${obj.image}"/>
      <div class="details">
       <h2 id = "name">${obj.name}</h2>
       <h2 id= "totalvotes" >Votes:  ${obj.votes}</h2>
       <div id = "votes">
       <button id = "btn-4" value="${obj.votes}">VOTE</button>
      </div>
      </div>
    `;
      document.querySelector("#demo").appendChild(list);
      list.appendChild(button);
      let voteButton = document.getElementById("btn-4")
      let votes = document.getElementById("btn-4").value
      voteButton.addEventListener("click",()=>{
        votes=parseInt(votes)+1
        let displayVotes = document.getElementById("totalvotes")
        displayVotes.textContent=`Votes: ${votes}`
      })
    });
  let e = document.querySelector("main");
  let child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
}
//getting Mme Panda
function getMmePanda() {
  fetch(url)
    .then((resp) => resp.json())
    .then((result) => {
      const obj = result[4];
      const card = document.getElementsByClassName("demo");
      let button = document.createElement("button");
      button.addEventListener("click", deleteBox);
      button.id = "back";
      button.textContent = "BACK";
      let list = document.createElement("div");
      list.className = "card";
      list.innerHTML = `
      <img id="pic" src="${obj.image}"/>
    <div class="details">
     <h2 id = "name">${obj.name}</h2>
     <h2 id= "totalvotes" >Votes:  ${obj.votes}</h2>
     <div id = "votes">
     <button id = "btn-5" value="${obj.votes}">VOTE</button>
    </div>
    </div>
    `;
      document.querySelector("#demo").appendChild(list);
      list.appendChild(button);
      let voteButton = document.getElementById("btn-5")
      let votes = document.getElementById("btn-5").value
      voteButton.addEventListener("click",()=>{
        votes=parseInt(votes)+1
        let displayVotes = document.getElementById("totalvotes")
        displayVotes.textContent=`Votes: ${votes}`
      })
    });
  let e = document.querySelector("main");
  let child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
}
function deleteBox(e) {
  e.target.parentNode.remove();
  return fetchBooks();
}
// function tallyingVotes() {
//     fetch(url)
//     .then((resp) => resp.json())
//     .then((result) => {
//   let obj = result.votes;
//   let text = document.querySelector("#totalvotes")
//   text = `Votes: (${obj + 1}) `;
//   return document.querySelector("#totalvotes").textContent = text;})
// }
//document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
  tallyingVotes();
//});










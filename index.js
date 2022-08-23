let inputValue = ""
let length
let saving = ""
function save(aa){
    console.log(aa)
    
    saving += document.getElementById(`main-${parseInt(aa)}`).innerHTML
    localStorage.setItem("saved", saving)     
    }

document.getElementById("button").addEventListener("click", async function(){ 
    inputValue = document.getElementById("input").value
    document.getElementById("input").value = ""
    document.getElementById("movies").innerHTML = ""
  
        const res = await fetch(`https://www.omdbapi.com/?apikey=23863808&s=${inputValue}`)
        const data = await res.json()
                length = data.Search.length
                  
                  for(let j=0; j<data.Search.length;j++){
                  fetch(`https://www.omdbapi.com/?apikey=23863808&i=${data.Search[j].imdbID}`)  
                    .then( response => response.json())
                    .then(output => {                                                                  
                       document.getElementById("movies").innerHTML += 
                        `<div id = "main-${j}">
                        <div  class = "inner-container">
                            <div class = "poster"><img id = "image" src = "${output.Poster}"/></div>
                            <div class = "right-container">
                                <div class = "title"><h2 >${output.Title}</h2> </div>
                                <div class = "smallDetails">
                                    <p class = "runtime">${output.Runtime}</p>
                                    <p class = "common">${output.Genre}</p>
                                    <p class = "common"> <a id = "${j}" onclick = "save(this.id)" href = "#!">Watchlist</a>
                                </div>
                            <div class = "about"><p>${output.Plot}</p> </div>
                            </div>
                       </div>
                       </div>`                
                    }) }                          
})
                     
                    
               
        






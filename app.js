const border = document.querySelector(".contianer");
let loading = document.querySelector(".loading");

function randomColors() {
 return "#" +  Math.floor(Math.random() * 16777215).toString(16)
}

 window.addEventListener("DOMContentLoaded", async function(){
     border.style.backgroundColor = randomColors()
     await fetch('https://api.chucknorris.io/jokes/random')
     .then(response => response.json())
     .then(data => 
     border.append(data.value),
    loading.remove());
});
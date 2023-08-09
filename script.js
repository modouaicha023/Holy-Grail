const button = document.querySelector(".fa-list");
const main = document.querySelector(".out-grid-item3");
const nav = document.querySelector(".out-grid-item2");
button.addEventListener("click",()=>{
nav.style.display="block";
main.style.gridArea="2 / 2 / 9 / 9";
})
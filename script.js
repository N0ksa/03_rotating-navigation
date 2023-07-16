const openNavigation = document.getElementById("open");
const closeNavigation = document.getElementById("closed");
const container = document.querySelector(".container")

openNavigation.addEventListener("click", () =>{
    console.log(2);
    container.classList.add("navigation-visible");
    
})

closeNavigation.addEventListener("click", () =>{
    container.classList.remove("navigation-visible");
})
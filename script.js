const squares = document.querySelector("#squares").children;


for(let element of squares){
    element.classList.add("untapped");
}
for(let element of squares){
    element.addEventListener("click",(event) =>{
        element.classList.remove("untapped");
        element.classList.add("tapped");

    })
}
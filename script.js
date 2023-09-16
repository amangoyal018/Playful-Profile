const squares = document.querySelector("#squares").children;


for(let element of squares){
    element.classList.add("untapped");
}
let arr = [];
for(let element of squares){

    element.addEventListener("click",(event) =>{

        element.classList.remove("untapped");
        element.classList.add("tapped");

        let classname = element.getAttribute("class");
        let num = classname[7];
        if(num!=arr[arr.length-1]){
            arr.push(num);
        }
        // console.log(num);
        if(num==9){
            console.log(...arr);

            let index = 0;
            function traverse(){
                if(index<arr.length){
                    squares[arr[index]-1].classList.remove("tapped"); 
                    squares[arr[index]-1].classList.add("untapped");
                    
                    index++;
                    setTimeout(() => traverse(arr), 400);
                    b=true;
                }else{
                    arr = [];
                    return;
                }
            }
            
            traverse();
        }
    })
}

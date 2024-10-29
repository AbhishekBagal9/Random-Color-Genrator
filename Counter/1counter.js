const increment = document.querySelector("#add");
const decrement = document.querySelector("#sub");
const display =document.querySelector("#display");
const reset =document.querySelector("#reset");

let count = 0;

increment.addEventListener("click",function(){
    const incrementBy  = parseInt(document.querySelector("#Increment").value)
    count =count + incrementBy;
     display.innerText = count;
    

})

decrement.addEventListener("click",function(){
    const incrementBy  = parseInt(document.querySelector("#Increment").value)
     count = count-incrementBy;
    display.innerText = count;
})

reset.addEventListener("click",function(){
    count = 0;
    display.innerText = count;

   
})



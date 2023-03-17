let input = document.querySelector("input");
let alpha = document.querySelectorAll(".alpha");
const caps = document.querySelector(".capslock");
let tab = document.querySelector(".tab");
let space = document.querySelector('.space');
let Backspace = document.querySelector(".Backspace");
let shift = document.querySelectorAll(".shift")
let allbtns = document.querySelectorAll("button");


caps.addEventListener("click",()=>{
        for (let j = 0; j < allbtns.length; j++) {
            if (allbtns[j].innerText !== "Backspace" && allbtns[j].innerText !=="space" && allbtns[j].innerText !=="Tab" && allbtns[j].innerText !=="Capslock" && allbtns[j].innerText !=="Enter" && allbtns[j].innerText !=="shift") {
                allbtns[j].classList.toggle("show")
            }
        }
})
for (let k = 0; k < shift.length; k++) {
    shift[k].addEventListener("click",(e)=>{
        for (let l = 0; l < allbtns.length; l++) {
            if (allbtns[l].innerText !== "Backspace" && allbtns[l].innerText !=="space" && allbtns[l].innerText !=="Tab" && allbtns[l].innerText !=="Capslock" && allbtns[l].innerText !=="Enter" && allbtns[l].innerText !=="shift") {
                allbtns[l].classList.toggle("show")
            }
        }
    })
    
}
Backspace.addEventListener("click",()=>{
    input.value = input.value.slice(0,-1);
})
tab.addEventListener("click",()=>{
    input.value += `    `; 
})
space.addEventListener("click",()=>{
    input.value +=` `;
})
for (let i = 0; i < allbtns.length; i++) {
   allbtns[i].addEventListener("click",(e)=>{
    if (e.target.innerHTML !=="Backspace" && e.target.innerHTML !=="space" && e.target.innerHTML !=="Tab" &&e.target.innerHTML !=="Capslock" && e.target.innerHTML !=="Enter" &&e.target.innerHTML !=="shift") 
    input.value += e.target.innerText;
   })
}
 























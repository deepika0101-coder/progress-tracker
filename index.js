let flexContainer = document.querySelector(".flex");
let container = document.querySelector(".container");
let addBtn = document.querySelector(".add-btn");
let calender = document.querySelector(".cal");
let status = document.querySelector(".i-status");
let popupMain = document.querySelector(".popup-main");

console.log(flexContainer);
console.log(container);
console.log(addBtn);

// input height is 30px
//21
let newTaskscreated = 1;
let taskcreationlimit = 15;

function createNewTask() {
for (let i=1; i<2; i++){
    let cloneNode = flexContainer.cloneNode(true);
    cloneNode.setAttribute("class","clone");
    cloneNode.children[0].value= null;
    cloneNode.children[2].value= null;
    cloneNode.children[4].value= null;
    container.append(cloneNode);
    container.append(addBtn);
     cloneNode.children[4].classList.add(`id${newTaskscreated}`)
     console.log(cloneNode);
    addBtnCss();
    newTaskscreated++;
};
}

function addBtnCss() {
    if (newTaskscreated == 10){
       addBtn.innerHTML = "Hurreh you have already created 10 tasks 🎉🎉";
       addBtn.setAttribute("class","message");

    }
}

addBtn.addEventListener("click",()=>{
    if (newTaskscreated <= taskcreationlimit){
        createNewTask();
    }else {
        alert("Sorry you can't create more task's limit reached")
    }
})

// let taskArr = [1,2,3,4,5,6,7,8,9,10];
// status.addEventListener("click",()=>{
//     for (taskindx of taskArr){
//         for(let i=1; i<2; i++){
//             popupMain.setAttribute("class",`hide${taskindx}`);
//             status.setAttribute("clasa")
//         }
//     }
// })


 document.addEventListener("click",(e)=>{
   console.log(e);
   for (let i=1; i<=15; i++){
    if (e.target.classList.contains(`id${i}`)){
        if (e.target.parentNode.children[5].children[0].classList.contains("hide")){
            e.target.parentNode.children[5].children[0].classList.remove("hide");
             e.target.parentNode.children[5].children[0].setAttribute("class","popup");
             e.target.style.color = "gray";

            for (let j=0; j<4; j++) {
                 e.target.parentNode.children[5].children[0].children[j].addEventListener("click",(e)=>{
                console.log(e.target.textContent);
                 console.log(e.target.parentNode.parentNode.parentNode);
                 console.log(e.target.parentNode.parentNode.parentNode.children[3].value);

                 e.target.parentNode.parentNode.parentNode.children[3].value = `${e.target.textContent}`;
                e.target.parentNode.children[5].children[0].classList.remove("popup");
              e.target.parentNode.children[5].children[0].setAttribute("class","hide");
              e.target.style.color = "black";
           })
            }
           
            
        }else {
             e.target.parentNode.children[5].children[0].classList.remove("popup");
              e.target.parentNode.children[5].children[0].setAttribute("class","hide");
              e.target.style.color = "black";
        }
    }
   }
 })


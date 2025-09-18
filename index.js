let flexContainer = document.querySelector(".flex");
let container = document.querySelector(".container");
let addBtn = document.querySelector(".add-btn");
let calender = document.querySelector(".cal");
let status = document.querySelector(".i-status");
let popupMain = document.querySelector(".popup-main");

// console.log(flexContainer);
// console.log(container);
// console.log(addBtn);

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
    //  console.log(cloneNode);
    addBtnCss();
    newTaskscreated++;
    // console.log(newTaskscreated);
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
//    console.log(e);
   for (let i=1; i<=15; i++){
    if (e.target.classList.contains(`id${i}`)){
        if (e.target.parentNode.children[5].children[0].classList.contains("hide")){
            e.target.parentNode.children[5].children[0].classList.remove("hide");
             e.target.parentNode.children[5].children[0].setAttribute("class","popup");
             e.target.style.color = "gray";

            for (let j=0; j<4; j++) {
                 e.target.parentNode.children[5].children[0].children[j].addEventListener("click",(e)=>{
                // console.log(e.target.textContent);
                //  console.log(e.target.parentNode.parentNode.parentNode);
                //  console.log(e.target.parentNode.parentNode.parentNode.children[3].value);

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

 let input1;
 let input2; 
 let input3;
 let input1val;
 let input2val;
 let input3val;

//input eventListener for typing;

document.addEventListener("input",(e)=>{
 if (e.target.value){
    for (let i=1; i<=15; i++) {
    if(e.target.parentNode.children[4].classList.contains(`id${i}`)){
        e.target.parentNode.children[0].classList.add(`one${i}`);
                e.target.parentNode.children[1].classList.add(`two${i}`);
                        e.target.parentNode.children[3].classList.add(`three${i}`);

        console.log("is it true",e.target.parentNode.children[4].classList.contains(`id${i}`))
           
       
            input1val =  e.target.parentNode.children[0].value;
            input2val =  e.target.parentNode.children[1].value;
            input3val =  e.target.parentNode.children[3].value;
        
          localStorage.setItem(`one${i}`,input1val);
          localStorage.setItem(`two${i}`,input2val);
          localStorage.setItem(`three${i}`, input3val);
    
          if(e.target.parentNode.children[0].classList.contains(`one${i}`)){
            e.target.parentNode.children[0].value = localStorage.getItem(`one${i}`);
          } 
          else if (e.target.parentNode.children[1].classList.contains(`two${i}`)){
            e.target.parentNode.children[1].value = localStorage.getItem(`two${i}`);
          }
          else if (e.target.parentNode.children[3].classList.contains(`three${i}`)){
            e.target.parentNode.children[3].value = localStorage.getItem(`three${i}`);
          };
    }
    }
    

    
      
    
    
 }
 })


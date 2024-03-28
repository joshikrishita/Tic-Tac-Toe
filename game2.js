let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".resetbtn");
let newBtn=document.querySelector(".newbtn");
let msg=document.querySelector(".msg");
let turnO= true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [1,4,7],
    [2,4,6],
    [6,7,8],
    [2,5,8],
];



const resetGame=()=>{
    turnO=true;
    enableboxes();
    msg.innerText="";
    
}

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        
           let pos1Val= boxes[pattern[0]].innerText;
           let pos2Val=boxes[pattern[1]].innerText;
           let pos3Val= boxes[pattern[2]].innerText;

           if(pos1Val!=""&& pos2Val!=""&& pos3Val!=""){
            if(pos1Val==pos2Val&& pos2Val==pos3Val){
                
                msg.innerText=`winner ${pos1Val}`;
                disableBoxes();
            }
           }
        
    };
}

 boxes.forEach(box => {
    box.addEventListener('click',()=>{
       
       
       if(turnO){
        box.innerText="O";
        turnO=false;

       }else{
        box.innerText="X";
        turnO=true;
       }
       box.disabled=true;
       checkWinner();
    })    
});

newBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
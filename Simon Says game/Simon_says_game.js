let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow","green","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2")

document.addEventListener("keypress",function(){
    // console.log("Game started");
    if(started == false){
        console.log("Game Started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level${level}`;


    let ranIdx = Math.floor(Math.random()*3);
    let ranColor = btns[ranIdx];
    let ranBtn = document.querySelector(`.${ranColor}`);
    // console.log(ranIdx);
    // console.log(ranBtn);
    // console.log(ranColor);
    gameSeq.push(ranColor);
    console.log(gameSeq)
    gameFlash(ranBtn);
}

function checkAns(idx){
    // console.log(`current level: ${level}`);
    // let idx =level-1;
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp,1000);
        }
        console.log("Same values");
    }
    else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        },250);
        reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0 ;
}
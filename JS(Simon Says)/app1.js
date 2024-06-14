let userSeq = [];
let gameSeq = [];

let btns = ["yellow" ,"red", "purple" ,"green"];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');


document.addEventListener('keypress', function(){
    if (started == false){
        console.log("game started");
        started = true;
    } 

    levelUp();
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp(){

    userSeq = [];
    level++; 
    h2.innerText = `Level ${level}`;

    // flashing random button
 let randIdx = Math.floor(Math.random() * 4);
 let randColor = btns[randIdx];
 let randBtn = document.querySelector(`.${randColor}`);   4
 
 gameSeq.push(randColor);
 console.log(gameSeq);
 btnFlash(randBtn);
}

function checkAns(idx){
    // console.log(`Current level ${level}`);
    if (userSeq[idx] === gameSeq[idx]){
      if(userSeq.length == gameSeq.length){
       setTimeout(levelUp , 1000);   
      }
    }else {
        h2.innerHTML = `Game over! Your score was <b>${level}<b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn  = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    
    checkAns(userSeq.length - 1);
}

// console.log(userSeq);

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
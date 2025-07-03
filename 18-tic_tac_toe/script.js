let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector(".reset button");
let player1 = document.querySelector(".player_1 button");
let player2 = document.querySelector(".player_2 button");
let turn0=true;
let turns = document.querySelector(".value");
let turn_count = 0;
let new_game_btn = document.querySelector("#new_btn");
let  msgContainer= document.querySelector(".msg_container");
let msg = document.querySelector("#msg");
let complete = document.querySelector(".everything");
player1.style.backgroundColor = "#E5C3A6";
const win_pattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
for (let i=0; i<boxes.length ; i++){
    boxes[i].addEventListener("click", function(){
        if (turn0){
            boxes[i].innerText="O";
            player2.style.backgroundColor = "#E5C3A6";
            player1.style.backgroundColor = "#FFF0DC";
            turn0=false;
            turn_count+=1;
            turns.innerText=turn_count;
        }
        else{
            boxes[i].innerText="X";
            player1.style.backgroundColor = "#E5C3A6";
            player2.style.backgroundColor = "#FFF0DC";
            turn0=true;
            turn_count+=1;
            turns.innerText=turn_count;
        }
        CheckWinner();
    })
}
function ShowWinner(winner){
    msg.innerText = "Congratulations , the winner is " + winner;
    msgContainer.classList.remove("hide");
    document.querySelector(".everything").style.display = "none"
}
function CheckWinner(){
    for (let pattern of win_pattern){
        pos1=boxes[pattern[0]].innerText;
        pos2=boxes[pattern[1]].innerText;
        pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if (pos1===pos2 && pos2===pos3){
                ShowWinner(pos1);
            }
        }
    }
    if (turn_count === 9) {
        msg.innerText = "It's a Draw!";
        msgContainer.classList.remove("hide");
        document.querySelector(".everything").style.display = "none"
        gameOver = true;
    }
}
reset_btn.addEventListener("click", resetGame);
function resetGame() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerText = "";
    }
    turn0 = true; 
    player1.style.backgroundColor = "#E5C3A6";
    player2.style.backgroundColor = "#FFF0DC";
    turn_count=0;
    turns.innerText=turn_count;
    msgContainer.classList.add("hide");
}
new_game_btn.addEventListener("click", new_game);
function new_game(){
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerText = "";
    }
    turn0 = true; 
    player1.style.backgroundColor = "#E5C3A6";
    player2.style.backgroundColor = "#FFF0DC";
    turn_count=0;
    turns.innerText=turn_count;
    msgContainer.classList.add("hide");
    complete.style.display = "flex";
}
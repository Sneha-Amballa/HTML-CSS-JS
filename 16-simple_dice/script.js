var player1="player 1";
var player2="player 2"; 
function editNames(){
    player1=prompt("Change player 1 name:");
    player2=prompt("Change player 2 name:");
    document.querySelector("p.player1").innerHTML=player1;
    document.querySelector("p.player2").innerHTML=player2;
}
function rollTheDice(){
    setTimeout(function(){
        var randomnum1 = Math.floor(Math.random()*6)+1;
        var randomnum2 = Math.floor(Math.random()*6)+1;
        document.querySelector(".img1").setAttribute("src","dice"+randomnum1+".png");
        document.querySelector(".img2").setAttribute("src","dice"+randomnum2+".png");
        if(randomnum1===randomnum2){
            document.querySelector("h1").innerHTML="Draw!";
        }
        else if(randomnum1>randomnum2){
            document.querySelector("h1").innerHTML="Player 1 won the game";
        }
        else{
            document.querySelector("h1").innerHTML="Player 2 won the game";
        }
    },1000)
}
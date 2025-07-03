var player = "Player";
var player_choice = "";
var computer_choice = "";
var player_score = 0;
var computer_score = 0; 

var num_of_games = parseInt(prompt("Hello! Number of rounds you want to play ROCK-PAPER-SCISSORS:"), 10);

function editnames() {
    player = prompt("Enter your Name:");
    document.querySelector(".player_score .name").innerHTML = player + " Score";
}

function rock() {
    player_choice = "rock";
    game();
}

function paper() {
    player_choice = "paper";
    game();
}

function scissors() {
    player_choice = "scissors";
    game();
}

function Help() {
    document.getElementById("helpOverlay").style.display = "flex";
    document.querySelector(".help-overlay img").style.display = "block";
}

function backToGame() {
    document.getElementById("helpOverlay").style.display = "none";
    document.querySelector(".help-overlay img").style.display = "none";
}

function computer_choose() {
    var choices = ["rock", "paper", "scissors"];
    computer_choice = choices[Math.floor(Math.random() * 3)];
    document.querySelector(".player .computer_chose").innerHTML = "Computer chose " + computer_choice;
}

function game() {
    if (num_of_games <= 0) {
        endGame();
        return;
    }

    document.querySelector(".player .player_chose").innerHTML = player + " chose " + player_choice;

    setTimeout(function() {
        computer_choose();

        setTimeout(function() {
            if (player_choice === computer_choice) {
                document.querySelector(".player .player_chose").innerHTML = "You chose " + player_choice + " and Computer also chose " + computer_choice;
                document.querySelector(".player .computer_chose").innerHTML = "So it's a TIE!";
            }
            else if (
                (player_choice === "rock" && computer_choice === "scissors") ||
                (player_choice === "paper" && computer_choice === "rock") ||
                (player_choice === "scissors" && computer_choice === "paper")
            ) {
                document.querySelector(".player .player_chose").innerHTML = player_choice + " beats " + computer_choice;
                document.querySelector(".player .computer_chose").innerHTML = "So " + player + " won this round!";
                player_score += 1;
                document.querySelector(".score_player").innerHTML = player_score;
            }
            else {
                document.querySelector(".player .player_chose").innerHTML = computer_choice + " beats " + player_choice;
                document.querySelector(".player .computer_chose").innerHTML = "So Computer won this round!";
                computer_score += 1;
                document.querySelector(".score_computer").innerHTML = computer_score;
            }

            num_of_games -= 1;
            if (num_of_games <= 0) {
                setTimeout(endGame, 2000);
            }
        }, 2000);
    }, 1000);
};
function endGame() {
    if (player_score > computer_score) {
        document.querySelector(".player").innerHTML = "🎉🎉 Hurray! You won the game! 🎉🎉";
    }
    else if (player_score < computer_score) {
        document.querySelector(".player").innerHTML = "😔 Computer won the game. Better luck next time!😔";
    }
    else {
        document.querySelector(".player").innerHTML = "😮 It's a TIE!";
    }
}

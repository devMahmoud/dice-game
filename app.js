/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result gets added to his ROUND score
- But, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to "hold", which means that his ROUND score gets added to his GOLOBAL score. After that,
    it's the next player's turn
- The first player to reach 100 points on GOLOBAL score wins
*/
let scores, roundScore, activePlayer, dice, gamePlaying;
init();

//console.log(dice);
//document.querySelector("#current-" + activePlayer).textContent = dice;
//document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";
//document.querySelector(".dice").style.display = "none";
document.querySelector(".btn-roll").addEventListener("click" , rollTheDice);
document.querySelector(".btn-hold").addEventListener("click" , hold);
document.querySelector(".btn-new").addEventListener("click" , init);

function rollTheDice(){
    if(gamePlaying){
     dice = Math.floor(Math.random() * 6) + 1;
        let diceDom = document.querySelector(".dice");
     diceDom.style.display = "block";
     diceDom.src = "dice-" + dice + ".png";
     if(dice !== 1){
        roundScore += dice;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
     }else{
        changeActivePlayer();
        }
    }
}

function hold(){
    if(gamePlaying){
        // update player general score
        scores[activePlayer] += roundScore;
     // update gui
     document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
     // check if player wins
     if(scores[activePlayer] >= 20){
        document.querySelector("#name-" + activePlayer).textContent = "winner!";
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        gamePlaying = false;
     }else{
        // change active player
     changeActivePlayer();
        }
    }
}

function changeActivePlayer(){
    if( activePlayer === 1){
        document.getElementById("current-1").textContent = 0;
        activePlayer = 0;
        document.querySelector(".player-1-panel").classList.remove("active");
        document.querySelector(".player-0-panel").classList.add("active");
    }else{
        document.getElementById("current-0").textContent = 0;
        activePlayer = 1;
        document.querySelector(".player-0-panel").classList.remove("active");
        document.querySelector(".player-1-panel").classList.add("active");
    }
    roundScore = 0;
    document.querySelector(".dice").style.display = "none";
}

function init(){
    gamePlaying = true;
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;

    document.querySelector(".dice").style.display = "none";

    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
}
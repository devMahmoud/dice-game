let scores, roundScore, activePlayer, dice, gamePlaying, topScore, input, dice2;
// let previousDice;
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
     dice2 = Math.floor(Math.random() * 6) + 1;
     //console.log("dice: " + dice + " previousDice: " + previousDice + " Player" + activePlayer);
        let diceDom = document.querySelector(".dice");
        let diceDom2 = document.querySelector(".dice2");
     diceDom.style.display = "block";
     diceDom2.style.display = "block";
     diceDom.src = "dice-" + dice + ".png";
     diceDom2.src = "dice-" + dice2 + ".png";
     if(dice !== 1 && dice2 !== 1){
        roundScore += dice + dice2;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
     }else{
        changeActivePlayer();
        }
        /*
     if(dice === previousDice && previousDice === 6){
            console.log("previousDice: " + previousDice);
            scores[activePlayer] = 0;
            document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
            //previousDice = 0;
            changeActivePlayer();
         }
        //previousDice = dice;
        previousDice === 6 ? previousDice = 0 : previousDice = dice;
        */
    }
}

function hold(){
    if(gamePlaying){
        // update player general score
        scores[activePlayer] += roundScore;
     // update gui
     document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
     // check if player wins
     input = document.querySelector(".txt-top-score").value;
     if(input){
         topScore = input;
     }else{
         topScore = 100;
     }
     if(scores[activePlayer] >= topScore){
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
    document.querySelector(".dice2").style.display = "none";
}

function init(){
    gamePlaying = true;
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    //previousDice = 0;

    document.querySelector(".dice").style.display = "none";
    document.querySelector(".dice2").style.display = "none";

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
    //topScore = prompt("Enter to score");
}
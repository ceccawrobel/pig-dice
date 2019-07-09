//business logic
function Player(totalScore, turnRolls) {
  this.totalScore = totalScore;
  this.turnRolls = turnRolls;
}

Player.prototype.addScore = function() {
//method should add up all items in currentTurn array, and add them to totalScore, and then clear the array
}

//user interface logic
$(document).ready(function() {

var player1 = new Player(0, []);
var player2 = new Player(0, []);
var turnTotal = 0;
var roll = 0

  $("#rollP1").submit(function(event) {
    event.preventDefault();
    roll = Math.floor(Math.random() * 6 + 1);
    if (roll === 1) {
      turnTotal = 0;
      $("#turnTotalP1").text(turnTotal);
      player1.turnRolls = [];
      $("#turnP1").text("");
      alert("You rolled a 1! Turn is over.");
    } else {

    player1.turnRolls.push(roll);
    $("#turnP1").append("<li>" + roll + "</li>");
    turnTotal = turnTotal + roll;
    $("#turnTotalP1").text(turnTotal);
    console.log(player1.turnRolls);
    }
  });

  $("#holdP1").submit(function(event) {
    event.preventDefault();
    player1.totalScore += turnTotal;
    $("#scoreP1").text(player1.totalScore);
    turnTotal = 0;
    $("#turnTotalP1").text(turnTotal);
    player1.turnRolls = [];
    $("#turnP1").text("");
    console.log(player1.turnRolls);
  });

// //insert this in to ROLL code


})

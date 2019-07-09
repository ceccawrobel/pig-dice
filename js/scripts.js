//business logic
function Player(totalScore, currentTurn) {
  this.totalScore = totalScore;
  this.currentTurn = currentTurn;
}

Player.prototype.addScore = function() {
//method should add up all items in currentTurn array, and add them to totalScore, and then clear the array
}

//user interface logic
$(document).ready(function() {

var player1 = new Player(0, []);
var player2 = new Player(0, []);

  $("#rollP1").submit(function(event) {
    event.preventDefault();
    var roll = Math.floor(Math.random() * 6 + 1);
    $("#turnP1").append("<li>" + roll + "</li>");
    

  });

})

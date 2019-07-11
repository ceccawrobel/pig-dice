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
      $(".rollButtonP1").html("<button type='submit' disabled> Roll me! </button>");
      $(".holdButtonP1").html("<button type='submit' disabled> Hold </button>");
      $(".rollButtonP2").html("<button type='submit'> Roll me! </button>");
      $(".holdButtonP2").html("<button type='submit'> Hold </button>");
    } else {
      player1.turnRolls.push(roll);
      $("#turnP1").append("<li>" + roll + "</li>");
      turnTotal = turnTotal + roll;
      $("#turnTotalP1").text(turnTotal);
      if (player1.totalScore + turnTotal >= 10) {
        player1.totalScore += turnTotal;
        $("#scoreP1").text(player1.totalScore);
        alert("Player 1 wins!");
        $(".rollButtonP1").html("<button type='submit' disabled> Roll me! </button>");
        $(".holdButtonP1").html("<button type='submit' disabled> Hold </button>");
        $(".rollButtonP2").html("<button type='submit' disabled> Roll me! </button>");
        $(".holdButtonP2").html("<button type='submit' disabled> Hold </button>");
      }
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
    $(".rollButtonP1").html("<button type='submit' disabled> Roll me! </button>");
    $(".holdButtonP1").html("<button type='submit' disabled> Hold </button>");
    $(".rollButtonP2").html("<button type='submit'> Roll me! </button>");
    $(".holdButtonP2").html("<button type='submit'> Hold </button>");
  });

  $("#rollP2").submit(function(event) {
    event.preventDefault();
    roll = Math.floor(Math.random() * 6 + 1);
    if (roll === 1) {
      turnTotal = 0;
      $("#turnTotalP2").text(turnTotal);
      player2.turnRolls = [];
      $("#turnP2").text("");
      alert("You rolled a 1! Turn is over.");
      $(".rollButtonP1").html("<button type='submit'> Roll me! </button>");
      $(".holdButtonP1").html("<button type='submit'> Hold </button>");
      $(".rollButtonP2").html("<button type='submit' disabled> Roll me! </button>");
      $(".holdButtonP2").html("<button type='submit' disabled> Hold </button>");
    } else {
      player2.turnRolls.push(roll);
      $("#turnP2").append("<li>" + roll + "</li>");
      turnTotal = turnTotal + roll;
      $("#turnTotalP2").text(turnTotal);
      if (player2.totalScore + turnTotal >= 10) {
        player2.totalScore += turnTotal;
        $("#scoreP2").text(player2.totalScore);
        alert("Player 2 wins!");
        $(".rollButtonP1").html("<button type='submit' disabled> Roll me! </button>");
        $(".holdButtonP1").html("<button type='submit' disabled> Hold </button>");
        $(".rollButtonP2").html("<button type='submit' disabled> Roll me! </button>");
        $(".holdButtonP2").html("<button type='submit' disabled> Hold </button>");
      }
      }
  });

  $("#holdP2").submit(function(event) {
    event.preventDefault();
    player2.totalScore += turnTotal;
    $("#scoreP2").text(player2.totalScore);
    turnTotal = 0;
    $("#turnTotalP2").text(turnTotal);
    player2.turnRolls = [];
    $("#turnP2").text("");
    $(".rollButtonP1").html("<button type='submit'> Roll me! </button>");
    $(".holdButtonP1").html("<button type='submit'> Hold </button>");
    $(".rollButtonP2").html("<button type='submit' disabled> Roll me! </button>");
    $(".holdButtonP2").html("<button type='submit' disabled> Hold </button>");
  });

})


/*
$(".smallbox:even").css("background","#CFA175");

$(".smallbox:odd").css("background","#2C3D50");
*/

// const { nodeName } = require("jquery");

window.onload = function () {
  $(".smallbox:even").css("background", "#2C3D50");
  $(".smallbox:odd").css("background", "#CFA175");
  // Weiguang: setup player using jquery; should be ale to be achieved using js as well.
  // Temporarily comment out above code while testing pre-placed player in div1;

  // $("#player1").appendTo("#div0");
  // $("#player2").appendTo("#div0");
  // $("#player1").css("visibility", "hidden"); // players invisible as default;
  // $("#player2").css("visibility", "hidden");
 
  let moves = 0;
  const locations = { player1: 0, player2: 0 }; // players start from location 0;
  let playerNewLocation;
  let tempNewLocation; // Added new var to hold the temporary location before checking ladder and snake;
  let isRolling = false; // Rob: added to prevent double/triple rolls for same player
// rob: locks out user input with disabled attribute for as long as roll animation preventing multiple turns
  var buttonElement = document.getElementById("rolldice_button");
  buttonElement.addEventListener("click", function() { 
    if(isRolling) return;
    isRolling = true;
    buttonElement.setAttribute("disabled", true);
    rollDice();
    setTimeout(function() {
        buttonElement.removeAttribute("disabled");
        isRolling = false;
    }, 1500);
  });


  const rollDice = () => {
    moves += 1;
    console.log(moves);
    var randomNumber = Math.trunc(Math.random() * 6 + 1);
    var cubeElement = document.getElementById("cube");

    // let player2NewLocation = randomNumber + locations.player2;
    console.dir(cubeElement);
    switch (randomNumber) {
      case 1:
        cubeElement.style.WebkitTransform =
          "rotateX(90deg) rotateY(180deg) rotateZ(180deg)";

        break;
      case 2:
        cubeElement.style.WebkitTransform =
          "rotateX(90deg) rotateY(90deg) rotateZ(90deg)";
        break;
      case 3:
        cubeElement.style.WebkitTransform =
          "rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
        break;
      case 4:
        cubeElement.style.WebkitTransform =
          "rotateX(0deg) rotateY(90deg) rotateZ(0deg)";
        break;
      case 5:
        cubeElement.style.WebkitTransform =
          "rotateX(0deg) rotateY(180deg) rotateZ(0deg)";
        break;
      case 6:
        cubeElement.style.WebkitTransform =
          "rotateX(90deg) rotateY(0deg) rotateZ(0deg)";
        break;
    }
    cubeElement.style["animation-name"] = "rotate";
    cubeElement.style["animation-timing-function"] = "linear";
    cubeElement.style["animation-duration"] = "1.5s";
    setTimeout(function () {
      cubeElement.style.animationName = "none";

      // check snake or ladders and return new location:
      const snakeOrLadder = (playerNewLocation) => {
        switch (playerNewLocation) {
          case 13:
            return 2;
            break;
          case 5:
            return 7;
            break;
          case 20:
            return 12;
            break;
          case 18:
            return 24;
            break;
          case 21:
            return 17;
            break;
          default:
            return playerNewLocation;
        }
      };
      // Player moves
      const playerMoves = (player) => {
        // let message = `${player}'s turn`;
        // document.getElementById("message").textContent = message;
        $(`#${player}`).css("visibility", "visible"); // make the user visible before move
        tempNewLocation = randomNumber + locations[`${player}`];
        playerNewLocation = snakeOrLadder(tempNewLocation); // check snake or ladders and update the new location accordingly
        playerNewLocation === tempNewLocation
          ? (document.getElementById(
              "movingmessage"
            ).textContent = `${player} rolled dice of ${randomNumber} and moved to ${playerNewLocation}`)
          : (document.getElementById(
              "movingmessage"
            ).textContent = `${player} rolled dice of ${randomNumber},moved to ${tempNewLocation}, then took the ${
              playerNewLocation > tempNewLocation ? "ladder up" : "snake down"
            } to ${playerNewLocation}`);
        console.log(playerNewLocation);
        if (playerNewLocation < 25) {
          $(`#${player}`).appendTo(`#div${playerNewLocation}`);
          //Player 1: Test move after the dice animition}
          locations[`${player}`] = playerNewLocation;
        } //Player 1: wining condition;
        else if (playerNewLocation === 25) {
          $(`#${player}`).appendTo(`#div${playerNewLocation}`);
          document.getElementById(
            "movingmessage"
          ).textContent = `${player} Won!`;
          buttonElement.innerText = "Play again";
          // reload page in 1s after clicking the the button;
          buttonElement.addEventListener("click", function () {
            setTimeout(function () {
              window.location.reload();
            }, 1000); // perhaps change to 1500 to match others?
          });
        } else {
          tempNewLocation = 25 - (randomNumber - (25 - locations[`${player}`]));
          playerNewLocation = snakeOrLadder(tempNewLocation); // check snake or ladders

          playerNewLocation === tempNewLocation
            ? (document.getElementById(
                "movingmessage"
              ).textContent = `${player} rolled dice of ${randomNumber} and moved back to ${playerNewLocation}`)
            : (document.getElementById(
                "movingmessage"
              ).textContent = `${player} rolled dice of ${randomNumber},moved back to ${tempNewLocation}, then took the ${
                playerNewLocation > tempNewLocation ? "ladder up" : "snake down"
              } to ${playerNewLocation}`);
          $(`#${player}`).appendTo(`#div${playerNewLocation}`);
          locations[`${player}`] = playerNewLocation;
        }
      };

      // const player2Turn = () => {
      //   $("#player2").css("visibility", "visible");
      //   if (player2NewLocation < 25) {
      //     $("#player2").appendTo(`#div${player2NewLocation}`);
      //     //Player 2: Test move after the dice animition
      //     player2PreLocation = player2NewLocation;
      //   } else if (player2NewLocation === 25) {
      //     $("#player2").appendTo(`#div${player2NewLocation}`);
      //     //Player 1: Test move after the dice animition}
      //     document.querySelector(".header").innerText =
      //       "Player2 wins! Game over! Refresh the page to play again";
      //   } else {
      //     player2NewLocation = 25 - (randomNumber - (25 - player2PreLocation));
      //     $("#player2").appendTo(`#div${player2NewLocation}`);
      //     player2PreLocation = player2NewLocation;
      //   }
      // };
      moves % 2 === 1 ? playerMoves("player1") : playerMoves("player2");
    }, 1500);
  };

  // need to add keydown event listner: press the enter or space key to roll the dice;
};

// Weiguang Yang player test code

// $("#player1").appendTo("#div5");
// $("#player2").appendTo("#div6");

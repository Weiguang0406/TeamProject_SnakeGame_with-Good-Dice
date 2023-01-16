/*
$(".smallbox:even").css("background","#CFA175");

$(".smallbox:odd").css("background","#2C3D50");
*/

// const { nodeName } = require("jquery");

window.onload = function () {
  $(".smallbox:even").css("background", "#2C3D50");
  $(".smallbox:odd").css("background", "#CFA175");
  // Weiguang setup player using jquery; should be ale to be achieved using js as well.
  var player1Img = document.createElement("img");
  player1Img.src = "imgs/avatar1.png";

  let player2Img = document.createElement("img");
  player2Img.src = "imgs/avatar2.png";

  let gridboard = document.getElementById("gridboard");

  gridboard.appendChild(player1Img);
  gridboard.appendChild(player2Img);

  player1Img.setAttribute("id", "player1");
  player2Img.setAttribute("id", "player2");

  $("#player1").appendTo("#div1");
  $("#player2").appendTo("#div1");
  let player1PreLocation = 1;
  let player2PreLocation = 1;
  // Weiguang

  var buttonElement = document.getElementById("rolldice_button");
  buttonElement.onclick = function () {
    var randomNumber = Math.trunc(Math.random() * 6 + 1);
    var cubeElement = document.getElementById("cube");

    let player1NewLocation = randomNumber + player1PreLocation;
    let player2NewLocation = randomNumber + player2PreLocation;
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
      // Player moves
      if (player1NewLocation < 25) {
        $("#player1").appendTo(`#div${player1NewLocation}`);
        //Player 1: Test move after the dice animition}
        player1PreLocation = player1NewLocation;
      } //Player 1: wining condition;
      else if (player1NewLocation === 25) {
        $("#player1").appendTo(`#div${player1NewLocation}`);
        document.querySelector(".header").innerText =
          "Player1 wins! Game over! Refresh the page to play again";
        buttonElement.innerText = "Play again";
        buttonElement.onclick = window.location.reload(); // need to test again, not working as expected;
      } else {
        player1NewLocation = player1PreLocation - randomNumber;
        $("#player1").appendTo(`#div${player1NewLocation}`);
        player1PreLocation = player1NewLocation;
      }

      if (player2NewLocation < 25) {
        $("#player2").appendTo(`#div${player2NewLocation}`);
        //Player 2: Test move after the dice animition
        player2PreLocation = player2NewLocation;
      } else if (player2NewLocation === 25) {
        $("#player2").appendTo(`#div${player2NewLocation}`);
        //Player 1: Test move after the dice animition}
        document.querySelector(".header").innerText =
          "Player2 wins! Game over! Refresh the page to play again";
      } else {
        player2NewLocation = player2PreLocation - randomNumber;
        $("#player2").appendTo(`#div${player2NewLocation}`);
        player2PreLocation = player2NewLocation;
      }
    }, 2000);
  };
};

// Weiguang Yang player test code

// $("#player1").appendTo("#div5");
// $("#player2").appendTo("#div6");

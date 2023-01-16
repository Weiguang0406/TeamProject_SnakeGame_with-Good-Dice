/*
$(".smallbox:even").css("background","#CFA175");

$(".smallbox:odd").css("background","#2C3D50");
*/
for (let i = 1; i <= 25; i++) {
  if (Number(document.querySelectorAll(".smallbox")[i].textContent) % 2 === 0) {
    document.querySelectorAll(".smallbox")[i].style.backgroundColor = "#CFA175";
  } else {
    document.querySelectorAll(".smallbox")[i].style.backgroundColor = "#2C3D50";
  }
}
window.onload = function () {
    $(".smallbox:even").css("background", "#2C3D50");
    $(".smallbox:odd").css("background", "#CFA175");

  var buttonElement = document.getElementById("rolldice_button");
  buttonElement.onclick = function () {
    var randomNumber = Math.trunc(Math.random() * 6 + 1);
    var cubeElement = document.getElementById("cube");

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
    cubeElement.style["animation-duration"] = "2s";
    setTimeout(function () {
      cubeElement.style.animationName = "none";
    }, 2000);
  };
};

// Weiguang Yang player test code
var startPos = document.getElementById("div1").getBoundingClientRect();
// console.log(rect.top, rect.right, rect.bottom, rect.left);
// var rect = document
//   .getElementsByClassName("gridboard")[0]
//   .getBoundingClientRect();
// console.log(rect.top, rect.right, rect.bottom, rect.left);

let player1 = document.createElement("div");
(player1Img = document.createElement("img")),
  (player1Img.src = "imgs/avatar1.png"),
  (x = startPos.left);
y = startPos.bottom;
(player2Img = document.createElement("img")),
  (player2Img.src = "imgs/avatar2.png");

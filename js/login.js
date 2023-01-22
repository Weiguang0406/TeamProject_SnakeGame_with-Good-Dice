window.onload = function () {

    let buttonElement = document.querySelector(".go_button");
    buttonElement.addEventListener("click", function () {
        let input1 = document.getElementById("player1_name").value;
        let input2 = document.getElementById("player2_name").value;
        let player1_name = input1;
        let player2_name = input2;
        who_first = document.getElementById("who_first").value;
        /*      if (!player1_name === true) {
                  player1_name = "player1"
              }
              if (!player2_name === true) {
                  player2_name = "player2"
              }
      */
    })

    let player1_inputElement = document.getElementById("player1_name");
    player1_inputElement.addEventListener("keydown", function () {

        //  alert(document.querySelector("#who_first1_span").innerText);
        // alert(player1_name.value);
        document.querySelector("#who_first1_span").innerText = player1_name.value;

    })
    player1_inputElement.addEventListener("keyup", function () {

        //  alert(document.querySelector("#who_first1_span").innerText);
        // alert(player1_name.value);
        document.querySelector("#who_first1_span").innerText = player1_name.value;

    })

    let player2_inputElement = document.getElementById("player2_name");
    player2_inputElement.addEventListener("keydown", function () {

        //  alert(document.querySelector("#who_first1_span").innerText);
        // alert(player1_name.value);
        document.querySelector("#who_first2_span").innerText = player2_name.value;

    })
    player2_inputElement.addEventListener("keyup", function () {

        //  alert(document.querySelector("#who_first1_span").innerText);
        // alert(player1_name.value);
        document.querySelector("#who_first2_span").innerText = player2_name.value;

    })

}

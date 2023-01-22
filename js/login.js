window.onload = function () {

    let buttonElement = document.querySelector(".go_button");
    buttonElement.addEventListener("click", function () {
        let input1 = document.getElementById("player1_name").value;
        let input2 = document.getElementById("player2_name").value;

        //   alert("11111111=" + input1);
        //  alert("22222222=" + input2);
        let player1_name = input1;
        let player2_name = input2;
        who_first = document.getElementById("who_first").value;
        if (!player1_name === true) {
            player1_name = "player1"
        }
        if (!player2_name === true) {
            player2_name = "player2"
        }

    })




}

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
        //   alert("who_first=" + who_first);
        // alert(`"index_snakeboard.html?who_first=${who_first}&player1_name=${player1_name}&player2_name=${player2_name}"`);
        //  form = document.querySelector("#test_form");
        // form.action = `index_snakeboard.html?who_first=${who_first}&player1_name=${player1_name}&player2_name=${player2_name}"`

        // alert("lll");
    })




}
/*
 function postData() {
    var name = $("#txtName").val();
    var sex = $("#cboSex").val();
    var address = $("#txtAddress").val();
    if (name != "" && sex != 0 && address != "") {
        var form = document.getElementById("frm");
        //1./Main/GetData 通过形参接收数据
        //form.action = "/Main/GetData";
        //2."/Main/getDataByFormCollection" 通过FormCollection来接收数据
        form.action = "/Main/getDataByFormCollection";
        //3.通过 Request.Form["name的属性值"]获取表单数据
        //form.action = "/Main/getDataByRequest";
        //4.EntityClass实体类接收数据
        form.action = "/Main/getDataByEntityClass";
        form.method = "post";
        form.submit();
    } else {
        alert("表单填写的数据不能为空，请检查");
    }       
*/
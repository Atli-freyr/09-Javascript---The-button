const storage2={
    step: 5,
    limit: 35,
 };
 function writeInput() {
    document.getElementById("step").value = storage2.step;
    document.getElementById("limit").value = storage2.limit;
 };
function clickPlus() {
    writeInput();
    //sækja töluna
    var skrif = document.getElementById("number").innerText;
    var tala = parseInt(skrif) + parseInt(storage2.step);
    //var tala = parseInt(skrif) + parseInt(storage2.limit);
    //console.log(skrif);
    //console.log(tala);
    skrif = tala.toString();
    //skrif = "sfd";
    //skrifa nýja tölu
    document.getElementById("number").innerHTML = skrif;

    if (tala > storage2.limit || tala < -1*storage2.limit){
        document.getElementById("boom").innerHTML = "BOOM!!!";
    }
    else if (tala < storage2.limit || tala > -1*storage2.limit){
        document.getElementById("boom").innerHTML = "";
    }
    //saveStep();
}
function clickMinus() {
    writeInput();
    //sækja töluna
    var skrif = document.getElementById("number").innerText;
    var tala = parseInt(skrif) - storage2.step;
    //var tala = parseInt(skrif) - storage2.limit;
    skrif = tala.toString();
    //skrif = "sfd";
    //skrifa nýja tölu
    document.getElementById("number").innerHTML = skrif;

    if (tala > storage2.limit || tala < -1*storage2.limit){
        document.getElementById("boom").innerHTML = "BOOM!!!";
    }
    else if (tala < storage2.limit || tala > -1*storage2.limit){
        document.getElementById("boom").innerHTML = "";
    }
}

function clickStep() {
    //writeInput();
    storage2.step = document.getElementById("step").value;
    console.log(storage2.step);
    
}
function clickLimit() {
    //writeInput();
    storage2.limit = document.getElementById("limit").value;
    console.log(storage2.limit);
    
}


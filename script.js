//Steps

// Need to make it so that at the page load we have $10, a place to enter the numbers, and a submit button.

//Need to display a string of numbers that have been randomly generated.


var list = [];
var inputs = [];
var money = 10;

//var correct = [];
var cash = document.getElementById("bank");


//functions for getting document info
function dg(did, value) { //create a function to get documentById. All I need to write now is dg(divID, and value of the id)
    document.getElementById(did).innerHTML = value;
}
//Get value of element
function gv(did) { //create a function to get value. All I need to write now is gv(vname)
    var result = document.getElementById(did).value;
    return result;
}
//handle input
//userNum = document.getElementById("userNumButton").onclick = 

function handleGuess() {
    var userNum = gv("userNumber"),
        userNum = userNum.split(","),
        block = document.getElementById("output");
    if (userNum.length > 4 || userNum.length < 4) {
        alert("Oops, you need to read the instructions. Your mistake has cost you $2");
        return;
    }
    //need to put in the exit for if I enter a number that is not 1-10
    if(userNum < 1 || userNum > 10){
        alert("Oops, you need to read the instructions. Your mistake has cost you $2");
        return;
    }
    console.log(userNum);
    block.innerHTML = "<h5> Your Lucky Numbers: " + userNum + "</h5>";
    return userNum;
}

//for (i = 0; i < inputs.length; i++) {
//        userNum = parseInt(userNum);
//    }
//    if (userNum.length > 4 || userNum.length < 4) {
//        alert("Read the instructions")
//    } else {
//        document.getElementById("inputs").innerHTML = userNum.split;
//        
//    }
//        console.log(userNum);

//Submit gamble


//create a list of the random numbers
function shuffle() {
    var sum = 0,
        i = 0,
        display = document.getElementById("display");

    for (var i = 0; i < 4; i++) {
        list[i] = Math.floor(Math.random() * 10 + 1);
        sum = list[i];
        for (var j = 0; j < i; j++) {
            sum = list[i];
        }
    }
    console.log(list);
    display.innerHTML = "<h5> The winning numbers were: " + list + "</h5>";
    return list;

    //    document.write(list);
}

//verify

function verify() {
    var randomize = shuffle(),
        check = handleGuess(),
        correct = [];
//    buttonCost();
//    moolah();
    

    for (var i = 0; i < randomize.length; i++) {
        for (var j = 0; j < check.length; j++) {
            if (check[i] == randomize[j]) {
                correct.push(check[i]);
            }
        }
    }
    console.log(correct.length);
    return correct.length;
    //    if (money math) {
    //        display.innerHTML = "winner " + randomize;
    //        console.log("win");
    //    } else {
    //        display.innerHTML = "You Lose " + randomize;
    //        console.log("lose");
    //    }
}

//Money
function buttonCost() {
    money -= 2;
    return money;
}

function moolah() {
    var correct = verify();
    console.log(correct);

    if (correct == 0) {
        money = money;
    }
    else if (correct== 1) {
        money = money + 2;
    }
     else if (correct == 2) {
        money += 4;
    }
     else if (correct == 3) {
        money += 16;
    }
     else if (correct == 4) {
        money += 64;
    }
    
//    console.log(money);
    return money
}



function submit(){
    if (money == 0){
        alert("You have no money in the bank. Come back when your're rolling in dough.");
        return;
    };
    
    buttonCost();
    moolah();
    bank.innerHTML = "<h4>" + "You have $" + money + " in the bank" + "</h4>";
}
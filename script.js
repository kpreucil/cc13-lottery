//Steps

// Need to make it so that at the page load we have $10, a place to enter the numbers, and a submit button.

//Need to display a string of numbers that have been randomly generated.


var list = [];
var inputs = [];
var money = 10;
var userNum;

//handle input
userNum = document.getElementById("userNumButton").onclick = function() {
    var userNum = prompt("Enter your numbers:");
    userNum = userNum.split(",");
    if (userNum.length > 4 || userNum.length < 4){
        alert("Follow the instructions")
    } else {
        document.getElementById("gamble").innerHTML = userNum;
        document.getElementById("money").innerHTML = "Cash left:" + money;
    }
    return userNum;
}

//Submit gamble
var submit = document.getElementById("submit").onclick = function(){
    var money = money - 2;
    var shuffle = shuffle();
}

//create a list of the random numbers
function shuffle() {
    var sum = 0,
//        list = [],
        i = 0;

    for (var i = 0; i < 4; i++) {
        list[i] = Math.floor(Math.random() * 11);
        sum = list[i];
        for (var j = 0; j < i; j++) {
            sum = list[i];
        }
    }

    console.log(list);
    //    document.write(list);
}

shuffle();


//// Submit answers    
//function handleGamble() {
//    inputs.push(document.getElementsByClassName("gamble").value);
//    console.log(inputs); //create array from inputs
//
//    function compare(inputs, list) {
//        if (inputs.length != list.length) { //this guards against unequal array lengths = guard array
//            console.log("incorrect array");
//            document.write("Choose 4 numbers that range from 0-10");
//        }
//        for (var i = 0; i < inputs.length; i++) {
//            //Determine if arrA[0] == arrB[0]. If we were looking for any element in arrA to be present somewhere in arrB requires a much more complicated array
//            if (inputs[i] != list[i]) {
//                console.log("lost");
//                document.write("You Loose");
//            }
//        }
//        console.log("win");
//        document.write("Winner!");
//    }
//
//}
//button.onclick = handleGamble;
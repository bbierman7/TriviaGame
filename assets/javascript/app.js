$(document).ready(function() {

//User clicks Start, and game begins

//New page loads, and timer counts down from 2:00

//Questions has 4 answer choices. User can only click one option.

//After all questions are answered in correct time, user clicks Submit

//New page loads showing number correct and number incorrect

window.onload = function() {
    $("#startGame").on("click", start);
}

var questions = ["1.) When was America discovered?", 
"2.) How many continents are there on planet Earth?",
"3.)What is the largest mammal on planet Earth?",
"4.) How many teaspoons are in a table spoon?",
"5.) Which famous star appeared in Paula Abdul's music video Rush, Rush?",
"6.) Which man is widely credited with inventing peanut butter?",
"7.) What color would you get if you mixed all colors together?",
"8.) What is the hottest planet in our solar system?",
"9.) How many bones are there in the adult human body?",
"10.) What is the rarest blood type?",
"11.) Which man is widely credited with inventing peanut butter?",
"12.) What was the name of the department store in Miracle on 34th St.?",
"13.) Who holds the record for the longest winning streak in college football?",
"14.) Who was the last non-quarteback to win NFL MVP?",
"15.) Fe is the chemical symbol for which element?"
];

var correct = 0;
var incorrect = 0;
var clockRunning = false;
var time = 90;

//This variable holds our setInterval that starts the timer
var intervalId;
//Q1: if user selects 1493, correct++. Else, correct--

// $("#1492").on("click",function(){
//     correct++;
//     alert("you got it right!")
// }); 


function start(){
    
    //Use setInterval to start the count here and set the clock to running
    if (!clockRunning){
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }
}


function count() {
    time--;
    
    var formattedTime = timeConverter(time)
    $("#display").text(formattedTime)
}

function timeConverter(t) {

    var minutes = Math.floor(t/60);
    var seconds = t - (minutes*60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }

    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

}


});
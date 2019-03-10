$(document).ready(function() {

window.onload = function() {
    // $(".questionArea").hover(function(){
        $(".questionArea").hide();
        $("#gameOverDisplay").hide();
    // });
    $("#start").on("click", start);
};

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
var time = 3;

var intervalId;

function correct(){
    correct++;
}

function incorrect(){
    incorrect++;
}

function start(){
    
    //Use setInterval to start the count here and set the clock to running
    if (!clockRunning){
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }
    $(".questionArea").show();

}

function scoreTotal(){
        


        // $("#1492").on("click", )}

function count() {
    if (time > 0){
        time--;
        var formattedTime = timeConverter(time);
        $("#gameStartDisplay").text(formattedTime);
    }

    else{
        clockRunning = false;
        $("#gameOverDisplay").show();
    }
 
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

    return minutes + ":" + seconds;    
}

});
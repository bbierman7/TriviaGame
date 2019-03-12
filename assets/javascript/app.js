$(document).ready(function() {

window.onload = function() {
    $(".questionArea").hide();
    $("#gameOverDisplay").hide();
    $("#start").on("click", start);
    $("#restart").hide();
};

// var questions = ["1.) When was America discovered?", 
// "2.) How many continents are there on planet Earth?",
// "3.)What is the largest mammal on planet Earth?",
// "4.) How many teaspoons are in a table spoon?",
// "5.) Which famous star appeared in Paula Abdul's music video Rush, Rush?",
// "6.) Which man is widely credited with inventing peanut butter?",
// "7.) What color would you get if you mixed all colors together?",
// "8.) What is the hottest planet in our solar system?",
// "9.) How many bones are there in the adult human body?",
// "10.) What is the rarest blood type?",
// "11.) Which man is widely credited with inventing peanut butter?",
// "12.) What was the name of the department store in Miracle on 34th St.?",
// "13.) Who holds the record for the longest winning streak in college football?",
// "14.) Who was the last non-quarteback to win NFL MVP?",
// "15.) Fe is the chemical symbol for which element?"
// ];

// var correctAnswers = ["1492", ]

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var clockRunning = false;
var time = 60;

// var intervalId;

function start(){
    
    //Use setInterval to start the count here and set the clock to running
    if (!clockRunning){
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }
    $(".questionArea").show();

}

function count() {
    if (time > 0){
        time--;
        var formattedTime = timeConverter(time);
        $("#gameStartDisplay").text(formattedTime);
    }

    else{
        clockRunning = false;
        $(".questionArea").hide();
        $("#start").hide();
        $("#gameOverDisplay").show();

        $("#correct").show();
        $("#incorrect").show();
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

 //1st question
$('input[id="radio1c"]').on("click", function() {
correct++;
});
 //2nd question
  $('input[id="radio2c"]').on("click", function() {
    correct++;
  })
  $('input[id="radio3b"]').on("click", function() {
    correct++;
  })
//4th question
  $('input[id="radio4a"]').on("click", function() {
    correct++;
  })
  //5th question
  $('input[id="radio5c"]').on("click", function() {
    correct++;
  })
  //6th question
  $('input[id="radio6b"]').on("click", function() {
    correct++;
  })
  //7th question
  $('input[id="radio7d"]').on("click", function() {
    correct++;
  })
  //8th question
  $('input[id="radio8a"]').on("click", function() {
    correct++;
  })
  //9th question
  $('input[id="radio9b"]').on("click", function() {
    correct++;
  })
  //10th question
  $('input[id="radio10b"]').on("click", function() {
    correct++;
  })



  //11th question


  $('input[id="radio11d"]').on("click", function() {
    correct++;
    
  })



 //12th question 

  $('input[id="radio12b"]').on("click", function() {
    correct++;
    
  })



  //13th question


  $('input[id="radio13c"]').on("click", function() {
  })
  correct++;

  //14th question  
 

  $('input[id="radio14b"]').on("click", function() {
    correct++;
  })

  //15th question
  $('input[id="radio15a"]').on("click", function() {
    correct++;
 
  })
  

  //16th question
  $('input[id="radio16c"]').on("click", function() {
    correct++;
    
  });



   //Submit Answers
$("#submit").on("click", function(){
    time = 0;
    $(".questionArea").hide();
    $("#start").hide();
    $("#gameOverDisplay").show();

    $("#correct").text(correct);
    incorrect = 16 - correct;
    $("#incorrect").text(incorrect);
    $("#restart").show();
     
    // $("#correct").text(correct);
    
    
    // $("incorrect").text(incorrect);


});

//Restart
$("#restart").on("click", function (){
  time = 61;
  start;

  $('input[type=radio]').prop('checked', false);

  $(".questionArea").show();
  $("#restart").show();
  $("#gameOverDisplay").hide();
  $("#correct").hide();
  $("#incorrect").hide();

  correct = 0;
  incorrect = 0;


});

// $("button").click(function(){
//   $("p").hide(1000);
// });
//   function restart(){
    
//     //Use setInterval to start the count here and set the clock to running
//     if (!clockRunning){
//         intervalId = setInterval(count, 1000);
//         clockRunning = true;
//     }
//     $(".questionArea").show();

// }

});
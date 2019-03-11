$(document).ready(function() {

window.onload = function() {
    $(".questionArea").hide();
    $("#gameOverDisplay").hide();
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
$('input[name="radio1a"]').on("click", function() {
incorrect++;
$("#incorrect").text(incorrect);
});

$('input[name="radio1b"]').on("click", function() {
incorrect++;
$("#incorrect").text(incorrect);
});

$('input[name="radio1c"]').on("click", function() {
correct++;
$("#correct").text(correct); //correct answer
});

$('input[name="radio1d"]').on("click", function() {
incorrect++;
$("#incorrect").text(incorrect);
});






 //2nd question
 $('input[name="radio2a"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })

  $('input[name="radio2b"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })

  $('input[name="radio2c"]').on("click", function() {
    correct++;
    $("#correct").text(correct); //correct answer
  })

  $('input[name="radio2d"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })




  //3rd question
  $('input[name="radio3a"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })

  $('input[name="radio3b"]').on("click", function() {
    correct++;
    $("#correct").text(correct); //correct answer
  })

  $('input[name="radio3c"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })

  $('input[name="radio3d"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })




//4th question
  $('input[name="radio4a"]').on("click", function() {
    correct++;
    $("#correct").text(correct);
  })

  $('input[name="radio4b"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })

  $('input[name="radio4c"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })

  $('input[name="radio4d"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })




  //5th question
  $('input[name="radio5a"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })

  $('input[name="radio5b"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })

  $('input[name="radio5c"]').on("click", function() {
    correct++;
    $("#correct").text(correct); //correct answer
  })

  $('input[name="radio5d"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })





  //6th question
  $('input[name="radio6a"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })

  $('input[name="radio6b"]').on("click", function() {
    correct++;
    $("#correct").text(correct); //correct answer
  })

  $('input[name="radio6c"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })

  $('input[name="radio6d"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })




  //7th question
  $('input[name="radio7a"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })

  $('input[name="radio7b"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })

  $('input[name="radio7c"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })

  $('input[name="radio7d"]').on("click", function() {
    correct++;
    $("#correct").text(correct); //correct answer
  })



  //8th question
  $('input[name="radio8a"]').on("click", function() {
    correct++;
    $("#correct").text(correct); //correct answer
  })

  $('input[name="radio8b"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect); 
  })

  $('input[name="radio8c"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })

  $('input[name="radio8d"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })





  //9th question
  $('input[name="radio9a"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })

  $('input[name="radio9b"]').on("click", function() {
    correct++;
    $("#correct").text(correct); //correct answer
  })

  $('input[name="radio9c"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })

  $('input[name="radio9d"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })




  //10th question
  $('input[name="radio10a"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })

  $('input[name="radio10b"]').on("click", function() {
    correct++;
    $("#correct").text(correct); //correct answer
  })

  $('input[name="radio10c"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })

  $('input[name="radio10d"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })






  //11th question
  $('input[name="radio11a"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })

  $('input[name="radio11b"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })

  $('input[name="radio11c"]').on("click", function() {
    correct++;
    $("#correct").text(correct); //correct answer
  })

  $('input[name="radio11d"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })



 //12th question 
  $('input[name="radio12a"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })

  $('input[name="radio12b"]').on("click", function() {
    correct++;
    $("#correct").text(correct); //correct answer
  })

  $('input[name="radio12c"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })

  $('input[name="radio12d"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })



  //13th question
  $('input[name="radio13a"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })

  $('input[name="radio13b"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })

  $('input[name="radio13c"]').on("click", function() {
    correct++;
    $("#correct").text(correct); //correct answer
  })

  $('input[name="radio13d"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })




  //14th question  
  $('input[name="radio14a"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })

  $('input[name="radio14b"]').on("click", function() {
    correct++;
    $("#correct").text(correct); //correct answer
  })

  $('input[name="radio14c"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })

  $('input[name="radio14d"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })




  //15th question
  $('input[name="radio15a"]').on("click", function() {
    correct++;
    $("#correct").text(correct); //correct answer
  })
  
  $('input[name="radio15b"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })

  $('input[name="radio15c"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })

  $('input[name="radio15d"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  })




  //16th question
  $('input[name="radio16a"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  }) 
  

  $('input[name="radio16b"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  }) 

  $('input[name="radio16c"]').on("click", function() {
    correct++;
    $("#correct").text(correct); //correct answer
  }) 

  $('input[name="radio16d"]').on("click", function() {
    incorrect++;
    $("#incorrect").text(incorrect);
  }) 

});
$(document).ready(function() {

    //variables
    //On start click
    //1.display questions
    //2. display answers
    //run timer

    //on user selection
    //catch click event => put value of clicked event into user guess 
    //correct answer
    //user answer
    //while timer>-1
     //if user guess = correct answer =>correct counter ++
     //if else incorrect counter++
    //else unanswered = undefined answers
    //for every question only one selection available - 
    //when clicking on second answer uncheck radio button and check latest selection
   
 
   

    $("#start").on("click", start);
    $("#done").on("click", stop);

    //Define variables
    var correct = 0;
    var wrong = 0;
    var noanswer= 0;
    var userGuess = "";
    //timer variables
    var timer = 30;
    var timerRunning = false;
    var intervalId;
   
   

    function start() {
        // start timer 
       
        if (!timerRunning) {
            intervalId = setInterval(count, 1000);
            timerRunning = true;
            $(this).hide();
             //runnig through the array of questions to display and append it to our question block
            for (var i = 0; i < questionsAnswers.length; i++) {
                trivia.append('<h2>' + questionsAnswers[i].question + '</h2>');
                //runing through array of available choices to display the relevant answers for each question
                for (var j = 0; j < questionsAnswers[i].choices.length; j++) {
                    trivia.append('<p><input type="checkbox" name="question"'+ '" value="' + questionsAnswers[i].choices[j] + '">' + "     " +questionsAnswers[i].choices[j] + "</p>");
                }
            }   
        }         
    }

    function stop() {
        //  learInterval to stop the count here and set the timer to not running.
        clearInterval(intervalId);
        timerRunning = false;
        $(this).hide();
        endOfGame()
    }

    function count() {
        //  decrease timer counter 
        timer--
        //  Get the current time, pass that into the timeConverter function,
        //        and save the result in a variable.
        var timeRmaining = timeConverter(timer);
        console.log(timeConverter(timer));
        //  Use the variable created to show the converted time
        $("#timer").html("Time Remaining :   " + "" + timeConverter(timer))
        if (timeRmaining <=0) {
            console.log('TIME UP');
            stop();
        }
    }

    function timeConverter(t) {
        //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes === 0) {
            minutes = "00";
        } else if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return seconds;
    }
    //array of question, answers and correct answer
    var questionsAnswers = [{
        question: "Which fictional city is the home of Batman?",
        choices: ["Central City", "Gotham City", "Metropolis"],
        correctAnswer: "Gotham City"
    }, {
        question: "Who is the strongest?",
        choices: ["Superman",  "The Terminator", "Waluigi, obviously"],
        correctAnswer: "Waluigi, obviously"
    }, {
        question: "In the film Babe, what type of animal was Babe?",
        choices: ["Horse","Cat","Pig"],
        correctAnswer:"Pig"
    },     
  
];

var trivia = $('.question-block');



function done() {
    
}


// // endOfGame function prints resultsto the html 
function endOfGame() {
  
    trivia.html('<h2>Times Up!</h2>');
    trivia.append('<h3>Correct Answers: ' + correct + '</h3>');
    trivia.append('<h3>Incorrect Answers: ' + wrong + '</h3>');
    trivia.append('<h3>Unanswered: ' + (questionsAnswers.length - (wrong + correct)) + '</h3>');
    
}
  

})
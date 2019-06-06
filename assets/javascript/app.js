$(document).ready(function() {



    //as long as timer=>30sec user can keep playing
    //else game over 
    //display counters - correct, incorrect,unanswered 

    //game()
    //for every question only one selection available - 
    //when clicking on second answer uncheck radio button and check latest selection
    //if user selection = correct answer
    //correct counter ++
    //else incorrect counter++
    //unanswered = undefined answers

    $("#start").on("click", start);

    $("#done").on("click", stop);
    //Define variables

    var correctCount = 0;
    var wrongCount = 0;
    var unanswerCount = 0;
    var timer = 30;
    var userGuess = "";
    var timerRunning = false;
    var intervalId;

    //start() 
    //hide start button
    //---display questions with available answer options
    //---start timer
    function start() {

        // start timer 
        if (!timerRunning) {
            intervalId = setInterval(count, 1000);
            timerRunning = true;
            $(this).hide();
        }

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
    var Questions = [{
            question1: "Who is the strongest?",
            answers: {
                a: "Superman",
                b: "The Terminator",
                c: "Waluigi, obviously"
            },
            correctAnswer: "c"
        },
        {
            question2: "Which fictional city is the home of Batman?",
            answers: {
                a: "Central City",
                b: "Gotham City",
                c: "Metropolis"
            },
            correctAnswer: "b"
        },
        {
            question3: "In the film Babe, what type of animal was Babe?",
            answers: {
                a: "Horse",
                b: "Cat",
                c: "Dog",
                d: "Pig"
            },
            correctAnswer: "d"
        }
    ];

    function createQuestions(question, key) {
        var block = $("<div class='question' name='" + key + "'>" + question.question + "" +
            "<ul>" +
            "<li><input type='radio' name='" + key + "' value='a'><label>" + question.a + "</label></li>" +
            "<li><input type='radio' name='" + key + "' value='b'><label>" + question.b + "</label></li>" +
            "<li><input type='radio' name='" + key + "' value='c'><label>" + question.c + "</label></li>" +
            "<li><input type='radio' name='" + key + "' value='d'><label>" + question.d + "</label></li>" +
            "</ul>");

        return block;
    }


    function showQuestions() {
        var questions = Object.keys(Questions);
        for (var i = 0; i < questions.length; i++) {
            var questiontitle = questions[i];
            var question = Questions[questiontitle];
            var questionblocks = createQuestions(question, questiontitle);
            $(".question-block").append(questionblocks).show();
        }
    }
    showQuestions()
})
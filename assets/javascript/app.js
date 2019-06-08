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
    var correctCount = 0;
    var wrongCount = 0;
    var noanswerCount = 0;
    var userGuess = "";
    //timer variables
    var timer = 30;
    var timerRunning = false;
    var intervalId;
    
  
    

    const questionContainer = document.getElementById('question');
    const resultsContainer = document.getElementById('results');
    const answerContainer = document.getElementById('answer');
    const doneButton = document.getElementById('done');

    function start() {
        // start timer 
        if (!timerRunning) {
            intervalId = setInterval(count, 1000);
            timerRunning = true;
            $(this).hide();
            //---display questions with available answers
            trivia()
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
            question: "Who is the strongest?",
            answers: {
                a: "Superman",
                b: "The Terminator",
                c: "Waluigi, obviously"
            },
            correctAnswer: "c"
        },
        {
            question: "Which fictional city is the home of Batman?",
            answers: {
                a: "Central City",
                b: "Gotham City",
                c: "Metropolis"
            },
            correctAnswer: "b"
        },
        {
            question: "In the film Babe, what type of animal was Babe?",
            answers: {
                a: "Horse",
                b: "Cat",
                c: "Pig",

            },
            correctAnswer: "c"
        }
     
    ];
   
    function trivia(){
        // we'll need a place to store the HTML output
        const output = [];
      
        // for each question...
        Questions.forEach(
          (currentQuestion, questionNumber) => {
      
            // we'll want to store the list of answer choices
            const answers = [];
           
      
            // and for each available answer...
            for(letter in currentQuestion.answers){
      
              // ...add an HTML radio button
              answers.push(
                `<label>
                  <input type="radio" name="question${questionNumber}" value="${letter}">
                  ${letter} :
                  ${currentQuestion.answers[letter]}
                </label>`
              );
            }
      
            // add this question and its answers to the output
            output.push(
              `<div class="question"> ${currentQuestion.question} </div>
              <div class="answer"> ${answers.join('')} </div>`
            );
           // console.log(answers);
          }
        );
      
        // finally combine our output list into one string of HTML and put it on the page
        questionContainer.innerHTML = output.join('');
        console.log(Questions.correctAnswer);
        }
   function endOfGame() {
    
    const answerContainers = questionContainer.querySelectorAll('.answers');
   
   }

})
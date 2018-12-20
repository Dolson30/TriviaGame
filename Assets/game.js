var currentQ = 0;
var timeLeft=10;
var countdown = false;
var inGame = false;
var intervalId;
var incorrect = 0;
var correct = 0;

var question1 = {
    question: "In order to distract the family in the car, what animal did Clark tell them he saw?",
    answers: [
        "A deer","A Moose","A Tree","Santa"   
    ],
    correctAnswer: "A deer",
    userAnswer: ""
};
var question2 = {
    question: "What is Eddie's dog's name?",
    correctAnswer: "Snot",
    answers: [
        "Spit","Snot","Scraps","Barf"
    ],
    userAnswer: ""
};
var question3 = {
    question: "What does Mr. Shirley call Clark when Clark is dropping off the gift?",
    correctAnswer: "Mark",
    answers: [
        "Clark", "Mark", "Bill", "Frank"
    ],
    userAnswer: ""
};
var question4 = {
    question: "What is playing on the TV when the grandparents arrive?",
    correctAnswer: "It's A Wonderful Life",
    answers: [
     "Christmas Story","White Christmas","Charlie Brown Christmas","It's A Wonderful Life"
    ],
    userAnswer: ""
};
var question5 = {
    question: "Who spotted Santa's sleigh?",
    correctAnswer: "Airline Pilots",
    answers: [
        "Clark","Taxi Drivers","Airline Pilots","NORAD"
    ],
    userAnswer: ""
};
var question6 = {
    question: "What game is being played during the squirrel scene?",
    correctAnswer: "Monopoly",
    answers: [
        "Sorry","Monopoly","Guess Who","Trouble"
    ],
    userAnswer: ""
};
var question7 = {
    question: "How many times does Clark use the chain saw?",
    correctAnswer: "Three",
    answers: [
        "Four","Three","Two","Once"
    ],
    userAnswer: ""
};
var question8 = {
    question: "How many times more slippery is Clark's 'non-caloric silicon-based kitchen lubricant' than any cooking oil?",
    correctAnswer: "500x",
    answers: [
        "500x","200x","300x","600x"
    ],
    userAnswer: ""
};
var question9 = {
    question: "How many years has Clark worked for the same company?",
    correctAnswer: "17",
    answers: [
        "18","15","13","17"
    ],
    userAnswer: ""
};
var question10 = {
    question: "What is the name of the store to Clark and Eddie go shopping together?",
    correctAnswer: "Wal-Mart",
    answers: [
        "K-Mart","The Mall","Wal-Mart","Target"
    ],
    userAnswer: ""
};
var question11 = {
    question: "Where did Cousin Eddie's gas money give out?",
    correctAnswer: "Gurnee",
    answers: [
        "Gurnee","Dunning","Douglas","Garfield"
    ],
    userAnswer: ""
};
var question12 = {
    question: "What street does Mr. Shirley live on?",
    correctAnswer: "Melody Lane",
    answers: [
        "Happy Lane","Melody Lane","Joyful Ave","Jingle Street"
    ],
    userAnswer: ""
};
var question13 = {
    question: "How many imported Italian twinkle lights does Clark have on his house?",
    correctAnswer: "25,000",
    answers: [
        "20,000","15,000","30,000","25,000"
    ],
    userAnswer: ""
};
var question14 = {
    question: "What does the police officer threaten to beat Mr. Shirley with?",
    correctAnswer: "Rubber Hose",
    answers: [
        "Rubber Hose","Plastic Stick","Rubber Mallet","Metal Rod"
    ],
    userAnswer: ""
};
var question15 = {
    question: "What is the final line of the movie?",
    correctAnswer: "I did it",
    answers: [
        "Finally","I did it","Merry Christmas","And the home of the brave"
    ],
    userAnswer: ""
};

var questionArray = [question1,question2,question3,question4,question5,question6,question7,question8,question9,question10,question11,question12,question13,question14,question15];

window.onload = function() {
    $("#start").on("click", start);
 

  function start()
  {
      
          incorrect = 0;
          correct =0;
          currentQ = 0;
          timeLeft = 10;
            $("#start").remove();  
            $("#question").text("")
            $("#answer1").text("")
            $("#answer2").text("")
            $("#answer3").text("")
            $("#answer4").text("")
            $("#question").text(questionArray[currentQ].question)
            $("#answer1").text(questionArray[currentQ].answers[0])
            $("#answer2").text(questionArray[currentQ].answers[1])
            $("#answer3").text(questionArray[currentQ].answers[2])
            $("#answer4").text(questionArray[currentQ].answers[3])
            $("#timer").text(timeLeft);
            if (!countdown)
             {
                 clearInterval(intervalId);
                 intervalId = setInterval(count,1000);
             } 
 
    

  };


  function count()
  {
      console.log(timeLeft);
    if(timeLeft === 0)
        {
         questionArray[currentQ].userAnswer = ""
                if(currentQ === 14)
                {
                    gameOver();
                }
                else
                {
                    currentQ++;
                    $("#question").text(questionArray[currentQ].question)
                    $("#answer1").text(questionArray[currentQ].answers[0])
                    $("#answer2").text(questionArray[currentQ].answers[1])
                    $("#answer3").text(questionArray[currentQ].answers[2])
                    $("#answer4").text(questionArray[currentQ].answers[3])
                    timeLeft = 10;
                    $("#timer").text(timeLeft);
                    clearInterval(intervalId);
                    intervalId = setInterval(count,1000);
                }          
         }
    else
    {
      timeLeft--;
      $("#timer").text(timeLeft);
    }
  }

   $(".answerButt").on('click',next);
   function next(button)
   {
    questionArray[currentQ].userAnswer = $(this).text();
    currentQ++;
    console.log(currentQ);
    if(currentQ > 14)
    {
        gameOver();
    
    }
    else
    {
        $("#question").text(questionArray[currentQ].question)
        $("#answer1").text(questionArray[currentQ].answers[0])
        $("#answer2").text(questionArray[currentQ].answers[1])
        $("#answer3").text(questionArray[currentQ].answers[2])
        $("#answer4").text(questionArray[currentQ].answers[3])
        timeLeft = 10;
        $("#timer").text(timeLeft);
        clearInterval(intervalId);
        intervalId = setInterval(count,1000);
    }
 
   }


   function gameOver()
   {
    $("#question-row").empty();
    inGame = false;
    clearInterval(intervalId);
    for(let cquestion of questionArray)
    {
        if(cquestion.userAnswer != cquestion.correctAnswer)
        {
            incorrect++;
        }
        else{
            correct++;
        }
        
    }
    $("#question-row").append("<h2 id='score'>Final Score: " +correct + "/15");
    $("#question-row").append("<h3 id='reload-text'>Reload Page to try again! Or Click Below to reveal Answers.");
    $("#question-row").append("<button id=reveal>Click to reveal answers");
    $("#question-row").append("<button id=newGame>Click to retry");

   }

   $(document).on("click", "#reveal", function()
   {
     gameOver2();
    });

   $(document).on("click", "#newGame", function()
    {
        window.location.reload();
     });
 

   function gameOver2()
   {
    inGame = false;
    clearInterval(intervalId);
    $("#question-row").empty();
    $("#question-row").html("<h1>Your Incorrect Answers:</h1>");
    correct = 0;
    for(let cquestion of questionArray)
    {
        if(cquestion.userAnswer != cquestion.correctAnswer)
        {

            $("#question-row").append("<br/><h5>Question: " + cquestion.question + "<br/>Your Answer: " + cquestion.userAnswer + ". Correct Answer: " + cquestion.correctAnswer);
            incorrect++;
        }
        else{
            correct++;
        }
        
    }
    $("#question-row").append("<h2>Final Score: " +correct + "/15");
    $("#question-row").append("<button id=newGame>Click to retry");
   }

   



};
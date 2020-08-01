// GIVEN I am taking a code quiz

//Store the total number of questions
var totalQuestions = $('.questions').size();

//Set the current question to display to 1
var currentQuestion = 0;

//Store the selector in a variable.
//It is good practice to prefix jQuery selector variables with a $
$questions = $('.questions');

//Hide all the questions
$questions.hide();

//Show the first question
$($questions.get(currentQuestion)).fadeIn();

//attach a click listener to the HTML element with the id of 'next'
$('#next').click(function () {

     //fade out the current question,
     //putting a function inside of fadeOut calls that function 
     //immediately after fadeOut is completed, 
     //this is for a smoother transition animation
     $($questions.get(currentQuestion)).fadeOut(function () {

        //increment the current question by one
        currentQuestion = currentQuestion + 1;

        //if there are no more questions do stuff
        if (currentQuestion == totalQuestions) {

            var result = sum_values()

            //do stuff with the result
            alert(result);

        } else {

            //otherwise show the next question
            $($questions.get(currentQuestion)).fadeIn();

        }
    });

});


// WHEN I click the start button




// THEN a timer starts and I am presented with a question



// WHEN I answer a question



// THEN I am presented with another question



// WHEN I answer a question incorrectly



// THEN time is subtracted from the clock



// WHEN all questions are answered or the timer reaches 0



// THEN the game is over



// WHEN the game is over



// THEN I can save my initials and score
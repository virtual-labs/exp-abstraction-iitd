
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
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
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  

// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "Q1. All methods must be implemented of an interface.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },

    {
      question: "Q2. What type of variable can be defined in an interface?",
      answers: {
        a: "public static",
        b: "private final",
        c: "public final",
        d: "static final"
      },
      correctAnswer: "d"
    },

    {
      question: "Q3.• What does an interface contain?",
      answers: {
        a: " Method definition",
        b: " Method declaration",
        c: "Method declaration and definition",
        d: "Method name"
      },
      correctAnswer: "b"
    },
	
	{
      question: "Q4. What happens when a constructor is defined for an interface?",
      answers: {
        a: "Compilation failure",
        b: "Runtime Exception",
        c: " The interface compiles successfully",
        d: " The implementing class will throw exception"
      },
      correctAnswer: "a"
    },
	
	{
      question: "Q5. What happens when we access the same variable defined in two interfaces implemented by the same class?",
      answers: {
        a: " Compilation failure",
        b: "Runtime Exception",
        c: "The JVM is not able to identify the correct variable",
        d: " The interfaceName,variableName needs to be defined"
      },
      correctAnswer: "d"
    },
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();

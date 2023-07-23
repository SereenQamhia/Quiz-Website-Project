// const score = document.getElementById('score');
// const engBtn = document.querySelector('.engBtn');
// const iQBtn = document.querySelector('.iQBtn');
// const tecBtn = document.querySelector('.tecBtn');
// const quizName = document.querySelector('#quizName');

// engBtn.addEventListener('click', () => {
//   const x = new XMLHttpRequest();
//   x.open("GET", "quiz.json");
//   x.onload = function () {
//     const quiz = JSON.parse(this.responseText);
//     let engQuiz = quiz.english_quiz;

//     // Clear previous content before displaying new questions
//     quizName.innerHTML = "";

//     for (let i = 0; i < engQuiz.length; i++) {
//       let Q = document.createElement("div");
//       Q.className = "question";
//       Q.innerHTML = engQuiz[i].question;

//       // Add options and handle user interactions here
//       // For example, create radio buttons for options, and check the correct_answer property for the correct answer

//       quizName.appendChild(Q);
//     }
//   };
//   x.send();
// });
const score = document.getElementById('score');
const engBtn = document.querySelector('.engBtn');
const iQBtn = document.querySelector('.iQBtn');
const tecBtn = document.querySelector('.tecBtn');
const quizName = document.querySelector('#quizName');

// Function to display the questions
function displayQuestions(quizData) {
  // Clear previous content before displaying new questions
  quizName.innerHTML = "";

  // Get the corresponding quiz data based on the selected button
  const selectedQuiz = quizData[engBtn.dataset.quiz];

  for (let i = 0; i < selectedQuiz.length; i++) {
    const question = selectedQuiz[i];
    const questionElement = document.createElement("div");
    questionElement.className = "question";
    questionElement.innerHTML = question.question;

    // Add options and handle user interactions here
    // For example, create radio buttons for options and check the correct_answer property for the correct answer

    quizName.appendChild(questionElement);
  }
}

// Fetch the quiz data from the JSON file
function fetchQuizData() {
  const x = new XMLHttpRequest();
  x.open("GET", "quiz.json");
  x.onload = function () {
    const quiz = JSON.parse(this.responseText);

    // Save the quiz data in the dataset of the buttons
    engBtn.dataset.quiz = "english_quiz";
    iQBtn.dataset.quiz = "iq_quiz";
    tecBtn.dataset.quiz = "technical_quiz";

    // Display the questions for the default selected quiz (English)
    displayQuestions(quiz);
  };
  x.send();
}

// Add click event listeners to the quiz buttons
engBtn.addEventListener('click', () => {
  fetchQuizData();
});
iQBtn.addEventListener('click', () => {
  fetchQuizData();
});
tecBtn.addEventListener('click', () => {
  fetchQuizData();
});
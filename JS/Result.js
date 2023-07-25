const score = document.getElementById('score');
const engBtn = document.querySelector('.engBtn');
const iQBtn = document.querySelector('.iQBtn');
const tecBtn = document.querySelector('.tecBtn');
const quizName = document.querySelector('#quizName');
fetch('../quiz.json')
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Error while fetching the data");
    }
  })
  .then((data) => {
    quiz = data;
    showQuiz('english_quiz');
    calculateTotalScore();
    score.innerHTML = `${totalScore}`;
    
  })
  .catch((err) => {
    console.log(err);
  });


  let userAnswers = JSON.parse(localStorage.getItem('Answers'));

  function calculateTotalScore() {
    let totalScore = 0;
    for (let quizType in quiz) {
      let currentQuiz = quiz[quizType];
      let quizScore = 0;
  
      for (let i = 0; i < currentQuiz.length; i++) {
        if (userAnswers[i] === currentQuiz[i].correct_answer) {
          quizScore++;
        }
      }
  
      // Add the quiz score to the total score
      totalScore += quizScore;
    }
  
    return totalScore;
  }


function showQuiz(quizType) {
  quizName.innerHTML = ''; // Clear the previous quiz content
  let currentQuiz = quiz[quizType];

  for (let i = 0; i < currentQuiz.length; i++) {
    let Q = document.createElement("div");
    Q.innerHTML = " ";
    Q.className = "question";
    Q.style.padding = '30px';
    Q.innerHTML = currentQuiz[i].question;

    let options = currentQuiz[i].options;
    for (let j = 0; j < options.length; j++) {
      let op = document.createElement("div");
      op.style.padding = '10px';
      op.innerHTML = j +1  +")" + "  " +options[j];
      let selectedOption = localStorage.getItem("Answers");

      let feedback = document.createElement("span");

      if (options[j] === selectedOption) {
          feedback.innerHTML = `<span class=material-icons-outlined> Your answer  </span>`;
       
      } else {
        if (options[j] === currentQuiz[i].correct_answer) {
          feedback.innerHTML= `&nbsp;&nbsp;&nbsp;`+`<i class="fa-solid fa-check" style="color: #2db944;"></i>` +`&nbsp;&nbsp;`;
        } else {
          feedback.innerHTML =`&nbsp;&nbsp;&nbsp;` + `<i class="fa-solid fa-x" style="color: #e1390e;"></i>`;
        }
      }

      op.appendChild(feedback);
      Q.appendChild(op);
    }

    quizName.appendChild(Q);
  }
}

engBtn.addEventListener('click', () => {
  showQuiz('english_quiz');
});

iQBtn.addEventListener('click', () => {
  showQuiz('iq_quiz');
});

tecBtn.addEventListener('click', () => {
  showQuiz('technical_quiz');
});







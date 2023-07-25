Result = document.getElementById("result")
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
  
      totalScore += quizScore;
    }
  
    return totalScore;
  }

  let Tscore =calculateTotalScore();
  if (Tscore >= 10){
    Result.innerHTML = 
    ` <img src="../images/check.PNG" >
    <div class="congrats">Congratulation!</div>
    <div> We will arrange with you for an interview </div>
    <div> Your score is ${totalScore} out of 20 <div>
    <button id="see">See Answers</button>` 

    let see = document.getElementById("see");
    see.addEventListener("click", ()=>
    window.location.href = "Result.html"
    
    )}

    else {
    Result.innerHTML = 
    ` <img src="../images/fail.png" >
    <div class="fail">You fail the quiz</div>
    <div> Work hard and keep trying </div>
    <div> Your score is ${totalScore} out of 20 <div>
    <button id="see">See Answers</button>` 

    let see = document.getElementById("see");
    see.addEventListener("click", ()=>
    window.location.href = "Result.html"
    
    )}
 
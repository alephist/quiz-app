// Variables
let questions = document.querySelectorAll('.quiz__item');
let choices = document.querySelectorAll('.quiz__choice');
let quizOutput = document.querySelector('.quiz__output');
let quizResult = document.querySelector('.quiz__result');
let resetBtn = document.querySelector('.quiz__reset');
let submitBtn = document.querySelector('.quiz__submit');

// Initialize total score
let totalScore = 0;

// Validate each choices
choices.forEach((choice) => {
  choice.addEventListener('input', (e) => {
    if (e.target.value === 'true') {
      totalScore++;
    }
  });
});

// Display score
submitBtn.addEventListener('click', () => {
  if (totalScore >= Math.round(questions.length / 2)) {
    // Add success modifier if score is equal to or greater than 50%
    quizOutput.classList.add('quiz__output--success');
  } else {
    // Add error modifier if score is below 50%
    quizOutput.classList.add('quiz__output--error');
  }
  quizResult.textContent = `You got ${totalScore} out of ${questions.length}`;
});

// Reset quiz
resetBtn.addEventListener('click', () => {
  // Remove all check marks
  choices.forEach((choice) => {
    choice.checked = false;
  });

  // Remove output display
  quizOutput.classList.remove('quiz__output--success');
  quizOutput.classList.remove('quiz__output--error');
  quizResult.textContent = '';
  totalScore = 0;
});

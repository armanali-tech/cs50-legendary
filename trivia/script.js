function checkAnswer(selectedAnswer) {
    const correctAnswer = 'Paris';
    const result = document.getElementById('result1');

    if (selectedAnswer === correctAnswer) {
      result.textContent = 'Correct!';
      result.className = 'result correct';
    } else {
      result.textContent = 'Incorrect';
      result.className = 'result incorrect';
    }
  }

  function checkFreeResponse() {
    const userAnswer = document.getElementById('answer2').value.toLowerCase();
    const correctAnswer = 'tokyo';
    const result = document.getElementById('result2');

    if (userAnswer === correctAnswer) {
      result.textContent = 'Correct!';
      result.className = 'result correct';
    } else {
      result.textContent = 'Incorrect';
      result.className = 'result incorrect';
    }
  }

    // Respuestas correctas de las preguntas en un array
    const correctAnswers = {
      question1: 'A',
      question2: 'B',
      question3: 'C',
      question4: 'D'
    };
// Preguntas del test
  // Recorrer todas las preguntas
  for (let i = 1; i <= 4; i++) {
    let question = 'question' + i;
    let selectedAnswer = document.querySelector(input[name="${question}"]:checked);
    let questionDiv = document.querySelector(div:nth-of-type(${i}));

    if (selectedAnswer) {
        // Verificar si la respuesta es correcta
        if (selectedAnswer.value === correctAnswers[question]) {
            correct++;
            selectedAnswer.parentNode.classList.add('correct-answer');
        } else {
            incorrect++;
            selectedAnswer.parentNode.classList.add('incorrect-answer');
        }
    } else {
        // Si no se seleccionó respuesta
        unanswered++;
    }
  }

    // Calcula el porcentaje de respuestas correctas
    const percentage = (correctAnswers / totalQuestions) * 100;

    // Muestra el resultado en el DOM
    const resultDiv = document.getElementById('result'); // Obtiene el div donde se mostrará el resultado
    resultDiv.innerText = `Has acertado ${correctAnswers} de ${totalQuestions} preguntas (${percentage.toFixed(2)}%).`; // Muestra el resultado
  
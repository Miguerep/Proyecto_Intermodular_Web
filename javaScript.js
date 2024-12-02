// Preguntas del test
function submitQuiz() {
    let correctAnswers = 0; // Inicializa el contador de respuestas correctas
    const totalQuestions = 4; // Total de preguntas en el test

    // Obtiene las respuestas seleccionadas por el usuario
    const answers = {
      question1: document.querySelector('input[name="question1"]:checked')?.value, // Respuesta de la pregunta 1
      question2: document.querySelector('input[name="question2"]:checked')?.value, // Respuesta de la pregunta 2
      question3: document.querySelector('input[name="question3"]:checked')?.value, // Respuesta de la pregunta 3
      question4: document.querySelector('input[name="question4"]:checked')?.value, // Respuesta de la pregunta 4
    };

    // Verifica si cada respuesta es correcta y actualiza el contador
    if (answers.question1 === 'correcta') correctAnswers++;
    if (answers.question2 === 'correcta') correctAnswers++;
    if (answers.question3 === 'correcta') correctAnswers++;
    if (answers.question4 === 'correcta') correctAnswers++;

    // Calcula el porcentaje de respuestas correctas
    const percentage = (correctAnswers / totalQuestions) * 100;

    // Muestra el resultado en el DOM
    const resultDiv = document.getElementById('result'); // Obtiene el div donde se mostrará el resultado
    resultDiv.innerText = `Has acertado ${correctAnswers} de ${totalQuestions} preguntas (${percentage.toFixed(2)}%).`; // Muestra el resultado
  }
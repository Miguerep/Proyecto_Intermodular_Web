function submitQuiz() {
  let respuestaCorrecta = 0; // Contador de respuestas correctas
  const totalpreguntas = 16; // Total de preguntas

  // Obtener las respuestas seleccionadas para cada pregunta
  const respuesta = {
    pregunta1: document.querySelector('input[name="pregunta1"]:checked')?.value,
    pregunta2: document.querySelector('input[name="pregunta2"]:checked')?.value,
    pregunta3: document.querySelector('input[name="pregunta3"]:checked')?.value,
    pregunta4: document.querySelector('input[name="pregunta4"]:checked')?.value,
    pregunta5: document.querySelector('input[name="pregunta5"]:checked')?.value,  
    pregunta6: document.querySelector('input[name="pregunta6"]:checked')?.value,  
    pregunta7: document.querySelector('input[name="pregunta7"]:checked')?.value,  
    pregunta8: document.querySelector('input[name="pregunta8"]:checked')?.value, 
    pregunta9: document.querySelector('input[name="pregunta9"]:checked')?.value,  
    pregunta10: document.querySelector('input[name="pregunta10"]:checked')?.value,  
    pregunta11: document.querySelector('input[name="pregunta11"]:checked')?.value,  
    pregunta12: document.querySelector('input[name="pregunta12"]:checked')?.value,  
    pregunta13: document.querySelector('input[name="pregunta13"]:checked')?.value,  
    pregunta14: document.querySelector('input[name="pregunta14"]:checked')?.value,  
    pregunta15: document.querySelector('input[name="pregunta15"]:checked')?.value,  
    pregunta16: document.querySelector('input[name="pregunta16"]:checked')?.value,  
  };

  // Validar las respuestas y sumar las correctas
  if (respuesta.pregunta1 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta2 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta3 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta4 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta5 === 'correcta') respuestaCorrecta++;  
  if (respuesta.pregunta6 === 'correcta') respuestaCorrecta++;  
  if (respuesta.pregunta7 === 'correcta') respuestaCorrecta++; 
  if (respuesta.pregunta8 === 'correcta') respuestaCorrecta++;  
  if (respuesta.pregunta9 === 'correcta') respuestaCorrecta++;  
  if (respuesta.pregunta10 === 'correcta') respuestaCorrecta++;  
  if (respuesta.pregunta11 === 'correcta') respuestaCorrecta++;  
  if (respuesta.pregunta12 === 'correcta') respuestaCorrecta++;  
  if (respuesta.pregunta13 === 'correcta') respuestaCorrecta++;  
  if (respuesta.pregunta14 === 'correcta') respuestaCorrecta++;  
  if (respuesta.pregunta15 === 'correcta') respuestaCorrecta++;  
  if (respuesta.pregunta16 === 'correcta') respuestaCorrecta++;  
  // Calcular el porcentaje de aciertos
  const porcentaje = (respuestaCorrecta / totalpreguntas) * 100;

  // Mostrar el resultado
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerText = `Has acertado ${respuestaCorrecta} de ${totalpreguntas} preguntas (${porcentaje.toFixed(2)}%).`;
}
  
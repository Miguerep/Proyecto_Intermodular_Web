function submitQuiz() {
  let respuestaCorrecta = 0; // Contador de respuestas correctas
  const totalpreguntas = 52; // Total de preguntas

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
    pregunta17: document.querySelector('input[name="pregunta17"]:checked')?.value,
    pregunta18: document.querySelector('input[name="pregunta18"]:checked')?.value,
    pregunta19: document.querySelector('input[name="pregunta19"]:checked')?.value,
    pregunta20: document.querySelector('input[name="pregunta20"]:checked')?.value,
    pregunta21: document.querySelector('input[name="pregunta21"]:checked')?.value,
    pregunta22: document.querySelector('input[name="pregunta22"]:checked')?.value,
    pregunta23: document.querySelector('input[name="pregunta23"]:checked')?.value,
    pregunta24: document.querySelector('input[name="pregunta24"]:checked')?.value,
    pregunta25: document.querySelector('input[name="pregunta25"]:checked')?.value,
    pregunta26: document.querySelector('input[name="pregunta26"]:checked')?.value,
    pregunta27: document.querySelector('input[name="pregunta27"]:checked')?.value,
    pregunta28: document.querySelector('input[name="pregunta28"]:checked')?.value,
    pregunta29: document.querySelector('input[name="pregunta29"]:checked')?.value,
    pregunta30: document.querySelector('input[name="pregunta30"]:checked')?.value,
    pregunta31: document.querySelector('input[name="pregunta31"]:checked')?.value,
    pregunta32: document.querySelector('input[name="pregunta32"]:checked')?.value,
    pregunta33: document.querySelector('input[name="pregunta33"]:checked')?.value,
    pregunta34: document.querySelector('input[name="pregunta34"]:checked')?.value,
    pregunta35: document.querySelector('input[name="pregunta35"]:checked')?.value,
    pregunta36: document.querySelector('input[name="pregunta36"]:checked')?.value,
    pregunta37: document.querySelector('input[name="pregunta37"]:checked')?.value,
    pregunta38: document.querySelector('input[name="pregunta38"]:checked')?.value,
    pregunta39: document.querySelector('input[name="pregunta39"]:checked')?.value,
    pregunta40: document.querySelector('input[name="pregunta40"]:checked')?.value,
    pregunta41: document.querySelector('input[name="pregunta41"]:checked')?.value,
    pregunta42: document.querySelector('input[name="pregunta42"]:checked')?.value,
    pregunta43: document.querySelector('input[name="pregunta43"]:checked')?.value,
    pregunta44: document.querySelector('input[name="pregunta44"]:checked')?.value,
    pregunta45: document.querySelector('input[name="pregunta45"]:checked')?.value,
    pregunta46: document.querySelector('input[name="pregunta46"]:checked')?.value,
    pregunta47: document.querySelector('input[name="pregunta47"]:checked')?.value,
    pregunta48: document.querySelector('input[name="pregunta48"]:checked')?.value,
    pregunta49: document.querySelector('input[name="pregunta49"]:checked')?.value,
    pregunta50: document.querySelector('input[name="pregunta50"]:checked')?.value,
    pregunta51: document.querySelector('input[name="pregunta51"]:checked')?.value,
    pregunta52: document.querySelector('input[name="pregunta52"]:checked')?.value,
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
  if (respuesta.pregunta17 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta18 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta19 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta20 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta21 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta22 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta23 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta24 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta25 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta26 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta27 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta28 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta29 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta30 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta31 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta32 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta33 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta34 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta35 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta36 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta37 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta38 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta39 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta40 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta41 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta42 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta43 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta44 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta45 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta46 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta47 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta48 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta49 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta50 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta51 === 'correcta') respuestaCorrecta++;
  if (respuesta.pregunta52 === 'correcta') respuestaCorrecta++;  
  // Calcular el porcentaje de aciertos
  const porcentaje = (respuestaCorrecta / totalpreguntas) * 100;

  // Mostrar el resultado
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerText = `Has acertado ${respuestaCorrecta} de ${totalpreguntas} preguntas (${porcentaje.toFixed(2)}%).`;
}
  
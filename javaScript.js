// Preguntas del test
const preguntas = [
    {
        pregunta: "¿Cuál es el lenguaje usado para el desarrollo web?",
        opciones: ["Python", "JavaScript", "C++", "Java"],
        respuestaCorrecta: 1, // Índice de la respuesta correcta
    },
    {
        pregunta: "¿Cuál es el resultado de 2 + 2?",
        opciones: ["3", "4", "5", "6"],
        respuestaCorrecta: 1,
    },
    {
        pregunta: "¿Qué significa CSS?",
        opciones: [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets",
        ],
        respuestaCorrecta: 1,
    },
];

// Seleccionar el contenedor del test
const contenedorTest = document.getElementById("test-container");

// Generar las preguntas dinámicamente
preguntas.forEach((pregunta, index) => {
    const preguntaDiv = document.createElement("div");
    preguntaDiv.classList.add("question");
    
    // Título de la pregunta
    const tituloPregunta = document.createElement("h3");
    tituloPregunta.textContent = `${index + 1}. ${pregunta.pregunta}`;
    preguntaDiv.appendChild(tituloPregunta);

    // Opciones
    pregunta.opciones.forEach((opcion, opcionIndex) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `pregunta-${index}`; // Agrupamos por pregunta
        input.value = opcionIndex;

        label.appendChild(input);
        label.appendChild(document.createTextNode(opcion));
        preguntaDiv.appendChild(label);
        preguntaDiv.appendChild(document.createElement("br"));
    });

    contenedorTest.appendChild(preguntaDiv);
});

// Escuchar el evento del botón de envío
document.getElementById("submit-test").addEventListener("click", () => {
    let puntaje = 0;

    preguntas.forEach((pregunta, index) => {
        const seleccionada = document.querySelector(
            `input[name="pregunta-${index}"]:checked`
        );
        if (seleccionada && parseInt(seleccionada.value) === pregunta.respuestaCorrecta) {
            puntaje++;
        }
    });

    // Mostrar resultado
    const resultadoDiv = document.getElementById("result");
    resultadoDiv.textContent = `¡Has acertado ${puntaje} de ${preguntas.length} preguntas!`;
});
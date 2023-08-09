const askedData = [
  {
    id: 1,
    title: "Matemática",
    question:
      "Si tienes 2 osos de peluche y te dan 1 más, ¿cuántos osos tienes ahora?",
    answers: [
      { answer: 3, result: true },
      { answer: 2, result: false },
      { answer: 1, result: false },
    ],
  },
  {
    id: 2,
    title: "Matemática",
    question: "Si tienes 3 manzanas y comes 1, ¿cuántas manzanas te quedan?",
    answers: [
      { answer: 1, result: false },

      { answer: 2, result: true },

      { answer: 3, result: false },
    ],
  },
  {
    id: 3,
    title: "Gramática",
    question:
      "Elige la palabra correcta para completar la frase: 'El sol brilla durante el día y la ___ brilla en la noche.'",
    answers: [
      { answer: "Estrella", result: false },

      { answer: "Nube", result: false },

      { answer: "Luna", result: true },
    ],
  },
  {
    id: 4,
    title: "Clima",
    question: "¿Cuál NO es una estación del año?",
    answers: [
      { answer: "Primavera", result: false },

      { answer: "Verano", result: false },

      { answer: "Soleado", result: true },
    ],
  },
  {
    id: 5,
    title: "Clima",
    question: "¿En qué estación del año hace mucho, mucho frio?",
    answers: [
      { answer: "Invierno", result: true },

      { answer: "Primavera", result: false },

      { answer: "Verano", result: false },
    ],
  },
  {
    id: 6,
    title: "Clima",
    question: "¿En qué estación del año hace mucho, mucho calor?",
    answers: [
      { answer: "Otoño", result: false },

      { answer: "Verano", result: true },

      { answer: "Primavera", result: false },
    ],
  },
  {
    id: 7,
    title: "Ingles",
    question: "¿Cual de estas respuestas no es un animal",
    answers: [
      { answer: "Dog", result: false },

      { answer: "Cat", result: false },

      { answer: "House", result: true },
    ],
  },
  {
    id: 8,
    title: "Ingles",
    question: "¿Como se escribe Caballo en ingles?",
    answers: [
      { answer: "Dog", result: false },

      { answer: "Horse", result: true },

      { answer: "Cat", result: false },
    ],
  },
  {
    id: 9,
    title: "Clima",
    question: "¿Cuál es la estación del año en la que suele nevar?",
    answers: [
      { answer: "Verano", result: false },
      { answer: "Invierno", result: true },
      { answer: "Primavera", result: false },
    ],
  },
  {
    id: 10,
    title: "Matemática",
    question: "¿Cuál de estos es un número par?",
    answers: [
      { answer: 13, result: false },
      { answer: 2, result: true },
      { answer: 5, result: false },
    ],
  },
  {
    id: 11,
    title: "Matemática",
    question: "¿Cuál de estos es un número impar?",
    answers: [
      { answer: 13, result: true },
      { answer: 2, result: false },
      { answer: 6, result: false },
    ],
  },
  {
    id: 12,
    title: "Ingles",
    question: " ¿Qué significa 'book' en español?",
    answers: [
      { answer: "Libro", result: true },
      { answer: "Pelota", result: false },
      { answer: "Zapato", result: false },
    ],
  },
  {
    id: 13,
    title: "Ingles",
    question: "¿Cómo se dice 'hola' en inglés?",
    answers: [
      { answer: "Goodbye", result: false },
      { answer: "Thank you", result: false },
      { answer: "hello", result: true },
    ],
  },
  {
    id: 14,
    title: "Ingles",
    question: "¿Cuál es el número 'eight' en inglés?",
    answers: [
      { answer: "Tres", result: false },
      { answer: "Ocho", result: true },
      { answer: "Seis", result: false },
    ],
  },
  {
    id: 15,
    title: "Ingles",
    question: "¿Qué significa 'play' en español?",
    answers: [
      { answer: "Jugar", result: true },
      { answer: "Dormir", result: false },
      { answer: "Estudiar", result: false },
    ],
  },
  {
    id: 16,
    title: "Ingles",
    question: "¿Cómo se dice 'sol' en inglés?",
    answers: [
      { answer: "Start", result: false },
      { answer: "Moon", result: false },
      { answer: "Sun", result: true },
    ],
  },
  {
    id: 17,
    title: "Geografía",
    question: "¿En qué provincia vives?",
    answers: [
      { answer: "Neuquén", result: true },
      { answer: "Salta", result: false },
      { answer: "Córdoba", result: false },
    ],
  },
  {
    id: 18,
    title: "Geografía",
    question: "¿En qué país está ubicado Neuquén?",
    answers: [
      { answer: "Brasil", result: false },
      { answer: "Argentina", result: true },
      { answer: "Chile", result: false },
    ],
  },
  {
    id: 19,
    title: "Ingenio",
    question:
      "En mi casa tengo 1 perro, 1 gato y 1 conejo, mi tía me regala 3 patos ¿Cuántos animales tengo en total?",
    answers: [
      { answer: "6 animales", result: true },
      { answer: "4 animales", result: false },
      { answer: "3 animales", result: false },
    ],
  },
  {
    id: 20,
    title: "Ingenio",
    question: "Si tengo 1 gato y un loro ¿Cuantas patas hay en total?",
    answers: [
      { answer: "14 patas", result: false },
      { answer: "6 patas", result: true },
      { answer: "4 patas", result: false },
    ],
  },
  {
    id: 21,
    title: "Ingenio",
    question:
      "Si un tren parte de la estación a las 10 de la mañana y llega a su destino a las 3 de la tarde, ¿cuántas horas ha durado el viaje?",
    answers: [
      { answer: "2 horas", result: false },
      { answer: "5 horas", result: true },
      { answer: "7 horas", result: false },
    ],
  },
  {
    id: 22,
    title: "Ingenio",
    question:
      "Si tienes 2 pelota roja y 8 pelota azul, y le das 1 pelota a tu amigo, ¿cuántas pelotas tienes ahora?",
    answers: [
      { answer: "8 pelotas", result: false },
      { answer: "0 pelotas", result: false },
      { answer: "9 pelotas", result: true },
    ],
  },
  {
    id: 23,
    title: "Matemática",
    question: "¿Cual es el resultado de sumar 12 + 13?",
    answers: [
      { answer: 25, result: true },
      { answer: 20, result: false },
      { answer: 18, result: false },
    ],
  },
  {
    id: 24,
    title: "Matemática",
    question: "¿Cual es el resultado de restar 30 y 15?",
    answers: [
      { answer: 6, result: false },
      { answer: 15, result: true },
      { answer: 4, result: false },
    ],
  },
  {
    id: 25,
    title: "Ingenio",
    question:
      "Si a las 3 de la tarde vienen mis 8 amigos y a las 5 de la tarde se van 4 de mis amigos pero llegan otros 6 amigos, ¿Cuantos amigos hay en total a las 5 de la tarde?",
    answers: [
      { answer: "10 amigos", result: true },
      { answer: "15 amigos", result: false },
      { answer: "6 amigos", result: false },
    ],
  },
  {
    id: 26,
    title: "Matemática",
    question: "¿Que resultado da la suma de 9 + 5?",
    answers: [
      { answer: 8, result: false },
      { answer: 14, result: true },
      { answer: 15, result: false },
    ],
  },
  {
    id: 27,
    title: "Matemática",
    question: "¿Que resultado da la resta de 9 - 5?",
    answers: [
      { answer: 4, result: true },
      { answer: 10, result: false },
      { answer: 5, result: false },
    ],
  },
  {
    id: 28,
    title: "Matemática",
    question: "¿Cual de los siguientes números es mayor?",
    answers: [
      { answer: 10, result: false },
      { answer: 5, result: false },
      { answer: 14, result: true },
    ],
  },
  {
    id: 29,
    title: "Matemática",
    question: "¿Cual de los siguientes números es menor?",
    answers: [
      { answer: 2, result: true },
      { answer: 8, result: false },
      { answer: 20, result: false },
    ],
  },
  {
    id: 30,
    title: "Matemática",
    question: "¿Cual es el resultado de la siguiente cuanta: 10 + 20 - 8?",
    answers: [
      { answer: 22, result: true },
      { answer: 24, result: false },
      { answer: 23, result: false },
    ],
  },
];

export default askedData;

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
    title: "Matemática",
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
    title: "Matemática",
    question:
      "En mi casa tengo 1 perro, 1 gato y 1 conejo, mi tía me regala 3 patos ¿Cuántos animales tengo en total?",
    answers: [
      { answer: 6, result: true },
      { answer: 4, result: false },
      { answer: 3, result: false },
    ],
  },
  {
    id: 20,
    title: "Matemática",
    question: "Si tengo 1 gato y un loro ¿Cuantas patas hay en total?",
    answers: [
      { answer: 14, result: false },
      { answer: 6, result: true },
      { answer: 4, result: false },
    ],
  },
];

export default askedData;

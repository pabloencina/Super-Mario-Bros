import Happy from "../Images/Image-moods/Happy-mood-image.png";
import Sad from "../Images/Image-moods/Sad-mood-image.png";
import Exited from "../Images/Image-moods/Excited-mood-image.png";
import Angry from "../Images/Image-moods/Angry-mood-image.png";
import Scared from "../Images/Image-moods/Scared-mood-image.png";
import Bored from "../Images/Image-moods/Boring-mood-image.png";
import Grateful from "../Images/Image-moods/Grateful-mood-image.png";
import Confused from "../Images/Image-moods/Confused-mood-image.png";
import Proud from "../Images/Image-moods/Proud-mood-image.png";
import Tired from "../Images/Image-moods/Tired-mood-image.png";

const moodsData = [
  {
    id: 1,
    name: "Feliz",
    nameEnglish: "Happy",
    description:
      "Es cuando te sientes contento y sonríes porque algo te hace sentir bien.",
    image: Happy,
    phrase1:
      "La felicidad está en las pequeñas cosas que nos hacen sonreír cada día.",
    phrase2: "Sé feliz y contagia tu alegría a los demás.",
  },
  {
    id: 2,
    name: "Triste",
    nameEnglish: Sad,
    description:
      "Es cuando te sientes un poco bajito y con ganas de llorar, pero recuerda que está bien sentirse así y siempre puedes hablar con alguien sobre tus sentimientos.",
    image: "",
    phrase1:
      "No importa cuántas lágrimas derrames, siempre hay un arcoíris después de la lluvia.",
    phrase2:
      "Recuerda que los momentos difíciles también pasan, y vendrán días mejores.",
  },
  {
    id: 3,
    name: "Emocionado",
    nameEnglish: "Exited",
    description:
      "Es cuando te sientes muy ansioso por algo que va a pasar pronto, ¡como un cumpleaños o un viaje emocionante!",
    image: Exited,
    phrase1:
      "¡Prepárate para vivir una gran aventura llena de emociones y sorpresas!",
    phrase2:
      "La emoción es como una montaña rusa, ¡disfruta del viaje al máximo!",
  },
  {
    id: 4,
    name: "Enojado",
    nameEnglish: "Angry",
    description:
      "Es cuando sientes que algo te molesta mucho y quizás te tiembla un poquito la voz. Es importante aprender a expresar la ira de una forma saludable, como hablando sobre lo que te hizo sentir enojado.",
    image: Angry,
    phrase1:
      "Respira profundo y cuenta hasta diez antes de reaccionar, el enojo pasará.",
    phrase2:
      "Aprende a transformar tu enojo en una fuerza positiva para resolver los problemas.",
  },
  {
    id: 5,
    name: "Asustado",
    nameEnglish: "Scared",
    description:
      "Es cuando sientes un poco de miedo, como cuando ves algo espeluznante o escuchas un ruido fuerte. Si te sientes asustado, busca a un adulto en quien confíes para que te ayude a sentirte seguro.",
    image: Scared,
    phrase1:
      "No tengas miedo de pedir ayuda cuando te sientas asustado, siempre hay alguien dispuesto a cuidarte.",
    phrase2: "Enfrentar tus miedos te hará más valiente y fuerte.",
  },
  {
    id: 6,
    name: "Aburrido",
    nameEnglish: "Bored",
    description:
      "Es cuando no encuentras nada interesante para hacer y te sientes un poco cansado. ¡Siempre hay cosas nuevas por descubrir! Puedes buscar un libro divertido o hacer una actividad creativa.",
    image: Bored,
    phrase1:
      "La creatividad está en todas partes, solo tienes que buscarla y dejar volar tu imaginación.",
    phrase2:
      "El aburrimiento es una oportunidad para descubrir nuevas pasiones y hobbies.",
  },
  {
    id: 7,
    name: "Agradecido",
    nameEnglish: "Grateful",
    description:
      "Es cuando te sientes muy contento por algo que te han dado o alguien que te ha ayudado. Agradece siempre a las personas que hacen cosas buenas por ti.",
    image: Grateful,
    phrase1:
      "La gratitud es la llave que abre las puertas de la felicidad y la abundancia.",
    phrase2:
      "Agradece cada día por todas las cosas maravillosas que tienes en tu vida.",
  },
  {
    id: 8,
    name: "Confundido",
    nameEnglish: "Confused",
    description:
      "Es cuando algo te parece un poco difícil de entender o comprender. Pide ayuda a tus padres, maestros o adultos de confianza para aclarar tus dudas.",
    image: Confused,
    phrase1:
      "No tengas miedo de preguntar, la curiosidad es la mejor manera de aprender.",
    phrase2:
      "Con el tiempo y la paciencia, las piezas del rompecabezas se irán encajando.",
  },
  {
    id: 9,
    name: "Orgulloso",
    nameEnglish: "Proud",
    description:
      " Es cuando sientes que has hecho algo bien y te sientes feliz contigo mismo. ¡Celebra tus logros y esfuerzos!",
    image: Proud,
    phrase1:
      "Celebra tus logros, por pequeños que sean, porque cada paso cuenta en el camino hacia el éxito.",
    phrase2:
      "El orgullo no está en ganar siempre, sino en dar siempre lo mejor de ti.",
  },
  {
    id: 10,
    name: "Cansado",
    nameEnglish: "Tired",
    description:
      "Es cuando te sientes agotado después de un día lleno de actividades. Asegúrate de descansar lo suficiente para estar lleno de energía al día siguiente.",
    image: Tired,
    phrase1:
      "Descansa y recarga energías, mañana es un nuevo día lleno de oportunidades.",
    phrase2:
      "El descanso es tan importante como el trabajo, te permitirá rendir al máximo.",
  },
];

export default moodsData;

const charactersData = [
  {
    id: 1,
    name: "Mario",
    description:
      " Es el personaje principal de la serie. Es un fontanero italiano con un peto azul, camisa roja y gorra roja con una 'M' en ella. Mario es conocido por su valentía y determinación para rescatar a la Princesa Peach del malvado Bowser. También tiene la habilidad de saltar alto y romper bloques con su cabeza.",
    image: "",
  },
  {
    id: 2,
    name: "Luigi",
    description:
      " Es el hermano de Mario y su compañero en muchas aventuras. Tiene una apariencia similar a Mario, pero su ropa es de color verde. Luigi es conocido por ser más alto y delgado que Mario y a menudo se le presenta como más tímido y nervioso. A pesar de esto, también es un héroe valiente en su propia medida.",
    image: "",
  },
  {
    id: 3,
    name: "Princesa Peach",
    description:
      "Es la princesa del Reino Champiñón y una de las principales damiselas en apuros en la serie. Tiene cabello rubio y siempre viste un vestido rosado. Peach es amable y gentil, pero también valiente y dispuesta a ayudar en la lucha contra Bowser y sus secuaces.",
    image: "",
  },
  {
    id: 4,
    name: "Browser",
    description:
      "Es el principal antagonista de la serie y el archienemigo de Mario. Bowser es un gran Koopa que tiene la habilidad de lanzar fuego y secuestra a la Princesa Peach con frecuencia. Es conocido por ser malvado, astuto y obstinado, pero también tiene momentos cómicos.",
    image: "",
  },
  {
    id: 5,
    name: "Toad",
    description:
      "Los Toads son habitantes del Reino Champiñón y son leales a la Princesa Peach. Son pequeños y tienen una cabeza redonda con una seta en la parte superior. A menudo, ayudan a Mario proporcionando consejos, objetos y asistencia en su viaje.",
    image: "",
  },
  {
    id: 6,
    name: "Yoshi",
    description:
      "Es una especie de dinosaurio que ayuda a Mario en muchas de sus aventuras. Yoshi puede comer enemigos y convertirlos en huevos que puede lanzar. También puede usar su lengua para atrapar objetos distantes y cruzar grandes brechas.",
    image: "",
  },
  {
    id: 7,
    name: "Toadette",
    description:
      " Es una versión femenina de Toad y amiga cercana de la Princesa Peach. Tiene una cabeza redonda con una seta rosa en la parte superior y viste con un vestido rosado. Toadette ha protagonizado sus propias aventuras y es conocida por ser alegre y enérgica.",
    image: "",
  },
  {
    id: 8,
    name: "Bowser Jr.",
    description:
      "Es el hijo de Bowser y uno de los antagonistas secundarios en la serie. Tiene una apariencia similar a la de su padre, pero más pequeña y con una boca con dientes puntiagudos. Bowser Jr. a menudo ayuda a su padre en sus malvados planes para secuestrar a la Princesa Peach.",
    image: "",
  },
  {
    id: 9,
    name: "Wario",
    description:
      "Es el archirrival de Mario y su aspecto es similar al de Mario, pero con ropa de colores amarillo y morado. Wario es codicioso y avaricioso, siempre buscando tesoros y riquezas. Ha protagonizado sus propios juegos como 'Wario Land' y 'WarioWare'.",
    image: "",
  },
  {
    id: 10,
    name: "Waluigi",
    description:
      " Es el compañero y rival de Luigi. Al igual que Wario, tiene una apariencia similar a Luigi, pero con ropa de colores morado y negro. Waluigi es conocido por ser desafiante y tramposo, y a menudo se le ve en eventos deportivos junto a Wario.",
    image: "",
  },
  {
    id: 11,
    name: "Daisy",
    description:
      "Es la princesa del Reino Sarasaland y amiga cercana de Peach. Tiene cabello rubio largo y viste un vestido amarillo. Daisy ha sido un personaje jugable en varios juegos de Mario, incluidos los títulos de deportes y carreras.",
    image: "",
  },
  {
    id: 12,
    name: "Rosalina",
    description:
      "Es la guardiana de los Lumas y vive en el Observatorio Cometario. Tiene una apariencia celestial con cabello azul y un vestido largo. Rosalina es conocida por su sabiduría y misterio, y es un personaje importante en juegos como 'Super Mario Galaxy'.",
    image: "",
  },
  {
    id: 13,
    name: "Donkey Kong",
    description:
      "Aunque inicialmente fue el enemigo principal de Mario en su juego debut en 1981, Donkey Kong ha evolucionado para ser uno de los aliados de Mario y protagonizar sus propios juegos. Es un gorila fuerte y amigable que vive en la Isla Donkey Kong.",
    image: "",
  },
  {
    id: 14,
    name: "Pauline",
    description:
      "Fue la damisela en apuros en el juego original de 'Donkey Kong' y también ha aparecido en otros juegos de Mario. Pauline es la alcaldesa de New Donk City en 'Super Mario Odyssey'.",
    image: "",
  },
  {
    id: 15,
    name: "Toadsworth",
    description:
      "Es un Toad mayor y el mayordomo de la Princesa Peach. Aparece en varios juegos de Mario y es conocido por su actitud amable y servicial hacia la princesa.",
    image: "",
  },
  {
    id: 16,
    name: "Koopa Troopas",
    description:
      "Son tortugas antropomórficas que sirven bajo las órdenes de Bowser. Vienen en diferentes colores y son enemigos comunes en muchos juegos de Mario.",
    image: "",
  },
  {
    id: 17,
    name: "Goombas",
    description:
      " Son criaturas enemigas con forma de hongo marrón y cara pequeña. Son una de las amenazas más básicas en los juegos de Mario.",
    image: "",
  },
  {
    id: 18,
    name: "Koopa Paratroopas",
    description:
      " Son versiones voladoras de los Koopa Troopas. Tienen alas y pueden volar en el aire.",
    image: "",
  },
  {
    id: 19,
    name: "Shy Guy",
    description:
      "Son personajes con máscaras y vestimenta colorida. Vienen en diferentes variedades y a menudo son enemigos, aunque algunos también pueden ser aliados.",
    image: "",
  },
  {
    id: 20,
    name: "Boo",
    description:
      "Son fantasmas tímidos que se vuelven invisibles cuando Mario los mira directamente. Aparecen en niveles espeluznantes y suelen perseguir a Mario.",
    image: "",
  },
  {
    id: 21,
    name: "Bullet Bill",
    description:
      "Son misiles autodirigidos que vuelan en línea recta. Son un peligroso obstáculo en los niveles de plataformas.",
    image:
      "Es el líder de los Boos y uno de los principales antagonistas en juegos como la serie 'Luigi's Mansion'.",
  },
  {
    id: 22,
    name: "King Boo",
    description:
      "Es el líder de los Boos y uno de los principales antagonistas en juegos como la serie 'Luigi's Mansion'.",
    image: "",
  },
  {
    id: 23,
    name: "Chain Chomp",
    description:
      " Es una bola de hierro con dientes afilados y una cadena. Está atado a un punto fijo pero puede lanzarse hacia adelante para atacar a Mario.",
    image: "",
  },
  {
    id: 24,
    name: "Magikoopa",
    description:
      "Son Kameks, hechiceros leales a Bowser que lanzan hechizos en batalla.",
    image: "",
  },
  {
    id: 25,
    name: "Luma",
    description:
      "Son pequeñas criaturas con forma de estrella que ayudan a Rosalina en 'Super Mario Galaxy'.",
    image: "",
  },
  {
    id: 26,
    name: "Dry Bones",
    description:
      "Son esqueletos Koopa que se levantan después de ser derrotados y vuelven a atacar.",
    image: "",
  },
  {
    id: 27,
    name: "Hammer Bros",
    description: "on Koopas que llevan martillos y los lanzan hacia Mario.",
    image: "",
  },
  {
    id: 28,
    name: "Piranha Plants",
    description:
      "Son plantas carnívoras que emergen de tuberías y tratan de morder a Mario.",
    image: "",
  },
];

export default charactersData;

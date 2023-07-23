import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Mushroom from "../../Images/Image-myStory/Mushroom.png";
import Characters from "../../Images/Image-myStory/Characters.png";
import Villains from "../../Images/Image-myStory/Villains.jpeg";
import Toad from "../../Images/Image-myStory/Toad.jpeg";
import JustRescued from "../../Images/Image-myStory/JustRescued.jpeg";
import WorldMario from "../../Images/Image-myStory/WorldMario.png";
import videoGame from "../../Images/Image-myStory/VideoGame.png";
import Mario from "../../Images/Images-Characters-Mario/Mario-character.png";
import ToadCharacter from "../../Images/Images-Characters-Mario/Toad-character.png";
import Bowser from "../../Images/Images-Characters-Mario/Browser-character.png";
import Koopas from "../../Images/Images-Characters-Mario/KoopaTroopas-character.png";
import Princesa from "../../Images/Images-Characters-Mario/PrincesaPeach-character.png";
import Luigi from "../../Images/Images-Characters-Mario/Luigi-character.png";
import Goombas from "../../Images/Images-Characters-Mario/Goombas-character.png";
import Pirañas from "../../Images/Images-Characters-Mario/PiranhaPlants-character.png";
import Daisy from "../../Images/Images-Characters-Mario/Daisy-character.png";
import Yoshi from "../../Images/Images-Characters-Mario/Yoshi-character.png";

const MyStory = () => {
  return (
    <Container className="myStory__container_section">
      <Container>
        <div className="myStory__container_title">
          <p className="myStory__title">
            Mi historia en el mundo de los{" "}
            <span className="myStory_span_container">
              <img
                className="myStory__span_image_title"
                src={videoGame}
                alt="VideoGame"
              />
            </span>
          </p>
        </div>
      </Container>
      <Row>
        <Col className="myStory__container_image">
          <img src={Mushroom} alt="Mushroom" className="myStory__image" />
        </Col>
        <Col className="myStory__container_paragraph">
          <p className="myStory__paragraph">
            La historia de Mario Bros{" "}
            <span className="myStory_span_container">
              <img
                className="myStory__span_image_paragraph"
                src={Mario}
                alt="Mario"
              />
            </span>
            comienza en el Reino Champiñón, un pacífico lugar habitado por
            diversos seres, incluyendo humanos, Toads (honguitos){" "}
            <span className="myStory_span_container">
              <img
                className="myStory__span_image_paragraph"
                src={ToadCharacter}
                alt="ToadCharacter"
              />
            </span>
            y otros seres fantásticos. Un día, el malvado Rey Bowser{" "}
            <span>
              <img
                className="myStory__span_image_paragraph"
                src={Bowser}
                alt="Bowser"
              />
            </span>
            , también conocido como "Bowser Koopa," lidera su ejército de Koopas{" "}
            <span className="myStory_span_container">
              <img
                className="myStory__span_image_paragraph"
                src={Koopas}
                alt="Koopas"
              />
            </span>
            y secuestra a la Princesa Peach{" "}
            <span className="myStory_span_container">
              <img
                className="myStory__span_image_paragraph"
                src={Princesa}
                alt="Princesa"
              />
            </span>
            , gobernante del Reino Champiñón. Bowser desea casarse con la
            princesa y gobernar el reino para siempre.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="myStory__container_paragraph">
          <p className="myStory__paragraph">
            En medio del caos, un valiente fontanero llamado Mario{" "}
            <span className="myStory_span_container">
              <img
                className="myStory__span_image_paragraph"
                src={Mario}
                alt="Mario"
              />
            </span>
            , junto con su hermano Luigi
            <span className="myStory_span_container">
              <img
                className="myStory__span_image_paragraph"
                src={Luigi}
                alt="Luigi"
              />
            </span>
            , se aventuran en una misión para rescatar a la Princesa Peach{" "}
            <span className="myStory_span_container">
              <img
                className="myStory__span_image_paragraph"
                src={Princesa}
                alt="Princesa"
              />
            </span>
            y liberar el Reino Champiñón del malvado Bowser{" "}
            <span className="myStory_span_container">
              <img
                className="myStory__span_image_paragraph"
                src={Bowser}
                alt="Bowser"
              />
            </span>
            . Mario es conocido por su icónica vestimenta: una gorra roja, una
            camiseta y unos pantalones azules, así como por su bigote
            distintivo.
          </p>
        </Col>
        <Col className="myStory__container_image">
          <img src={Characters} alt="Characters" className="myStory__image" />
        </Col>
      </Row>
      <Row>
        <Col className="myStory__container_image">
          <img src={Villains} alt="Villains" className="myStory__image" />
        </Col>
        <Col className="myStory__container_paragraph">
          <p className="myStory__paragraph">
            A lo largo de su viaje, Mario{" "}
            <span className="myStory_span_container">
              <img
                className="myStory__span_image_paragraph"
                src={Mario}
                alt="Mario"
              />
            </span>
            y Luigi{" "}
            <span className="myStory_span_container">
              <img
                className="myStory__span_image_paragraph"
                src={Luigi}
                alt="Luigi"
              />
            </span>
            enfrentan innumerables desafíos y enemigos, como los Goombas{" "}
            <span>
              <img
                className="myStory__span_image_paragraph"
                src={Goombas}
                alt="Goombas"
              />
            </span>
            , Koopas{" "}
            <span className="myStory_span_container">
              <img
                className="myStory__span_image_paragraph"
                src={Koopas}
                alt="Koopas"
              />
            </span>
            , plantas pirañas{" "}
            <span className="myStory_span_container">
              <img
                className="myStory__span_image_paragraph"
                src={Pirañas}
                alt="Pirañas"
              />
            </span>
            y muchos otros obstáculos peligrosos. Utilizando sus habilidades de
            salto y fuerza, Mario avanza a través de diversos mundos y niveles
            llenos de aventuras emocionantes y desafíos cada vez más difíciles.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="myStory__container_paragraph">
          <p className="myStory__paragraph">
            A lo largo de los años, la saga de Mario Bros ha evolucionado y se
            ha expandido a través de diferentes títulos de juegos, incluyendo
            plataformas, carreras, deportes y más. También ha presentado a otros
            personajes memorables como la Princesa Daisy{" "}
            <span className="myStory_span_container">
              <img
                className="myStory__span_image_paragraph"
                src={Daisy}
                alt="Daisy"
              />
            </span>
            , Yoshi{" "}
            <span className="myStory_span_container">
              <img
                className="myStory__span_image_paragraph"
                src={Yoshi}
                alt="Yoshi"
              />
            </span>
            , Toad{" "}
            <span className="myStory_span_container">
              <img
                className="myStory__span_image_paragraph"
                src={ToadCharacter}
                alt="Toad"
              />
            </span>
            , y muchos más.
          </p>
        </Col>
        <Col className="myStory__container_image">
          <img src={Toad} alt="Toad" className="myStory__image" />
        </Col>
      </Row>
      <Row>
        <Col className="myStory__container_image">
          <img src={JustRescued} alt="JustRescued" className="myStory__image" />
        </Col>
        <Col className="myStory__container_paragraph">
          <p className="myStory__paragraph">
            El rescate de la Princesa Peach{" "}
            <span className="myStory_span_container">
              <img
                className="myStory__span_image_paragraph"
                src={Princesa}
                alt="Princesa"
              />
            </span>
            y la lucha contra Bowser{" "}
            <span className="myStory_span_container">
              <img
                className="myStory__span_image_paragraph"
                src={Bowser}
                alt="Bowser"
              />
            </span>
            se han convertido en elementos centrales de la historia de Mario
            Bros{" "}
            <span className="myStory_span_container">
              <img
                className="myStory__span_image_paragraph"
                src={Mario}
                alt="Mario"
              />
            </span>
            , y la franquicia ha dejado un legado significativo en la cultura
            popular de los videojuegos. Mario se ha convertido en el rostro de
            Nintendo y en un ícono mundialmente reconocido.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="myStory__container_paragraph">
          <p className="myStory__paragraph">
            La historia de Mario Bros{" "}
            <span className="myStory_span_container">
              <img
                className="myStory__span_image_paragraph"
                src={Mario}
                alt="Mario"
              />
            </span>
            es una celebración de la valentía, la amistad, la perseverancia y el
            poder del bien para vencer al mal. Con cada nueva entrega, Mario
            sigue conquistando los corazones de los jugadores y llevando
            sonrisas a personas de todas las edades alrededor del mundo. Su
            legado sigue vivo, y su influencia en la industria de los
            videojuegos es innegable.
          </p>
        </Col>
        <Col className="myStory__container_image">
          <img src={WorldMario} alt="WorldMario" className="myStory__image" />
        </Col>
      </Row>
    </Container>
  );
};

export default MyStory;

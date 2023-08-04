import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import videosData from "../../../Data/videosData";
import AlphabetGameCard from "./AlphabetGameCard";
import Mario from "../../../Images/mario-logo.png";

const AlphabetGameCardMap = () => {
  return (
    <Container className="videoById__container">
      <Container className="videoById__container_title">
        <div className="videoById__container_title">
          <p className="videoById__title">¿JUGAMOS A APRENDER JUNTOS?</p>
        </div>
        <div>
          <p className="videos__text_mario">
            AMIGUITO!!! HAZ CLIC EN LA LETRA PARA AYUDARME A DESCUBRIR QUE HAY
            DETRÁS.
          </p>
          <br></br>
          <p className="videos__text_mario">
            PEROOOOOO!!!, PRIMERO LEE LA LETRA QUE VES EN CADA CARTA.
          </p>
        </div>

        <div className="videos__container_image_mario">
          <img className="videos__image_mario" src={Mario} alt="Mario" />
        </div>
      </Container>
      <Row>
        {videosData.map((video) => {
          return (
            <Col md={6} style={{ marginBottom: "25px" }}>
              {/* <CardCharacters key={character.id} character={character} /> */}
              <AlphabetGameCard key={video.id_video} video={video} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AlphabetGameCardMap;

import React from "react";
import MarioName from "../../Images/mario-name.png";
import charactersData from "../../Data/charactersData";
import { Col, Row } from "react-bootstrap";
import CardCharacters from "./CardCharacter";

const SectionCardsCharacters = () => {
  return (
    <div className="presentation">
      <div className="presentation__container_image">
        <img src={MarioName} alt="MarioImage" />
      </div>

      <div className="presentation__container_text">
        <div className="presentation__text">
          Te presento a todos los personajes que forman parte del mundo de Mario
          Bros, algunos amigos y otros no tanto.
        </div>
      </div>
      <div className="container">
        <Row>
          {charactersData.map((character) => {
            return (
              <Col style={{ marginTop: "20px" }} key={character.id} md={4}>
                <CardCharacters key={character.id} character={character} />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default SectionCardsCharacters;

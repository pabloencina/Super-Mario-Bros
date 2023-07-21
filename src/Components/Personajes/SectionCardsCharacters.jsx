import React from "react";
import MarioName from "../../Images/mario-name.png";
import charactersData from "../../Data/charactersData";
import { Col, Row } from "react-bootstrap";
import CardCharacters from "./CardCharacter";

const SectionCardsCharacters = () => {
  return (
    <div className="container">
      <div className="">
        <img src={MarioName} alt="MarioImage" />
      </div>

      <div>
        <div>Todos los personajes de </div>
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

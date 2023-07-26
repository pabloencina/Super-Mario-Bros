import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import charactersData from "../../Data/charactersData";
import GameImageById from "./GameImageById";

const CardGameById = () => {
  return (
    <Container>
      <Row>
        {charactersData.map((card) => {
          return (
            <Col key={card.id} md={4} className="">
              <GameImageById key={card.id} charactersData={card} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CardGameById;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import charactersData from "../../Data/charactersData";
import CardContainer from "./CardContainer";

const CardGameById = () => {
  const randomIndex = Math.floor(Math.random() * charactersData.length);
  const randomCharacter = charactersData[randomIndex];
  return (
    <Container>
      <div className="game__container_title">
        <p className="game__title">
          {`¿DÓNDE SE ENCUENTRA `}
          <span className="game__span_name">
            {randomCharacter.name.toLocaleUpperCase()}
          </span>
          ?
        </p>
      </div>
      <Row>
        {charactersData.map((card) => {
          return (
            <Col key={card.id} md={4} className="">
              <CardContainer key={card.id} charactersData={charactersData} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CardGameById;

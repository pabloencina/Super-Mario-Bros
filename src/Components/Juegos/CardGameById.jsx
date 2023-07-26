import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import charactersData from "../../Data/charactersData";
import CardContainer from "./CardContainer";

const CardGameById = () => {
  return (
    <Container>
      <Row>
        {charactersData.map((card) => {
          return (
            <Col key={card.id} md={4} className="">
              <CardContainer key={card.id} charactersData={card} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CardGameById;

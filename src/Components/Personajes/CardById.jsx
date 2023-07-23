import React from "react";
import DetailCardById from "./DetailCardById";
import { Container } from "react-bootstrap";

const CardById = ({ charactersData }) => {
  const { id } = charactersData;
  return (
    <Container className="detailCardById__container_card">
      <DetailCardById key={id} charactersData={charactersData} />
    </Container>
  );
};

export default CardById;

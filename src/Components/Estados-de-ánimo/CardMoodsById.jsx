import React from "react";
import CardMoodsDetailById from "./CardMoodsDetailById";
import { Container } from "react-bootstrap";

const CardMoodsById = ({ moodsData }) => {
  const { id } = moodsData;
  return (
    <Container className="detailCardById__container_card">
      <CardMoodsDetailById key={id} moodsData={moodsData} />
    </Container>
  );
};

export default CardMoodsById;

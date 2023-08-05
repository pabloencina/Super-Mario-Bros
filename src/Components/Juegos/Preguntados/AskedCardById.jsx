import React from "react";
import { Container } from "react-bootstrap";
import AskedCard from "./AskedCard";

const AskedCardById = ({ askedData }) => {
  console.log(askedData[1].answers[0].answer);
  console.log(askedData[1]);
  return (
    <Container>
      {askedData.map((askCard) => {
        return <AskedCard key={askCard.id} askCard={askCard} />;
      })}
    </Container>
  );
};

export default AskedCardById;

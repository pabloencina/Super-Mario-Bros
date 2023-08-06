import React from "react";
import { Container } from "react-bootstrap";
import AskedCard from "./AskedCard";
import BtnAskedNextPrevious from "./BtnAsked-next-previous";

const AskedCardById = ({ askedData }) => {
  console.log(askedData[1].answers[0].answer);
  console.log(askedData[1]);
  return (
    <Container>
      {" "}
      {askedData.map((askCard) => {
        return <AskedCard key={askCard.id} askCard={askCard} />;
      })}
      <Container className="game-preguntados-card__container__btn-next-previous">
        <BtnAskedNextPrevious />
      </Container>
    </Container>
  );
};

export default AskedCardById;

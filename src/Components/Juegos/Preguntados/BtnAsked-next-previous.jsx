import React from "react";
import { Button, Card, Container } from "react-bootstrap";

const BtnAskedNextPrevious = () => {
  return (
    <Container>
      <Card.Body>
        <div className="game-preguntados-card__container__content">
          {" "}
          <div className="game-preguntados-card__container__btn-changeCard1">
            <Button className="game-preguntados-card__btn__next">
              Anterior pregunta
            </Button>
          </div>
          <div className="game-preguntados-card__container__btn-changeCard2">
            <Button className="game-preguntados-card__btn__previous">
              Siguiente pregunta
            </Button>
          </div>
        </div>
      </Card.Body>
    </Container>
  );
};

export default BtnAskedNextPrevious;

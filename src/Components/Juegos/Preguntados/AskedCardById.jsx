import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AskedCard from "./AskedCard";
import BtnAskedNextPrevious from "./BtnAsked-next-previous";
import mario from "../../../Images/mario-logo.png";

const AskedCardById = ({ askedData }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(1);

  const handleNextCard = () => {
    if (activeCardIndex + 1 < askedData.length) {
      setActiveCardIndex(activeCardIndex + 1);
    }
  };

  const handlePreviousCard = () => {
    if (activeCardIndex - 1 >= 0) {
      setActiveCardIndex(activeCardIndex - 1);
    }
  };

  console.log(askedData[activeCardIndex].answers);
  return (
    <Container style={{ flexDirection: "column" }}>
      <Container>
        <Row>
          <Col md={6}>
            <div className="game-preguntados-card__container__number-questions">
              <p className="game-preguntados-card__number-questions">
                PREGUNTA NÚMERO {activeCardIndex + 1}, TOTAL DE PREGUNTAS{" "}
                {askedData.length}{" "}
              </p>
            </div>
            <AskedCard
              key={askedData[activeCardIndex].id}
              askCard={askedData[activeCardIndex]}
              isActive={true}
            />
          </Col>
          <Col md={6}>
            {askedData[activeCardIndex].answers[1].result === true ? (
              <div className="section-result-questions__container__result">
                <div className="section-result-questions__container__text">
                  <p className="section-result-questions__text">
                    RESPUESTA CORRECTA!!! FELICITACIONES AMIGUITO.
                  </p>
                </div>
                <div className="section-result-questions__container__image">
                  <img
                    className="section-result-questions__image"
                    src={mario}
                    alt="Mario"
                  />
                </div>
              </div>
            ) : null}
          </Col>
        </Row>
      </Container>
      <div className="game-preguntados-card__container__buttons">
        <div className="game-preguntados-card__container__btn-next-previous">
          <BtnAskedNextPrevious
            askedData={askedData}
            handleNextCard={handleNextCard}
            handlePreviousCard={handlePreviousCard}
            activeCardIndex={activeCardIndex}
          />
        </div>
      </div>
    </Container>
  );
};

export default AskedCardById;

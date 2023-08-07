import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import AskedCard from "./AskedCard";
import BtnAskedNextPrevious from "./BtnAsked-next-previous";
import mario from "../../../Images/MarioBros-answer-correct.png";
import marioSad from "../../../Images/MarioBros-answer-incorrect.png";
import QuestionScoresObtained from "./QuestionScoresObtained";
import { Link } from "react-router-dom";

const AnswerStatus = {
  NOT_ANSWERED: 0,
  CORRECT: 1,
  INCORRECT: 2,
};

const AskedCardById = ({ askedData }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [answerStatus, setAnswerStatus] = useState(AnswerStatus.NOT_ANSWERED);
  const [countAnswerCorrect, setAnswerCorrect] = useState(0);

  const handleNextCard = () => {
    if (activeCardIndex + 1 < askedData.length) {
      setActiveCardIndex(activeCardIndex + 1);
      setAnswerStatus(AnswerStatus.NOT_ANSWERED);
    }
  };

  const handlePreviousCard = () => {
    if (activeCardIndex - 1 >= 0) {
      setActiveCardIndex(activeCardIndex - 1);
      setAnswerStatus(AnswerStatus.NOT_ANSWERED);
    }
  };

  const handleClickQuestionButton = (buttonIndex) => {
    if (askedData[activeCardIndex].answers[buttonIndex].result) {
      setAnswerStatus(AnswerStatus.CORRECT);
      setAnswerCorrect(countAnswerCorrect + 1);
    } else {
      setAnswerStatus(AnswerStatus.INCORRECT);
    }
  };

  return (
    <Container style={{ flexDirection: "column" }}>
      <Container>
        {activeCardIndex === askedData.length - 1 && (
          <Container>
            <QuestionScoresObtained
              askedData={askedData.length}
              countAnswerCorrect={countAnswerCorrect}
            />
            <div className="game-preguntados-card__container__btn_renew-game">
              <Link to="/juegos/preguntados" className="game__btn-game">
                <Button
                  onClick={() => window.location.reload()}
                  className="game-preguntados-card__btn__renew-game"
                >
                  ¿QUIERES SEGUIR JUGANDO?
                </Button>
              </Link>
            </div>
          </Container>
        )}
        <Row>
          <Col md={6} xs={12} sm={12}>
            <div className="game-preguntados-card__container__number-questions">
              <p className="game-preguntados-card__number-questions">
                PREGUNTA NÚMERO {activeCardIndex + 1}, TOTAL DE PREGUNTAS{" "}
                {askedData.length}
              </p>
            </div>

            <AskedCard
              key={askedData[activeCardIndex].id}
              askCard={askedData[activeCardIndex]}
              isActive={true}
              handleClickQuestionButton={handleClickQuestionButton}
            />
          </Col>
          <Col md={6}>
            {answerStatus === AnswerStatus.CORRECT && (
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
            )}
            {answerStatus === AnswerStatus.INCORRECT && (
              <div className="section-result-questions__container__result">
                <div className="section-result-questions__container__text">
                  <p className="section-result-questions__text">
                    RESPUESTA INCORRECTA!!! LO SIENTO.
                  </p>
                </div>
                <div className="section-result-questions__container__image">
                  <img
                    className="section-result-questions__image"
                    src={marioSad}
                    alt="Mario"
                  />
                </div>
              </div>
            )}
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
      <div className="game-preguntados-card__container__number-questions">
        <p className="game-preguntados-card__number-questions">
          RESPUESTAS CORRECTAS {countAnswerCorrect}
        </p>
      </div>
    </Container>
  );
};

export default AskedCardById;

import React from "react";

const QuestionScoresObtained = ({ askedData, countAnswerCorrect }) => {
  let MessageScoresObtained = "";
  let pointsObtained = 0;

  if (countAnswerCorrect === askedData) {
    MessageScoresObtained = `FELICITACIONES!!! OBTUVISTE ${(pointsObtained = 100)} PUNTOS.`;
    pointsObtained = 100;
  } else if (countAnswerCorrect >= askedData / 2) {
    MessageScoresObtained = `LO HAS HECHO MUY BIEN. OBTUVISTE ${(pointsObtained = 50)} PUNTOS.`;
    pointsObtained = 50;
  } else if (countAnswerCorrect <= askedData / 4) {
    MessageScoresObtained = `LO HAS HECHO BIEN. OBTUVISTE ${(pointsObtained = 25)} PUNTOS.`;
    pointsObtained = 25;
  } else {
    MessageScoresObtained = `SIGUE INTENTÁNDOLO!!! OBTUVISTE ${pointsObtained} PUNTOS.`;
  }

  return (
    <div className="game-preguntados-card__container__number-questions">
      <p
        style={{ color: "black" }}
        className="game-preguntados-card__number-questions"
      >
        {MessageScoresObtained}
      </p>
    </div>
  );
};

export default QuestionScoresObtained;

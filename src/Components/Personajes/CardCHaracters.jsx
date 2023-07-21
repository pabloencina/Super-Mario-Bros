import React from "react";
import { Button, Card } from "react-bootstrap";
import charactersData from "../../Data/charactersData";
import cajaDePregunta from "../../Images/signo-de-pregunta.png";

const CardCharacters = () => {
  console.log(charactersData[0].name);
  return (
    <Card className="charactersCard__container_card">
      <div className="charactersCard__container_image">
        <img
          src={charactersData[0].image}
          alt="menu"
          className="charactersCard__image"
        />
      </div>

      <Card.Body
        className="card h-100"
        style={{
          border: "none",
          boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="charactersCard__container_title">
          <p className="charactersCard__title">{charactersData[0].name}</p>
        </div>
        <div className="charactersCard__container_description">
          <p className="charactersCard__description">
            {charactersData[0].description}
          </p>
        </div>
        <div className="charactersCard__container_button">
          <Button
            style={{
              textDecoration: "none",
              backgroundColor: "inherit",
              border: "none",
            }}
          >
            <img
              src={cajaDePregunta}
              alt="caja"
              className="charactersCard__button_image"
            />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardCharacters;

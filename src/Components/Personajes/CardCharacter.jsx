import React from "react";
import { Button, Card } from "react-bootstrap";
import cajaDePregunta from "../../Images/signo-de-pregunta.png";

const CardCharacters = ({ character }) => {
  return (
    <Card className="charactersCard__container_card">
      <div className="charactersCard__container_image">
        <img
          src={character.image}
          alt="menu"
          className="charactersCard__image"
        />
      </div>

      <Card.Body>
        <div className="charactersCard__container_title">
          <p className="charactersCard__title">{character.name}</p>
        </div>
        <div className="charactersCard__container_description">
          <p className="charactersCard__description">{character.description}</p>
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

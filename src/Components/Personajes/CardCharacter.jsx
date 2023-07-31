import React from "react";
import { Card } from "react-bootstrap";
//import cajaDePregunta from "../../Images/signo-de-pregunta.png";
import { Link } from "react-router-dom";

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
        <Link to={`/detalle/${character.id}`}>
          <div className="charactersCard__container_title">
            <p className="charactersCard__title">
              {character.name.toUpperCase()}
            </p>
          </div>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardCharacters;

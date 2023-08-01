import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardMoods = ({ mood }) => {
  return (
    <Card className="charactersCard__container_card">
      <div className="charactersCard__container_image">
        <img src={mood.image} alt="menu" className="charactersCard__image" />
      </div>

      <Card.Body>
        <Link to={`/detalle/${mood.id}`}>
          <div className="charactersCard__container_title">
            <p className="charactersCard__title">{mood.name.toUpperCase()}</p>
          </div>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardMoods;

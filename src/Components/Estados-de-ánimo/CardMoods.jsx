import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardMoods = ({ mood }) => {
  return (
    <Card className="">
      <div className="">
        <img src={mood.image} alt="menu" className="" />
      </div>

      <Card.Body>
        <Link to={`/detalle/${mood.id}`}>
          <div className="">
            <p className="">{mood.name.toUpperCase()}</p>
            <p className="">{mood.nameEnglish.toUpperCase()}</p>
          </div>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardMoods;

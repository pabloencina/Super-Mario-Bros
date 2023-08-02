import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardMoods = ({ mood }) => {
  return (
    <Container>
      <Button style={{ border: "none", backgroundColor: "inherit" }}>
        <Card className="moods__container__card">
          <Link to={`/estados-animo/${mood.id}`}>
            <div className="moods__container__image">
              <img src={mood.image} alt="menu" className="moods__image" />
            </div>

            <Card.Body>
              <div className="moods__container__name">
                <p className="moods__name">{mood.name.toUpperCase()}</p>
              </div>
              <div className="moods__container__nameEnglish">
                <p className="moods__nameEnglish">
                  {mood.nameEnglish.toUpperCase()}
                </p>
              </div>
            </Card.Body>
          </Link>
        </Card>
      </Button>
    </Container>
  );
};

export default CardMoods;

import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const CardGameImage = ({ charactersData, handleCardClick }) => {
  const randomIndexGameImage = Math.floor(
    Math.random() * charactersData.length
  );

  const randomCharacterGameImage = charactersData[randomIndexGameImage];
  const { name, image, id } = randomCharacterGameImage;

  return (
    <Container className="game__container">
      <Button className="game__button_card" key={id}>
        <Card
          className="game__card_container"
          key={id}
          onClick={() => handleCardClick(name)}
        >
          <Row sm={12} md={6} className="">
            <Col md={6} className="game__container_image">
              <img src={image} alt="menu" className="game__image" />
            </Col>

            <div className="">
              <div md={6}>
                <div className="game__container_name">
                  <p className="game__name">{name.toUpperCase()}</p>
                </div>
              </div>
            </div>
          </Row>
        </Card>
      </Button>
    </Container>
  );
};

export default CardGameImage;

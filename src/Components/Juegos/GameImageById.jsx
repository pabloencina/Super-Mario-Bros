import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
//import { useParams } from "react-router-dom";

const GameImageById = ({ charactersData }) => {
  // const { id } = useParams();

  // const cardImage = charactersData.find((char) => char.id === parseInt(id));

  // if (!cardImage) {
  //   return <div>No se encontró la tarjeta</div>;
  // }

  const { name, image } = charactersData;
  console.log(name);
  return (
    <Container className="game__container">
      <Button className="game__button_card">
        <Card className="game__card_container">
          <Row sm={12} className="">
            <Col md={6} sm={12} className="game__container_image">
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

export default GameImageById;

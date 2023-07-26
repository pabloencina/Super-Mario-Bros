import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import questionBox from "../../Images/signo-de-pregunta.png";

const CardGameInWhite = ({ handleCardClick }) => {
  return (
    <Container className="game__container">
      <Button className="game__button_card" onClick={handleCardClick}>
        <Card className="game__card_container">
          <Row sm={12} className="">
            <Col md={6} sm={12} className="game__container_image_questionBox">
              <img
                src={questionBox}
                alt="menu"
                className="game__image_questionBox"
              />
            </Col>

            <div className="">
              <div md={6}></div>
            </div>
          </Row>
        </Card>
      </Button>
    </Container>
  );
};

export default CardGameInWhite;

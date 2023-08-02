import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const CardMoodsDetailById = ({ moodsData }) => {
  const { id } = useParams();

  const card = moodsData.find((char) => char.id === parseInt(id));

  if (!card) {
    return <div>No se encontró la tarjeta</div>;
  }

  const { name, image, description, phrase1, phrase2 } = card;

  return (
    <Card className="detailMoodsById__container__card">
      <Row sm={12} className="detailMoodsById__container__row">
        <Col md={6} sm={12} className="detailMoodsById__container__image">
          <img src={image} alt="menu" className="detailMoodsById__image" />
        </Col>

        <Container className="detailMoodsById__content">
          <div md={6}>
            <div className="detailMoodsById__container__name">
              <p className="detailMoodsById__name">{name.toUpperCase()}</p>
            </div>
            <div className="detailMoodsById__container__description">
              <p className="detailMoodsById__description">
                {description.toUpperCase()}
              </p>
            </div>
            <div className="detailMoodsById__container__phrase1">
              <p className="detailMoodsById__phrase1">
                {phrase1.toUpperCase()}
              </p>
            </div>
            <div className="detailMoodsById__container__phrase2">
              <p className="detailMoodsById__phrase2">
                {phrase2.toUpperCase()}
              </p>
            </div>
            <div className="detailMoodsById__container__link">
              <Link to={"/estados-animo"} className="detailMoodsById__link">
                <div className="detailMoodsById__textLink">Volver</div>
              </Link>
            </div>
          </div>
        </Container>
      </Row>
    </Card>
  );
};

export default CardMoodsDetailById;

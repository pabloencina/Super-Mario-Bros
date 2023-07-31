import React from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";

const DetailCardById = ({ charactersData }) => {
  const { id } = useParams();

  const card = charactersData.find((char) => char.id === parseInt(id));

  if (!card) {
    return <div>No se encontró la tarjeta</div>;
  }

  const { name, image, description } = card;

  return (
    <Card className="detailCardById__container">
      <Row sm={12} className="detailCardById__container_row">
        <Col md={6} sm={12} className="detailCardById__container_image">
          <img src={image} alt="menu" className="detailCardById__image" />
        </Col>

        <div className="detailCardById__content">
          <div md={6}>
            <div className="detailCardById__container_name">
              <p className="detailCardById__name">{name.toUpperCase()}</p>
            </div>
            <div className="detailCardById__container_description">
              <p className="detailCardById__description">
                {description.toUpperCase()}
              </p>
            </div>
            <div className="detailCardById__link_container">
              <Link to={"/personajes"} className="detailCardById__link">
                <div className="detailCardById__text">Volver</div>
              </Link>
            </div>
          </div>
        </div>
      </Row>
    </Card>
  );
};

export default DetailCardById;

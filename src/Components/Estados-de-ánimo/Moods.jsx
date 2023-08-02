import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import moodsData from "../../Data/moodsData";
import CardMoods from "./CardMoods";
import ToastMoodsInformation from "./ToastMoodsInformation";
import MoodsImage from "../../Images/Image-moods/moods-image.png";

const Moods = () => {
  return (
    <Container>
      <Container className="section-mood__container__title">
        <p className="section-mood__title">
          CONTAME AMIGUITO ¿COMO TE SIENTES HOY?
        </p>
      </Container>
      <Container className="section-mood__container__img">
        <img className="section-mood__img" src={MoodsImage} alt="Rainbow" />
      </Container>
      <Container className="section-mood__container__title_instruction">
        <p className="section-mood__title_instruction">
          ESTA SECCIÓN TE PERMITE ELEGIR TU ESTADO DE ANIMO ELIGIENDO UNA CARTA
          Y HACIENDO CLIC SOBRE ELLA, DE ESTA MANERA PODRÁS EXPRESAR COMO TE
          SIENTES.
        </p>
      </Container>
      <ToastMoodsInformation />
      <div>
        <Row>
          {moodsData.map((mood) => {
            return (
              <Col style={{ marginTop: "50px" }} key={mood.id} md={4}>
                <CardMoods key={mood.id} mood={mood} />
              </Col>
            );
          })}
        </Row>
      </div>
    </Container>
  );
};

export default Moods;

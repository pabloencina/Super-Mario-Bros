import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import moodsData from "../../Data/moodsData";
import CardMoods from "./CardMoods";

const Moods = () => {
  return (
    <Container>
      <div className="">
        <p className="">
          ESTA SECCIÓN TE PERMITE ELEGIR TU ESTADO DE ANIMO ELIGIENDO UNA CARTA
        </p>
      </div>
      <div className="">
        <p className="">CONTAME AMIGUITO ¿COMO TE SIENTES HOY?</p>
      </div>
      <div>
        <Row>
          {moodsData.map((mood) => {
            return (
              <Col style={{ marginTop: "20px" }} key={mood.id} md={4}>
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

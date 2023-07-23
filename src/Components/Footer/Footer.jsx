import React from "react";
import { Container } from "react-bootstrap";
import MarioFooter from "../../Images/Images-Characters-Mario/MarioFooter.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container className="footer__container_general">
      <div className="footer__container_name">
        <p className="footer__name">Mario Bros</p>
      </div>
      <div className="footer__container_image">
        <Link to={"/personajes"}>
          <img src={MarioFooter} alt="Mario Footer" className="footer__image" />
        </Link>
      </div>
    </Container>
  );
};

export default Footer;

import React from "react";
import sonicBlue from "../../Images/sonic-blue.png";
import signoPregunta from "../../Images/signo-de-pregunta.png";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CarouselComponent from "../Carousel/Carousel";

const Home = () => {
  const userName = "Sonic-blue";
  const userLocation = "Plaza Huincul";
  const userAge = 40;
  const marioFanatic = true;
  return (
    <Container className="home">
      <div className="home__container_title">
        <h2 className="home__title">¡Hola amigos!</h2>
      </div>
      <div className="home__container_universal">
        <Row className="home__container_image">
          <Col md={6} sm={12}>
            <img className="home__image" src={sonicBlue} alt="sonic" />
            <div className="container">
              <p className="home__text_pregunta">
                Quieren ver a todos mis amigos que pertenecen al mundo de{" "}
                <span className="home__span_rojo">Mario Bros</span>
                <img
                  className="home__image_signo_pregunta"
                  src={signoPregunta}
                  alt="signo de pregunta"
                />
              </p>
            </div>
            <div className="home__container_button">
              <Link to="/personajes">
                <Button className="home__button">Personajes</Button>
              </Link>{" "}
            </div>
          </Col>
        </Row>

        {/* Columna para el texto */}

        <Row className="home__container">
          <div className="home__container_text" sm={12}>
            <p className="home__text">
              Mi nombre es <span className="home__span_azul">{userName}</span>,
              y vivo en {""}
              <span className="home__span_azul">{userLocation}</span>. Tengo{" "}
              {userAge} años y, como muchos de ustedes, soy un apasionado
              fanático de <span className="home__span_rojo">Mario Bros</span>.
            </p>
          </div>

          {marioFanatic && (
            <>
              <div className="home__container_text">
                <p className="home__text">
                  Desde que era niño,{" "}
                  <span className="home__span_rojo">Mario Bros</span> ha sido
                  parte de mi vida. Cada aventura, cada salto y cada nivel
                  superado han dejado una huella imborrable en mi corazón.
                </p>
              </div>
              <div className="home__container_text">
                <p className="home__text">
                  No puedo evitar emocionarme cada vez que escucho la clásica
                  melodía del juego o veo a{" "}
                  <span className="home__span_rojo">Mario</span> rescatar a la{" "}
                  <span className="home__span_amarillo">Princesa Peach</span> de
                  las garras de{" "}
                  <span className="home__span_amarillo">Bowser</span>.
                </p>
              </div>
              <div className="home__container_text">
                <p className="home__text">
                  <span className="home__span_rojo">Mario Bros</span> es mucho
                  más que un simple juego para mí. Representa la perseverancia,
                  la amistad y el valor para enfrentar cualquier desafío que se
                  presente.
                </p>
              </div>
              <div className="home__container_text">
                <p className="home__text">
                  Hoy, quiero compartir mi pasión por este icónico personaje con
                  todos ustedes. Espero que juntos podamos revivir viejos
                  recuerdos y celebrar la magia de{" "}
                  <span className="home__span_rojo">Mario Bros</span>.
                </p>
              </div>
              <div className="home__container_text">
                <p className="home__text">
                  ¡Gracias por darme la oportunidad de compartir estas palabras
                  y por ser parte de esta comunidad de fanáticos!
                </p>
              </div>
              <div className="home__container_text">
                <p className="home__text">
                  ¡Que comience la aventura! ¡Es hora de jugar con{" "}
                  <span className="home__span_rojo">Mario Bros</span>!
                </p>
              </div>
            </>
          )}
        </Row>
      </div>
      <Container>
        <div className="carousel__container_title">
          <p className="carousel__title">Fotos para compartir con mis amigos</p>
        </div>
        <CarouselComponent />
      </Container>
    </Container>
  );
};

export default Home;

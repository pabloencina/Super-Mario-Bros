import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Rainbow from "../../Images/Rainbow-image.png";

function ToastRulesOfTheGame() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Button className="toast-moods__btn" onClick={handleShow}>
        <p>REGLAS DE JUEGO</p>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="toast-moods__title">
            ¿CÓMO SE JUEGA?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="toast-moods__text">
          <p className="toast-moods__rule-name">Objetivo del juego:</p>
          <p>
            Encuentra las cartas que coincidan con el nombre del personaje
            mostrado en el título y gana puntos al hacerlo.
          </p>
          <div className="toast-moods__container__img">
            <img className="toast-moods__img" src={Rainbow} alt="Rainbow" />
          </div>
          <p className="toast-moods__rule-name">Reglas del juego:</p>
          <p className="toast-moods__rule-name">1_) Preparación:</p>
          <p>
            {" "}
            Coloca varias cartas boca abajo en la pantalla. Cada carta contiene
            un dibujo de un personaje y su nombre.
          </p>
          <div className="toast-moods__container__img">
            <img className="toast-moods__img" src={Rainbow} alt="Rainbow" />
          </div>
          <p className="toast-moods__rule-name">Jugabilidad:</p>
          <p>
            2_)Al comenzar el juego, se muestra un personaje en el título del
            juego. Los jugadores pueden hacer clic en una carta para voltearla y
            revelar el dibujo y el nombre del personaje.
          </p>
          <div className="toast-moods__container__img">
            <img className="toast-moods__img" src={Rainbow} alt="Rainbow" />
          </div>
          <p className="toast-moods__rule-name">Revelar Cartas:</p>
          <p>
            {" "}
            3_) Cuando un jugador hace clic en una carta, se voltea y muestra el
            dibujo del personaje y su nombre. Si el nombre del personaje en la
            carta coincide con el personaje en el título, se muestra un cartel
            de felicitaciones y el jugador gana puntos.
          </p>
          <div className="toast-moods__container__img">
            <img className="toast-moods__img" src={Rainbow} alt="Rainbow" />
          </div>
          <p className="toast-moods__rule-name">Puntuación:</p>
          <p>
            4_)Cada vez que un jugador encuentra una carta que coincide con el
            personaje del título, gana una cierta cantidad de puntos. Puedes
            mostrar la puntuación acumulada en algún lugar de la pantalla.
          </p>
          <div className="toast-moods__container__img">
            <img className="toast-moods__img" src={Rainbow} alt="Rainbow" />
          </div>
          <p className="toast-moods__rule-name">Continuación:</p>
          <p>
            {" "}
            5_)Después de encontrar una coincidencia o al hacer clic en una
            carta incorrecta, el juego continúa mostrando un nuevo personaje en
            el título. Los jugadores pueden seguir haciendo clic en las cartas
            para encontrar más coincidencias y ganar más puntos.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="toast-moods__btn" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ToastRulesOfTheGame;

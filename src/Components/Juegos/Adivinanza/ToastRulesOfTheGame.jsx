import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Rainbow from "../../../Images/Rainbow-image.png";

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
            Encuentra la carta que coincidan con el nombre del personaje
            mostrado en el título y gana puntos al hacerlo.
          </p>
          <div className="toast-moods__container__img">
            <img className="toast-moods__img" src={Rainbow} alt="Rainbow" />
          </div>
          <p className="toast-moods__rule-name">Reglas del juego:</p>
          <p className="toast-moods__rule-name">1_ Preparación:</p>
          <p>
            {" "}
            Coloca varias cartas boca abajo en la pantalla. Cada carta contiene
            un dibujo de un personaje y su nombre.
          </p>
          <div className="toast-moods__container__img">
            <img className="toast-moods__img" src={Rainbow} alt="Rainbow" />
          </div>
          <p className="toast-moods__rule-name"> 2_ Jugabilidad:</p>
          <p>
            Al comenzar el juego, se muestra el nombre de un personaje en el
            título del juego. Los jugadores pueden hacer clic en una carta para
            voltearla, si estás seguro de la coincidencia has clic nuevamente
            sobre ella para saber si hubo coincidencia.
          </p>
          <div className="toast-moods__container__img">
            <img className="toast-moods__img" src={Rainbow} alt="Rainbow" />
          </div>
          <p className="toast-moods__rule-name">3_ Revelar Cartas:</p>
          <p>
            {" "}
            Cuando un jugador hace clic en una carta, se voltea y muestra el
            dibujo del personaje y su nombre. Si el nombre del personaje en la
            carta coincide con el personaje en el título, se muestra un cartel
            con los puntos obtenidos.
          </p>
          <div className="toast-moods__container__img">
            <img className="toast-moods__img" src={Rainbow} alt="Rainbow" />
          </div>
          <p className="toast-moods__rule-name">4_ Puntuación:</p>
          <p>
            Cada vez que un jugador encuentra una carta que coincide con el
            personaje del título, gana una cierta cantidad de puntos.
            <p>
              *** Si en la primera jugada el participante encuentra la
              coincidencia, obtiene 100 puntos.
            </p>
            <br></br>
            <p>
              *** Si la coincidencia esta entre 2 y 5 clic, obtiene 75 puntos.
            </p>
            <br></br>
            <p>
              *** Si la coincidencia esta entre 5 y 7 clic, obtiene 50 puntos.
            </p>
            <br></br>
            <p>
              *** Si la coincidencia esta entre 7 y 10 clic, obtiene 25 puntos.
            </p>
            <br></br>
            <p>*** Si NO hay coincidencia, NO obtiene ningún punto.</p>
          </p>
          <div className="toast-moods__container__img">
            <img className="toast-moods__img" src={Rainbow} alt="Rainbow" />
          </div>
          <p className="toast-moods__rule-name"> 5_ Continuación:</p>
          <p>
            {" "}
            *** Después de encontrar una coincidencia, el participante puede
            reiniciar el juego con l botón "¿QUIERES SEGUIR JUGANDO?"
          </p>
          <br></br>
          <p>
            *** O al hacer clic en una carta incorrecta, el juego continúa
            mostrando un nuevo personaje en el título. Los jugadores pueden
            seguir haciendo clic en las cartas para encontrar la carta correcta.
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

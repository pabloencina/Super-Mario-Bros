import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Rainbow from "../../Images/Rainbow-image.png";

function ToastMoodsInformation() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Button className="toast-moods__btn" onClick={handleShow}>
        <p>APRENDE MÁS...</p>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="toast-moods__title">
            ¿QUÉ SON LOS ESTADOS DE ÁNIMO?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="toast-moods__text">
          <p>
            Los estados de ánimo son como las diferentes formas en las que nos
            sentimos. Imagina que tus emociones son como colores que pintan tu
            corazón y tu mente. A veces nos sentimos felices, llenos de energía
            y con una sonrisa en el rostro. Esto sería como el color amarillo
            brillante, ¡como un día soleado!
          </p>
          <div className="toast-moods__container__img">
            <img className="toast-moods__img" src={Rainbow} alt="Rainbow" />
          </div>
          <p>
            Otras veces, podemos sentirnos tristes, tal vez porque extrañamos a
            alguien o algo no salió como esperábamos. Esto sería como el color
            azul, como cuando el cielo está nublado y llueve.
          </p>
          <div className="toast-moods__container__img">
            <img className="toast-moods__img" src={Rainbow} alt="Rainbow" />
          </div>
          <p>
            También existe el estado de ánimo enojado, que es cuando nos
            sentimos frustrados o molestos. Esto sería como el color rojo, como
            cuando una olla está hirviendo de calor.
          </p>
          <div className="toast-moods__container__img">
            <img className="toast-moods__img" src={Rainbow} alt="Rainbow" />
          </div>
          <p>
            {" "}
            A veces, nos sentimos asustados, como cuando algo nos da miedo, como
            una película de monstruos. Esto sería como el color negro, como
            cuando está oscuro afuera.
          </p>
          <div className="toast-moods__container__img">
            <img className="toast-moods__img" src={Rainbow} alt="Rainbow" />
          </div>
          <p>
            Y hay momentos en que nos sentimos tranquilos y relajados, como
            cuando nos acurrucamos con un libro o nos balanceamos suavemente en
            un columpio. Esto sería como el color verde, como un tranquilo
            jardín.
          </p>
          <div className="toast-moods__container__img">
            <img className="toast-moods__img" src={Rainbow} alt="Rainbow" />
          </div>
          <p>
            Recuerda que todos tenemos colores emocionales diferentes y está
            bien sentirlos. Lo importante es aprender a manejarlos y a cuidarnos
            a nosotros mismos para tener un corazón lleno de colores hermosos.
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

export default ToastMoodsInformation;

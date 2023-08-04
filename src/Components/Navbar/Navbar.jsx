import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Images/mario-logo.png";
import { NavDropdown } from "react-bootstrap";

function NavbarComponent() {
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" className="navbar__component">
        <Container>
          <Navbar.Brand href="/" className="navbar__color">
            <img src={logo} alt="logo-mario" className="navbar__logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="navbar__toggle"
          />
          <Navbar.Collapse
            className="navbar__collapse"
            id="responsive-navbar-nav"
          >
            <Nav className="me-auto" style={{ marginLeft: "20px" }}>
              <Nav.Link href="/mi-historia" className="navbar__color">
                MI HISTORIA
              </Nav.Link>
              <Nav.Link href="/personajes" className="navbar__color">
                PERSONAJES
              </Nav.Link>
            </Nav>
            <Nav style={{ marginLeft: "20px" }}>
              <Nav.Link href="/estados-animo" className="navbar__color">
                MI ESTADO
              </Nav.Link>
              <Nav.Link href="/videos" className="navbar__color">
                VIDEOS
              </Nav.Link>
              {/* <Nav.Link eventKey={2} href="/juegos" className="navbar__color">
                JUEGOS
              </Nav.Link> */}
              <NavDropdown
                eventKey={2}
                title="JUEGOS"
                //id="basic-nav-dropdown"
                href="/juegos/"
                className="navbar__color"
              >
                <NavDropdown.Item href="/juegos/adivinanza">
                  ADIVINANZA
                </NavDropdown.Item>
                <NavDropdown.Item href="/juegos/abecedario">
                  ABECEDARIO
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="juego3">Something</NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavbarComponent;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Images/mario-logo.png";

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
                Mi Historia
              </Nav.Link>
              <Nav.Link href="/personajes" className="navbar__color">
                Personajes
              </Nav.Link>
            </Nav>
            <Nav style={{ marginLeft: "20px" }}>
              <Nav.Link href="/videos" className="navbar__color">
                Videos
              </Nav.Link>
              <Nav.Link eventKey={2} href="/juegos" className="navbar__color">
                Juegos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavbarComponent;

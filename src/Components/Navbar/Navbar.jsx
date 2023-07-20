import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Images/mario-logo.png";

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar__component">
      <Container>
        <Navbar.Brand href="/" className="navbar__color">
          <img src={logo} alt="logo-mario" className="navbar__logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/mi-historia" className="navbar__color">
              Mi Historia
            </Nav.Link>
            <Nav.Link href="/personajes" className="navbar__color">
              Personajes
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
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
  );
}

export default NavbarComponent;

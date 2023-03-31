import Container from "react-bootstrap/Container";
import "./Navbar.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "./media/logo 1.png";

const M_Navbar = () => {
  return (
    <Container fluid style={{ paddingLeft: '2%', paddingRight: '2%', margin:0 }}>
      <Navbar
        style={{ borderBottom: "1px solid white" }}
        collapseOnSelect
        expand="lg"
      >
        <Col>
          <Navbar.Brand href="#home">
            <img alt="" src={logo} className="d-inline-block align-top" />
          </Navbar.Brand>
        </Col>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Col>
            <div>
              <Nav className="me-auto nav-l">
                <Nav.Link className="text-white" href="#home">
                  Home
                </Nav.Link>
                <Nav.Link className="text-white" href="#features">
                  Landlord
                </Nav.Link>
                <Nav.Link className="text-white" href="#pricing">
                  Tenants
                </Nav.Link>
                <Nav.Link className="text-white" href="#pricing">
                  Contact Us
                </Nav.Link>
              </Nav>
            </div>
          </Col>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default M_Navbar;

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import M_Navbar from "./Navbar";
import "./Hero.css";

const Hero = ({ children }) => {
  return (
    <Container fluid className=" hero">
      <Row 
        style={{ marginLeft:0, marginRight:0, paddingLeft: '5%', paddingRight: '5%'   }}
        >
        <M_Navbar />
        </Row>
      <Row
        style={{ marginLeft:0, marginRight:0, padding: '5%' }}
        className="d-flex flex-row justify-content-between align-items-center h-50"
      >
        <Col sm={6} className=" my-auto">
          <h1 className="mb-3 text-white textWidth text-center">
            The Most Affordable Place To Stay In The San Franciso Bay Area
          </h1>
        </Col>
        <Col className="text-center my-auto" sm={6}>
          <img />
          <a className="btn btn-outline-light btn-lg" href="#!" role="button">
            Call to action
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;

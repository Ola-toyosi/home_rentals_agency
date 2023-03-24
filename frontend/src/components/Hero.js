import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import M_Navbar from "./Navbar";
import "./Hero.css";

const Hero = ({ children }) => {
  return (
    <Container fluid className=" p-0 m-0 hero">
      <div>
        <M_Navbar />
      </div>
      <div
        style={{ padding: '2%', gap: 50 }}
        className="d-flex flex-row justify-content-between align-items-center h-50"
      >
        <Col sm={6}>
          <h1 className="mb-3 text-white textWidth">
            The Most Affordable Place To Stay In The San Franciso Bay Area
          </h1>
        </Col>
        <Col sm={6}>
          <img />
          <a className="btn btn-outline-light btn-lg" href="#!" role="button">
            Call to action
          </a>
        </Col>
      </div>
    </Container>
  );
};

export default Hero;

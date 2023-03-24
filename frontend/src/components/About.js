import Container from "react-bootstrap/Container";
import "./About.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import abt from "./media/About.png";
import b2 from "./media/community-line 1.png";
import b3 from "./media/stack-line 1.png";
import b4 from "./media/plant-line 1.png";
import b5 from "./media/shield-star-line 1.png";
import b6 from "./media/eye-2-line 1.png";

const About = () => {
  return (
    <Container fluid className="p-0 m-0">
      <Row style={{ paddingLeft: '2%', paddingRight: '2%' }}>
        <h3 style={{ paddingTop: 50, width: "auto" }} className="header">
          Minimum Living Cost Takes Care Of Everything
        </h3>
      </Row>
      <Row
        style={{ paddingLeft: '2%', paddingRight: '2%' }}
        className="center-align"
      >
        <Col sm={4}>
          <Card style={{ border: 0 }}>
            <Card.Img variant="top" src={abt} />
            <Card.Body></Card.Body>
          </Card>
        </Col>
        <Col sm={8}>
          <Row>
            <Col sm={6} md={4} style={{ paddingBottom: 20 }}>
              <Card style={{ width: "auto", border: 0 }}>
                <Badge bg="white" style={{ width: 60, border: "black" }}>
                  <Card.Img variant="top" src={b2} />
                </Badge>
                <Card.Body>
                  <Card.Text className="text">
                    Pay As Little As Possible!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} md={4} style={{ paddingBottom: 20 }}>
              <Card style={{ width: "auto", border: 0 }}>
                <Badge bg="white" style={{ width: 60, border: "black" }}>
                  <Card.Img variant="top" src={b2} />
                </Badge>
                <Card.Body>
                  <Card.Text className="text">
                    Enjoy Wisdom Of community
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} md={4} style={{ paddingBottom: 20 }}>
              <Card style={{ width: "auto", border: 0 }}>
                <Badge bg="white" style={{ width: 60, border: "black" }}>
                  <Card.Img variant="top" src={b3} />
                </Badge>
                <Card.Body>
                  <Card.Text className="text">
                    Let Somebody Else Take Care Of Landlord!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} md={4} style={{ paddingBottom: 20 }}>
              <Card style={{ width: "auto", border: 0 }}>
                <Badge bg="white" style={{ width: 60, border: "black" }}>
                  <Card.Img variant="top" src={b4} />
                </Badge>
                <Card.Body>
                  <Card.Text className="text">
                    Enjoy Peaceful Environment!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} md={4} style={{ paddingBottom: 20 }}>
              <Card style={{ width: "auto", border: 0 }}>
                <Badge bg="white" style={{ width: 60, border: "black" }}>
                  <Card.Img variant="top" src={b5} />
                </Badge>
                <Card.Body>
                  <Card.Text className="text">Stay Safe! Save Money!</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} md={4} style={{ paddingBottom: 20 }}>
              <Card style={{ width: "auto", border: 0 }}>
                <Badge bg="white" style={{ width: 60, border: "black" }}>
                  <Card.Img variant="top" src={b6} />
                </Badge>
                <Card.Body>
                  <Card.Text className="text">Pay For What You Use!</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

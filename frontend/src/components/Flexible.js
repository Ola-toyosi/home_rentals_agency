import Container from "react-bootstrap/Container";
import "./Flexible.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import {
  CardTitle,
  CardImg,
  CardImgOverlay,
  Col,
  Card,
  CardText,
} from "reactstrap";
import l1 from "./media/l1.png";
import l2 from "./media/l2.png";
import r1 from "./media/r1.png";
import r2 from "./media/r2.png";

const Flexible = () => {
  return (
    <Container fluid className="p-0 m-0">
      <Row style={{ padding: '2%' }} >
        <Col classname="g-2" sm={12} md={6}>
          <Row style={{ padding: "3%" }} >
            <Col style={{ marginTop: "auto" }} sm={12} lg={6}>
              <Card inverse>
                <CardImg alt="Card image cap" src={l1} width="100%" />
                <CardImgOverlay style={{ textAlign: 'center' }} >
                  <CardTitle tag="h5">Flexible Leases</CardTitle>
                </CardImgOverlay>
              </Card>
            </Col>
            <Col
              style={{
                marginTop: "auto",
                paddingRight: "5%",
                paddingTop: "5%",
              }}
              sm={12}
              lg={6}
            >
              <Card inverse>
                <CardImg alt="Card image cap" src={r1} width="100%" />
                <CardImgOverlay style={{ textAlign: 'center' }}>
                  <CardTitle className="align-item-center" tag="h5">
                    7-Day Happiness Guaranteed
                  </CardTitle>
                </CardImgOverlay>
              </Card>
            </Col>
          </Row>
          <Row style={{ padding: "3%" }}>
            <Col style={{ padding: "3%" }} sm={12} lg={5}>
              <Card inverse>
                <CardImg alt="Card image cap" src={l2} width="100%" />
                <CardImgOverlay style={{ textAlign: 'center' }}>
                  <CardTitle tag="h5">Monthly House Cleaning</CardTitle>
                </CardImgOverlay>
              </Card>
            </Col>
            <Col style={{ padding: "3%" }} sm={12} lg={7}>
              <Card inverse>
                <CardImg
                  alt="Card image cap"
                  src={r2}
                  style={{
                    height: 270,
                  }}
                  width="100%"
                />
                <CardImgOverlay style={{ textAlign: 'center' }}>
                  <CardTitle tag="h5">Choose Your Own Roommate</CardTitle>
                </CardImgOverlay>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col sm={12} md={6} style={{ padding: "3%" }} classname="d-flex justify-content-cente">
          <Card
            sm={12}
            style={{ border: 0, padding: "10%", paddingTop: "30%" }}
          >
            <CardTitle tag="h1" className="flexi-text" sm={12}>
              Flexibility and options to suit your lifestyle
            </CardTitle>
            <CardText>
              You need it? We got it. We make finding your next home easy,
              comfortable, and simple. From our happiness guarantee to our
              selective roomate finder option. We provide you the flexibility
              that you most desire.
            </CardText>
            <Button className="text-white btn-custom">Search Rooms</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Flexible;

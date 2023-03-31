import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import "./Property.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import prop1 from "./media/prop1.png";
import bed from "./media/Bed.svg";
import shower from "./media/Shower.svg";
import size from "./media/Size.svg";

const Properties = () => {
  return (
    <Container fluid className="p-0 m-0" style={{ backgroundColor: "#F5F5F5" }}>
      <Row
        style={{
          marginLeft: 0,
          marginRight: 0,
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
        className="justify-content-between"
      >
        <h3 style={{ paddingTop: 50, width: "auto" }} className="header">
          {" "}
          List Of Properties{" "}
        </h3>

        <Col
          sm={4}
          style={{ paddingTop: 50, display: "flex", justifyContent: "right" }}
        >
          <Button className="text-white btn-custom">View All Property</Button>
        </Col>
      </Row>
      <Row
        style={{
          marginLeft: 0,
          marginRight: 0,
          paddingLeft: "5%",
          paddingRight: "5%",
          paddingTop: 50,
        }}
        xs={1}
        md={3}
        className="justify-content-space-between g-4"
      >
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col key={"1"} style={{ marginTop: 0, padding: "2%" }}>
            <Card style={{ borderRadius: "30px", backgroundColor: "#ffffff" }}>
              <Card.Img variant="top" src={prop1} />
              <Card.Body>
                <Card.Title>
                  2578 Folsom street, san francisco, CA, 94110
                </Card.Title>
                <Card.Text className="room-type">Private Room</Card.Text>
                <Card.Text className="price">$1200/Month</Card.Text>
              </Card.Body>
              <Card.Footer
                style={{
                  borderBottomRightRadius: "25px",
                  borderBottomLeftRadius: "25px",
                }}
                className="text-align-center"
              >
                <Row
                  style={{
                    marginLeft: 0,
                    marginRight: 0,
                    display: "flex",
                    alignContent: "center",
                  }}
                  className=" footer text-center "
                >
                  <Col
                    style={{ width: "auto" }}
                    className="footer-item justify-content-evenly"
                  >
                    <small className="text-black">
                      <Card.Img style={{ width: 20 }} src={bed} /> 4
                    </small>
                  </Col>
                  <Col style={{ width: "auto" }} className="footer-item">
                    <small className="text-black">
                      <Card.Img style={{ width: 20 }} src={shower} /> 4
                    </small>
                  </Col>
                  <Col style={{ width: "auto" }} className="footer-item">
                    <small className="text-black">
                      <Card.Img style={{ width: 20 }} src={size} /> 4
                    </small>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      <br />
      <Row
        style={{
          marginLeft: 0,
          marginRight: 0,
          // paddingLeft: 100,
          // paddingRight: 100,
          paddingTop: 20,
          paddingBottom: 100,
        }}
      >
        <div>
          <Pagination className="pagination">
            <Pagination.First disabled> {"First"} </Pagination.First>
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item className="active">{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Next> {"Next"} </Pagination.Next>
          </Pagination>
        </div>
      </Row>
    </Container>
  );
};

export default Properties;

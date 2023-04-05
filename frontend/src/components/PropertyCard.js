import React from "react";
import Card from "react-bootstrap/Card";
import bed from "./media/Bed.svg";
import shower from "./media/Shower.svg";
import size from "./media/Size.svg";
import "./Property.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PropTypes from "prop-types";

const PropertyCard = (props) => {
  const {
    name = "",
    address = "",
    unit_number = "",
    city = "",
    state = "",
    type = "",
    price = "",
    description = "",
    image = "",
    // rooms = "",
    // bathrooms = "",
  } = props.property || {};

  return (
    <div>
        <Col key={"1"} style={{ marginTop: 0, padding: "2%" }}>
          <Card title={{name, description, unit_number}} style={{ borderRadius: "30px", backgroundColor: "#ffffff" }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>
                {address}, {city}, {state}
              </Card.Title>
              <Card.Text className="room-type">{type}</Card.Text>
              <Card.Text className="price">${price}/Month</Card.Text>
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
    </div>
  );
};

export default PropertyCard;
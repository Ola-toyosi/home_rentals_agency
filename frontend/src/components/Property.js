import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./Property.css";
import Pagination from "./Pagination";
import PropertyCard from "./PropertyCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Component } from "react";
import axios from "axios";

class Properties extends Component {
  state = {
    allProperties: [],
    currentProperties: [],
    currentPage: null,
    totalPages: null,
  };

  componentDidMount() {
    this.fetchProperties();
  }

  fetchProperties = () => {
    axios
      .get("http://127.0.0.1:8000/api/properties/")
      .then((res) => {
        this.setState({ allProperties: res.data }, () =>
          console.log("done", this.state)
        );
      })
      .catch((err) => console.log(err));
  };

  onPageChanged = (data) => {
    const { currentPage, totalPages, pageLimit } = data;

    axios
      .get(
        `http://127.0.0.1:8000/api/properties?page=${currentPage}&size=${pageLimit}`
      )
      .then((response) => {
        const currentProperties = response.data;
        this.setState({ currentPage, currentProperties, totalPages }, () => console.log(response.data, currentProperties, this.state));
      });
  };

  render() {
    const { allProperties, currentProperties, currentPage, totalPages } =
      this.state;
    const totalProperties = allProperties.length;

    if (totalProperties === 0) return null;

    return (
      <Container
        fluid
        className="p-0 m-0"
        style={{ backgroundColor: "#F5F5F5" }}
      >
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
          {currentProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
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
            <Pagination
              totalRecords={totalProperties}
              pageLimit={5}
              pageNeighbours={1}
              onPageChanged={this.onPageChanged}
            />
          </div>
        </Row>
      </Container>
    );
  }
}

export default Properties;

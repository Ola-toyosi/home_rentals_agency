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
    allProperties: 0,
    currentProperties: [],
    currentPage: null,
    totalPages: null,
  };

  async componentDidMount() {
    this.fetchProperties();
  }

  fetchProperties = async () => {
    try {
      await axios.get("http://127.0.0.1:8000/api/properties/").then((res) => {
        this.setState(
          {
            currentProperties: res.data.results,
            allProperties: res.data.count,
          }
          // ,
          // () => console.log("done", res.data, this.state)
        );
      });
    } catch (error) {
      if (error.response) {
        // Request made but the server responded with an error
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // Request made but no response is received from the server.
        console.log(error.request);
      } else {
        // Error occured while setting up the request
        console.log("Error", error.message);
      }
    }
  };

  onPageChanged = (data) => {
    const { currentPage, totalPages } = data;
    // console.log("yeah", data, currentPage);
    try {
      axios
        .get(`http://127.0.0.1:8000/api/properties/?page=${currentPage}`)
        .then((response) => {
          const currentProperties = response.data.results;
          this.setState(
            { currentPage, currentProperties, totalPages }
            // , () =>
            // console.log("done2", this.state)
          );
        });
    } catch (error) {
      if (error.response) {
        // Request made but the server responded with an error
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // Request made but no response is received from the server.
        console.log(error.request);
      } else {
        // Error occured while setting up the request
        console.log("Error", error.message);
      }
    }
  };

  render() {
    const { allProperties, currentProperties, currentPage, totalPages } =
      this.state;
    const totalProperties = allProperties;
    // console.log(this.state);

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
          {
            (
              // console.log(currentProperties, currentPage),
            currentProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            )))
          }
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
          {/* {console.log(totalProperties)} */}
          <div>
            <Pagination
              totalRecords={totalProperties}
              pageLimit={currentProperties.length}
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

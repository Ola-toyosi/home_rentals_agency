import React, { Component } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  FormGroup,
  Card,
  CardTitle,
  Input,
  Label,
  Button,
} from "reactstrap";
import "./PropertyForm.css";
import axios from "axios";

class PropertyForm extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: {
        name: {
          value: "",
        },
        address:  {
          value: "",
        },
        unit_number:  {
          value: "",
        },
        city:  {
          value: "",
        },
        state:  {
          value: "",
        },
        type:  {
          value: "",
        },
        price:  {
          value: "",
        },
        description:  {
          value: "",
        },
        image: ''
      },
    };
  }

  //Responsible for saving the task
  handleSubmit = (item) => {
    // item.preventDefault();
    // console.log(this.state, item, this.state.activeItem, this.state.activeItem.name.value)
    let form_data  = new FormData();
    form_data.append('name', this.state.activeItem.name);
    form_data.append('address', this.state.activeItem.address);
    form_data.append('unit_number', this.state.activeItem.unit_number);
    form_data.append('city', this.state.activeItem.city);
    form_data.append('state', this.state.activeItem.state);
    form_data.append('room_type', this.state.activeItem.room_type);
    form_data.append('price', this.state.activeItem.price);
    form_data.append('description', this.state.activeItem.description);
    form_data.append('image', this.state.activeItem.image, this.state.activeItem.image.name);
    // console.log(form_data);
    // create new item
    axios.post("http://localhost:8000/api/properties/", form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
      .then(res=> {
        console.log(res.data);
      })
      .catch(err => console.log(err)
      );
  };

  handleImageChange = (e) => {
    let { name, files } = e.target;
    // changes the state of targeted element in item using it's element name
    const activeItem = { ...this.state.activeItem, [name]: files[0]};
    this.setState({ activeItem });
    // this.setState({
    //   activeItem, image: e.target.files[0]
    // })
  }

  // handle change when event is triggered
  handleChange = (e) => {
    let { name, value } = e.target;
    // changes the state of targeted element in item using it's element name
    const activeItem = { ...this.state.activeItem, [name]: value};
    this.setState({ activeItem });
  };
  render() {
    return (
      <Container fluid className="p-0 m-0">
        <Row
          style={{
            marginLeft: 0,
            marginRight: 0,
            padding: "2%",
            paddingBottom: 0,
            textAlign: "center",
          }}
          className="justify-content-between"
        >
          <h5 className="text-700">
            Register Your Property With Us And Be Confident That Your Room Will
            Be Filled Out!
          </h5>
        </Row>
        <Row style={{ marginLeft: 0, marginRight: 0, padding: "5%" }}>
          <Card
            style={{
              marginLeft: 0,
              marginRight: 0,
              padding: "3%",
            }}
            className="shadow-lg"
          >
            <CardTitle>
              {" "}
              <h4 className="form-title"> Add A New Property </h4>{" "}
            </CardTitle>
            <Form className="justify-content-between ">
              <Row
                className="row-cols-lg-auto align-items-center"
                style={{ marginLeft: 0, marginRight: 0, padding: 0 }}
              >
                <Col sm={12} lg={4}>
                  <FormGroup style={{ paddingBottom: 20 }}>
                    <Label className="text-700" for="name">
                      Name <span className="text-orange">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter Name"
                      type="text"
                      value={this.state.activeItem.name.value}
                      onChange={this.handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col sm={12} lg={4}>
                  <FormGroup style={{ paddingBottom: 20 }}>
                    <Label className="text-700" for="address">
                      Address <span className="text-orange">*</span>
                    </Label>
                    <Input
                      id="address"
                      name="address"
                      placeholder="Enter Address"
                      type="text"
                      value={this.state.activeItem.address.value}
                      onChange={this.handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col sm={12} lg={4}>
                  <FormGroup style={{ paddingBottom: 20 }}>
                    <Label className="text-700" for="unit_number">
                      Unit Number <span className="text-orange">*</span>
                    </Label>
                    <Input
                      id="unit_number"
                      name="unit_number"
                      placeholder="Enter Unit"
                      type="text"
                      value={this.state.activeItem.unit_number.value}
                      onChange={this.handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row
                className="row-cols-lg-auto g-3 align-items-center"
                style={{ marginLeft: 0, marginRight: 0 }}
              >
                <Col sm={12} lg={4}>
                  <FormGroup style={{ paddingBottom: 20 }}>
                    <Label className="text-700" for="city">
                      City <span className="text-orange">*</span>
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      placeholder="Select City"
                      type="text"
                      value={this.state.activeItem.city.value}
                      onChange={this.handleChange}
                      required
                    />
                    {/* <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input> */}
                  </FormGroup>
                </Col>
                <Col sm={12} lg={4}>
                  <FormGroup style={{ paddingBottom: 20 }}>
                    <Label className="text-700" for="state">
                      State <span className="text-orange">*</span>
                    </Label>
                    <Input
                      id="state"
                      name="state"
                      placeholder="Enter State"
                      type="text"
                      value={this.state.activeItem.state.value}
                      onChange={this.handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col sm={12} lg={4}>
                  <FormGroup style={{ paddingBottom: 20 }}>
                    <Label className="text-700" for="type">
                      Room Type <span className="text-orange">*</span>
                    </Label>
                    <Input
                      id="type"
                      name="type"
                      placeholder="Select Room Type"
                      type="select"
                      value={this.state.activeItem.type.value}
                      onChange={this.handleChange}
                      required
                    >
                      <option>Studio</option>
                      <option>Private Room</option>
                      <option>Loft</option>
                      <option>High Rise</option>
                      <option>Duplex</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row
                className="row-cols-lg-auto g-3 align-items-center"
                style={{ marginLeft: 0, marginRight: 0 }}
              >
                <Col sm={12} lg={4}>
                  <FormGroup style={{ paddingBottom: 20 }}>
                    <Label className="text-700" for="price">
                      Price <span className="text-orange">*</span>
                    </Label>
                    <Input
                      id="price"
                      name="price"
                      placeholder="Enter Price"
                      type="text"
                      value={this.state.activeItem.price.value}
                      onChange={this.handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Col sm={12} lg={12}>
                <FormGroup
                  row
                  style={{ marginLeft: 0, marginRight: 0, paddingBottom: 20 }}
                >
                  <Label className="text-700" for="description">
                    Description <span className="text-orange">*</span>
                  </Label>
                  <Col sm={12}>
                    <Input
                      id="description"
                      name="description"
                      placeholder="Enter Description"
                      type="textarea"
                      value={this.state.activeItem.description.value}
                      onChange={this.handleChange}
                      required
                    />
                  </Col>
                </FormGroup>
              </Col>
              <Col sm={12} lg={12}>
                <FormGroup
                  row
                  style={{
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    paddingTop: 20,
                    paddingBottom: 50,
                  }}
                >
                  <Label className="text-700" for="image">
                    Upload Photos
                  </Label>
                  <Col sm={12} className="image-upload">
                    <h5>
                      Drag your images here or{" "}
                      <span className="text-orange">browse</span>{" "}
                    </h5>
                    <p>Supported: JPG, JPEG, PNG</p>
                    <Input
                      id="image"
                      name="image"
                      type="file"
                      accept="image/png, image/jpeg"
                      // value={this.state.activeItem.image}
                      onChange={this.handleImageChange}
                      required
                    />
                  </Col>
                </FormGroup>
              </Col>
              <Row
                sm={12}
                lg={6}
                style={{
                  marginLeft: 0,
                  marginRight: 0,
                  justifyContent: "center",
                }}
              >
                <Button
                  style={{ paddingLeft: "2%", paddingRight: "2%" }}
                  className="text-align-center btn-custom"
                  // onClick={() => console.log(this.state.activeItem)}
                  onClick={() => this.handleSubmit(this.state.activeItem)}
                >
                  Add New Property
                </Button>
              </Row>
            </Form>
          </Card>
        </Row>
      </Container>
    );
  }
}

export default PropertyForm;

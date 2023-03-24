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

const PropertyForm = () => {
  return (
    <Container fluid className="p-0">
      <Row
        style={{ padding: 50, textAlign: "center" }}
        className="justify-content-between"
      >
        <h5>
          Register Your Property With Us And Be Confident That Your Room Will Be
          Filled Out!
        </h5>
      </Row>
      <Row style={{ padding: '5%' }}>
        <Card
          style={{
            padding: 50,
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
              style={{ padding: 0 }}
            >
              <Col sm={12} lg={4}>
                <FormGroup style={{ paddingBottom: 20 }}>
                  <Label className="text-700" for="propertyName">Name <span className="text-orange">*</span></Label>
                  <Input
                    id="propertyName"
                    name="name"
                    placeholder="Enter Name"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col sm={12} lg={4}>
                <FormGroup style={{ paddingBottom: 20 }}>
                  <Label className="text-700" for="propertyAddress">Address <span className="text-orange">*</span></Label>
                  <Input
                    id="propertyAddress"
                    name="address"
                    placeholder="Enter Address"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col sm={12} lg={4}>
                <FormGroup style={{ paddingBottom: 20 }}>
                  <Label className="text-700" for="propertyUnitNo">Unit Number <span className="text-orange">*</span></Label>
                  <Input
                    id="propertyUnitNo"
                    name="unit"
                    placeholder="Enter Unit"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className="row-cols-lg-auto g-3 align-items-center">
              <Col sm={12} lg={4}>
                <FormGroup style={{ paddingBottom: 20 }}>
                  <Label className="text-700" for="propertyCity">City <span className="text-orange">*</span></Label>
                  <Input
                    id="propertyCity"
                    name="city"
                    placeholder="Select City"
                    type="select"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col sm={12} lg={4}>
                <FormGroup style={{ paddingBottom: 20 }}>
                  <Label className="text-700" for="propertyState">State <span className="text-orange">*</span></Label>
                  <Input
                    id="propertyState"
                    name="state"
                    placeholder="Enter State"
                    type="select"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col sm={12} lg={4}>
                <FormGroup style={{ paddingBottom: 20 }}>
                  <Label className="text-700" for="propertyRoomType">Room Type <span className="text-orange">*</span></Label>
                  <Input
                    id="propertyRoomType"
                    name="room"
                    placeholder="Select Room Type"
                    type="select"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row className="row-cols-lg-auto g-3 align-items-center">
              <Col sm={12} lg={4}>
                <FormGroup style={{ paddingBottom: 20 }}>
                  <Label className="text-700" for="propertyPrice">Price <span className="text-orange">*</span></Label>
                  <Input
                    id="propertyPrice"
                    name="price"
                    placeholder="Enter Price"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Col sm={12} lg={12}>
              <FormGroup row style={{ paddingBottom: 20 }}>
                <Label className="text-700" for="propertyDescription">Description <span className="text-orange">*</span></Label>
                <Col sm={12}>
                  <Input
                    id="propertyDescription"
                    name="description"
                    placeholder="Enter Description"
                    type="textarea"
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col sm={12} lg={12}>
              <FormGroup style={{ paddingTop: 20, paddingBottom: 50 }}>
                <Label className="text-700" for="propertyImages">Upload Photos</Label>
                <Col sm={12} className="image-upload">
                  <h5>
                    Drag your images here or{" "}
                    <span className="text-orange">browse</span>{" "}
                  </h5>
                  <p>Supported: JPG, JPEG, PNG</p>
                  <Input id="propertyImages" name="images" type="file" />
                </Col>
              </FormGroup>
            </Col>
            <Row sm={12} lg={6} style={{ justifyContent: "center" }}>
              <Button
                style={{ paddingLeft: '2%', paddingRight: '2%' }}
                className="text-align-center btn-custom"
              >
                Add New Property
              </Button>
            </Row>
          </Form>
        </Card>
      </Row>
    </Container>
  );
};

export default PropertyForm;

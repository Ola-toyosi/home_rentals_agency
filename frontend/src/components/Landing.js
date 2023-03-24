import Container from "react-bootstrap/Container";
import "./Landing.css";

const Landing = ({ children }) => {
  return (
    <Container fluid className=" justify-content-center p-0 m-0 landing">
      {children}
    </Container>
  );
};

export default Landing;

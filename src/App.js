import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">WELCOME</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="card">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            className="img"
            variant="top"
            src="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/338361830_222019233740790_627696055089725809_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=cUNGLtzH1dQAX_dxnBS&_nc_ht=scontent.ftun1-2.fna&oh=00_AfDmLWd_12bJ5Th7f-rQKWYxcMXJWXcUjghf-Jkrx40xnQ&oe=656EB92C"
          />
          <Card.Body>
            <Card.Title>about me</Card.Title>
            <Card.Text>BEJI MOHAMMED AZIZ 18 YEARS OLD</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="al">
        <Alert className="alert" variant="success">
          <Alert.Heading>have a nice search in my web </Alert.Heading>
          <p>
            Welcome to our web development content creator page! Whether you're
            a beginner looking to learn the basics of web development or an
            experienced developer wanting to level up your skills, you've come
            to the right place. Our content creator is dedicated to providing
            you with comprehensive tutorials, step-by-step guides, and practical
            tips to help you build amazing websites and web applications. From
            HTML and CSS to JavaScript frameworks and backend technologies, we
            cover a wide range of topics to cater to your learning needs. Join
            our community of web enthusiasts and embark on your journey to
            becoming a proficient web developer today
          </p>
          <hr />
          <p className="mb-0">
            have a nice day and welcome to my page 
          </p>
        </Alert>
      </div>
    </div>
  );
}

export default App;

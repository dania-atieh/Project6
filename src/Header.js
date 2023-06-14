import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.png'
import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";


const Header = () => {
  const mystyle = {
    color: "#8f0808",
    textAlign: "center",
  };

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
            <img src={logo} width={200} alt="harmony house logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href="#action1">Home</Nav.Link> */}
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
<br />
<br />
<h3 style={mystyle}>“Music is the universal language of mankind.” – Henry Wadsworth Longfellow</h3>
<br />
</>
);
}
export default Header
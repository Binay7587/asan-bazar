import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";
import "../../assets/css/main.css"
import logo from '../../assets/images/logo.svg';
import { FaShoppingCart } from 'react-icons/fa';

const HomePageLayout = () => {
    return (<>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#logo">
                    <img
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top circle"
                        alt="React logo"
                    />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#categories">Categories</Nav.Link>
                    <Nav.Link href="#brands">Brands</Nav.Link>
                    <Nav.Link href="#products">Products</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        size="sm"
                    />
                </Form>
                <Nav>
                    <Nav.Link href="#cart">
                        <FaShoppingCart size={20} />
                    </Nav.Link>
                    <Nav.Link href="#login">
                        Login
                    </Nav.Link>
                    <Nav.Link href="#register">
                        Register
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>);
}

export default HomePageLayout;
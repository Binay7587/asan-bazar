import { Container, Navbar, Nav, Form, Row, Col } from "react-bootstrap";
import logo from '../../../assets/images/logo.svg';
import { FaFacebook, FaShoppingCart, FaTwitter } from 'react-icons/fa';
import { NavLink } from "react-router-dom";

const HomeMenu = () => {
    return (<>
        <Navbar bg="light" variant="light" className="py-1">
            <Container>
                <Row>
                    <Col>
                        <a target={"_blank"} rel="noreferrer" href="https://www.facebook.com/"><FaFacebook /></a>
                    </Col>
                    <Col>
                        <a target={"_blank"} rel="noreferrer" href="https://www.twitter.com/"><FaTwitter /></a>
                    </Col>
                </Row>
            </Container>
        </Navbar>
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to="/" style={{ maxHeight: "100px", width: "100px" }} className="nav-brand">
                    <img
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top circle"
                        alt="React logo"
                    />
                </NavLink>
                <Nav className="me-auto">
                    <NavLink to="/" className={"nav-link"}>Home</NavLink>
                    <NavLink to="/categories" className={"nav-link"}>Categories</NavLink>
                    <NavLink to="/brands" className={"nav-link"}>Brands</NavLink>
                    <NavLink to="/products" className={"nav-link"}>Products</NavLink>
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
                    <NavLink to="/cart" className={"nav-link"}>
                        <FaShoppingCart size={20} />
                    </NavLink>
                    <NavLink to="/login" className={"nav-link"}>
                        Login
                    </NavLink>
                    <NavLink to="/register" className={"nav-link"}>
                        Register
                    </NavLink>
                </Nav>
            </Container >
        </Navbar >
    </>)
}

export default HomeMenu;
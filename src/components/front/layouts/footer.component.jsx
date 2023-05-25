import { Col, Container, Row } from "react-bootstrap";
import codLogo from "../../../assets/images/cod.png";
import khaltiLogo from "../../../assets/images/khalti.png";
import visaLogo from "../../../assets/images/visa.png";

const FooterComponent = () => {
    return (<>
        <footer className="text-white py-3">
            <Container>
                <Row>
                    <Col lg={3} md={6}>
                        <h5>About Us</h5>
                        <p>Asan Bazar is an online shopping platform that provides you with the best quality products at a reasonable price.</p>
                    </Col>
                    <Col lg={3} md={6}>
                        <h5>Categories</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">Category 1</a></li>
                            <li><a href="/">Category 2</a></li>
                            <li><a href="/">Category 3</a></li>
                            <li><a href="/">Category 4</a></li>
                        </ul>
                    </Col>
                    <Col lg={3} md={6}>
                        <h5>Customer Service</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">Contact Us</a></li>
                            <li><a href="/">FAQs</a></li>
                            <li><a href="/">Returns & Exchanges</a></li>
                        </ul>
                    </Col>
                    <Col lg={3} md={6}>
                        <h5>Connect with Us</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">Facebook</a></li>
                            <li><a href="/">Twitter</a></li>
                            <li><a href="/">Instagram</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center justify-content-space-between">
                    <Col className="text-left mt-3">
                        <p>&copy; {new Date().getFullYear()} Asan Bazar. All rights reserved.</p>
                    </Col>
                    <Col className="text-right d-flex justify-content-end">
                        <img src={codLogo} alt="COD logo" height="50px" className="mr-2" />
                        <img src={khaltiLogo} alt="Khalti logo" height="50px" className="mr-2" />
                        <img src={visaLogo} alt="Visa logo" height="50px" className="mr-2" />
                    </Col>
                </Row>
            </Container>
        </footer>
    </>)
}

export default FooterComponent

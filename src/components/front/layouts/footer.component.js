import { Col, Container, Row } from "react-bootstrap"

const FooterComponent = () => {
    return (<>
        <footer className="text-white py-3">
            <Container>
                <Row>
                    <Col lg={3} md={6}>
                        <h5>About Us</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
                        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                    </Col>
                    <Col className="text-right d-flex justify-content-end">
                        <img src="https://via.placeholder.com/50x30" alt="payment method logo" className="mr-2" />
                        <img src="https://via.placeholder.com/50x30" alt="payment method logo" className="mr-2" />
                        <img src="https://via.placeholder.com/50x30" alt="payment method logo" className="mr-2" />
                    </Col>
                </Row>
            </Container>
        </footer>
    </>)
}

export default FooterComponent
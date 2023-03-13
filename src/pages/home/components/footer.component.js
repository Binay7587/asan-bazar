import { Col, Container, Navbar, Row } from "react-bootstrap"

const FooterComponent = () => {
    return (<>
        <footer className="bg-dark fixed-bottom">
            <Container style={{ minHeight: "15vh" }}>
                <Row>
                    <Col sm={12} md={4} className="text-white">
                        <Navbar.Brand href="#home">Footer Design here.</Navbar.Brand>
                    </Col>
                    <Col sm={12} md={4} className="text-white">
                        <Navbar.Brand href="#home">Footer Design here.</Navbar.Brand>
                    </Col>
                    <Col sm={12} md={4} className="text-white">
                        <Navbar.Brand href="#home">Footer Design here.</Navbar.Brand>
                    </Col>
                </Row>
            </Container>
        </footer>
    </>)
}

export default FooterComponent
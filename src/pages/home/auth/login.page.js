import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./auth.css";

const LoginPage = () => {
    let [data, setData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        console.log(data);
    }

    return (<>
        <Container>
            <Row className="justify-content-center">
                <Col lg={5} className="mt-5">
                    <h4 className="text-center">Login</h4>
                    <Form onSubmit={handleSubmit} className="mt-5">
                        <Form.Group className="mb-3">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => {
                                setData({ ...data, email: e.target.value });
                            }} />
                            <span className="text-danger"></span>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" onChange={(e) => {
                                setData({ ...data, password: e.target.value });
                            }} />
                            <span className="text-danger"></span>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100">
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </>);
}

export default LoginPage;
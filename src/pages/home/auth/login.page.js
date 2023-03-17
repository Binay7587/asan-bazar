import { Col, Card, Container, Form, Row } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./auth.css";
import ActionButton from "../../../components/common/action-btn.component";

const LoginPage = () => {
    let loginSchema = Yup.object({
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().required("Password is required"),
    });

    const formik = useFormik({
        initialValues: {
            email: null,
            password: null,
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            console.log(values);
            // TODO: Login API
            // TODO: Redirect to dashboard
        }
    });

    return (<>
        <Container>
            <Row className="justify-content-center">
                <Col lg={5} className="mt-5">
                    <Card className="p-4">
                        <h4 className="text-center">Login</h4>
                        <Form onSubmit={formik.handleSubmit} className="mt-5">
                            <Form.Group className="mb-3">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control
                                    name="email"
                                    type="email"
                                    placeholder="Enter email"
                                    onChange={formik.handleChange}
                                />
                                <span className="text-danger">{formik.errors.email}</span>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password:</Form.Label>
                                <Form.Control
                                    name="password"
                                    type="password"
                                    placeholder="Enter password"
                                    onChange={formik.handleChange}
                                />
                                <span className="text-danger">{formik.errors.password}</span>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Check
                                    name="rememberme"
                                    type="checkbox"
                                    label="Remember me"
                                />
                            </Form.Group>
                            <ActionButton text="Login" />
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>);
}

export default LoginPage;
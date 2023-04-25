import { Col, Card, Container, Form, Row } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./auth.css";
import ActionButton from "../../../components/common/action-btn.component";
import { toast } from "react-toastify";
import authService from "../../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedInUser } from "../../../reducers/user.slicer";

const LoginPage = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let user = useSelector((rootUser) => {
        return rootUser.User.loggedInUser;
    })

    let loginSchema = Yup.object({
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().required("Password is required"),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: async (credentials, { resetForm }) => {
            try {
                let response = await authService.loginUser({ ...credentials });
                if (response.status) {
                    localStorage.setItem(import.meta.env.VITE_ACCESSTOKEN_KEY, response.result.token);
                    dispatch(setLoggedInUser(response.result.user))
                }

                navigate(`/${response.result.user.role}`);
                toast.success(`Welcome to the ${response.result.user.role} panel, ${response.result.user.name}`);
                // Navigating resets the form. No need to call resetForm()
                resetForm();
            } catch (error) {
                toast.error(error.data.msg);
            }
        }
    });

    // Memoize the loginCheck function
    const loginCheck = useCallback(
        async () => {
            try {
                if (user) {
                    navigate(`/${user.role}`);
                    toast.success(`Welcome to the ${user.role} panel, ${user.name}`);
                }
            } catch (error) {
                // Do nothing
            }
        }, [user, navigate]
    );

    useEffect(() => {
        // If user is already logged in, redirect to dashboard
        loginCheck();
    }, [loginCheck]);

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
                                    value={formik.values.email}
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
                                    value={formik.values.password}
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
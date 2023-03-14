import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./auth.css";

const RegisterPage = () => {
    let registerSchema = Yup.object().shape({
        name: Yup.string().required("Fullname is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().required("Password is required").oneOf([Yup.ref("confirmPassword"), null], "Passwords must match"),
        role: Yup.string().required("Role is required"),
        address: Yup.object().shape({
            temp: Yup.object().shape({
                state: Yup.string().required("State is required"),
                district: Yup.string().required("District is required"),
                municipality: Yup.string().required("Municipality is required"),
                street: Yup.string().required("Street is required"),
                houseNumber: Yup.string().required("House number is required"),
                postcode: Yup.string().required("Postcode is required"),
            }),
            perm: Yup.object().shape({
                state: Yup.string().required("State is required"),
                district: Yup.string().required("District is required"),
                municipality: Yup.string().required("Municipality is required"),
                street: Yup.string().required("Street is required"),
                houseNumber: Yup.string().required("House number is required"),
                postcode: Yup.string().required("Postcode is required"),
            })
        }),
        phone: Yup.string().required("Phone number is required"),
        userImage: Yup.string().required("User image is required"),
    });
    const formik = useFormik({
        initialValues: {
            name: null,
            email: null,
            password: null,
            role: null,
            address: {
                temp: {
                    state: null,
                    district: null,
                    municipality: null,
                    street: null,
                    houseNumber: null,
                    postcode: null,
                },
                perm: {
                    state: null,
                    district: null,
                    municipality: null,
                    street: null,
                    houseNumber: null,
                    postcode: null,
                }
            },
            phone: null,
            userImage: null,
            status: "inactive",
        },
        validationSchema: registerSchema,
        onSubmit: (values) => {
            console.log(values);
            // TODO: Register API
            // TODO: Redirect to dashboard
        }
    });

    // function success(pos) {
    //     const crd = pos.coords;

    //     console.log("Your current position is:");
    //     console.log(`Latitude : ${crd.latitude}`);
    //     console.log(`Longitude: ${crd.longitude}`);
    //     console.log(`More or less ${crd.accuracy} meters.`);
    // }

    // function error(err) {
    //     console.warn(`ERROR(${err.code}): ${err.message}`);
    // }

    // navigator.geolocation.getCurrentPosition(success, error);

    return (<>
        <Container>
            <Row className="justify-content-center">
                <Col lg={12} className="mt-5">
                    <Card className="p-4">
                        <h4 className="text-center">Register</h4>
                        <Form onSubmit={formik.handleSubmit} className="mt-5">
                            <Row>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label>Fullname:</Form.Label>
                                    <Form.Control
                                        name="name"
                                        type="text"
                                        placeholder="Enter your fullname"
                                        onChange={formik.handleChange}
                                    />
                                    <span className="text-danger">{formik.errors.name}</span>
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        onChange={formik.handleChange}
                                    />
                                    <span className="text-danger">{formik.errors.email}</span>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="mb-3">
                                    <Form.Label>Billing Address:</Form.Label>
                                    <Row>
                                        <Col>
                                            <Form.Control
                                                name="temp.state"
                                                type="text"
                                                placeholder="Enter state"
                                                onChange={(e) => {
                                                    formik.setValues({
                                                        ...formik.values,
                                                        address: {
                                                            ...formik.values.address,
                                                            temp: {
                                                                ...formik.values.address.temp,
                                                                state: e.target.value
                                                            }
                                                        }
                                                    })
                                                }}
                                            />
                                            <span className="text-danger">{formik.errors.name}</span>
                                        </Col>
                                        <Col>
                                            <Form.Control
                                                name="temp.district"
                                                type="text"
                                                placeholder="Enter district"
                                                onChange={(e) => {
                                                    formik.setValues({
                                                        ...formik.values,
                                                        address: {
                                                            ...formik.values.address,
                                                            temp: {
                                                                ...formik.values.address.temp,
                                                                district: e.target.value
                                                            }
                                                        }
                                                    })
                                                }}
                                            />
                                            <span className="text-danger">{formik.errors.name}</span>
                                        </Col>
                                        <Col>
                                            <Form.Control
                                                name="temp.municipality"
                                                type="text"
                                                placeholder="Enter municipality"
                                                onChange={(e) => {
                                                    formik.setValues({
                                                        ...formik.values,
                                                        address: {
                                                            ...formik.values.address,
                                                            temp: {
                                                                ...formik.values.address.temp,
                                                                municipality: e.target.value
                                                            }
                                                        }
                                                    })
                                                }}
                                            />
                                            <span className="text-danger">{formik.errors.name}</span>
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col>
                                            <Form.Control
                                                name="temp.street"
                                                type="text"
                                                placeholder="Enter street"
                                                onChange={(e) => {
                                                    formik.setValues({
                                                        ...formik.values,
                                                        address: {
                                                            ...formik.values.address,
                                                            temp: {
                                                                ...formik.values.address.temp,
                                                                street: e.target.value
                                                            }
                                                        }
                                                    })
                                                }}
                                            />
                                            <span className="text-danger">{formik.errors.name}</span>
                                        </Col>
                                        <Col>
                                            <Form.Control
                                                name="temp.houseNumber"
                                                type="text"
                                                placeholder="Enter house number"
                                                onChange={(e) => {
                                                    formik.setValues({
                                                        ...formik.values,
                                                        address: {
                                                            ...formik.values.address,
                                                            temp: {
                                                                ...formik.values.address.temp,
                                                                houseNumber: e.target.value
                                                            }
                                                        }
                                                    })
                                                }}
                                            />
                                            <span className="text-danger">{formik.errors.name}</span>
                                        </Col>
                                        <Col>
                                            <Form.Control
                                                name="temp.postcode"
                                                type="text"
                                                placeholder="Enter post code"
                                                onChange={(e) => {
                                                    formik.setValues({
                                                        ...formik.values,
                                                        address: {
                                                            ...formik.values.address,
                                                            temp: {
                                                                ...formik.values.address.temp,
                                                                postcode: e.target.value
                                                            }
                                                        }
                                                    })
                                                }}
                                            />
                                            <span className="text-danger">{formik.errors.name}</span>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="mb-3">
                                    <Form.Label>Shipping Address:</Form.Label>
                                    <Row>
                                        <Col>
                                            <Form.Control
                                                name="perm.state"
                                                type="text"
                                                placeholder="Enter state"
                                                onChange={(e) => {
                                                    formik.setValues({
                                                        ...formik.values,
                                                        address: {
                                                            ...formik.values.address,
                                                            perm: {
                                                                ...formik.values.address.perm,
                                                                state: e.target.value
                                                            }
                                                        }
                                                    })
                                                }}
                                            />
                                            <span className="text-danger">{formik.errors.name}</span>
                                        </Col>
                                        <Col>
                                            <Form.Control
                                                name="perm.district"
                                                type="text"
                                                placeholder="Enter district"
                                                onChange={(e) => {
                                                    formik.setValues({
                                                        ...formik.values,
                                                        address: {
                                                            ...formik.values.address,
                                                            perm: {
                                                                ...formik.values.address.perm,
                                                                district: e.target.value
                                                            }
                                                        }
                                                    })
                                                }}
                                            />
                                            <span className="text-danger">{formik.errors.name}</span>
                                        </Col>
                                        <Col>
                                            <Form.Control
                                                name="perm.municipality"
                                                type="text"
                                                placeholder="Enter municipality"
                                                onChange={(e) => {
                                                    formik.setValues({
                                                        ...formik.values,
                                                        address: {
                                                            ...formik.values.address,
                                                            perm: {
                                                                ...formik.values.address.perm,
                                                                municipality: e.target.value
                                                            }
                                                        }
                                                    })
                                                }}
                                            />
                                            <span className="text-danger">{formik.errors.name}</span>
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col>
                                            <Form.Control
                                                name="perm.street"
                                                type="text"
                                                placeholder="Enter street"
                                                onChange={(e) => {
                                                    formik.setValues({
                                                        ...formik.values,
                                                        address: {
                                                            ...formik.values.address,
                                                            perm: {
                                                                ...formik.values.address.perm,
                                                                street: e.target.value
                                                            }
                                                        }
                                                    })
                                                }}
                                            />
                                            <span className="text-danger">{formik.errors.name}</span>
                                        </Col>
                                        <Col>
                                            <Form.Control
                                                name="perm.houseNumber"
                                                type="text"
                                                placeholder="Enter house number"
                                                onChange={(e) => {
                                                    formik.setValues({
                                                        ...formik.values,
                                                        address: {
                                                            ...formik.values.address,
                                                            perm: {
                                                                ...formik.values.address.perm,
                                                                houseNumber: e.target.value
                                                            }
                                                        }
                                                    })
                                                }}
                                            />
                                            <span className="text-danger">{formik.errors.name}</span>
                                        </Col>
                                        <Col>
                                            <Form.Control
                                                name="temp.postcode"
                                                type="text"
                                                placeholder="Enter post code"
                                                onChange={(e) => {
                                                    formik.setValues({
                                                        ...formik.values,
                                                        address: {
                                                            ...formik.values.address,
                                                            perm: {
                                                                ...formik.values.address.perm,
                                                                postcode: e.target.value
                                                            }
                                                        }
                                                    })
                                                }}
                                            />
                                            <span className="text-danger">{formik.errors.name}</span>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label>Phone:</Form.Label>
                                    <Form.Control
                                        name="phone"
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        onChange={formik.handleChange}
                                    />
                                    <span className="text-danger">{formik.errors.phone}</span>
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label>Role:</Form.Label>
                                    <Form.Select
                                        name="role"
                                        required
                                        placeholder="Enter your role"
                                        size="sm"
                                        onChange={formik.handleChange}
                                    >
                                        <option>-- Select Any Role --</option>
                                        <option value={"seller"}>Seller</option>
                                        <option value={"customer"}>Customer</option>
                                    </Form.Select>
                                    <span className="text-danger">{formik.errors.role}</span>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label>Image:</Form.Label>
                                    <Form.Control
                                        name="userImage"
                                        type="file"
                                        size="sm"
                                    />
                                    <span className="text-danger">{formik.errors.userImage}</span>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control
                                        name="password"
                                        type="password"
                                        placeholder="Enter password"
                                        onChange={formik.handleChange}
                                    />
                                    <span className="text-danger">{formik.errors.password}</span>
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label>Confirm Password:</Form.Label>
                                    <Form.Control
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="Enter confirm password"
                                        onChange={formik.handleChange}
                                    />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="mb-3">
                                    <Form.Check type="checkbox" label="Remember me" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Button variant="primary" type="submit" className="w-100">
                                        Register
                                    </Button>
                                </Form.Group>
                            </Row>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>);
}

export default RegisterPage;
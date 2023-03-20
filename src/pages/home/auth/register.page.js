import { Card, Col, Container, Form, Image, Row } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./auth.css";

import noImage from "../../../assets/images/no-image.jpg";
import ActionButton from "../../../components/common/action-btn.component";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import authService from "../../../services/auth.service";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const userImageRef = useRef();

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    let registerSchema = Yup.object({
        name: Yup.string().required("Fullname is required").min(5).max(30),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string()
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{3,30}$/, 'Password should contain at least one uppercase, one lowercase, one unique character, and one number')
            .oneOf([Yup.ref("confirmPassword"), null], "Passwords must match")
            .required("Password is required"),
        role: Yup.string().required("Role is required").default("customer"),
        address: Yup.object({
            temp: Yup.object({
                state: Yup.string().required("State is required"),
                district: Yup.string().required("District is required"),
                municipality: Yup.string().required("Municipality is required"),
                street: Yup.string().required("Street is required"),
                houseNumber: Yup.string().required("House number is required"),
                postcode: Yup.string().required("Postcode is required"),
            }),
            perm: Yup.object({
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

    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            role: '',
            address: {
                temp: {
                    state: '',
                    district: '',
                    municipality: '',
                    street: '',
                    houseNumber: '',
                    postcode: '',
                },
                perm: {
                    state: '',
                    district: '',
                    municipality: '',
                    street: '',
                    houseNumber: '',
                    postcode: '',
                }
            },
            phone: '',
            userImage: "",
            status: "inactive",
        },
        validationSchema: registerSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                let finalSubmission = { ...values };
                finalSubmission.address = JSON.stringify(values.address);

                let response = await authService.registerUser(finalSubmission);

                navigate("/login");
                toast.success(response.msg);
                // Navigating resets the form. No need to call resetForm()
                resetForm();
                userImageRef.current.value = "";
            }
            catch (error) {
                toast.error(error.data.msg);
            }
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
                                        value={formik.values.name}
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
                                        value={formik.values.email}
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
                                                value={formik.values.address.temp.state}
                                            />
                                            <span className="text-danger">{formik.errors.address?.temp?.state}</span>
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
                                                value={formik.values.address.temp.district}
                                            />
                                            <span className="text-danger">{formik.errors.address?.temp?.district}</span>
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
                                                value={formik.values.address.temp.municipality}
                                            />
                                            <span className="text-danger">{formik.errors.address?.temp?.municipality}</span>
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
                                                value={formik.values.address.temp.street}
                                            />
                                            <span className="text-danger">{formik.errors.address?.temp?.street}</span>
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
                                                value={formik.values.address.temp.houseNumber}
                                            />
                                            <span className="text-danger">{formik.errors.address?.temp?.houseNumber}</span>
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
                                                value={formik.values.address.temp.postcode}
                                            />
                                            <span className="text-danger">{formik.errors.address?.temp?.postcode}</span>
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
                                                value={formik.values.address.perm.state}
                                            />
                                            <span className="text-danger">{formik.errors.address?.perm?.state}</span>
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
                                                value={formik.values.address.perm.district}
                                            />
                                            <span className="text-danger">{formik.errors.address?.perm?.district}</span>
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
                                                value={formik.values.address.perm.municipality}
                                            />
                                            <span className="text-danger">{formik.errors.address?.perm?.municipality}</span>
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
                                                value={formik.values.address.perm.street}
                                            />
                                            <span className="text-danger">{formik.errors.address?.perm?.street}</span>
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
                                                value={formik.values.address.perm.houseNumber}
                                            />
                                            <span className="text-danger">{formik.errors.address?.perm?.houseNumber}</span>
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
                                                value={formik.values.address.perm.postcode}
                                            />
                                            <span className="text-danger">{formik.errors.address?.perm?.postcode}</span>
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
                                        value={formik.values.phone}
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
                                        value={formik.values.role}
                                    >
                                        <option>-- Select Any Role --</option>
                                        <option value={"seller"}>Seller</option>
                                        <option value={"customer"}>Customer</option>
                                    </Form.Select>
                                    <span className="text-danger">{formik.errors.role}</span>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} className="mb-3 col-6">
                                    <Form.Label>Image:</Form.Label>
                                    <Form.Control
                                        name="userImage"
                                        type="file"
                                        size="sm"
                                        ref={userImageRef}
                                        onChange={(e) => {
                                            formik.setValues({
                                                ...formik.values,
                                                //single file
                                                userImage: e.target.files[0]
                                            })
                                        }}
                                    />
                                    <span className="text-danger">{formik.errors.userImage}</span>
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3 col-2">
                                    {
                                        formik.values.userImage ? <Image src={URL.createObjectURL(formik.values.userImage)} alt="user-image" fluid /> : <Image src={noImage} alt="no-image" fluid />
                                    }
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label>Password:</Form.Label>
                                    <div className="input-group">
                                        <Form.Control
                                            name="password"
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Enter password"
                                            onChange={formik.handleChange}
                                            value={formik.values.password}
                                        />
                                        <button
                                            className="btn btn-outline-secondary"
                                            type="button"
                                            onClick={toggleShowPassword}
                                        >
                                            <span className="input-group-text">
                                                {showPassword ? <FaEye /> : <FaEye />}
                                            </span>
                                        </button>
                                    </div>
                                    <span className="text-danger">{formik.errors.password}</span>
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label>Confirm Password:</Form.Label>
                                    <Form.Control
                                        name="confirmPassword"
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Enter confirm password"
                                        onChange={formik.handleChange}
                                        value={formik.values.confirmPassword}
                                    />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="mb-3">
                                    <ActionButton text="Register" />
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